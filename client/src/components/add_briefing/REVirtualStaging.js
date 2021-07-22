import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { injectIntl } from "react-intl";
import Select from "react-select";
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
import { Colxx } from "../common/CustomBootstrap";
import FileDropzone from "../common/FileDropzone";
import CustomSelectInput from "../common/CustomSelectInput";
import IntlMessages from "../../helpers/IntlMessages";
import ThumbSelection from "../custom/ThumbSelection";
import { NotificationManager } from "../common/react-notifications";
import {
  furnitureStyles,
  roomTypes,
} from "../../constants/photoRetouchingValues";

const initialFormData = {
  furnitureStyle: null,
  furnitureQuality: null,
  notes: null,
};

const REVirtualStaging = ({ service, orders, history }) => {
  const dropzone = useRef();
  const instructionDropzone = useRef();
  
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
    const instructionFiles = instructionDropzone.current.myDropzone.files;
    instructionFiles.forEach((file) => { postFormData.append("INSTRUCTION_FILES", file)});
    
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

  const onFurnitureStyleCheck = (event, value) => {
    updateFormData({
      ...formData,
      furnitureStyle: value,
    });
  };

  return (
    <>
      <Row>
        <Colxx md="12">
          <Card className="mb-4">
            <CardBody>
              <h5 className="text-primary mb-5">Virtual Staging</h5>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.file-upload" />
                  </Label>
                  <p className="text-muted text-small">
                    Please upload the file/s here. We accept all formats (JPEG,
                    Tiff, ARW, PNG, PSD, CR2, etc).
                  </p>
                  <FileDropzone ref={dropzone} />
                </FormGroup>

                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.room-type" />
                  </Label>
                  <Select
                    components={{ Input: CustomSelectInput }}
                    className="react-select"
                    classNamePrefix="react-select"
                    name="roomType"
                    onChange={(selectedOption) => {
                      handleSelect(selectedOption.value, "roomType");
                    }}
                    options={roomTypes}
                  />
                </FormGroup>

                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.file-output-size" />
                  </Label>
                  <p className="text-small text-muted">
                    <IntlMessages id="briefing.file-output-size-description" />
                  </p>
                  <div>
                    <CustomInput
                      type="radio"
                      id="fileOutputSize1"
                      name="fileOutputSize"
                      label="Web Only (1mb)"
                      value="Web Only (1mb)"
                      onChange={handleChange}
                    />
                    <CustomInput
                      type="radio"
                      id="fileOutputSize2"
                      name="fileOutputSize"
                      label="Print Only (>5mb)"
                      value="Print Only (>5mb)"
                      onChange={handleChange}
                    />
                    <CustomInput
                      type="radio"
                      id="fileOutputSize3"
                      name="fileOutputSize"
                      label="Web and Print"
                      value="Web and Print"
                      onChange={handleChange}
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.furniture-instruction-description" />
                  </Label>
                  <Row>
                    <Colxx sm="6">
                      <Input
                        type="textarea"
                        placeholder="Enter instructions here (optional)"
                        name="virtualFurniture"
                        id="virtualFurniture"
                        onChange={handleChange}
                        rows={5}
                      />
                    </Colxx>
                    <Colxx sm="6">
                      <FileDropzone ref={instructionDropzone} />
                    </Colxx>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.notes-description" />
                  </Label>
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

export default injectIntl(REVirtualStaging);
