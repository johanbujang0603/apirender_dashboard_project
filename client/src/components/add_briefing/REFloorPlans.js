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
  fileOutputSize: null,
  outputFileType: null,
};

const REFloorPlans = ({ service, orders, history }) => {
  const dropzoneRefs = useRef([]);
  const [loading, setLoading] = useState(false);
  const [planStyles, setPlanStyles] = useState([]);
  const [formData, updateFormData] = React.useState(initialFormData);

  useEffect(() => {
    let plans = [];

    orders.map((order) => {
      if (order.value.includes("RE_FLOOR_PLANS_STYLE")) {
        plans.push(order);
      }
    });
    setPlanStyles(plans);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const postFormData = new FormData();
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    dropzoneRefs.current.map((ref) => {
      const files = ref.myDropzone.files;
      files.map((f) => postFormData.append(ref.props.planStyle, f));
    });
    postFormData.append("serviceId", service._id);
    postFormData.append("content", JSON.stringify(formData));

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
              <h5 className="text-primary mb-5">Floor Plans</h5>
              <Form onSubmit={handleSubmit}>
                {planStyles &&
                  planStyles.map((plan, index) => {
                    return (
                      <div key={index}>
                        <span className="text-primary text-one">
                          {plan.name}
                        </span>
                        <FormGroup>
                          <Label className="font-weight-bold">
                            <IntlMessages id="briefing.file-upload" />
                          </Label>
                          <p className="text-muted text-small">
                            Please upload the file/s here. We accept all formats (JPEG,
                            Tiff, ARW, PNG, PSD, CR2, etc).
                          </p>
                          <FileDropzone ref={(el) => (dropzoneRefs.current[index] = el)} planStyle={plan.name} />
                        </FormGroup>
                        <FormGroup row>
                          <Colxx sm={4}>
                            <Label className="font-weight-bold">Property Address</Label>
                            <Input
                              type="textarea"
                              rows="5"
                              placeholder="Enter Property Address to be displayed on the floor plan."
                              name={`${plan.value}_propertyAddress`}
                              id={`${plan.value}_propertyAddress`}
                              onChange={handleChange}
                            />
                          </Colxx>
                          <Colxx sm={4}>
                            <Label className="font-weight-bold">Disclaimer</Label>
                            <Input
                              type="textarea"
                              rows="5"
                              placeholder="If you prefer to use your own disclaimer, please enter below."
                              name={`${plan.value}_disclaimer`}
                              id={`${plan.value}_disclaimer`}
                              onChange={handleChange}
                            />
                          </Colxx>
                          <Colxx sm={4}>
                            <Label className="font-weight-bold">Dimensions</Label>
                            <Input
                              type="textarea"
                              rows="5"
                              placeholder="Enter list of dimensions for each room or we will enter room dimensions from the measurements on the blueprint or sketch provided."
                              name={`${plan.value}_dimensions`}
                              id={`${plan.value}_dimensions`}
                              onChange={handleChange}
                            />
                          </Colxx>
                        </FormGroup>
                        <FormGroup row>
                          <Colxx sm={4}>
                            <Label className="font-weight-bold">Total Floor Area</Label>
                            <Input
                              type="textarea"
                              rows="5"
                              placeholder="Enter total floor area or we will calculate an approximate Total Floor Area from the measurements on the blueprint or sketch provided."
                              name={`${plan.value}_totalFloorArea`}
                              id={`${plan.value}_totalFloorArea`}
                              onChange={handleChange}
                            />
                          </Colxx>
                          <Colxx sm={4}>
                            <Label className="font-weight-bold">Logo Placement:</Label>
                            <p className="text-small text-muted">
                              Select whether you would like your logo on the
                              floor plan template and which side we should
                              display it.
                            </p>
                            <Input
                              type="select"
                              onChange={handleChange}
                              defaultValue=""
                              name={`${plan.value}_logoReplacement`}
                              id={`${plan.value}_logoReplacement`}
                            >
                              <option value="" disabled></option>
                              <option value="Left Side">Left Side</option>
                              <option value="Right Side">Right Side</option>
                              <option value="No Logo">No Logo</option>
                            </Input>
                          </Colxx>
                          <Colxx sm={4}>
                            <Label className="font-weight-bold">Template Orientation:</Label>
                            <p className="text-small text-muted">
                              Select the orientation of the template.
                            </p>
                            <Input
                              type="select"
                              onChange={handleChange}
                              defaultValue=""
                              name={`${plan.value}_templateOrientation`}
                              id={`${plan.value}_templateOrientation`}
                            >
                              <option value="" disabled></option>
                              <option value="Landscape">Landscape</option>
                              <option value="Portrait">Portrait</option>
                            </Input>
                          </Colxx>
                        </FormGroup>
                      </div>
                    );
                  })}

                <FormGroup row>
                  <Colxx md="6">
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.file-output-size" />
                    </Label>
                    <p className="text-small text-muted">
                      <IntlMessages id="briefing.file-output-size-description" />
                    </p>
                    <div>
                      <CustomInput
                        type="radio"
                        id="fileOutputSize1"
                        name="fileOutputSize"
                        label="Web Only (1mb)"
                        value="Web Only (1mb)"
                        onChange={handleChange}
                      />
                      <CustomInput
                        type="radio"
                        id="fileOutputSize2"
                        name="fileOutputSize"
                        label="Print Only (>5mb)"
                        value="Print Only (>5mb)"
                        onChange={handleChange}
                      />
                      <CustomInput
                        type="radio"
                        id="fileOutputSize3"
                        name="fileOutputSize"
                        label="Web and Print"
                        value="Web and Print"
                        onChange={handleChange}
                      />
                    </div>
                  </Colxx>
                  <Colxx md="6">
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.output-file-type" />
                    </Label>
                    <p className="text-small text-muted">
                      <IntlMessages id="briefing.output-file-type-description" />
                    </p>
                    <div>
                      <CustomInput
                        type="radio"
                        id="outputFileType1"
                        name="outputFileType"
                        label="JPEG"
                        value="JPEG"
                        onChange={handleChange}
                      />
                      <CustomInput
                        type="radio"
                        id="outputFileType2"
                        name="outputFileType"
                        label="PDF"
                        value="PDF"
                        onChange={handleChange}
                      />
                      <CustomInput
                        type="radio"
                        id="outputFileType3"
                        name="outputFileType"
                        label="PNG"
                        value="PNG"
                        onChange={handleChange}
                      />
                    </div>
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

export default injectIntl(REFloorPlans);
