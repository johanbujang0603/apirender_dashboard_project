import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Table,
  Row,
  InputGroup,
  InputGroupAddon,
  Input,
  FormGroup,
  Label,
  CustomInput,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import IntlMessages from "../../helpers/IntlMessages";
import { Colxx } from "../../components/common/CustomBootstrap";

const deliveryOptions = [
  {
    name: "Fast Track (4 Business Days)",
    value: "PS_DELIVERY_FAST_TRACK",
    price: 20.0,
    currency: "AUD",
  },
  {
    name: "Priority (5-7 Business Days)",
    value: "PS_DELIVERY_PRIORITY",
    price: 10.0,
    currency: "AUD",
  },
  {
    name: "Standard (9-11 Business Days)",
    value: "PS_DELIVERY_STANDARD",
    price: 8.0,
    currency: "AUD",
  },
];
const OrderSummary = ({ setDeliveryOption, services, project, handleUpdateService, changeDeliveryAddr }) => {
  const [orders, setOrders] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [deliveryOption, updateDeliveryOption] = useState(null);

  useEffect(() => {
    let newOrders = [];
    let orderTotal = 0;
    services.forEach((service) => {
      if (service.quantity !== 0 && service.total_price !== 0) {
        orderTotal += parseFloat(service.total_price);
        let orders = JSON.parse(service.orders);
        let isPresent = orders.some(function (el) {
          return el.depth === 1;
        });
        if (isPresent === false) {
          orders.unshift({ name: service.name, depth: 1 });
        }
        orders.forEach((order) => {
          newOrders.push({ service: service, order: order });
        });
      }
    });
    setTotalPrice(orderTotal);
    setOrders(newOrders);
  }, [services, project]);

  const handleRemoveOrder = (order) => {
    let service = order.service;
    let serviceOrders = JSON.parse(service.orders);

    let quantity = 0;
    let total_price = 0;

    if (order.order.depth === 1) {
      service.orders = "";
      service.quantity = 0;
      service.total_price = 0;
    } else {
      const newOrders = serviceOrders.filter(function (e) {
        return e.value !== order.order.value;
      });
      newOrders.forEach((item) => {
        quantity += item.quantity;
        total_price += item.totalPrice;
      });
      service.quantity = quantity;
      service.total_price = total_price;
      service.orders = JSON.stringify(newOrders);
    }
    handleUpdateService(service);
  };

  const handleChangeRadio = (e, price) => {
    setDeliveryOption(e.target.value, price);
    updateDeliveryOption({ option: e.target.value, price: price });
  };

  const handleAddressChange = (e) => {
    changeDeliveryAddr(e);
  }

  return (
    <>
      <Card className="mb-5 invoice-contents">
        <CardBody className="d-flex flex-column justify-content-between">
          <div className="d-flex flex-column">
            <div className="d-flex flex-row justify-content-between pt-2 pb-2">
              <div className="d-flex align-self-center">
                <img
                  src="/assets/img/logo-apirender.png"
                  width="200"
                  style={{objectFit: 'contain'}}
                  alt="Logo"
                />
              </div>
              <div className="d-flex w-30 text-right align-self-center">
                <p className="text-small text-semi-muted mb-0 w-100">
                  APIrender.com Pty Ltd
                  <br />
                  ABN 74 636 488 027
                  <br />
                  Hamilton, Queensland 4007
                  <br />
                  Australia
                </p>
              </div>
            </div>
            <div className="d-flex">
              <span className="text-large text-primary">
                {project.project_name}
              </span>
            </div>
            <div className="border-bottom pt-4 mb-5" />

            <Table borderless>
              <thead>
                <tr>
                  <th className="text-muted text-small mb-2 font-weight-medium">Item Name</th>
                  <th className="text-muted text-small mb-2 font-weight-medium">Count</th>
                  <th className="text-right text-muted text-small mb-2 font-weight-medium">
                    Price
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => {
                  return (
                    <tr key={index}>
                      {order.order.depth === 1 && (
                        <>
                          <td>{order.order.name && order.order.name}</td>
                          <td>
                            {order.order.quantity && order.order.quantity}
                          </td>
                          <td className="text-right">
                            {order.order.totalPrice &&
                              `AU$${order.order.totalPrice}`}
                          </td>
                          <td>
                            {
                              order.order.price && order.order.quantity && (
                                <a
                                  href="#!"
                                  onClick={() => {
                                    handleRemoveOrder(order);
                                  }}
                                >
                                  <i className="simple-icon-close" />
                                </a>
                              )
                            }
                          </td>
                        </>
                      )}
                      {order.order.depth !== 1 && (
                        <>
                          <td className="pl-4 padding-v-25">
                            - {order.order.name}
                            <span className="pl-2 text-primary">
                              {order.order.depth === 3
                                ? `${order.order.parent}`
                                : ""}
                            </span>
                          </td>
                          <td className="padding-v-25">
                            {order.order.quantity}
                          </td>
                          <td className="text-right padding-v-25">
                            {order.order.totalPrice === 0
                              ? "Free"
                              : `AU$ ${order.order.totalPrice}`}
                          </td>
                          <td className="padding-v-25">
                            <a
                              href="#!"
                              onClick={() => {
                                handleRemoveOrder(order);
                              }}
                            >
                              <i className="simple-icon-close" />
                            </a>
                          </td>
                        </>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
          <FormGroup>
            <Label className="text-primary font-weight-bolder">Coupon</Label>
            <Input type="text" name="coupon" placeholder="Enter coupon" />
          </FormGroup>
          {
            project.category === "PRINTING_SERVICES" && (
              <>
                <p className="text-muted">
                  We provide affordable delivery to the following countries through
                  our network of printing partnerships: Australia, Austria, Belgium,
                  Brazil, Canada, Cyprus, the Czech Republic, Denmark, Finland,
                  France, French Guiana, French Polynesia, Germany, Gibraltar, Greece,
                  Greenland, Guadeloupe, Guam, Hong Kong, Iceland, Ireland, Italy,
                  Liechtenstein, Luxembourg, Malaysia, Malta, Martinique, Mexico,
                  Monaco, the Netherlands, New Caledonia, New Zealand, Norway, Poland,
                  Portugal, Puerto Rico, Réunion, Singapore, Spain, Sweden,
                  Switzerland, the United Kingdom, the United States of America and
                  U.S. Virgin Islands.
                </p>
                <Row className="mb-4">
                  <Colxx sm="12" lg="12">
                    <Label className="text-primary mb-4 font-weight-bolder">Delivery Options</Label>
                  </Colxx>
                  {deliveryOptions &&
                    deliveryOptions.map((option, index) => {
                      return (
                        <Colxx sm="12" lg="12" md="12" key={index}>
                          <Card className="pt-3 pb-3 pl-3 pr-3">
                            <div
                              className="d-flex flex-grow-1 min-width-zero"
                              style={{
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                            >
                              <FormGroup check>
                                <Label check>
                                  <CustomInput
                                    type="radio"
                                    name={`DELIVERY_RADIO`}
                                    id={`RADIO_${option.value}`}
                                    value={option.name}
                                    label={option.name}
                                    onChange={(e) => handleChangeRadio(e, option.price)}
                                  />
                                </Label>
                              </FormGroup>
                              <div className="option-quantity-input">
                                {option.price !== 0 && (
                                  <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                      $
                                    </InputGroupAddon>
                                    <Input
                                      value={
                                        option.price === 0 ? "Free" : option.price
                                      }
                                      readOnly
                                    />
                                  </InputGroup>
                                )}
                              </div>
                            </div>
                          </Card>
                        </Colxx>
                      );
                    })}
                </Row>
                <FormGroup>
                  <Label className="text-primary font-weight-bolder">Delivery Address</Label>
                </FormGroup>
                <FormGroup row>
                  <Colxx sm="6">
                    <Label>
                      Street Name
                    </Label>
                    <Input
                      onChange={handleAddressChange}
                      type="text"
                      name="streetName"
                      id="streetName"
                    />
                  </Colxx>
                  <Colxx sm="6">
                    <Label>
                      Street Number
                    </Label>
                    <Input
                      onChange={handleAddressChange}
                      type="text"
                      name="streetNumber"
                      id="streetNumber"
                    />
                  </Colxx>
                </FormGroup>
                <FormGroup row>
                  <Colxx sm="6">
                    <Label>
                      Unit Number (if applicable)
                    </Label>
                    <Input
                      onChange={handleAddressChange}
                      type="text"
                      name="unitNumber"
                      id="unitNumber"
                    />
                  </Colxx>
                  <Colxx sm="6">
                    <Label>
                      Suburb
                    </Label>
                    <Input
                      onChange={handleAddressChange}
                      type="text"
                      name="suburb"
                      id="suburb"
                    />
                  </Colxx>
                </FormGroup>
                <FormGroup row>
                  <Colxx sm="6">
                    <Label>
                      Zip Code
                    </Label>
                    <Input
                      onChange={handleAddressChange}
                      type="text"
                      name="zipCode"
                      id="zipCode"
                    />
                  </Colxx>
                  <Colxx sm="6">
                    <Label>
                      Country
                    </Label>
                    <Input
                      onChange={handleAddressChange}
                      type="text"
                      name="country"
                      id="country"
                    />
                  </Colxx>
                </FormGroup>
              </>
            )
          }
          <div className="d-flex flex-column">
            <div className="border-bottom pt-3 mb-5" />
            <Table borderless className="d-flex justify-content-end">
              <tbody>
                <tr className="font-weight-bold">
                  <td className="text-semi-muted">Total :</td>
                  <td className="text-right">AU$ {(totalPrice + (deliveryOption && deliveryOption.price ? deliveryOption.price : 0)).toFixed(2)}</td>
                </tr>
              </tbody>
            </Table>
            <div className="border-bottom pt-3 mb-5" />
          </div>
          <p>
            <NavLink
              exact={true}
              to={`/app/projects/add-service/${project._id}`}
              className="top-right-button btn btn-primary btn-lg"
            >
              <IntlMessages id="projects.add-more-services" />
            </NavLink>
          </p>
        </CardBody>
      </Card>
    </>
  );
};

export default OrderSummary;
