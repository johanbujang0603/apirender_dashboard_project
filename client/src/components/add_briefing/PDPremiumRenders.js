import React, { useRef, useState } from "react";
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
  CustomInput
} from "reactstrap";
import { Colxx } from "../common/CustomBootstrap";
import IntlMessages from "../../helpers/IntlMessages";
import FileDropzone from "../common/FileDropzone";
import { NotificationManager } from "../common/react-notifications";

const initialFormData = {
  propertyAddress: null,
  roomType: null,
  perspective: null,
  height: null,
  moodTimeOfDay: null,
  contactMethod: null,
  additionalInformation: null
};

const PDPremiumRenders = ({ service, history }) => {
  const dropzone = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, updateFormData] = React.useState(initialFormData);

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
    };

    axios
      .post(`/api/briefing/save`, postFormData, config)
      .then((res) => {
        setLoading(false);
        history.push(`/thank-you/briefing/${service._id}`);
      })
      .catch((err) => {
        console.log(err.response.data);
        setLoading(false);
        NotificationManager.warning("Something went wrong. Please try again", "Error", 3000);
      });
  };

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
              <h5 className="text-primary mb-5">Preium Renders</h5>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.file-upload" />
                  </Label>
                  <p className="text-muted text-small">
                  To achieve the best results and most accurate quote we require the architectural drawings in either PDF or CAD file. 
                  <br />
                  Please note that to proceed with the premium renders we will also require further plans and details regarding the project including landscape plans, internal finishes and fittings and Exterior Materials Specs.
                  </p>
                  <FileDropzone ref={dropzone} />
                </FormGroup>
                
                <FormGroup>
                  <Label className="font-weight-bold text-primary">
                    Property Address
                  </Label>
                  <p className="text-muted text-small">Please enter the full property address here.</p>
                  <Input
                    type="text"
                    placeholder=""
                    name="propertyAddress"
                    id="propertyAddress"
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup row>
                  <Colxx md='4'>
                    <Label className="font-weight-bold">
                      Select Room Type or Space (Interiors)
                    </Label>
                    <p className="static-height"></p>
                    <Input
                      type="select"
                      onChange={handleChange}
                      defaultValue=""
                      name={`roomType`}
                      id={`roomType`}
                    >
                      <option value="" disabled></option>
                      <option value="Master Bedroom">
                        Master Bedroom
                      </option>
                      <option value="Bedroom">Bedroom</option>
                      <option value="Bathroom">Bathroom</option>
                      <option value="Ensuite">Ensuite</option>
                      <option value="Living Room">Living Room</option>
                      <option value="Dining Room">Dining Room</option>
                      <option value="Open-Plan Living/Dining Room">
                        Open-Plan Living/Dining Room
                      </option>
                      <option value="Kitchen">Kitchen</option>
                      <option value="Children's Room">
                        Children's Room
                      </option>
                      <option value="Home Office">Home Office</option>
                      <option value="Entry">Entry</option>
                      <option value="Hallway">Hallway</option>
                      <option value="Home Bar">Home Bar</option>
                      <option value="Laundry">Laundry</option>
                      <option value="Staircase">Staircase</option>
                      <option value="Other">Other</option>
                    </Input>
                  </Colxx>
                  <Colxx md='4'>
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
                    </Input>
                  </Colxx>
                  <Colxx md="4">
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
                    </Input>
                  </Colxx>
                </FormGroup>

                <FormGroup row>
                  <Colxx md="6">
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
                    </Input>
                  </Colxx>
                  <Colxx md='6'>
                    <Label className="font-weight-bold">
                      How would you like to be contacted?
                    </Label>
                    <p className="text-muted text-small static-height">We may need to contact your for more information. How would you like to be contacted?</p>
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
                    Additional information or requests for this project
                  </Label>
                  <Input
                    type="textarea"
                    onChange={handleChange}
                    defaultValue=""
                    name="additionalInformation"
                    id="additionalInformation"
                  />
                </FormGroup>

                <FormGroup>
                  <Button
                    color="primary"
                    className={`btn-shadow btn-multiple-state ${
                      loading ? "show-spinner" : ""
                    }`}
                    size="lg"
                  >
                    <span className="spinner d-inline-block">
                      <span className="bounce1" />
                      <span className="bounce2" />
                      <span className="bounce3" />
                    </span>
                    <span className="label">
                      <IntlMessages id="briefing.submit" />
                    </span>
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

export default injectIntl(PDPremiumRenders);
