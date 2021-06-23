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
  architecturealBlueprints: null,
};

const VRPoolConstructionCustomProject = ({ service, orders, history }) => {
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

    files = architecturealBlueprintsDropzone.current.myDropzone.files;
    files.map((file) => {
      postFormData.append(
        "VR_POOL_CONSTRUCTION_CUSTOM_PROJECT_BLUE_PRINT",
        file
      );
    });

    files = imageDropzone.current.myDropzone.files;
    files.map((file) => {
      postFormData.append(
        "VR_POOL_CONSTRUCTION_CUSTOM_PROJECT_IMAGE_FILES",
        file
      );
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
                Virtual Pool Construction - Custom Project
              </h5>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.file-upload" />
                  </Label>
                  <p className="text-muted text-small">
                    File Upload. Please name each file by the room (i.e.
                    Kitchen, Bedroom 1, Bedroom 2, etc)
                  </p>
                  <FileDropzone ref={dropzone} />
                </FormGroup>
                <FormGroup>
                  <Label className="font-weight-bold">
                    Please provide a detailed brief for your project in the form
                    of written description of the completed project and
                    reference images for materials. We will contact you to
                    discuss the final requirements of your project and confirm
                    the story line. Please provide Architectural blueprints/CAD
                    files (preferred), landscape plans, texture, colour details
                    and instructions in where you would like these colors and
                    textures applied. Please include the schedule of finished,
                    floor plans, sectionals, roof plans, elevations and
                    materials list if possible.
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
                      <FileDropzone ref={architecturealBlueprintsDropzone} />
                    </Colxx>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Label className="font-weight-bold">Upload Image File</Label>
                  <p className="text-muted text-small">
                    We will be rendering your completed renovation project into
                    an existing photograph of the current space or room. Please
                    upload a high-resolution image.
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

export default injectIntl(VRPoolConstructionCustomProject);