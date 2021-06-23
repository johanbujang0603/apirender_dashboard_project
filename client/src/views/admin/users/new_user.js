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
import { NotificationManager } from '../../../components/common/react-notifications';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import IntlMessages from '../../../helpers/IntlMessages';
import { registerUser } from '../../../redux/actions';
import Avatar from 'react-avatar-edit'

const NewUser = ({ intl, match, history }) => {
  // const { messages } = intl;
  const [email] = useState('');
  const [password] = useState('');
  const [confirmPassword] = useState('');
  const [firstName] = useState('');
  const [lastName] = useState('');
  const [role] = useState('admin');
  const [loading, setLoading] = useState(false);
  const [src, setSrc] = useState(null);
  const [preview, setPreview] = useState(null);

  const onCrop = (preview) => {
    setPreview(preview);
  }

  const onClose = () => {
    setPreview(null);
  }

  const onBeforeFileLoad = (elem) => {
    if(elem.target.files[0].size > 716800){
      alert("File is too big!");
      elem.target.value = "";
    };
  }

  const onUserRegister = (values) => {
    setLoading(true);
    const formData = {...values, avatar: preview};
    axios.post('/api/users/register', formData)
    .then((res) => {
      return res.data
    })
    .then((data) => {
      setLoading(false);
      NotificationManager.success('The user has been registered successfully', "Succcess!", 3000, null, null, '');
      history.push('/admin/users/list');
    })
    .catch((error) => {
      setLoading(false);
      NotificationManager.success(error.message, "Error!", 3000, null, null, '');
    });
  }

  const initialValues = { firstName, lastName, email, confirmPassword, password, role };

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <h1>
            <IntlMessages id="menu.new-user" />
          </h1>
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx sm="12" md="6">
          <Card>
            <CardBody>
              <div
                style={{display: "flex", justifyContent: "center"}}
              >
              <Avatar
                width={400}
                height={400}
                onCrop={onCrop}
                onClose={onClose}
                onBeforeFileLoad={onBeforeFileLoad}
                src={src}
              />
              </div>
            </CardBody>
          </Card>
        </Colxx>
        <Colxx sm="12" md="6" className="mb-4">
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
                      .min(6, 'Password must be at least 6 characters')
                      .required('Password is required'),
                  confirmPassword: Yup.string()
                      .oneOf([Yup.ref('password'), null], 'Passwords must match')
                      .required('Confirm Password is required'),
                })}
                >
                {({ errors, touched }) => (
                  <Form>
                    <FormGroup className="form-group has-float-label mb-4 text-center">
                      {
                        preview ? (
                          <img src={preview} alt="avatar" />
                        ) : (
                          <img src='/assets/img/avatar.png' alt="avatar" />
                        )
                      }
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
                          <IntlMessages id="user.register-button" />
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
// export default injectIntl(NewUser);
const mapStateToProps = ({ authUser }) => {
  const { user, loading, error } = authUser;
  return { user, loading, error };
};

export default connect(null, {
  registerUserAction: registerUser,
})(NewUser);
