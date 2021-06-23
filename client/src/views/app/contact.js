/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */
import React from 'react';
import { Row, Card, Button, CardBody, CardTitle, CardText, Form, FormGroup, Input } from 'reactstrap';
import Breadcrumb from '../../containers/navs/Breadcrumb';
import {
  Separator,
  Colxx,
} from '../../components/common/CustomBootstrap';

const Contact = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.contact-us" match={match} />
          <Separator className="mb-5" />
        </Colxx>

        <Colxx xxs="12" className="mb-4">
          <Row>
            <Colxx xxs="6">
              <Card>
                <CardBody>
                  <CardTitle>
                    Contact Info
                  </CardTitle>
                  <CardText>
                    <p>General Enquires: hello@propertyrender.com</p>
                    <p>Sales Enquires: sales@propertyrender.com</p>
                    <p>Orders: orders@propertyrender.com</p>
                    <p>Managing Director: Steven@propertyrender.com</p>
                  </CardText>
                </CardBody>
              </Card>
            </Colxx>
            <Colxx xxs="6">
              <Card>
                <CardBody>
                  <CardTitle>
                    Send a Message
                  </CardTitle>
                  <Form>
                    <FormGroup>
                      <Input className='form-control' name='name' placeholder='Name' type='text' />
                    </FormGroup>
                    <FormGroup>
                      <Input className='form-control' name='email' placeholder='E-mail' type='email' />
                    </FormGroup>
                    <FormGroup>
                      <Input className='form-control' name='phone' placeholder='Phone Number' type='text' />
                    </FormGroup>
                    <FormGroup>
                      <Input className='form-control' name='message' placeholder='Your Message Here' type='textarea' />
                    </FormGroup>
                    <FormGroup>
                      <Button type='submit' color='danger'>Submit</Button>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </Colxx>
          </Row>
        </Colxx>
      </Row>
    </>
  );
};

export default Contact;
