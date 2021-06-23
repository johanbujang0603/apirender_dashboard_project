import React, { useState } from "react";
import axios from "axios";
import {
  Row,
  Card,
  FormGroup,
  Label,
  Button,
  CardBody,
} from "reactstrap";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { NotificationManager } from "../../components/common/react-notifications";
import { Colxx } from "../../components/common/CustomBootstrap";
import IntlMessages from "../../helpers/IntlMessages";
import { AvatarUploader } from "../../components/common/AvatarUploader";
import { countries } from "../../constants/countries";

import {
  receiveAuthUser,
} from '../../redux/actions';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const CustomerSettings = ({ history, user, receiveAuthUserAction }) => {
  // const { messages } = intl;
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const onUserRegister = (values) => {
    setLoading(true);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    let formData = new FormData();
    formData.append("avatar", avatar);
    formData.append("id", user._id);
    formData.append("first_name", values.firstName);
    formData.append("last_name", values.lastName);
    formData.append("phone_number", values.phoneNumber);
    formData.append("email", values.email);
    formData.append("job_title", values.jobTitle);
    formData.append("company_name", values.companyName);
    formData.append("country", values.country);
    formData.append("is_new", avatar ? true : false);
    axios
      .post("/api/users/update-customer", formData, config)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        receiveAuthUserAction(history);
        setLoading(false);
        NotificationManager.success(
          "The user has been updated successfully",
          "Succcess!",
          3000,
          null,
          null,
          ""
        );
      })
      .catch((error) => {
        setLoading(false);
        NotificationManager.warning(
          error.message,
          "Error!",
          3000,
          null,
          null,
          ""
        );
      });
  };

  const initialValues = {
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    companyName: user.company_name,
    jobTitle: user.job_title,
    country: user.country,
    role: user.role,
    phoneNumber: user.phone_number,
  };

  return (
    <>
      <Row>
        <Colxx sm={{ size: 8, offset: 2 }} className="mb-4">
          <Card>
            <CardBody>
              <Formik
                initialValues={initialValues}
                onSubmit={onUserRegister}
                validationSchema={Yup.object().shape({
                  firstName: Yup.string().required("Full Name is required"),
                  lastName: Yup.string().required("Last Name is required"),
                  jobTitle: Yup.string().required("Job title is required"),
                  companyName: Yup.string().required(
                    "Company name is required"
                  ),
                  email: Yup.string()
                    .email("Email is invalid")
                    .required("Email is required"),
                  country: Yup.string().required("Address is required"),
                  phoneNumber: Yup.string().matches(
                    phoneRegExp,
                    "Phone number is not valid"
                  ),
                })}
              >
                {({ errors, touched }) => (
                  <Form>
                    <FormGroup row>
                      <Colxx sm={{ size: 4, offset: 4 }}>
                        <FormGroup className="form-group has-float-label mb-4 text-center">
                          <div className="d-flex justify-content-center p-1">
                            <AvatarUploader
                              label="Upload Profile Pircutre or Company Logo"
                              handleChange={(data) => setAvatar(data)}
                              orgData={user.avatar ? user.avatar : '/assets/img/profile_pic.png'}
                            />
                          </div>
                        </FormGroup>
                      </Colxx>
                      <Colxx sm={6}>
                        <FormGroup className="form-group has-float-label  mb-4">
                          <Label>
                            <IntlMessages id="user.firstname" />
                          </Label>
                          <Field
                            className="form-control"
                            type="text"
                            name="firstName"
                          />
                          {errors.firstName && touched.firstName && (
                            <div className="invalid-feedback d-block">
                              {errors.firstName}
                            </div>
                          )}
                        </FormGroup>
                      </Colxx>

                      <Colxx sm={6}>
                        <FormGroup className="form-group has-float-label  mb-4">
                          <Label>
                            <IntlMessages id="user.lastname" />
                          </Label>
                          <Field
                            className="form-control"
                            type="text"
                            name="lastName"
                          />
                          {errors.lastName && touched.lastName && (
                            <div className="invalid-feedback d-block">
                              {errors.lastName}
                            </div>
                          )}
                        </FormGroup>
                      </Colxx>

                      <Colxx sm={12}>
                        <FormGroup className="form-group has-float-label  mb-4">
                          <Label>
                            <IntlMessages id="user.phone_number" />
                          </Label>
                          <Field className="form-control" name="phoneNumber" />
                          {errors.phoneNumber && touched.phoneNumber && (
                            <div className="invalid-feedback d-block">
                              {errors.phoneNumber}
                            </div>
                          )}
                        </FormGroup>
                      </Colxx>

                      <Colxx sm={6}>
                        <FormGroup className="form-group has-float-label  mb-4">
                          <Label>
                            <IntlMessages id="user.email" />
                          </Label>
                          <Field className="form-control" name="email" />
                          {errors.email && touched.email && (
                            <div className="invalid-feedback d-block">
                              {errors.email}
                            </div>
                          )}
                        </FormGroup>
                      </Colxx>

                      <Colxx sm={6}>
                        <FormGroup className="form-group has-float-label  mb-4">
                          <Label>
                            <IntlMessages
                              id="user.companyname"
                            />
                          </Label>
                          <Field
                            className="form-control"
                            type="text"
                            name="companyName"
                          />
                          {errors.companyName && touched.companyName && (
                            <div className="invalid-feedback d-block">
                              {errors.companyName}
                            </div>
                          )}
                        </FormGroup>
                      </Colxx>
                      <Colxx sm={6}>
                        <FormGroup className="form-group has-float-label  mb-4">
                          <Label>
                            <IntlMessages
                              id="user.job-title"
                            />
                          </Label>
                          <Field
                            className="form-control"
                            type="text"
                            name="jobTitle"
                          />
                          {errors.jobTitle && touched.jobTitle && (
                            <div className="invalid-feedback d-block">
                              {errors.jobTitle}
                            </div>
                          )}
                        </FormGroup>
                      </Colxx>
                      <Colxx sm={6}>
                        <FormGroup className="form-group has-float-label  mb-4">
                          <Label>
                            <IntlMessages
                              id="user.country"
                            />
                          </Label>
                          <Field
                            name="country"
                            render={(props) => {
                              const { field } = props;
                              const { errors, touched } = props.form;
                              const hasError =
                                errors["country"] && touched["country"]
                                  ? "hasError"
                                  : "";
                              const defaultOption = (
                                <option key="default" value="Please Select">
                                  Please Select
                                </option>
                              );
                              const options = countries.map((i, index) => (
                                <option key={index} value={i.value}>
                                  {" "}
                                  {i.label}{" "}
                                </option>
                              ));
                              const selectOptions = [defaultOption, ...options];
                              return (
                                <select
                                  className="form-control"
                                  value={field.value}
                                  {...field}
                                  id={hasError}
                                >
                                  {selectOptions}
                                </select>
                              );
                            }}
                          />
                          {errors.country && touched.country && (
                            <div className="invalid-feedback d-block">
                              {errors.country}
                            </div>
                          )}
                        </FormGroup>
                      </Colxx>
                    </FormGroup>
                    <div className="d-flex justify-content-end align-items-center">
                      <Button
                        color="primary"
                        className={`btn-shadow btn-multiple-state ${
                          loading ? 'show-spinner' : ''
                        }`}
                        size="lg"
                      >
                        <span className="spinner d-inline-block">
                          <span className="bounce1" />
                          <span className="bounce2" />
                          <span className="bounce3" />
                        </span>
                        <span className="label">
                          <IntlMessages id="users.save" />
                        </span>
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};

export default connect(null, {
  receiveAuthUserAction: receiveAuthUser
})(CustomerSettings);
