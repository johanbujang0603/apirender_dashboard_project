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
} from "reactstrap";
import { Colxx } from "../common/CustomBootstrap";
import IntlMessages from "../../helpers/IntlMessages";
import FileDropzone from "../common/FileDropzone";
import { NotificationManager } from "../common/react-notifications";

const initialFormData = {
  notes: null,
};

const PSNameTags = ({ service, orders, history, project }) => {
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
              <h5 className="text-primary mb-5">Name Tags</h5>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <a href="/assets/pdf/NAME_TAG.pdf" download >Download File Preparation Guide.</a>
                </FormGroup>
                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.file-upload" />
                  </Label>
                  <p className="text-muted text-small">
                  Upload your print-ready file here. Refer to the Product Specs and Design Guide for instructions on creating your file.
                  </p>
                  <FileDropzone ref={dropzone} />
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
                  <Label className="text-primary">Delivery Address</Label>
                  <p className="text-small text-muted">
                    {
                      project && project.delivery_option
                    }
                  </p>
                </FormGroup>
                <FormGroup row>
                  <Colxx sm="3">
                    <Label className="font-weight-bold">
                      Street Name
                    </Label>
                    <p className="text-small text-muted">
                      { project && project.delivery_address.streetName }
                    </p>
                  </Colxx>
                  <Colxx sm="3">
                    <Label className="font-weight-bold">
                      Street Number
                    </Label>
                    <p className="text-small text-muted">
                      { project && project.delivery_address.streetNumber }
                    </p>
                  </Colxx>
                  <Colxx sm="3">
                    <Label className="font-weight-bold">
                      Unit Number
                    </Label>
                    <p className="text-small text-muted">
                      { project && project.delivery_address.unitNumber }
                    </p>
                  </Colxx>
                  <Colxx sm="3">
                    <Label className="font-weight-bold">
                      Suburb
                    </Label>
                    <p className="text-small text-muted">
                      { project && project.delivery_address.suburb }
                    </p>
                  </Colxx>
                  <Colxx sm="3">
                    <Label className="font-weight-bold">
                      Zipcode
                    </Label>
                    <p className="text-small text-muted">
                      { project && project.delivery_address.zipCode }
                    </p>
                  </Colxx>
                  <Colxx sm="3">
                    <Label className="font-weight-bold">
                      Country
                    </Label>
                    <p className="text-small text-muted">
                      { project && project.delivery_address.country }
                    </p>
                  </Colxx>
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

export default injectIntl(PSNameTags);
