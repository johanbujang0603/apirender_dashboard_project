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
  projectAddress: null,
  contactMethod: null,
  additionalInformation: null
};

const PDCommercialFloorPlans = ({ service, history }) => {
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
              <h5 className="text-primary mb-5">Commercial Floor Plans</h5>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.file-upload" />
                  </Label>
                  <FileDropzone ref={dropzone} />
                </FormGroup>
                
                <FormGroup>
                  <Label className="font-weight-bold">
                    Project Address
                  </Label>
                  <p className="text-muted text-small">Please enter the full project address here.</p>
                  <Input
                    type="text"
                    placeholder=""
                    name="projectAddress"
                    id="projectAddress"
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
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

export default injectIntl(PDCommercialFloorPlans);
