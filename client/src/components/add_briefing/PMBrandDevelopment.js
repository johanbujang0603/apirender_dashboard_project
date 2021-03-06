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
  Spinner,
} from "reactstrap";
import { Colxx } from "../common/CustomBootstrap";
import IntlMessages from "../../helpers/IntlMessages";
import FileDropzone from "../common/FileDropzone";
import { NotificationManager } from "../common/react-notifications";

const initialFormData = {
  logoUsage: null,
  logoUsageText: null,
  businessPurpose: null,
  mission: null,
  brandValues: null,
  targetCustomer: null,
  companyPersonality: null,
  top3Competitors: null,
  youDifference: null,
  companyStory: null,
  brand3Links: null,
  interactionCustomer: null,
  additionalFileLink: null,
  specificGuidelines: null
};

const PMBrandDevelopment = ({ service, orders, history }) => {
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

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const getFileStatus = () => {
    axios.get(`/api/briefing/file-status?service_id=${service._id}`)
      .then((res) => {
        setS3UploadProgress(res.data.progress);
      })
  }

  return (
    <>
      <Row>
        <Colxx md="12">
          <Card className="mb-4">
            <CardBody>
              <h5 className="text-primary mb-2">Brand Development</h5>
              <p className="text-danger mb-3 text-small">{orders.map((order) => order.name).join(', ')}</p>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label className="font-weight-bold">
                    What is your logo going to be used for?
                  </Label>
                  <div>
                    <CustomInput
                      type="radio"
                      id="logoUsage1"
                      name="logoUsage"
                      label="A Project (i.e. Housing Estate, Apartment Complex, etc.)"
                      value="A Project"
                      onChange={handleChange}
                    />
                    <CustomInput
                      type="radio"
                      id="logoUsage2"
                      name="logoUsage"
                      label="A company logo"
                      value="A company logo"
                      onChange={handleChange}
                    />
                    <CustomInput
                      type="radio"
                      id="logoUsage3"
                      name="logoUsage"
                      label="Other"
                      value="Other"
                      onChange={handleChange}
                    />
                  </div>
                  <Input
                    type="textarea"
                    placeholder=""
                    name="logoUsageText"
                    id="logoUsageText"
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup row>
                  <Colxx sm={6}>
                    <Label className="font-weight-bold">
                      What does your business do?
                    </Label>
                    <Input
                      type="textarea"
                      placeholder=""
                      name="businessPurpose"
                      id="businessPurpose"
                      onChange={handleChange}
                    />
                  </Colxx>
                  <Colxx sm={6}>
                    <Label className="font-weight-bold">
                      What is your company's missions statement?
                    </Label>
                    <Input
                      type="textarea"
                      placeholder=""
                      name="mission"
                      id="mission"
                      onChange={handleChange}
                    />
                  </Colxx>
                </FormGroup>
                <FormGroup row>
                  <Colxx sm={6}>
                    <Label className="font-weight-bold">
                      What are your brand???s values?
                    </Label>
                    <Input
                      type="textarea"
                      placeholder=""
                      name="brandValues"
                      id="brandValues"
                      onChange={handleChange}
                    />
                  </Colxx>
                  <Colxx sm={6}>
                    <Label className="font-weight-bold">
                      Describe your target customer
                    </Label>
                    <Input
                      type="textarea"
                      placeholder=""
                      name="targetCustomer"
                      id="targetCustomer"
                      onChange={handleChange}
                    />
                  </Colxx>
                </FormGroup>
                <FormGroup row>
                  <Colxx sm={6}>
                    <Label className="font-weight-bold">
                      What???s your company???s or project's personality?
                    </Label>
                    <Input
                      type="textarea"
                      placeholder=""
                      name="companyPersonality"
                      id="companyPersonality"
                      onChange={handleChange}
                    />
                  </Colxx>
                  <Colxx sm={6}>
                    <Label className="font-weight-bold">
                      Who are your company???s or projects top three competitors?
                    </Label>
                    <Input
                      type="textarea"
                      placeholder=""
                      name="top3Competitors"
                      id="top3Competitors"
                      onChange={handleChange}
                    />
                  </Colxx>
                </FormGroup>
                <FormGroup row>
                  <Colxx sm={6}>
                    <Label className="font-weight-bold">
                      How is your company or project different to your competitors?
                    </Label>
                    <Input
                      type="textarea"
                      placeholder=""
                      name="youDifference"
                      id="youDifference"
                      onChange={handleChange}
                    />
                  </Colxx>
                  <Colxx sm={6}>
                    <Label className="font-weight-bold">
                      What's your company???s story?
                    </Label>
                    <Input
                      type="textarea"
                      placeholder=""
                      name="companyStory"
                      id="companyStory"
                      onChange={handleChange}
                    />
                  </Colxx>
                </FormGroup>
                <FormGroup row>
                  <Colxx sm={6}>
                    <Label className="font-weight-bold">
                      Please share 3 links of brands whose brand identity inspires you.
                      What do you like best about them?
                    </Label>
                    <Input
                      type="textarea"
                      placeholder=""
                      name="brand3Links"
                      id="brand3Links"
                      onChange={handleChange}
                    />
                  </Colxx>
                  <Colxx sm={6}>
                    <Label className="font-weight-bold">
                      How do you interact with customers?
                      (i.e. Phone, In Person, via Social Media platforms)
                    </Label>
                    <Input
                      type="textarea"
                      placeholder=""
                      name="interactionCustomer"
                      id="interactionCustomer"
                      onChange={handleChange}
                    />
                  </Colxx>
                </FormGroup>
                <FormGroup row>
                  <Colxx sm={6}>
                    <Label className="font-weight-bold">
                      Do you have specific guidelines ( do's and dont's ) about the colors and other elements of your brand identity?
                    </Label>
                    <Input
                      type="textarea"
                      placeholder=""
                      name="specificGuidelines"
                      id="specificGuidelines"
                      onChange={handleChange}
                    />
                  </Colxx>
                  <Colxx sm={6}>
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.notes" />
                    </Label>
                    <Input
                      type="textarea"
                      placeholder=""
                      name="notes"
                      id="notes"
                      onChange={handleChange}
                    />
                  </Colxx>
                </FormGroup>
                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.file-upload" />
                  </Label>
                  <p className="text-muted text-small">
                    Please upload any files that you think will assist with the creation of your brand development (i.e. competitor branding, inspirations, reference images, etc.)
                    <br />
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
                      {parseInt(uploadProgress)} %
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

export default injectIntl(PMBrandDevelopment);
