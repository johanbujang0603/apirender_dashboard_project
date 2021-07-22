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
import { Colxx } from "../common/CustomBootstrap";
import IntlMessages from "../../helpers/IntlMessages";
import FileDropzone from "../common/FileDropzone";
import { NotificationManager } from "../common/react-notifications";

const initialFormData = {
  contactMethod: null,
  haveLogo: null,
  propertyAddress: null,
  disclaimer: null,
  dimensions: null,
  totalFloorArea: null,
  logoReplacement: null,
  templateOrientation: null,
  fileOutputSize: null,
  northArrow: null,
  outputFileType: null,
  notes: null,
};

const PMCommercialFloorPlan = ({ service, orders, history }) => {
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

  return (
    <>
      <Row>
        <Colxx md="12">
          <Card className="mb-4">
            <CardBody>
              <h5 className="text-primary mb-5">
                Commercial Floor Plan
              </h5>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.file-upload" />
                  </Label>
                  <p className="text-muted text-small">
                    Please upload the floor plan blueprints/construction drawings or detailed sketch here.
                    We accept all file formats.
                  </p>
                  <FileDropzone ref={dropzone} />
                </FormGroup>
                <FormGroup row>
                  <Colxx sm={12}>
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.custom-template" />
                    </Label>
                    <p className="text-muted text-small">
                      Please upload your company and/or project logo (preferred file format is PNG).
                      If you have a company or project style/branding guide, please also upload this document so that we can create a commercial floor plan template consistent with your branding.
                    </p>
                  </Colxx>
                  <Colxx sm={6}>
                    <Label className="font-weight-bold">
                      Do you have a logo or style/branding guide?
                    </Label>
                    <div>
                      <CustomInput
                        type="radio"
                        id="haveLogo1"
                        name="haveLogo"
                        label="Yes"
                        value="Yes"
                        onChange={handleChange} 
                      />
                      <CustomInput
                        type="radio"
                        id="haveLogo2"
                        name="haveLogo"
                        label="No"
                        value="No"
                        onChange={handleChange}
                      />
                    </div>
                  </Colxx>
                </FormGroup>
                
                <FormGroup row>
                  <Colxx sm={4}>
                    <Label className="font-weight-bold">Property Address</Label>
                    <Input
                      type="textarea"
                      rows="5"
                      placeholder="Enter Property Address to be displayed on the floor plan."
                      name="propertyAddress"
                      id="propertyAddress"
                      onChange={handleChange}
                    />
                  </Colxx>
                  <Colxx sm={4}>
                    <Label className="font-weight-bold">Disclaimer</Label>
                    <Input
                      type="textarea"
                      rows="5"
                      placeholder="If you prefer to use your own disclaimer, please enter below."
                      name="disclaimer"
                      id="disclaimer"
                      onChange={handleChange}
                    />
                  </Colxx>
                  <Colxx sm={4}>
                    <Label className="font-weight-bold">Dimensions</Label>
                    <Input
                      type="textarea"
                      rows="5"
                      placeholder="Enter list of dimensions for each room or we will enter room dimensions from the measurements on the blueprint or sketch provided."
                      name="dimensions"
                      id="dimensions"
                      onChange={handleChange}
                    />
                  </Colxx>
                </FormGroup>
                <FormGroup row>
                  <Colxx sm={4}>
                    <Label className="font-weight-bold">Total Floor Area</Label>
                    <Input
                      type="textarea"
                      rows="5"
                      placeholder="Enter total floor area or we will calculate an approximate Total Floor Area from the measurements on the blueprint or sketch provided."
                      name="totalFloorArea"
                      id="totalFloorArea"
                      onChange={handleChange}
                    />
                  </Colxx>
                  <Colxx sm={4}>
                    <Label className="font-weight-bold">Logo Placement:</Label>
                    <p className="text-small text-muted">
                      Select whether you would like your logo on the
                      floor plan template and which side we should
                      display it.
                    </p>
                    <Input
                      type="select"
                      onChange={handleChange}
                      defaultValue=""
                      name="logoReplacement"
                      id="logoReplacement"
                    >
                      <option value="" disabled></option>
                      <option value="Left Side">Left Side</option>
                      <option value="Right Side">Right Side</option>
                      <option value="No Logo">No Logo</option>
                    </Input>
                  </Colxx>
                  <Colxx sm={4}>
                    <Label className="font-weight-bold">Template Orientation:</Label>
                    <p className="text-small text-muted">
                      Select the orientation of the template.
                    </p>
                    <Input
                      type="select"
                      onChange={handleChange}
                      defaultValue=""
                      name="templateOrientation"
                      id="templateOrientation"
                    >
                      <option value="" disabled></option>
                      <option value="Landscape">Landscape</option>
                      <option value="Portrait">Portrait</option>
                    </Input>
                  </Colxx>
                  <Colxx md="4">
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
                  </Colxx>
                  <Colxx md="4">
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.north-arrow" />
                    </Label>
                    <p className="text-small text-muted">
                      Please whether you would like a north arrow on the plan.
                    </p>
                    <div>
                      <CustomInput
                        type="radio"
                        id="northArrow1"
                        name="northArrow"
                        label="Yes"
                        value="Yes"
                        onChange={handleChange}
                      />
                      <CustomInput
                        type="radio"
                        id="northArrow2"
                        name="northArrow"
                        label="No"
                        value="No"
                        onChange={handleChange}
                      />
                    </div>
                  </Colxx>
                  <Colxx md="4">
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.output-file-type" />
                    </Label>
                    <p className="text-small text-muted">
                      <IntlMessages id="briefing.output-file-type-description" />
                    </p>
                    <div>
                      <CustomInput
                        type="radio"
                        id="outputFileType1"
                        name="outputFileType"
                        label="JPEG"
                        value="JPEG"
                        onChange={handleChange}
                      />
                      <CustomInput
                        type="radio"
                        id="outputFileType2"
                        name="outputFileType"
                        label="PDF"
                        value="PDF"
                        onChange={handleChange}
                      />
                      <CustomInput
                        type="radio"
                        id="outputFileType3"
                        name="outputFileType"
                        label="PNG"
                        value="PNG"
                        onChange={handleChange}
                      />
                    </div>
                  </Colxx>
                </FormGroup>
                
                <FormGroup>
                  <Label className="font-weight-bold">
                    Contact Preference
                  </Label>
                  <p className="text-muted text-small">
                    We may contact you to discuss your project details prior to commencement.
                    How would you like us to contact you to discuss your project?
                  </p>
                  <div>
                    <CustomInput
                      type="radio"
                      id="contactMethod1"
                      name="contactMethod"
                      label="Phone"
                      value="Phone"
                      onChange={handleChange} 
                    />
                    <CustomInput
                      type="radio"
                      id="contactMethod2"
                      name="contactMethod"
                      label="Email"
                      value="Email"
                      onChange={handleChange}
                    />
                    <CustomInput
                      type="radio"
                      id="contactMethod3"
                      name="contactMethod"
                      label="Dashboard Messaging"
                      value="Dashboard Messaging"
                      onChange={handleChange}
                    />
                  </div>
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

export default injectIntl(PMCommercialFloorPlan);
