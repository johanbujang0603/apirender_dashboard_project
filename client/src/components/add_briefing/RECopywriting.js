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
  Spinner
} from "reactstrap";
import { Colxx } from "../common/CustomBootstrap";
import IntlMessages from "../../helpers/IntlMessages";
import FileDropzone from "../common/FileDropzone";
import { NotificationManager } from "../common/react-notifications";

const initialFormData = {
  streetAddress: null,
  streetAddress2: null,
  city: null,
  postalCode: null,
  country: null,
  propertyType: null,
  bedNumbers: null,
  bathroomNumbers: null,
  floorNumbers: null,
  propertyStyle: null,
  carParking: null,
  propertyDetails: null,
  optionalQuestion: null,
  optionalQuestion1: null,
  optionalQuestion2: null,
  additionalFileLink: null
};

const RECopywriting = ({ service, history }) => {
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
              <h5 className="text-primary mb-5">Real Estate Copywriting</h5>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.file-upload" />
                  </Label>
                  <p className="text-muted text-small">
                    Please upload existing photographs, floor plans and other visuals you have regarding the subject property.&nbsp;
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
                  <Colxx md='12'>
                    <Label className="font-weight-bold text-primary">
                      Property Address
                    </Label>
                    <p>Please enter the full property address here.</p>
                  </Colxx>
                  <Colxx md='4'>
                    <Label className="font-weight-bold">
                      Street Address
                    </Label>
                    <Input
                      type="text"
                      placeholder=""
                      name="streetAddress"
                      id="streetAddress"
                      onChange={handleChange}
                    />
                  </Colxx>
                  <Colxx md='4'>
                    <Label className="font-weight-bold">
                      Street Address Line 2
                    </Label>
                    <Input
                      type="text"
                      placeholder=""
                      name="streetAddress2"
                      id="streetAddress2"
                      onChange={handleChange}
                    />
                  </Colxx>
                  <Colxx md='4'>
                    <Label className="font-weight-bold">
                      City
                    </Label>
                    <Input
                      type="text"
                      placeholder=""
                      name="city"
                      id="city"
                      onChange={handleChange}
                    />
                  </Colxx>
                </FormGroup>
                <FormGroup row>
                  <Colxx md='4'>
                    <Label className="font-weight-bold">
                      Postsal/Zip code
                    </Label>
                    <Input
                      type="text"
                      placeholder=""
                      name="postalCode"
                      id="postalCode"
                      onChange={handleChange}
                    />
                  </Colxx>
                  <Colxx md='4'>
                    <Label className="font-weight-bold">
                      Country
                    </Label>
                    <Input
                      type="text"
                      placeholder=""
                      name="country"
                      id="country"
                      onChange={handleChange}
                    />
                  </Colxx>
                </FormGroup>

                <FormGroup row>
                  <Colxx md="6">
                    <Label className="font-weight-bold">
                      Type of Property
                    </Label>
                    <p className="text-small text-muted">Please select the property type from the list below.</p>
                    <Input
                      type="select"
                      onChange={handleChange}
                      defaultValue=""
                      name="propertyType"
                      id="propertyType"
                    >
                      <option value="" disabled></option>
                      <option value="House">House</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Unit">Unit</option>
                      <option value="TownHouse">TownHouse</option>
                      <option value="Villa">Villa</option>
                      <option value="Land">Land</option>
                      <option value="Acreage">Acreage</option>
                      <option value="Rural">Rural</option>
                    </Input>
                  </Colxx>
                  <Colxx md="6">
                    <Label className="font-weight-bold">
                    Number of Beds
                    </Label>
                    <p className="text-small text-muted">They should be able to select from a list, with the following options. (They should only be able to select one option)</p>
                    <Input
                      type="select"
                      onChange={handleChange}
                      defaultValue=""
                      name="bedNumbers"
                      id="bedNumbers"
                    >
                      <option value="" disabled></option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="8">9</option>
                      <option value="8">10</option>
                    </Input>
                  </Colxx>
                </FormGroup>
                <FormGroup row>
                  <Colxx md="6">
                    <Label className="font-weight-bold">
                      Number of Bathrooms
                    </Label>
                    <p className="text-small text-muted">They should be able to select from a list, with the following options. (They should only be able to select one option)</p>
                    <Input
                      type="select"
                      onChange={handleChange}
                      defaultValue=""
                      name="bathroomNumbers"
                      id="bathroomNumbers"
                    >
                      <option value="" disabled></option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="8">9</option>
                      <option value="8">10</option>
                    </Input>
                  </Colxx>
                  <Colxx md="6">
                    <Label className="font-weight-bold">
                      Number of Floors
                    </Label>
                    <p> </p>
                    <Input
                      type="select"
                      onChange={handleChange}
                      defaultValue=""
                      name="floorNumbers"
                      id="floorNumbers"
                    >
                    <option value="" disabled></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    </Input>
                  </Colxx>
                </FormGroup>
                
                <FormGroup>
                  <Label className="font-weight-bold">
                    Property Style
                  </Label>
                  <Input
                    type="textarea"
                    placeholder=""
                    name="propertyStyle"
                    id="propertyStyle"
                    onChange={handleChange}
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label className="font-weight-bold">
                    Car Parking
                  </Label>
                  <p className="text-small text-muted">
                    Please enter details below on the car parking available (i.e. double lockup garage, on-street parking, etc.)
                  </p>
                  <Input
                    type="textarea"
                    placeholder=""
                    name="carParking"
                    id="carParking"
                    onChange={handleChange}
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label className="font-weight-bold">
                    Further Property Details
                  </Label>
                  <p className="text-small text-muted">
                    Please enter any details about the property that is not evident in the photos or information already provided.
                  </p>
                  <Input
                    type="textarea"
                    placeholder=""
                    name="propertyDetails"
                    id="propertyDetails"
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label className="font-weight-bold">
                    Optional Questions
                  </Label>
                  <p className="text-small text-muted">
                    Have any improvements/renovations been made to the property? If so, what and when?
                  </p>
                  <Input
                    type="textarea"
                    placeholder=""
                    name="optionalQuestion"
                    id="optionalQuestion"
                    onChange={handleChange}
                    className="mb-2"
                  />
                  <p className="text-small text-muted">
                    What are three things that the current owners loved about living there.
                  </p>
                  <Input
                    type="textarea"
                    placeholder=""
                    name="optionalQuestion1"
                    id="optionalQuestion1"
                    onChange={handleChange}
                    className="mb-2"
                  />
                  <p className="text-small text-muted">
                    What do you see as the main selling points of the property?
                  </p>
                  <Input
                    type="textarea"
                    placeholder=""
                    name="optionalQuestion2"
                    id="optionalQuestion2"
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

export default injectIntl(RECopywriting);
