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
} from "reactstrap";
import { Colxx } from "../common/CustomBootstrap";
import FileDropzone from "../common/FileDropzone";
import IntlMessages from "../../helpers/IntlMessages";
import { NotificationManager } from "../common/react-notifications";

const initialFormData = {
  includeCompanyLogo: null,
  customUrl: null,
  notes: null,
};

const REVirtualTour = ({ service, orders, history }) => {
  const dropzone = useRef();
  const logoFilesDropzone = useRef();
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
              <h5 className="text-primary mb-5">Virtual Tour</h5>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.file-upload" />
                  </Label>
                  <p className="text-muted text-small">
                    File Upload (INSV, INSP, MP4, or JPG, etc). Please provide
                    reference to the room type by naming your files by the room
                    name (i.e. bedroom1.JPG)
                  </p>
                  <FileDropzone ref={dropzone} />
                </FormGroup>
                <FormGroup>
                  <Label className="font-weight-bold">Logo</Label>
                  <p className="text-muted text-small">
                    Would you like to include your company logo in the virtual
                    tour? It will appear on the bottom-right hand side of the
                    tour beside the navigational buttons.
                  </p>
                  <div>
                    <CustomInput
                      type="radio"
                      id="includeCompanyLogo1"
                      name="includeCompanyLogo"
                      label="Yes"
                      value="Yes"
                      onChange={handleChange}
                    />
                    <CustomInput
                      type="radio"
                      id="includeCompanyLogo2"
                      name="includeCompanyLogo"
                      label="No"
                      value="No"
                      onChange={handleChange}
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.custom-url" />
                  </Label>
                  <p className="text-muted text-small">
                    Please enter the custom text for the URL of your Virtual Tour (i.e. http://virtualtour.propertyrender.com/123propertystreet)
                  </p>
                  <div className="d-flex align-items-center flex-wrap">
                    <span className="mr-1">http://virtualtour.propertyrender.com/</span>
                    <Input
                      type="text"
                      name="customUrl"
                      placeholder="Insert Custom Text Here"
                      id="customUrl"
                      onChange={handleChange}
                      style={{width: "200px"}}
                    />
                  </div>
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

export default injectIntl(REVirtualTour);
