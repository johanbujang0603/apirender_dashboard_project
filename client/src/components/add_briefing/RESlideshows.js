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
} from "reactstrap";
import { Colxx } from "../common/CustomBootstrap";
import FileDropzone from "../common/FileDropzone";
import IntlMessages from "../../helpers/IntlMessages";
import { NotificationManager } from "../common/react-notifications";

const initialFormData = {
  propertyAddress: null,
  contactName: null,
  contactNumber: null,
  contactEmail: null,
  musicStyle: null,
};

const RESlideshows = ({ service, orders, history }) => {
  const dropzone = useRef();
  const companyLogoDropzone = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, updateFormData] = React.useState(initialFormData);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const postFormData = new FormData();

    let files = dropzone.current.myDropzone.files;
    files.map((file) => {
      postFormData.append("basic", file);
    });

    files = companyLogoDropzone.current.myDropzone.files;
    files.map((file) => {
      postFormData.append("RE_SLIDE_SHOWS_COMPANY_LOGO", file);
    });

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
              <h5 className="text-primary mb-5">Slideshows</h5>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.file-upload" />
                  </Label>
                  <p className="text-muted text-small">
                    Upload up to 20 images
                  </p>
                  <FileDropzone ref={dropzone} />
                </FormGroup>
                <FormGroup row>
                  <Colxx sm="6">
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.property-address" />
                    </Label>
                    <p className="text-muted text-small">
                      Please enter the property address you would like to appear
                      on the video.
                    </p>
                    <Input
                      type="textarea"
                      name="propertyAddress"
                      id="propertyAddress"
                      onChange={handleChange}
                      rows="5"
                    />
                  </Colxx>
                  <Colxx sm="6">
                    <Label className="font-weight-bold">Company Logo</Label>
                    <p className="text-muted text-small">
                      Upload Logo/Watermark (PNG format preferred)
                    </p>
                    <FileDropzone ref={companyLogoDropzone} />
                  </Colxx>
                </FormGroup>
                <FormGroup row>
                  <Colxx sm="4">
                    <Label className="font-weight-bold">Contact Name</Label>
                    <p className="text-muted text-small">
                      Please enter the name you would like to appear on the
                      video.
                    </p>
                    <Input
                      type="text"
                      name="contactName"
                      id="contactName"
                      onChange={handleChange}
                    />
                  </Colxx>
                  <Colxx sm="4">
                    <Label className="font-weight-bold">Contact Number</Label>
                    <p className="text-muted text-small">
                      Please enter the phone number you would like to appear on
                      the video.
                    </p>
                    <Input
                      type="text"
                      name="contactNumber"
                      id="contactNumber"
                      onChange={handleChange}
                    />
                  </Colxx>
                  <Colxx sm="4">
                    <Label className="font-weight-bold">Contact Email Address</Label>
                    <p className="text-muted text-small">
                      Please enter the email address you would like to appear on
                      the video.
                    </p>
                    <Input
                      type="email"
                      name="contactEmail"
                      id="contactEmail"
                      onChange={handleChange}
                    />
                  </Colxx>
                </FormGroup>
                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.music-style" />
                  </Label>
                  <Input
                    type="select"
                    onChange={handleChange}
                    defaultValue=""
                    name="musicStyle"
                    id="musicStyle"
                  >
                    <option value="" disabled></option>
                    <option value="Classical">Classical</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Upbeat">Upbeat</option>
                  </Input>
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

export default injectIntl(RESlideshows);
