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
  Spinner
} from "reactstrap";
import Select from 'react-select';
import { Colxx } from "../common/CustomBootstrap";
import IntlMessages from "../../helpers/IntlMessages";
import FileDropzone from "../common/FileDropzone";
import CustomSelectInput from '../common/CustomSelectInput';
import { NotificationManager } from "../common/react-notifications";

const sectionsData = [
  { label: 'Project Overview', value: 'Project Overview', key: 0 },
  { label: 'The Developer / Team', value: 'The Developer / Team', key: 1 },
  { label: 'Contact', value: 'Contact', key: 2 },
  { label: 'Partners', value: 'Partners', key: 3 },
  { label: 'Design', value: 'Design', key: 4 },
  { label: 'Location / Lifestyle', value: 'Location / Lifestyle', key: 5 },
  { label: 'Floor Plans', value: 'Floor Plans', key: 6 },
  { label: 'Video', value: 'Video', key: 7 },
  { label: 'Gallery', value: 'Gallery', key: 8 },
  { label: 'Master Plan', value: 'Master Plan', key: 9 },
  { label: 'News', value: 'News', key: 10 },
]

const initialFormData = {
  notes: null,
  contactMethod: null,
  sections: [],
  haveLogo: false,
  additionalFileLink: null
};

const PMWebsitesPostLaunch = ({ service, orders, history }) => {

  console.log(orders);
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

  const handleMultipleSelect = (data, name) => {
    if (orders[0].name.includes('8-10') && data.length > 10)
      return;
    if (orders[0].name.includes('5-7') && data.length > 7)
      return;
    updateFormData({
      ...formData,
      [name]: data,
    });
  };

  return (
    <>
      <Row>
        <Colxx md="12">
          <Card className="mb-4">
            <CardBody>
              <h5 className="text-primary mb-2">Websites (Post-Launch)</h5>
              <p className="text-danger mb-3 text-small">{orders.map((order) => order.name).join(', ')}</p>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label className="font-weight-bold">
                    <IntlMessages id="briefing.file-upload" />
                  </Label>
                  <p className="text-muted text-small">
                    Please upload files here. Provide as much information about the project as possible.
                    If possible, include floor plans, renders, property and lifestyle photographs and video. &nbsp;
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
                <FormGroup row>
                  <Colxx sm={12}>
                    <Label className="font-weight-bold">
                      <IntlMessages id="briefing.custom-template" />
                    </Label>
                    <p className="text-muted text-small">
                      Please upload your company and/or project logo (preferred file format is PNG).
                      If you have a company or project style/branding guide, please also upload this document above too.
                    </p>
                  </Colxx>
                  <Colxx sm={6}>
                    <Label className="font-weight-bold">
                      Do you have a logo or style/branding guide?
                    </Label>
                    <div>
                      <CustomInput
                        type="radio"
                        id="haveLogo1"
                        name="haveLogo"
                        label="Yes"
                        value="Yes"
                        onChange={handleChange} 
                      />
                      <CustomInput
                        type="radio"
                        id="haveLogo2"
                        name="haveLogo"
                        label="No"
                        value="No"
                        onChange={handleChange}
                      />
                    </div>
                  </Colxx>
                </FormGroup>
                <FormGroup>
                  <Label className="font-weight-bold">
                    Sections
                  </Label>
                  <p className="text-small text-muted">
                    To assist with the website design, please select the sections that you would like included on your website.
                    Section names can be changed, these are just for reference.
                  </p>
                  <Select
                    components={{ Input: CustomSelectInput }}
                    className="react-select"
                    classNamePrefix="react-select"
                    isMulti
                    name="sections"
                    value={formData["sections"]}
                    onChange={(selectedOptions) => {
                      handleMultipleSelect(selectedOptions, "sections");
                    }}
                    options={sectionsData}
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
                  <Label className="font-weight-bold">
                    How would you like us to contact you?
                  </Label>
                  <div>
                    <CustomInput
                      type="radio"
                      id="contactMethod1"
                      name="contactMethod"
                      label="Email"
                      value="Email"
                      onChange={handleChange}
                    />
                    <CustomInput
                      type="radio"
                      id="contactMethod2"
                      name="contactMethod"
                      label="Phone"
                      value="Phone"
                      onChange={handleChange}
                    />
                    <CustomInput
                      type="radio"
                      id="contactMethod3"
                      name="contactMethod"
                      label="Via Dashboard Messaging"
                      value="Via Dashboard Messaging"
                      onChange={handleChange}
                    />
                  </div>
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

export default injectIntl(PMWebsitesPostLaunch);
