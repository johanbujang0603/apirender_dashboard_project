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
import {countries} from '../../constants/countries';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const CustomerDetail = ({ history, user }) => {
  // const { messages } = intl;
  const [email] = useState(user.email);
  const [password] = useState('');
  const [confirmPassword] = useState('');
  const [firstName] = useState(user.first_name);
  const [lastName] = useState(user.last_name);
  const [jobTitle] = useState(user.job_title);
  const [phoneNumber] = useState(user.phone_number)
  const [companyName] = useState(user.company_name);
  const [country] = useState(user.country);
  const [role] = useState('customer');
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const onUserRegister = (values) => {
    setLoading(true);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    let formData = new FormData();
    formData.append('avatar', avatar);
    formData.append('id', user._id);
    formData.append('first_name', values.firstName);
    formData.append('last_name', values.lastName);
    formData.append('phone_number', values.phoneNumber);
    formData.append('email', values.email);
    formData.append('password', values.password);
    formData.append('job_title', values.jobTitle);
    formData.append('company_name', values.companyName);
    formData.append('country', values.country);
    formData.append('is_new', avatar ? true : false);
    axios.post('/api/users/update-customer', formData, config)
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

  const initialValues = { firstName, lastName, email, confirmPassword, password, companyName, jobTitle, country, role, phoneNumber };

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
                      .required('Full Name is required'),
                  lastName: Yup.string()
                      .required('Last Name is required'),
                  jobTitle: Yup.string()
                      .required('Job title is required'),
                  companyName: Yup.string()
                      .required('Company name is required'),
                  email: Yup.string()
                    .email('Email is invalid')
                    .required('Email is required'),
                  emailPreference: Yup.string()
                    .email('Email Preference is invalid')
                    .required('Email Preference is required'),
                  password: Yup.string()
                      .min(6, 'Password must be at least 6 characters'),
                  confirmPassword: Yup.string()
                      .oneOf([Yup.ref('password')], 'Passwords must match'),
                  country: Yup.string()
                      .required('Address is required'),
                  phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
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
                          <Field
                            className="form-control"
                            name="phoneNumber"
                          />
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
                      </Colxx>

                      <Colxx sm={12}>
                        <FormGroup className="form-group has-float-label  mb-4">
                          <Label>
                            <IntlMessages id="user.password" defaultValue={password} value={password} />
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
                            <IntlMessages id="user.confirm-password" defaultValue={confirmPassword} value={confirmPassword} />
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
                            <IntlMessages id="user.companyname" defaultValue={companyName} value={companyName} />
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
                            <IntlMessages id="user.job-title" defaultValue={jobTitle} value={jobTitle} />
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
                            <IntlMessages id="user.country" defaultValue={country} value={country} />
                          </Label>
                          {/* <Field name='country' component={Select} options={selectData} /> */}
                          <Field
                            name='country'
                            render={(props) => {
                              const { field } = props;
                              const { errors, touched } = props.form;
                              const hasError = errors['country'] && touched['country'] ? 'hasError' : '';
                              const defaultOption = <option key='default' value='Please Select'>Please Select</option>;
                              const options = countries.map((i, index) => <option key={index} value={i.value}> {i.label} </option> );
                              const selectOptions = [defaultOption, ...options];
                              return (
                                  <select className='form-control' value={field.value} {...field} id={hasError}>
                                    {
                                      selectOptions
                                    }
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
                        type="submit"
                        color="primary"
                        className="btn-shadow"
                        size="lg"
                      >
                        <IntlMessages id="users.save" />
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
})(CustomerDetail);
