import React from 'react';
import { Row, Card, CardTitle, Label, FormGroup, Button } from 'reactstrap';
import { NavLink, useParams } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import { connect } from 'react-redux';
import axios from 'axios';
import { Colxx } from '../../components/common/CustomBootstrap';
import IntlMessages from '../../helpers/IntlMessages';
import { NotificationManager } from '../../components/common/react-notifications';


const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const PasswordReset = ({
  history,
  loading
}) => {
  const params = useParams();

  const onPasswordReset = (values) => {
    axios.post(`/api/password-reset/${params.userId}/${params.token}`, { password: values.password })
    .then((res) => {
      NotificationManager.success(
        res.data,
        'Forgot Password Success',
        3000,
        null,
        null,
        ''
      );
      history.push('/user/login');
    })
    .catch((err) => {
      NotificationManager.warning(
        err.response.data,
        'Error',
        3000,
        null,
        null,
        ''
      );
    })
  };

  const initialValues = { password: '', confirmPassword: '' };

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto my-auto">
        <Card className="auth-card">
          <div className="position-relative image-side ">
          </div>
          <div className="form-side">
            <NavLink to="/" className="white">
              <span className="logo-single" />
            </NavLink>
            <CardTitle className="mb-4">
              Password Reset
            </CardTitle>

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onPasswordReset}>
              {({ errors, touched }) => (
                <Form className="av-tooltip tooltip-label-bottom">
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
                  <div className="d-flex justify-content-between align-items-center">
                    <NavLink to="/user/login">
                      Sign in ?
                    </NavLink>
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
                        <IntlMessages id="user.reset-password-button" />
                      </span>
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

export default connect(null, {})(PasswordReset);
