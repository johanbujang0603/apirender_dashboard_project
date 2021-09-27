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
  Spinner
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
  additionalFileLink: null
};

const REVideo = ({ service, orders, history }) => {
  const dropzone = useRef();
  
  let intervalId = useRef(null)

  const [uploadProgress, setUploadProgress] = useState(0);
  const [s3UploadPorgress, setS3UploadProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, updateFormData] = React.useState(initialFormData);

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
              <h5 className="text-primary mb-2">Video</h5>
              <p className="text-danger mb-3 text-small">{orders.map((order) => order.name).join(', ')}</p>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.file-upload" />
                  </Label>
                  <p className="text-muted text-small">
                    Upload up to 5 minutes of video footage in any video file format (MOV, AVI, MP4, WMV, etc.) &nbsp;
                    Max upload limit is 256 MB. If your files exceed this limit, please provide a link to your files in the section below.
                    Please also include your company logo file if you would like it to appear at the end of your video.
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

export default injectIntl(REVideo);
