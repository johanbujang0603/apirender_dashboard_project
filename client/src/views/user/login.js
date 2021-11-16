import React, { useState, useEffect } from "react";
import { Row, Card, CardTitle, Label, FormGroup, Button } from "reactstrap";
import { NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { Formik, Form, Field } from "formik";
import { NotificationManager } from "../../components/common/react-notifications";

import { loginUser } from "../../redux/actions";
import { Colxx } from "../../components/common/CustomBootstrap";
import IntlMessages from "../../helpers/IntlMessages";
import { validatePassword, validateEmail } from "../../helpers/Validation";

const Login = ({
  history,
  loading,
  loginError,
  isAuthenticated,
  loginUserAction,
  message
}) => {
  const [email] = useState("");
  const [password] = useState("");

  useEffect(() => {
    console.log(message)
  }, [message])

  useEffect(() => {
    if (loginError) {
      NotificationManager.warning(
        loginError,
        "Login Error",
        3000,
        null,
        null,
        ""
      );
    }
  }, [loginError]);

  const onUserLogin = (values) => {
    if (!loading) {
      if (values.email !== "" && values.password !== "") {
        loginUserAction(values, history);
      }
    }
  };

  const initialValues = { email, password };
  if (isAuthenticated) return <Redirect to="/" />;
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
              <IntlMessages id="user.login-title" />
            </CardTitle>

            { message && (
              <p className="text-small text-primary mb-5">{message}</p>
            ) }

            <Formik initialValues={initialValues} onSubmit={onUserLogin}>
              {({ errors, touched }) => (
                <Form className="av-tooltip tooltip-label-bottom">
                  <FormGroup className="form-group has-float-label">
                    <Label>
                      <IntlMessages id="user.email" />
                    </Label>
                    <Field
                      className="form-control"
                      name="email"
                      validate={validateEmail}
                    />
                    {errors.email && touched.email && (
                      <div className="invalid-feedback d-block">
                        {errors.email}
                      </div>
                    )}
                  </FormGroup>
                  <FormGroup className="form-group has-float-label">
                    <Label>
                      <IntlMessages id="user.password" />
                    </Label>
                    <Field
                      className="form-control"
                      type="password"
                      name="password"
                      validate={validatePassword}
                    />
                    {errors.password && touched.password && (
                      <div className="invalid-feedback d-block">
                        {errors.password}
                      </div>
                    )}
                  </FormGroup>
                  <div className="d-flex justify-content-between align-items-center">
                    <NavLink to="/user/register">
                      You don't have an account? Sign up now.
                    </NavLink>
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
                        <IntlMessages id="user.login-button" />
                      </span>
                    </Button>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <NavLink to="/user/forgot-password">
                      Foreget password?
                    </NavLink>
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
  const { loading, loginError, isAuthenticated, message } = authUser;
  return { loading, loginError, isAuthenticated, message };
};

export default connect(mapStateToProps, {
  loginUserAction: loginUser,
})(Login);
