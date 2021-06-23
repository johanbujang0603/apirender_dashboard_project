import React, { useRef, useState } from "react";
import axios from "axios";
import { injectIntl } from "react-intl";
import Select from "react-select";
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
} from "reactstrap";
import { Colxx } from "../common/CustomBootstrap";
import FileDropzone from "../common/FileDropzone";
import CustomSelectInput from "../common/CustomSelectInput";
import IntlMessages from "../../helpers/IntlMessages";
import ThumbSelection from "../custom/ThumbSelection";
import { NotificationManager } from "../common/react-notifications";
import {
  furnitureStyles,
  roomTypes,
} from "../../constants/photoRetouchingValues";

const initialFormData = {
  fileOutputSize: null,
  notes: null,
};

const RE360VirtualStaging = ({ service, orders, history }) => {
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

  const handleSelect = (data, name) => {
    updateFormData({
      ...formData,
      [name]: data,
    });
  };

  const onFurnitureStyleCheck = (event, value) => {
    updateFormData({
      ...formData,
      furnitureStyle: value,
    });
  };

  return (
    <>
      <Row>
        <Colxx md="12">
          <Card className="mb-4">
            <CardBody>
              <h5 className="text-primary mb-5">360 Virtual Staging</h5>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.file-upload" />
                  </Label>
                  <p className="text-muted text-small">
                    Please upload the file/s here. We accept all formats (INSV, INSP, MP4, JPEG, etc.).
                  </p>
                  <FileDropzone ref={dropzone} />
                </FormGroup>

                <FormGroup row>
                  <Colxx md="12">
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.furniture-style" />
                    </Label>
                    <Row>
                      {furnitureStyles &&
                        furnitureStyles.map((item, index) => {
                          return (
                            <ThumbSelection
                              key={index}
                              item={item}
                              onCheckItem={onFurnitureStyleCheck}
                              isSelected={formData.furnitureStyle}
                            />
                          );
                        })}
                    </Row>
                  </Colxx>
                  <Colxx md="12">
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.room-type" />
                    </Label>
                    <Select
                      components={{ Input: CustomSelectInput }}
                      className="react-select"
                      classNamePrefix="react-select"
                      name="roomType"
                      onChange={(selectedOption) => {
                        handleSelect(selectedOption.value, "roomType");
                      }}
                      options={roomTypes}
                    />
                  </Colxx>
                </FormGroup>
                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.furniture-instruction-description" />
                  </Label>
                  <Row>
                    <Colxx>
                      <Input
                        type="textarea"
                        placeholder="Enter instructions here (optional)"
                        name="virtualFurniture"
                        id="virtualFurniture"
                        onChange={handleChange}
                        rows={5}
                      />
                    </Colxx>
                  </Row>
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

export default injectIntl(RE360VirtualStaging);
