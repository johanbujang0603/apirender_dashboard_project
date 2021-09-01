import React, { useState } from "react";
import axios from "axios";
import {
  Row,
  Card,
  FormGroup,
  Label,
  Button,
  CardBody,
  CardTitle
} from "reactstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Colxx } from "../../components/common/CustomBootstrap";
import IntlMessages from "../../helpers/IntlMessages";
import { NotificationManager } from "../../components/common/react-notifications";

const ChangePassword = ({ history, user }) => {
  const [loading, setLoading] = useState(false);
  const handleChangePassword = (values) => {
    setLoading(true);
    const formData = { ...values };
    formData.userId = user._id;
    axios.post(
      "/api/users/change-password", formData
    ).then((res) => {
      return res.data
    }).then((data) => {
      setLoading(false);
      NotificationManager.success("The password has been changed successfully", "Succcess!");
    }).catch((error) => {
      setLoading(false);
      NotificationManager.warning(error.message, "Error!");
    });
  }
  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  return (
    <>
      <Row>
        <Colxx sm={{ size: 8, offset: 2 }} className="mb-4">
          <Card>
            <CardTitle className="pt-4 pl-4">
              <span>
                Change Password
              </span>
            </CardTitle>
            <CardBody>
              <Formik
                initialValues={initialValues}
                onSubmit={handleChangePassword}
                validationSchema={Yup.object().shape({
                  password: Yup.string()
                    .min(6, "Password must be at least 6 characters")
                    .required("Password is required"),
                  confirmPassword: Yup.string()
                    .oneOf([Yup.ref("password"), null], "Passwords must match")
                    .required("Confirm Password is required"),
                })}
              >
                {({ errors, touched }) => (
                  <Form>
                    <FormGroup row>
                      <Colxx sm={12}>
                        <FormGroup className="form-group has-float-label  mb-4">
                          <Label>
                            <IntlMessages
                              id="user.new-password"
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

export default ChangePassword;
