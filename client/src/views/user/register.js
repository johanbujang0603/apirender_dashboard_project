import React, { useState, useEffect } from "react";
import { Row, Card, CardTitle, FormGroup, Label, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions";

import IntlMessages from "../../helpers/IntlMessages";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { NotificationManager } from "../../components/common/react-notifications";
import { Colxx } from "../../components/common/CustomBootstrap";
import { countries } from "../../constants/countries";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const Register = ({ history, loading, registerError, registerUserAction }) => {
  const [email] = useState("");
  const [password] = useState("");
  const [confirmPassword] = useState("");
  const [firstName] = useState("");
  const [lastName] = useState("");
  const [jobTitle] = useState("");
  const [phoneNumber] = useState("");
  const [companyName] = useState("");
  const [country] = useState("");
  const [role] = useState("customer");

  useEffect(() => {
    if (registerError) {
      NotificationManager.warning(
        registerError,
        "Register Error",
        3000,
        null,
        null,
        ""
      );
    }
  }, [registerError]);

  const onUserRegister = (values) => {
    registerUserAction(values, history);
  };

  const initialValues = {
    firstName,
    lastName,
    email,
    confirmPassword,
    password,
    companyName,
    jobTitle,
    country,
    role,
    phoneNumber,
  };

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto my-auto">
        <Card className="auth-card">
          <div className="position-relative image-side "></div>
          <div className="form-side">
            <NavLink to="/" className="white">
              <span className="logo-single" />
            </NavLink>
            <CardTitle className="mb-4">
              <IntlMessages id="user.register" />
            </CardTitle>
            <Formik
              initialValues={initialValues}
              onSubmit={onUserRegister}
              validationSchema={Yup.object().shape({
                firstName: Yup.string().required("Full Name is required"),
                lastName: Yup.string().required("Last Name is required"),
                jobTitle: Yup.string().required("Job title is required"),
                companyName: Yup.string().required("Company name is required"),
                email: Yup.string()
                  .email("Email is invalid")
                  .required("Email is required"),
                password: Yup.string()
                  .min(6, "Password must be at least 6 characters")
                  .required("Password is required"),
                confirmPassword: Yup.string()
                  .oneOf([Yup.ref("password"), null], "Passwords must match")
                  .required("Confirm Password is required"),
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

                    <Colxx sm={12}>
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

                    <Colxx sm={12}>
                      <FormGroup className="form-group has-float-label  mb-4">
                        <Label>
                          <IntlMessages
                            id="user.password"
                          />
                        </Label>
                        <Field
                          className="form-control"
                          type="password"
                          name="password"
                        />
                        {errors.password && touched.password && (
                          <div className="invalid-feedback d-block">
                            {errors.password}
                          </div>
                        )}
                      </FormGroup>
                    </Colxx>

                    <Colxx sm={12}>
                      <FormGroup className="form-group has-float-label  mb-4">
                        <Label>
                          <IntlMessages
                            id="user.confirm-password"
                          />
                        </Label>
                        <Field
                          className="form-control"
                          type="password"
                          name="confirmPassword"
                        />
                        {errors.confirmPassword && touched.confirmPassword && (
                          <div className="invalid-feedback d-block">
                            {errors.confirmPassword}
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
                    <Colxx sm={12}>
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
                            const options = countries.map((i, keyIndex) => (
                              <option key={keyIndex} value={i.value}>
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
                  <div className="d-flex justify-content-between align-items-center">
                    <NavLink to="/user/login">
                      You have already an account? Sign in now.
                    </NavLink>
                    <Button color="primary" className="btn-shadow" size="lg">
                      <IntlMessages id="user.register-button" />
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Card>
      </Colxx>
    </Row>
  );
};
const mapStateToProps = ({ authUser }) => {
  const { user, loading, registerError } = authUser;
  return { user, loading, registerError };
};

export default connect(mapStateToProps, {
  registerUserAction: registerUser,
})(Register);
