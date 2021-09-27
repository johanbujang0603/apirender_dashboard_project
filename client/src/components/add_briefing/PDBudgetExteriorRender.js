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
import { Colxx } from "../common/CustomBootstrap";
import FileDropzone from "../common/FileDropzone";
import IntlMessages from "../../helpers/IntlMessages";
import { NotificationManager } from "../common/react-notifications";

const initialFormData = {
  moodTimeOfDay: null,
  perspective: null,
  height: null,
  landscaping: null,
  driveaway: null,
  vehicles: null,
  fencing: null,
  mailbox: null,
  fileOutputSize: null,
  additionalInformation: null,
  additionalFileLink: null
};

const PDBudgetExteriorRender = ({ service, orders, history }) => {
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
              <h5 className="text-primary mb-2">Budget Exterior Renders</h5>
              <p className="text-danger mb-3 text-small">{orders.map((order) => order.name).join(', ')}</p>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.file-upload" />
                  </Label>
                  <p className="text-muted text-small">
                    Please upload the file/s here. Architectural blueprints/CAD files are preferred.
                    We can accept CAD(.dwg), PDF, JPEG or a sketch.
                    Please include floor plans, sectionals, roof plans, elevations and materials list. &nbsp;
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
                <FormGroup row>
                  <Colxx sm="4">
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.select-mood-time-of-day" />
                    </Label>
                    <p className="static-height"></p>
                    <Input
                      type="select"
                      onChange={handleChange}
                      defaultValue=""
                      name="moodTimeOfDay"
                      id="moodTimeOfDay"
                    >
                      <option value="" disabled></option>
                      <option value="Bright & Airy (Day Time)">
                        Bright & Airy (Day Time)
                      </option>
                      <option value="Soft & Soothing (Twlight)">
                        Soft & Soothing (Twlight)
                      </option>
                      <option value="Smooth & Seductive (Night Time)">
                        Smooth & Seductive (Night Time)
                      </option>
                      <option value="Not Sure">Not Sure</option>
                    </Input>
                  </Colxx>
                  <Colxx sm="4">
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.perspective" />
                    </Label>
                    <p className="text-small text-muted static-height">
                      <IntlMessages id="briefing.perspective-description" />
                    </p>
                    <Input
                      type="select"
                      onChange={handleChange}
                      defaultValue=""
                      name="perspective"
                      id="perspective"
                    >
                      <option value="" disabled></option>
                      <option value="Front Center">Front Center</option>
                      <option value="Front Left">Front Left</option>
                      <option value="Front Right">Front Right</option>
                      <option value="Rear Center">Rear Center</option>
                      <option value="Rear Left">Rear Left</option>
                      <option value="Rear Right">Rear Right</option>
                      <option value="Not Sure">Not Sure</option>
                    </Input>
                  </Colxx>
                  <Colxx sm="4">
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.height" />
                    </Label>
                    <p className="text-small text-muted static-height">
                      <IntlMessages id="briefing.height-description" />
                    </p>
                    <Input
                      type="select"
                      onChange={handleChange}
                      defaultValue=""
                      name="height"
                      id="height"
                    >
                      <option value="" disabled></option>
                      <option value="Stree Level">Stree Level</option>
                      <option value="Mid-Level">Mid-Level</option>
                      <option value="Aerial">Aerial</option>
                      <option value="Other - Include notes in Brief Submission Section">
                        Other - Include notes in Brief Submission Section
                      </option>
                      <option value="Not Sure">Not Sure</option>
                    </Input>
                  </Colxx>
                </FormGroup>

                <FormGroup row>
                  <Colxx sm="4">
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.landscaping" />
                    </Label>
                    <p className="text-small text-muted static-height">
                      <IntlMessages id="briefing.landscaping-description" />
                    </p>
                    <Input
                      type="select"
                      onChange={handleChange}
                      defaultValue=""
                      name="landscaping"
                      id="landscaping"
                    >
                      <option value="" disabled></option>
                      <option value="Small Trees">Small Trees</option>
                      <option value="Large Trees">Large Trees</option>
                      <option value="Sapplings/Succulents">
                        Sapplings/Succulents
                      </option>
                      <option value="Plantar Boxes">Plantar Boxes</option>
                      <option value="Hedges">Hedges</option>
                      <option value="Built - Deck, Paving, Stones, etc">
                        Built - Deck, Paving, Stones, etc
                      </option>
                      <option value="Flower Beds">Flower Beds</option>
                      <option value="Other - Include notes in Brief Submission Section">
                        Other - Include notes inBrief Submission Section
                      </option>
                      <option value="Not Sure">Not Sure</option>
                    </Input>
                  </Colxx>
                  <Colxx sm="4">
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.driveway" />
                    </Label>
                    <p className="text-small text-muted static-height">
                      <IntlMessages id="briefing.driveway-description" />
                    </p>
                    <Input
                      type="select"
                      onChange={handleChange}
                      defaultValue=""
                      name="driveaway"
                      id="driveaway"
                    >
                      <option value="" disabled></option>
                      <option value="No Driveaway">No Driveaway</option>
                      <option value="Exposed Aggregate (Light-Colored)">
                        Exposed Aggregate (Light-Colored)
                      </option>
                      <option value="Exposed Aggregate (Dark-Colored)">
                        Exposed Aggregate (Dark-Colored)
                      </option>
                      <option value="Pavement">Pavement</option>
                      <option value="Concrete">Concrete</option>
                      <option value="Stone">Stone</option>
                      <option value="Bitumen">Bitumen</option>
                      <option value="Other - Include notes in Brief Submission Section">
                        Other - Include notes in Brief Submission Section
                      </option>
                      <option value="Not Sure">Not Sure</option>
                    </Input>
                  </Colxx>
                  <Colxx sm="4">
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.vehicles" />
                    </Label>
                    <p className="text-small text-muted static-height">
                      <IntlMessages id="briefing.vehicles-description" />
                    </p>
                    <Input
                      type="select"
                      onChange={handleChange}
                      defaultValue=""
                      name="vehicles"
                      id="vehicles"
                    >
                      <option value="" disabled></option>
                      <option value="No Vehicle">No Vehicle</option>
                      <option value="SUV">SUV</option>
                      <option value="Sedan">Sedan</option>
                      <option value="Luxury Vehicle">Luxury Vehicle</option>
                      <option value="Motorbike">Motorbike</option>
                      <option value="Motor Boat & Trailer">
                        Motor Boat & Trailer
                      </option>
                      <option value="Not Sure">Not Sure</option>
                    </Input>
                  </Colxx>
                </FormGroup>

                <FormGroup row>
                  <Colxx sm="4">
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.fencing" />
                    </Label>
                    <p className="text-small text-muted static-height">
                      <IntlMessages id="briefing.fencing-description" />
                    </p>
                    <Input
                      type="select"
                      onChange={handleChange}
                      defaultValue=""
                      name="fencing"
                      id="fencing"
                    >
                      <option value="" disabled></option>
                      <option value="Timber (Light-Colored)">
                        Timber (Light-Colored)
                      </option>
                      <option value="Timber (Dark-Colored)">
                        Timber (Dark-Colored)
                      </option>
                      <option value="Rendered Wall ">Rendered Wall </option>
                      <option value="Brick">Brick</option>
                      <option value="No Fencing">No Fencing</option>
                      <option value="Picket Fence">Picket Fence</option>
                      <option value="Steel Panel">Steel Panel</option>
                      <option value="Not Sure">Not Sure</option>
                    </Input>
                  </Colxx>
                  <Colxx sm="4">
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.mailbox" />
                    </Label>
                    <p className="text-small text-muted static-height">
                      <IntlMessages id="briefing.mailbox-description" />
                    </p>
                    <Input
                      type="select"
                      onChange={handleChange}
                      defaultValue=""
                      name="mailbox"
                      id="mailbox"
                    >
                      <option value="" disabled></option>
                      <option value="No Mailbox">No Mailbox</option>
                      <option value="Rendered/Concrete">
                        Rendered/Concrete
                      </option>
                      <option value="Post-Mounted">Post-Mounted</option>
                      <option value="Brick">Brick</option>
                      <option value="Wall-Mounted">Wall-Mounted</option>
                      <option value="Other - Include notes in Brief Submission Section">
                        Other - Include notes in Brief Submission Section
                      </option>
                      <option value="Not Sure">Not Sure</option>
                    </Input>
                  </Colxx>
                  <Colxx sm="4">
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.file-output-size" />
                    </Label>
                    <p className="text-small text-muted static-height">
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
                </FormGroup>
                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.additional-information" />
                  </Label>
                  <p className="text-small text-muted">
                    <IntlMessages id="briefing.additional-information-description" />
                  </p>
                  <Input
                    type="textarea"
                    placeholder="Enter instructions here (optional)"
                    name="additionalInformation"
                    id="additionalInformation"
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

export default injectIntl(PDBudgetExteriorRender);
