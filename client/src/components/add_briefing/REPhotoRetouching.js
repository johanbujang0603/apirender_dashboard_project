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
  CustomInput,
  CardBody,
} from "reactstrap";
import { Colxx } from "../common/CustomBootstrap";
import IntlMessages from "../../helpers/IntlMessages";
import FileDropzone from "../common/FileDropzone";
import CustomImageLightBox from "../common/CustomImageLightBox";
import { NotificationManager } from "../common/react-notifications";
import {
  skyItems,
  grassEnhancementExamples,
  bedSpreadExamples,
  interiorLightsExamples,
  replaceTVExamples,
} from "../../constants/photoRetouchingValues";
import ThumbSelection from "../custom/ThumbSelection";

const initialFormData = {
  skyReplacement: null,
  bedSpread: null,
  fileOutputSize: null,
  grassEnhancement: null,
  interiorLights: null,
  replaceTVScreen: null,
};

const REPhotoRetouching = ({ service, orders, history }) => {
  const dropzone = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, updateFormData] = React.useState(initialFormData);
  const [grassEnhancementLightbox, setGrassEnhancementLightbox] = useState(
    false
  );
  const [bedSpreadLightbox, setBedSpreadLightbox] = useState(false);
  const [interiorLightsLightbox, setInteriorLightsLightbox] = useState(false);
  const [replaceTVLightbox, setReplaceTVLightbox] = useState(false);

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

  const onSkyItemCheck = (event, value) => {
    updateFormData({
      ...formData,
      skyReplacement: value,
    });
  };

  return (
    <>
      <Row>
        <Colxx md="12">
          <Card className="mb-4">
            <CardBody>
              <h5 className="text-primary mb-5">Photo Retouching</h5>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.file-upload" />
                  </Label>
                  <p className="text-muted text-small">
                    Please upload the file/s here. We accept all formats (JPEG,
                    Tiff, ARW, PNG, PSD, CR2, etc).
                  </p>
                  <FileDropzone ref={dropzone} />
                </FormGroup>
                {orders.find(
                  (o) =>
                    o.value === "RE_REAL_ESTATE_PHOTO_RETOUCHING_LOGO_WATERMARK"
                ) !== undefined && (
                  <FormGroup>
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.logo-watermark" />
                    </Label>
                    <Row>
                      <Colxx>
                        <Input
                          type="textarea"
                          placeholder="Please provide instruction onloog position and transparency"
                          name="logoWatermark"
                          id="logoWatermark"
                          onChange={handleChange}
                          rows={5}
                        />
                      </Colxx>
                      {/* <Colxx>
                        <FileDropzone ref={logoWatermarkDropzone} />
                      </Colxx> */}
                    </Row>
                  </FormGroup>
                )}
                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.sky-replacement" />
                  </Label>

                  <p className="text-small text-muted">
                    <IntlMessages id="briefing.sky-replacement-description" />
                  </p>
                  <Row>
                    {skyItems &&
                      skyItems.map((item, index) => {
                        return (
                          <ThumbSelection
                            key={index}
                            item={item}
                            onCheckItem={onSkyItemCheck}
                            isSelected={formData.skyReplacement}
                          />
                        );
                      })}
                  </Row>
                </FormGroup>
                <FormGroup row>
                  <Colxx md="6">
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.grass-enhancement" />
                    </Label>
                    <p className="text-small text-muted">
                      <IntlMessages id="briefing.grass-enhancement-description" />
                      <span
                        style={{ cursor: "pointer" }}
                        className="text-primary"
                        onClick={() => setGrassEnhancementLightbox(true)}
                      >
                        &nbsp;
                        <IntlMessages id="briefing.view-example" />
                      </span>
                    </p>

                    <CustomImageLightBox
                      isOpen={grassEnhancementLightbox}
                      setOpen={setGrassEnhancementLightbox}
                      images={grassEnhancementExamples}
                    />
                    <div>
                      <CustomInput
                        type="radio"
                        id="grassEnhancementRadio1"
                        name="grassEnhancement"
                        label="Yes"
                        value="Yes"
                        onChange={handleChange}
                      />
                      <CustomInput
                        type="radio"
                        id="grassEnhancementRadio2"
                        name="grassEnhancement"
                        label="No"
                        value="No"
                        onChange={handleChange}
                      />
                    </div>
                  </Colxx>
                  <Colxx md="6">
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.bed-spread-replacement" />
                    </Label>
                    <p className="text-small text-muted">
                      <IntlMessages id="briefing.bed-spread-replacement-description" />
                      <span
                        style={{ cursor: "pointer" }}
                        className="text-primary"
                        onClick={() => setBedSpreadLightbox(true)}
                      >
                        &nbsp;
                        <IntlMessages id="briefing.view-example" />
                      </span>
                    </p>

                    <CustomImageLightBox
                      isOpen={bedSpreadLightbox}
                      setOpen={setBedSpreadLightbox}
                      images={bedSpreadExamples}
                    />
                    <div>
                      <CustomInput
                        type="radio"
                        id="bedSpreadRadio1"
                        name="bedSpread"
                        label="Yes"
                        value="Yes"
                        onChange={handleChange}
                      />
                      <CustomInput
                        type="radio"
                        id="bedSpreadRadio2"
                        name="bedSpread"
                        label="No"
                        value="No"
                        onChange={handleChange}
                      />
                    </div>
                  </Colxx>
                </FormGroup>
                <FormGroup row>
                  <Colxx md="6">
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.turn-interiorlights-on" />
                    </Label>
                    <p className="text-small text-muted">
                      <IntlMessages id="briefing.turn-interiorlights-on-description" />
                      <span
                        style={{ cursor: "pointer" }}
                        className="text-primary"
                        onClick={() => setInteriorLightsLightbox(true)}
                      >
                        &nbsp;
                        <IntlMessages id="briefing.view-example" />
                      </span>
                    </p>

                    <CustomImageLightBox
                      isOpen={interiorLightsLightbox}
                      setOpen={setInteriorLightsLightbox}
                      images={interiorLightsExamples}
                    />
                    <div>
                      <CustomInput
                        type="radio"
                        id="interiorLightsRadio1"
                        name="interiorLights"
                        label="Yes"
                        value="Yes"
                        onChange={handleChange}
                      />
                      <CustomInput
                        type="radio"
                        id="interiorLightsRadio2"
                        name="interiorLights"
                        label="No"
                        value="No"
                        onChange={handleChange}
                      />
                    </div>
                  </Colxx>
                  <Colxx md="6">
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.replace-tv-screen" />
                    </Label>
                    <p className="text-small text-muted">
                      <IntlMessages id="briefing.replace-tv-screen-description" />
                      <span
                        style={{ cursor: "pointer" }}
                        className="text-primary"
                        onClick={() => setReplaceTVLightbox(true)}
                      >
                        &nbsp;
                        <IntlMessages id="briefing.view-example" />
                      </span>
                    </p>

                    <CustomImageLightBox
                      isOpen={replaceTVLightbox}
                      setOpen={setReplaceTVLightbox}
                      images={replaceTVExamples}
                    />
                    <div>
                      <CustomInput
                        type="radio"
                        id="replaceTVRadio1"
                        name="replaceTVScreen"
                        label="Stock Photo"
                        value="Stock Photo"
                        onChange={handleChange}
                      />
                      <CustomInput
                        type="radio"
                        id="replaceTVRadio2"
                        name="replaceTVScreen"
                        label="Black Screen"
                        value="Black Screen"
                        onChange={handleChange}
                      />
                      <CustomInput
                        type="radio"
                        id="replaceTVRadio3"
                        name="replaceTVScreen"
                        label="No Replacement"
                        value="No Replacement"
                        onChange={handleChange}
                      />
                    </div>
                  </Colxx>
                </FormGroup>
                <FormGroup row>
                  <Colxx md="6">
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.file-output-size" />
                    </Label>
                    <p className="text-small text-muted">
                      <IntlMessages id="briefing.file-output-size-description" />
                      &nbsp;Final output size is dependent on the original image size.
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
                </FormGroup>
                {(orders.find(
                  (o) =>
                    o.value ===
                    "RE_REAL_ESTATE_PHOTO_RETOUCHING_ITEM_REMOVAL_LARGE_ITEMS"
                ) !== undefined ||
                  orders.find(
                    (o) =>
                      o.value ===
                      "RE_REAL_ESTATE_PHOTO_RETOUCHING_ITEM_REMOVAL_SMALL_ITEMS"
                  ) !== undefined) && (
                  <FormGroup>
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.item-removal-instruction" />
                    </Label>
                    <p className="text-small text-muted">
                      <IntlMessages id="briefing.item-removal-instruction-description" />
                    </p>
                    <Input
                      type="textarea"
                      placeholder="Enter instructions here (optional)"
                      name="removalInstruction"
                      id="removalInstruction"
                      onChange={handleChange}
                    />
                  </FormGroup>
                )}
                
                {/* <FormGroup>
                  <Label className="font-weight-bold">
                    Upload Markup Here
                  </Label>
                  <FileDropzone ref={markupDropzone} />
                </FormGroup> */}
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

export default injectIntl(REPhotoRetouching);
