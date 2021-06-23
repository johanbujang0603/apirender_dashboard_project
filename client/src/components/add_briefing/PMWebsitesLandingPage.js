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
  contactMethod: null,
  haveLogo: null,
  notes: null,
};

const PMWebsitesLandingPage = ({ service, orders, history }) => {
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
        NotificationManager.warning(
          "Something went wrong. Please try again",
          "Error",
          3000,
          null,
          null,
          ""
        );
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
              <h5 className="text-primary mb-5">
                Websites (Landing Page/Pre-Launch)
              </h5>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.file-upload" />
                  </Label>
                  <p className="text-muted text-small">
                    Please upload files here. Provide as much information about the project as possible.
                    If possible, include floor plans, renders, property and lifestyle photographs, and video.
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

export default injectIntl(PMWebsitesLandingPage);
