import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
  Spinner
} from "reactstrap";
import { Colxx } from "../common/CustomBootstrap";
import IntlMessages from "../../helpers/IntlMessages";
import CustomSelectInput from "../common/CustomSelectInput";
import FileDropzone from "../common/FileDropzone";
import CustomImageLightBox from "../common/CustomImageLightBox";
import { NotificationManager } from "../common/react-notifications";
import {
  skyItems,
  grassEnhancementExamples,
  furnitureStyles,
  roomTypes,
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
  additionalFileLink: null
};

const PRPhotoRetouching = ({ service, orders, history }) => {
  const dropzone = useRef();
  let intervalId = useRef(null)

  const [uploadProgress, setUploadProgress] = useState(0);
  const [s3UploadPorgress, setS3UploadProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, updateFormData] = React.useState(initialFormData);
  const [grassEnhancementLightbox, setGrassEnhancementLightbox] = useState(
    false
  );
  const [bedSpreadLightbox, setBedSpreadLightbox] = useState(false);
  const [interiorLightsLightbox, setInteriorLightsLightbox] = useState(false);
  const [replaceTVLightbox, setReplaceTVLightbox] = useState(false);

  useEffect(() => {
    if (uploadProgress + s3UploadPorgress === 200) {
      console.log("completed");
      setLoading(false);
      clearInterval(intervalId.current)
      history.push(`/thank-you/briefing/${service._id}`);
    }
  }, [uploadProgress, s3UploadPorgress])

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
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        setUploadProgress(percentCompleted);
      },
    };
    
    axios
      .post(`/api/briefing/save`, postFormData, config)
      .then((res) => {
        intervalId.current = setInterval(() => {
          getFileStatus();
        }, 2000)
      })
      .catch((err) => {
        console.log(err.response.data);
        NotificationManager.warning("Something went wrong. Please try again", "Error", 3000);
      });
  };

  const getFileStatus = () => {
    axios.get(`/api/briefing/file-status?service_id=${service._id}`)
      .then((res) => {
        setS3UploadProgress(res.data.progress);
      })
  }

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

  const onSkyItemCheck = (event, value) => {
    updateFormData({
      ...formData,
      skyReplacement: value,
    });
  };

  const onFurnitureStyleCommercialCheck = (event, value) => {
    updateFormData({
      ...formData,
      furnitureStyleCommercial: value,
    });
  };

  const onFurnitureStyleResidentialCheck = (event, value) => {
    updateFormData({
      ...formData,
      furnitureStyleResidential: value,
    });
  };

  return (
    <>
      <Row>
        <Colxx md="12">
          <Card className="mb-4">
            <CardBody>
              <h5 className="text-primary mb-2">Photo Retouching</h5>
              <p className="text-danger mb-3 text-small">{orders.map((order) => order.name).join(', ')}</p>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.file-upload" />
                  </Label>
                  <p className="text-muted text-small">
                    Please upload the file/s here. We accept all formats (JPEG,
                    Tiff, ARW, PNG, PSD, CR2, etc). &nbsp;
                    Max upload limit is 256 MB. If your files exceed this limit, please provide a link to your files in the section below.
                  </p>
                  <FileDropzone ref={dropzone} />
                </FormGroup>
                <FormGroup>
                  <Label className="font-weight-bold">
                    Link to Files
                  </Label>
                  <p className="text-muted text-small">
                    Alternatively, please provide a link to your image files. Popular services include Dropbox, WeTransfer, Google Driver, etc.
                  </p>
                  <Input
                    type="text"
                    placeholder="Enter the link to your files"
                    name="additionalFileLink"
                    id="additionalFileLink"
                    onChange={handleChange}
                  />
                </FormGroup>
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
                    "PR_REAL_ESTATE_PHOTO_RETOUCHING_ITEM_REMOVAL_LARGE_ITEMS"
                ) != undefined ||
                  orders.find(
                    (o) =>
                      o.value ===
                      "PR_REAL_ESTATE_PHOTO_RETOUCHING_ITEM_REMOVAL_SMALL_ITEMS"
                  ) != undefined) && (
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
                {orders.find(
                  (o) =>
                    o.value ===
                    "PR_REAL_ESTATE_PHOTO_RETOUCHING_VIRTUAL_FURNITURE_RESIDENTIAL"
                ) != undefined && (
                  <>
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.residential-virtual-furniture" />
                    </Label>
                    <FormGroup row>
                      <Colxx md="12">
                        <p className="text-small text-muted">
                          <IntlMessages id="briefing.furniture-style" />
                        </p>
                        <Row>
                          {furnitureStyles &&
                            furnitureStyles.map((item, index) => {
                              return (
                                <ThumbSelection
                                  key={index}
                                  item={item}
                                  onCheckItem={onFurnitureStyleResidentialCheck}
                                  isSelected={
                                    formData.furnitureStyleResidential
                                  }
                                />
                              );
                            })}
                        </Row>
                      </Colxx>
                      <Colxx md="12">
                        <p className="text-small text-muted">
                          <IntlMessages id="briefing.room-type" />
                        </p>
                        <Select
                          components={{ Input: CustomSelectInput }}
                          className="react-select"
                          classNamePrefix="react-select"
                          name="roomType"
                          onChange={(selectedOption) => {
                            handleSelect(
                              selectedOption.value,
                              "residentialRoomType"
                            );
                          }}
                          options={roomTypes}
                        />
                      </Colxx>
                    </FormGroup>
                    <FormGroup>
                      <Label className="font-weight-bold">
                        <IntlMessages id="briefing.furniture-instruction-description" />
                      </Label>
                      <Input
                        type="textarea"
                        placeholder="Enter instructions here (optional)"
                        name="residentialFurnitureInstruction"
                        id="residentialFurnitureInstruction"
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </>
                )}

                {orders.find(
                  (o) =>
                    o.value ===
                    "PR_REAL_ESTATE_PHOTO_RETOUCHING_VIRTUAL_FURNITURE_COMMERCIAL"
                ) != undefined && (
                  <>
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.commercial-virtual-furniture" />
                    </Label>
                    <FormGroup row>
                      <Colxx md="12">
                        <p className="text-small text-muted">
                          <IntlMessages id="briefing.room-type" />
                        </p>
                        <Select
                          components={{ Input: CustomSelectInput }}
                          className="react-select"
                          classNamePrefix="react-select"
                          name="roomType"
                          onChange={(selectedOption) => {
                            handleSelect(
                              selectedOption.value,
                              "commercialRoomType"
                            );
                          }}
                          options={roomTypes}
                        />
                      </Colxx>
                    </FormGroup>
                    <FormGroup>
                      <Label className="font-weight-bold">
                        <IntlMessages id="briefing.furniture-instruction-description" />
                      </Label>
                      <Input
                        type="textarea"
                        placeholder="Enter instructions here (optional)"
                        name="commercialFurnitureInstruction"
                        id="commercialFurnitureInstruction"
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </>
                )}

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
                    disabled={loading}
                    size="lg"
                  >
                    <span>{loading && (
                      <>
                      <Spinner style={{width: '1rem', height: '1rem', marginRight: '10px'}} />
                      {parseInt((uploadProgress + s3UploadPorgress) / 2)} %
                      </>
                    )}</span>
                    {!loading && (
                      <span className="label">
                        <IntlMessages id="briefing.submit" />
                      </span>
                    )}
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

export default injectIntl(PRPhotoRetouching);
