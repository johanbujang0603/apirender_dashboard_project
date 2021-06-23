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
  notes: null,
};

const VRCustomProject = ({ service, orders, history }) => {
  const dropzone = useRef();
  const architecturealBlueprintsDropzone = useRef();
  const imageDropzone = useRef();
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

    files = imageDropzone.current.myDropzone.files;
    files.map((file) => {
      postFormData.append("VR_CUSTOM_PROJECT_IMAGE_FILES", file);
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
              <h5 className="text-primary mb-5">
                Virtual Renovation - Custom Project
              </h5>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label className="font-weight-bold">
                    Please upload a detailed brief including a description, sketch and reference files photos that highlight the pool shape and materials.
                    If possible, include construction drawings and landscape plans for the project. 
                  </Label>
                  <Row>
                    <Colxx>
                      <Input
                        type="textarea"
                        placeholder="Enter instructions here (optional)"
                        name="architecturealBlueprints"
                        id="architecturealBlueprints"
                        onChange={handleChange}
                        rows={5}
                      />
                    </Colxx>
                    <Colxx>
                      <FileDropzone ref={dropzone} />
                    </Colxx>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Label className="font-weight-bold">Upload Image File</Label>
                  <p className="text-muted text-small">
                    Please upload a high-quality photo of the area that is to have the pool and landscaping constructed.  We will incorporate your new pool and landscaping into this photograph. 
                  </p>
                  <FileDropzone ref={imageDropzone} />
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

export default injectIntl(VRCustomProject);