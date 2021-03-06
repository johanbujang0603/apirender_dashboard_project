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
  incorporateEnvironment: null,
  moodTimeOfDay: null,
  perspective: null,
  height: null,
  landscaping: null,
  driveaway: null,
  vehicles: null,
  fencing: null,
  mailbox: null,
  fileOutputSize: null,
  isAppearRender: null,
  additionalInformation: null,
  additionalFileLink: null
};

const PD3DRendersStreetscape = ({ service, orders, history }) => {
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
  }

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
              <h5 className="text-primary mb-2">3D Renders (Streetscape)</h5>
              <p className="text-danger mb-3 text-small">{orders.map((order) => order.name).join(', ')}</p>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.file-upload" />
                  </Label>
                  <p className="text-muted text-small">
                    Please upload the file/s here. We can accept CAD (.dwg),
                    PDF, JPEG, or a sketch. Please include floor plans,
                    sectionals, roof plans, elevations and materials list if
                    possible. &nbsp; Max upload limit is 256 MB. If your files exceed this limit, please provide a link to your files in the section below.
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
                    <IntlMessages id="briefing.incorporate-environment" />
                  </Label>
                  <p className="text-small text-muted">
                    <IntlMessages id="briefing.incorporate-environment-description" />
                  </p>
                  <Row>
                    <Colxx>
                      <Input
                        type="textarea"
                        placeholder="Enter Google Maps link or Property Address"
                        name="incorporateEnvironment"
                        id="incorporateEnvironment"
                        onChange={handleChange}
                        rows={5}
                      />
                    </Colxx>
                  </Row>
                </FormGroup>
                <FormGroup row>
                  <Colxx sm="4">
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.select-mood-time-of-day" />
                    </Label>
                    <p className="text-small text-muted static-height">
                      Please select the time of day for your render.
                    </p>
                    <Input
                      type="select"
                      onChange={handleChange}
                      defaultValue=""
                      name="moodTimeOfDay"
                      id="moodTimeOfDay"
                    >
                      <option value="" disabled></option>
                      <option value="Day Time">Day Time</option>
                      <option value="Morning/Afternoon">
                        Morning/Afternoon
                      </option>
                      <option value="Twilight/Dusk">Twilight/Dusk</option>
                      <option value="Night Time">Night Time</option>
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
                      <option value="Ground Level">Ground Level</option>
                      <option value="Elevated 3-4 meters">
                        Elevated 3-4 meters
                      </option>
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
                      <option value="Other - Include notes in 'Additional Information' section below.">
                        Other - Include notes in 'Additional Information'
                        section below.
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
                        label="Web Size/Small Format"
                        value="Web Size/Small Format"
                        onChange={handleChange}
                      />
                      <CustomInput
                        type="radio"
                        id="fileOutputSize3"
                        name="fileOutputSize"
                        label="Print Size/Large Format"
                        value="Print Size/Large Format"
                        onChange={handleChange}
                      />
                      <CustomInput
                        type="radio"
                        id="fileOutputSize2"
                        name="fileOutputSize"
                        label="Custom (Please advise requried resolution)"
                        value="Custom"
                        onChange={handleChange}
                      />
                    </div>
                  </Colxx>
                </FormGroup>
                <FormGroup row>
                  {orders.find(
                    (o) => o.value === "PD_3D_RENDERS_STREETSCAPE_RESIDENTIAL"
                  ) !== undefined && (
                    <Colxx>
                      <Label className="font-weight-bold">
                        <IntlMessages id="briefing.number-houses-in-street" />{" "}
                        <span className="text-primary">(Residential)</span>
                      </Label>
                      <div>
                        <CustomInput
                          type="radio"
                          id="numberHouses0"
                          name="numberHouses"
                          label="Single Building"
                          value="Single Building"
                          onChange={handleChange}
                        />
                        <CustomInput
                          type="radio"
                          id="numberHouses1"
                          name="numberHouses"
                          label="3 to 5"
                          value="3 to 5"
                          onChange={handleChange}
                        />
                        <CustomInput
                          type="radio"
                          id="numberHouses2"
                          name="numberHouses"
                          label="6 to 8"
                          value="6 to 8"
                          onChange={handleChange}
                        />
                      </div>
                    </Colxx>
                  )}
                  {orders.find(
                    (o) => o.value === "PD_3D_RENDERS_STREETSCAPE_COMMERCIAL"
                  ) !== undefined && (
                    <Colxx>
                      <Label className="font-weight-bold">
                        <IntlMessages id="briefing.number-buildings-in-street" />{" "}
                        <span className="text-primary">(Commercial)</span>
                      </Label>
                      <div>
                        <CustomInput
                          type="radio"
                          id="numberBuildings1"
                          name="numberBuildings"
                          label="3 to 5"
                          value="3 to 5"
                          onChange={handleChange}
                        />
                        <CustomInput
                          type="radio"
                          id="numberBuildings2"
                          name="numberBuildings"
                          label="6 to 8"
                          value="6 to 8"
                          onChange={handleChange}
                        />
                      </div>
                    </Colxx>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label className="font-weight-bold">Woud you like vehicles to appear in the render?</Label>
                  <div>
                    <CustomInput
                      type="radio"
                      id="isAppearRender1"
                      name="isAppearRender"
                      label="Yes"
                      value="Yes"
                      onChange={handleChange}
                    />
                    <CustomInput
                      type="radio"
                      id="isAppearRender2"
                      name="isAppearRender"
                      label="No"
                      value="No"
                      onChange={handleChange}
                    />
                    <Input
                      type="textarea"
                      placeholder="Enter instructions here(optional)"
                      name="appearRenderText"
                      id="appearRenderText"
                      onChange={handleChange}
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.additional-information" />
                  </Label>
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

export default injectIntl(PD3DRendersStreetscape);
