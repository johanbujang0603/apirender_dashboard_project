import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { injectIntl } from "react-intl";
import {
  Row,
  Card,
  Button,
  FormGroup,
  Label,
  Form,
  Input,
  CardBody,
  CustomInput,
  Spinner
} from "reactstrap";
import Select from "react-select";
import { Colxx } from "../common/CustomBootstrap";
import FileDropzone from "../common/FileDropzone";
import CustomSelectInput from "../common/CustomSelectInput";
import IntlMessages from "../../helpers/IntlMessages";
import { NotificationManager } from "../common/react-notifications";

const initialFormData = {
  architecturealBlueprints: null,
  additionalFileLink: null,
  finalRequirements: null,
  contactMethod: null
};
const roomTypes = [
  {
    label: "Front Yard",
    value: "Front Yard",
  },
  {
    label: "Back Yard",
    value: "Back Yard",
  },
  {
    label: "Courtyard",
    value: "Courtyard",
  },
  {
    label: "Patio/Veranda",
    value: "Patio/Veranda",
  },
  {
    label: "Other",
    value: "Other",
  },
];

const VRExterior = ({ service, orders, history }) => {
  const dropzone = useRef();
  
  let intervalId = useRef(null)

  const [uploadProgress, setUploadProgress] = useState(0);
  const [s3UploadPorgress, setS3UploadProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, updateFormData] = React.useState(initialFormData);

  useEffect(() => {
    if (uploadProgress + s3UploadPorgress === 200) {
      console.log("completed");
      setLoading(false);
      clearInterval(intervalId.current)
      history.push(`/thank-you/briefing/${service._id}`);
    }
  }, [uploadProgress, s3UploadPorgress])


  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const postFormData = new FormData();
    
    const files = dropzone.current.myDropzone.files;
    files.forEach((file) => { postFormData.append("basic", file)});
    
    postFormData.append("serviceId", service._id);
    postFormData.append("content", JSON.stringify(formData));
    
        
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        setUploadProgress(percentCompleted);
      },
    };
    
    axios
      .post(`/api/briefing/save`, postFormData, config)
      .then((res) => {
        intervalId.current = setInterval(() => {
          getFileStatus();
        }, 2000)
      })
      .catch((err) => {
        console.log(err.response.data);
        NotificationManager.warning("Something went wrong. Please try again", "Error", 3000);
      });
  };

  const getFileStatus = () => {
    axios.get(`/api/briefing/file-status?service_id=${service._id}`)
      .then((res) => {
        setS3UploadProgress(res.data.progress);
      })
  }

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSelect = (data, name) => {
    updateFormData({
      ...formData,
      [name]: data,
    });
  };

  return (
    <>
      <Row>
        <Colxx md="12">
          <Card className="mb-4">
            <CardBody>
              <h5 className="text-primary mb-2">
                Virtual Renovation - Exterior
              </h5>
              <p className="text-danger mb-3 text-small">{orders.map((order) => order.name).join(', ')}</p>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label className="font-weight-bold">
                    Please upload a high resolution photo of the exterior space in which the renovation will be completed. &nbsp;
                    Max upload limit is 256 MB. If your files exceed this limit, please provide a link to your files in the section below.
                  </Label>
                  <Row>
                    <Colxx>
                      <Input
                        type="textarea"
                        placeholder="Enter instructions here (optional)"
                        name="architecturealBlueprints"
                        id="architecturealBlueprints"
                        onChange={handleChange}
                        rows={5}
                      />
                    </Colxx>
                    <Colxx>
                      <FileDropzone ref={dropzone} />
                    </Colxx>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Label className="font-weight-bold">
                    Link to Files
                  </Label>
                  <p className="text-muted text-small">
                    Alternatively, please provide a link to your image files. Popular services include Dropbox, WeTransfer, Google Driver, etc.
                  </p>
                  <Input
                    type="text"
                    placeholder="Enter the link to your files"
                    name="additionalFileLink"
                    id="additionalFileLink"
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label className="font-weight-bold">
                    Select the Desired Room or Space
                  </Label>
                  <Select
                    components={{ Input: CustomSelectInput }}
                    className="react-select"
                    classNamePrefix="react-select"
                    name="desiredRoom"
                    onChange={(selectedOption) => {
                      handleSelect(selectedOption.value, "desiredRoom");
                    }}
                    options={roomTypes}
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label className="font-weight-bold">
                    Please provide a detailed brief for your project. We may
                    contact you to discuss the details of your project and confirm storyline before commencing.
                  </Label>
                  <Input
                    type="textarea"
                    placeholder="Enter instructions here (optional)"
                    name="finalRequirements"
                    id="finalRequirements"
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label className="font-weight-bold">
                    How would you like us to contact you?
                  </Label>
                  <div>
                    <CustomInput
                      type="radio"
                      id="contactMethod1"
                      name="contactMethod"
                      label="Email"
                      value="Email"
                      onChange={handleChange}
                    />
                    <CustomInput
                      type="radio"
                      id="contactMethod2"
                      name="contactMethod"
                      label="Phone"
                      value="Phone"
                      onChange={handleChange}
                    />
                    <CustomInput
                      type="radio"
                      id="contactMethod3"
                      name="contactMethod"
                      label="Via Dashboard Messaging"
                      value="Via Dashboard Messaging"
                      onChange={handleChange}
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                  <Button
                    color="primary"
                    className={`btn-shadow btn-multiple-state ${
                      loading ? "show-spinner" : ""
                    }`}
                    disabled={loading}
                    size="lg"
                  >
                    <span>{loading && (
                      <>
                      <Spinner style={{width: '1rem', height: '1rem', marginRight: '10px'}} />
                      {parseInt((uploadProgress + s3UploadPorgress) / 2)} %
                      </>
                    )}</span>
                    {!loading && (
                      <span className="label">
                        <IntlMessages id="briefing.submit" />
                      </span>
                    )}
                  </Button>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};

export default injectIntl(VRExterior);
