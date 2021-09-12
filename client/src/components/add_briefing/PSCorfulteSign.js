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
import IntlMessages from "../../helpers/IntlMessages";
import FileDropzone from "../common/FileDropzone";
import { NotificationManager } from "../common/react-notifications";

const initialFormData = {
  notes: null,
  additionalFileLink: null
};

const PSCorfulteSign = ({ service, orders, history, project }) => {
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
      history.push(`/thank-you/briefing/${service._id}?printing=true`);
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
              <h5 className="text-primary mb-5">Corflute Sign</h5>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <a href="/assets/pdf/CORFLUTE_SIGN.pdf" download >Download File Preparation Guide.</a>
                </FormGroup>
                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.file-upload" />
                  </Label>
                  <p className="text-muted text-small">
                  Upload your print-ready file here. Refer to the File Prepartion Guide for instructions on creating your file. &nbsp;
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
                  <Label className="text-primary">Delivery Address</Label>
                  <p className="text-small text-muted">
                    {
                      project && project.delivery_option
                    }
                  </p>
                </FormGroup>
                <FormGroup row>
                  <Colxx sm="3">
                    <Label className="font-weight-bold">
                      Street Name
                    </Label>
                    <p className="text-small text-muted">
                      { project && project.delivery_address.streetName }
                    </p>
                  </Colxx>
                  <Colxx sm="3">
                    <Label className="font-weight-bold">
                      Street Number
                    </Label>
                    <p className="text-small text-muted">
                      { project && project.delivery_address.streetNumber }
                    </p>
                  </Colxx>
                  <Colxx sm="3">
                    <Label className="font-weight-bold">
                      Unit Number
                    </Label>
                    <p className="text-small text-muted">
                      { project && project.delivery_address.unitNumber }
                    </p>
                  </Colxx>
                  <Colxx sm="3">
                    <Label className="font-weight-bold">
                      Suburb
                    </Label>
                    <p className="text-small text-muted">
                      { project && project.delivery_address.suburb }
                    </p>
                  </Colxx>
                  <Colxx sm="3">
                    <Label className="font-weight-bold">
                      Zipcode
                    </Label>
                    <p className="text-small text-muted">
                      { project && project.delivery_address.zipCode }
                    </p>
                  </Colxx>
                  <Colxx sm="3">
                    <Label className="font-weight-bold">
                      Country
                    </Label>
                    <p className="text-small text-muted">
                      { project && project.delivery_address.country }
                    </p>
                  </Colxx>
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

export default injectIntl(PSCorfulteSign);
