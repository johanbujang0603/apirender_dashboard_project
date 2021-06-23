import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { injectIntl } from 'react-intl';
import {
  Row,
  Card,
  CardTitle,
  FormGroup,
  Label,
  Button,
  CardBody,
} from 'reactstrap';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { NotificationManager } from '../../components/common/react-notifications';
import { Colxx, Separator } from '../../components/common/CustomBootstrap';
import IntlMessages from '../../helpers/IntlMessages';
import { AvatarUploader } from '../../components/common/AvatarUploader';

const AdminDetail = ({ history, user }) => {
  // const { messages } = intl;
  const [email] = useState(user.email);
  const [password] = useState('');
  const [confirmPassword] = useState('');
  const [firstName] = useState(user.first_name);
  const [lastName] = useState(user.last_name);
  const [role] = useState('admin');
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState(null);


  const onUserRegister = (values) => {
    setLoading(true);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    const formData = new FormData();
    formData.append('avatar', avatar);
    formData.append('id', user._id);
    formData.append('first_name', values.firstName);
    formData.append('last_name', values.lastName);
    formData.append('email', values.email);
    formData.append('password', values.password);
    formData.append('is_new', avatar ? true : false);
    axios.post('/api/users/update-admin', formData, config)
    .then((res) => {
      return res.data
    })
    .then((data) => {
      setLoading(false);
      NotificationManager.success('The user has been updated successfully', "Succcess!", 3000, null, null, '');
      history.push('/admin/users/list');
    })
    .catch((error) => {
      setLoading(false);
      NotificationManager.success(error.message, "Error!", 3000, null, null, '');
    });
  }

  const initialValues = {email, firstName, lastName, password, confirmPassword};

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
                  firstName: Yup.string()
                      .required('First Name is required'),
                  lastName: Yup.string()
                      .required('Last Name is required'),
                  email: Yup.string()
                      .email('Email is invalid')
                      .required('Email is required'),
                  password: Yup.string()
                      .min(6, 'Password must be at least 6 characters'),
                  confirmPassword: Yup.string()
                      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
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
                              orgData={user.avatar}/>
                          </div>
                        </FormGroup>
                      </Colxx>
                    </FormGroup>
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
                    <FormGroup className="form-group has-float-label  mb-4">
                      <Label>
                        <IntlMessages id="user.email" />
                      </Label>
                      <Field
                        className="form-control"
                        name="email"
                      />
                      {errors.email && touched.email && (
                        <div className="invalid-feedback d-block">
                          {errors.email}
                        </div>
                      )}
                    </FormGroup>

                    <FormGroup className="form-group has-float-label  mb-4">
                      <Label>
                        <IntlMessages id="user.password" />
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
                        <IntlMessages id="user.confirm-password" />
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
    )
}

export default connect(null, {
})(AdminDetail);
