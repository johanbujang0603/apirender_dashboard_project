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
  CustomInput,
CardBody,
  Spinner
} from "reactstrap";
import { Colxx } from "../common/CustomBootstrap";
import CustomImageLightBox from "../common/CustomImageLightBox";
import FileDropzone from "../common/FileDropzone";
import IntlMessages from "../../helpers/IntlMessages";
import { NotificationManager } from "../common/react-notifications";
import {
  grassEnhancementExamples,
} from "../../constants/aerialEditingValues";

const initialFormData = {
  grassEnhancement: null,
  fileOutputSize: null,
  notes: null,
  additionalFileLink: null
};

const PRAerialEditing = ({ service, orders, history }) => {
  const dropzone = useRef();
  let intervalId = useRef(null)

  const [uploadProgress, setUploadProgress] = useState(0);
  const [s3UploadPorgress, setS3UploadProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, updateFormData] = React.useState(initialFormData);
  const [grassEnhancementLightbox, setGrassEnhancementLightbox] = useState(
    false
  );

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

  return (
    <>
      <Row>
        <Colxx md="12">
          <Card className="mb-4">
            <CardBody>
              <h5 className="text-primary mb-2">Aerial Editing</h5>
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
                {(orders.find(
                  (o) => o.value === "PR_AERIAL_EDITING_LARGE_ITEMS"
                ) != undefined ||
                  orders.find(
                    (o) => o.value === "PR_AERIAL_EDITING_SMALL_ITEMS"
                  ) != undefined) && (
                  <FormGroup>
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.item-removal-instruction" />
                    </Label>
                    <Input
                      type="textarea"
                      placeholder="Enter instructions here (optional)"
                      name="removalInstruction"
                      id="removalInstruction"
                      onChange={handleChange}
                    />
                  </FormGroup>
                )}
                {orders.find((o) => o.value === "PR_AERIAL_EDITING_COLOUR_FADE") !=
                  undefined && (
                  <FormGroup>
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.colour-fade" />
                    </Label>
                    <p className="text-small text-muted">
                      <IntlMessages id="briefing.colour-fade-description" />
                    </p>
                    <Row>
                      <Colxx>
                        <Input
                          type="textarea"
                          placeholder="Enter instructions here (optional)"
                          name="colourFade"
                          id="colourFade"
                          onChange={handleChange}
                          rows={5}
                        />
                      </Colxx>
                    </Row>
                  </FormGroup>
                )}
                {orders.find(
                  (o) => o.value === "PR_AERIAL_EDITING_LOCATION_PIN_DROP"
                ) != undefined && (
                  <FormGroup>
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.location-pin-drop" />
                    </Label>
                    <p className="text-small text-muted">
                      <IntlMessages id="briefing.location-pin-drop-description" />
                    </p>
                    <Row>
                      <Colxx>
                        <Input
                          type="textarea"
                          placeholder="Enter instructions here (optional)"
                          name="locationPinDrop"
                          id="locationPinDrop"
                          onChange={handleChange}
                          rows={5}
                        />
                      </Colxx>
                    </Row>
                  </FormGroup>
                )}
                {orders.find(
                  (o) => o.value === "PR_AERIAL_EDITING_SINGLE_LOT_HIGHLIGHT"
                ) != undefined && (
                  <FormGroup>
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.single-lot-highlight" />
                    </Label>
                    <p className="text-small text-muted">
                      <IntlMessages id="briefing.single-lot-highlight-description" />
                    </p>
                    <Row>
                      <Colxx>
                        <Input
                          type="textarea"
                          placeholder="Enter instructions here (optional)"
                          name="singleLotHighlight"
                          id="singleLotHighlight"
                          onChange={handleChange}
                          rows={5}
                        />
                      </Colxx>
                    </Row>
                  </FormGroup>
                )}
                {orders.find(
                  (o) => o.value === "PR_AERIAL_EDITING_MULTIPLE_LOT_HIGHLIGHT"
                ) != undefined && (
                  <FormGroup>
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.multiple-lot-highlight" />
                    </Label>
                    <p className="text-small text-muted">
                      <IntlMessages id="briefing.multiple-lot-highlight-description" />
                    </p>
                    <Row>
                      <Colxx>
                        <Input
                          type="textarea"
                          placeholder="Enter instructions here (optional)"
                          name="multipleLotHighlight"
                          id="multipleLotHighlight"
                          onChange={handleChange}
                          rows={5}
                        />
                      </Colxx>
                    </Row>
                  </FormGroup>
                )}

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
                        value="YES"
                        onChange={handleChange}
                      />
                      <CustomInput
                        type="radio"
                        id="grassEnhancementRadio2"
                        name="grassEnhancement"
                        label="No"
                        value="NO"
                        onChange={handleChange}
                      />
                    </div>
                  </Colxx>
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

export default injectIntl(PRAerialEditing);
