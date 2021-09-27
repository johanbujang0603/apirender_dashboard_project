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
  CustomInput,
  CardBody,
  Spinner
} from "reactstrap";
import Select from 'react-select';
import { Colxx } from "../common/CustomBootstrap";
import CustomSelectInput from '../common/CustomSelectInput';
import IntlMessages from "../../helpers/IntlMessages";
import FileDropzone from "../common/FileDropzone";
import { NotificationManager } from "../common/react-notifications";

const sectionOptions = [
  { value: 'Description/Overview', label: 'Description/Overview' },
  { value: 'Photos/Gallery', label: 'Photos/Gallery' },
  { value: 'Floor Plan', label: 'Floor Plan' },
  { value: 'Location', label: 'Location' },
  { value: 'Contact', label: 'Contact' },
  { value: 'The Agent', label: 'The Agent' },
  { value: 'Video', label: 'Video' }
]

const initialFormData = {
  sections: null,
  website: null,
  propertyAddress: null,
  propertyInformation: null,
  contactInformation: null,
  contactMethod: null,
  additionalFileLink: null
};

const RePropertyMicrosites = ({ service, orders, history }) => {
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

  const handleMultipleSelect = (data, name) => {
    updateFormData({
      ...formData,
      [name]: data.map((d) => d.value).join(),
    });
  };

  return (
    <>
      <Row>
        <Colxx md="12">
          <Card className="mb-4">
            <CardBody>
              <h5 className="text-primary mb-2">Property Microsites</h5>
              <p className="text-danger mb-3 text-small">{orders.map((order) => order.name).join(', ')}</p>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.file-upload" />
                  </Label>
                  <p className="text-muted text-small">
                    Please upload existing marketing visuals and property information, company logos and other content here.
                    If your company or project has existing, branding or style guides please upload here too. &nbsp;
                    Max upload limit is 256 MB. If your files exceed this limit, please provide a link to your files in the section below.
                  </p>
                  <FileDropzone ref={dropzone} />
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
                    Sections
                  </Label>
                  <p className="text-small text-muted">To assist with the website design, please select the sections that you would like to include. Note that names are customisable.</p>
                  
                  <Select
                    components={{ Input: CustomSelectInput }}
                    className="react-select"
                    classNamePrefix="react-select"
                    isMulti
                    name="sections"
                    onChange={(selectedOptions) => {
                      handleMultipleSelect(selectedOptions, "sections");
                    }}
                    options={sectionOptions}
                  />
                </FormGroup>
                <FormGroup>
                  <Label className="font-weight-bold">
                    Which website theme would you like?
                  </Label>
                  <Input
                    type="select"
                    onChange={handleChange}
                    defaultValue=""
                    name="website"
                    id="website"
                  >
                    <option value="" disabled></option>
                    <option value="White and Bright">White and Bright</option>
                    <option value="Dark and Bold">Dark and Bold</option>
                  </Input>
                </FormGroup>
                
                <FormGroup>
                  <Label className="font-weight-bold">
                    Text
                  </Label>
                  <p className="text-small text-muted">
                    If not provided in the file upload section above, please provide a description of the property to be used on the property microsite.
                  </p>
                  <Input
                    type="textarea"
                    placeholder=""
                    name="propertyAddress"
                    id="propertyAddress"
                    onChange={handleChange}
                  />
                </FormGroup>
                
                <FormGroup row>
                  <Colxx md='6'>
                    <Label className="font-weight-bold">
                      Property Address
                    </Label>
                    <Input
                      type="textarea"
                      placeholder=""
                      name="propertyAddress"
                      id="propertyAddress"
                      onChange={handleChange}
                    />
                  </Colxx>
                  <Colxx md='6'>
                    <Label className="font-weight-bold">
                      Property Information
                    </Label>
                    <Input
                      type="textarea"
                      placeholder=""
                      name="propertyInformation"
                      id="propertyInformation"
                      onChange={handleChange}
                    />
                  </Colxx>
                </FormGroup>

                <FormGroup>
                  <Label className="font-weight-bold">
                    Contact Information
                  </Label>
                  <p className="text-small text-muted">Please provide the agent's name, company and contact details here that you would like displayed on the website.</p>
                  <Input
                    type="textarea"
                    placeholder=""
                    name="contactInformation"
                    id="contactInformation"
                    onChange={handleChange}
                  />
                </FormGroup>
                
                <FormGroup row>
                  <Colxx md="6">
                    <Label className="font-weight-bold">
                      How would you like to be contacted?
                    </Label>
                    <p className="text-muted text-small">We may need to contact your for more information. How would you like to be contacted?</p>
                    <div>
                      <CustomInput
                        type="radio"
                        id="contactMethodRadio1"
                        name="contactMethod"
                        label="Phone"
                        value="Phone"
                        onChange={handleChange}
                      />
                      <CustomInput
                        type="radio"
                        id="contactMethodRadio2"
                        name="contactMethod"
                        label="Email"
                        value="Email"
                        onChange={handleChange}
                      />
                      <CustomInput
                        type="radio"
                        id="contactMethodRadio3"
                        name="contactMethod"
                        label="Via Dashboard Messaging"
                        value="Via Dashboard Messaging"
                        onChange={handleChange}
                      />
                    </div>
                  </Colxx>
                </FormGroup>
                
                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.notes" />
                  </Label>
                  <p className="text-small text-muted">
                    <IntlMessages id="briefing.notes-description" />
                  </p>
                  <Input
                    type="textarea"
                    placeholder="Enter instructions here (optional)"
                    name="notes"
                    id="notes"
                    onChange={handleChange}
                  />
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

export default injectIntl(RePropertyMicrosites);
