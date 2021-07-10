import React, { useState, useEffect } from "react";
import {
  Row,
  Card,
  CardBody,
  CardSubtitle,
  CardImg,
  Modal,
  ModalBody,
  Button,
  Input,
  Badge,
} from "reactstrap";
import { NavLink, useParams, useHistory } from "react-router-dom";
import { Colxx } from "../../components/common/CustomBootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import axios from 'axios';
import IntlMessages from "../../helpers/IntlMessages";

import { options } from "../../constants/projectValues";
import ServiceOption from "../../components/services/ServiceOption";
import SelectionOption from "../../components/services/SelectionOption";
import MultipleSelectOption from "../../components/services/MultipleSelectOption";

const ServiceWidget = ({ item, index, addToCartAction, currentItems }) => {
  const params = useParams();
  const history = useHistory();
  const [serviceModal, setSerivceModal] = useState(false);
  const [serviceQty, setServiceQty] = useState(0);
  const [orderItems, setOrderItems] = useState([]);
  const [widgetPrice, setWidgetPrice] = useState(0);

  useEffect(() => {
    const orders = [];
    orders.push(...currentItems.orders);
    let obj = orders.find((o) => o.value === item.value);
    if (obj !== undefined) setServiceQty(obj.quantity);
    setWidgetPrice(orders.reduce((a, b) => a + (b["totalPrice"] || 0), 0));
    setOrderItems(orders);
  }, []);

  const increament = () => {
    let quantity = serviceQty + 1;
    if (quantity === 0) {
      setOrderItems([]);
      setWidgetPrice(0);
      return;
    }
    let newItem = {
      name: item.name,
      price: item.price,
      value: item.value,
      quantity: quantity,
      depth: 1,
      totalPrice: parseFloat(item.price) * quantity,
    };
    setServiceQty(quantity);
    checkServices(newItem);
  };
  const decrement = () => {
    let quantity = serviceQty;
    quantity = quantity > 0 ? quantity - 1 : 0;
    if (quantity === 0) {
      setOrderItems([]);
      setWidgetPrice(0);
      setServiceQty(0);
      return;
    }
    let newItem = {
      name: item.name,
      price: item.price,
      value: item.value,
      quantity: quantity,
      depth: 1,
      totalPrice: parseFloat(item.price) * quantity,
    };
    setServiceQty(quantity);
    checkServices(newItem);
  };

  const checkServices = (item) => {
    let items = [];
    orderItems.map((o) => items.push(o));
    // check item if there is same service
    let searchItem = items.find((o, i) => {
      if (o.value === item.value) {
        // if there is same sub service
        if (item.type === "YES_OR_NO") {
          items.splice(i, 1);
        }
        else if (item.type === "RADIO") {
          items[i] = item;
        }
        else if (item.type === "CHECKBOX") {
          items.splice(i, 1);
        }
        else {
          if (item.quantity !== 0)
            // if quantity is not zero, then replace with new item
            items[i] = item;
          // if quantity is zero, remove item from array
          else items.splice(i, 1);
        }
        return true;
      }
    });
    if (searchItem === undefined && item.quantity !== 0)
    {
      items.push(item); // then push item into array
    }
    const sum = items.reduce((a, b) => a + (b["totalPrice"] || 0), 0);
    setWidgetPrice(sum);
    setOrderItems(items);
  };

  const addSelectionService = (item) => {
    let items = orderItems;
    let searchItem = items.find((o, i) => {
      if (o.value === item.value) {
        items.splice(i, 1);
        return true;
      }
    });
    if (searchItem === undefined) items.push(item);
    const sum = items.reduce((a, b) => a + (b["totalPrice"] || 0), 0);
    setWidgetPrice(sum);
    setOrderItems(items);
  };

  const addItemsToCart = (e) => {
    if (item.is_free === true) {
      let qty = 0;
      orderItems.map((item) => {
        qty += item.quantity
      });
      const formData = {
        is_paid: true,
        name: item.name,
        value: item.value,
        orders: JSON.stringify(orderItems),
        total_price: 0,
        quantity: qty,
        project: params.id,
        status: "WAITING FOR FILES"
      }
      axios.post("/api/services/add-free-service", formData)
        .then((res) => {
          if (res.data.success === true) {
            history.push(`/app/projects/details/${params.id}`);
          }
        })
    }
    else addToCartAction(orderItems, index);
    setSerivceModal(false);
  };

  return (
    <>
      <Colxx sm="6" lg="4" xl="4" className="mb-3">
        <Card onClick={() => setSerivceModal(!serviceModal)}>
          <div className="position-relative">
            <NavLink to="#">
              <CardImg top alt={item.name} src={item.img} />
            </NavLink>
            {currentItems.orders.length !== 0 && (
              <Badge
                color="primary"
                pill
                className="position-absolute badge-top-left"
                style={{ fontSize: "90%" }}
              >
                {item.price ? (
                  <>
                    {currentItems.orders.find((o) => o.value === item.value) !==
                    undefined
                      ? currentItems.orders.find((o) => o.value === item.value)
                          .quantity
                      : 0}{" "}
                    images -{" "}
                    {currentItems.orders.reduce(
                      (a, b) => a + (b["quantity"] || 0),
                      0
                    ) -
                      (currentItems.orders.find(
                        (o) => o.value === item.value
                      ) !== undefined
                        ? currentItems.orders.find(
                            (o) => o.value === item.value
                          ).quantity
                        : 0)}{" "}
                    <IntlMessages id="projects.options" />- $
                    {currentItems.orders.reduce(
                      (a, b) => a + (b["totalPrice"] || 0),
                      0
                    )}
                  </>
                ) : (
                  <>
                    {currentItems.orders.reduce(
                      (a, b) => a + (b["quantity"] || 0),
                      0
                    )}{" "}
                    - images - $
                    {currentItems.orders.reduce(
                      (a, b) => a + (b["totalPrice"] || 0),
                      0
                    )}
                  </>
                )}
              </Badge>
            )}
          </div>
          <CardBody>
            <Row>
              <Colxx xxs="12">
                <CardSubtitle className="text-center text-one">
                  {item.name}
                </CardSubtitle>
              </Colxx>
            </Row>
          </CardBody>
        </Card>
      </Colxx>
      <Modal
        isOpen={serviceModal}
        size="xl"
        toggle={() => setSerivceModal(!serviceModal)}
      >
        <ModalBody className="no-padding">
          <span
            onClick={() => setSerivceModal(false)}
            className="text-large position-absolute"
            style={{ right: "10px", top: 0, cursor: "pointer", zIndex: 1002 }}
          >
            ×
          </span>
          <Row style={{ margin: 0 }}>
            <Colxx sm="12" lg="6" md="12" className="no-padding">
              <img
                src={item.img}
                className="img-fluid"
                style={{ objectFit: "cover", height: "100%" }}
              ></img>
            </Colxx>
            <Colxx sm="12" lg="6" md="12" className="no-padding">
              <div style={{ padding: "2rem" }}>
                <div className="text-center">
                  <h5 className="text-primary font-weight-semibold color-theme-2 mb-4">
                    {item.name}
                  </h5>
                </div>
                <div className="text-center">
                  <p>{item.desc && item.desc}</p>
                  {item.price && (
                    <>
                      <p className="text-primary text-one">
                        ${item.price} / {item.unit ? item.unit : 'photo'}
                      </p>
                      <div className="quantity-input mb-5">
                        <Button
                          color="secondary"
                          className="default"
                          onClick={() => decrement()}
                        >
                          &mdash;
                        </Button>
                        <Input type="text" value={serviceQty} readOnly />
                        <Button
                          color="secondary"
                          className="default"
                          onClick={() => increament()}
                        >
                          &#xff0b;
                        </Button>
                      </div>
                    </>
                  )}
                  <PerfectScrollbar
                    options={{ suppressScrollX: true, wheelPropagation: false }}
                  >
                    <div
                      className="pl-3 pt-3 pb-4 pr-3"
                      style={{ height: "300px" }}
                    >
                      {options[item.value] &&
                        options[item.value].map((option, index) => {
                          if (option.extraType === "ALONE_SELECT") {
                            return (
                              <MultipleSelectOption
                                key={index}
                                rootItem={item}
                                option={option}
                                addServices={checkServices}
                                currentItems={orderItems}
                                depth={2}
                              />
                            )
                          }
                          if (item.itemsType === "SELECT_ONE") {
                            return (
                              <SelectionOption
                                key={index}
                                parent={item}
                                option={option}
                                addServices={checkServices}
                                currentItems={orderItems}
                                depth={2}
                              />
                            )
                          }
                          else if (item.itemsType === "SELECT_MULTIPLE") {
                            return (
                              <MultipleSelectOption
                                key={index}
                                rootItem={item}
                                option={option}
                                addServices={checkServices}
                                currentItems={orderItems}
                                depth={2}
                              />
                            )
                          }
                          else {
                            return (
                              <ServiceOption
                                key={index}
                                rootItem={item}
                                option={option}
                                addServices={checkServices}
                                addSelectionService={addSelectionService}
                                serviceQuantity={serviceQty}
                                currentItems={orderItems}
                              />
                            )
                          }
                        })}
                    </div>
                  </PerfectScrollbar>
                </div>
                <hr className="my-4"></hr>
                <div className="footer">
                  <span className="text-price text-large text-semi-muted">
                    { item.is_free !== true && (
                      `$${parseFloat(widgetPrice).toFixed(2)}`
                    )}
                  </span>
                  <Button
                    color="primary"
                    className="float-right"
                    onClick={(e) => addItemsToCart(e)}
                  >
                    { item.is_free === true ? "Submit Quote Request" : <IntlMessages id="projects.add-to-cart" /> }
                    
                  </Button>{" "}
                </div>
              </div>
            </Colxx>
          </Row>
        </ModalBody>
      </Modal>
    </>
  );
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(ServiceWidget);
