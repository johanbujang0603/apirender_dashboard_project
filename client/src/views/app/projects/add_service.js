import React, { useState, useEffect } from "react";
import axios from "axios";
import { injectIntl } from "react-intl";
import { Row } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import PutService from "../../../containers/services/PutService";
import ServiceSideMenu from "../../../containers/services/ServiceSideMenu";
import { services } from "../../../constants/projectValues";
import IntlMessages from "../../../helpers/IntlMessages";
import NotificationManager from "../../../components/common/react-notifications/NotificationManager";

const AddService = ({ intl, match, history }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [addedOrders, setAddedOrders] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [project, setProject] = useState([]);

  useEffect(() => {
    async function fetchData() {
      axios
        .post(`/api/projects/get-info?_id=${match.params.id}`)
        .then((res) => {
          return res.data;
        })
        .then((data) => {
          setProject(data.project);
          let newItems = [];
          services[data.project.category].map((service) => {
            let item = {
              name: service.name,
              value: service.value,
              orders: [],
            };
            let existService = data.services.find(
              (o) => o.value === service.value
            );
            if (existService != undefined) {
              item.orders = JSON.parse(existService.orders);
            }
            newItems.push(item);
          });

          const newOrders = Object.keys(newItems).map(function (i) {
            return newItems[i];
          });
          setOrderItems(newOrders);
          setAddedOrders(newItems);
          setIsLoaded(true);
        });
    }
    fetchData();
  }, []);

  const saveServices = (addedItems) => {
    let filtered = addedItems.filter(function (el) {
      return el.orders.length !== 0;
    });
    let postData = {
      id: match.params.id,
      services: JSON.stringify(filtered),
    };
    axios
      .post(`/api/services/add`, postData)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        NotificationManager.success(
          "The service has been added to your order.",
          "Thank you!",
          3000,
          null,
          null,
          ""
        );
      })
      .catch((err) => {
        console.log(err.response);
        NotificationManager.warning(
          "Somthing went wrong. Please try again.",
          "Error!",
          3000,
          null,
          null,
          ""
        );
      });
  };

  const addItemsToCart = (items, index) => {
    let tempItems = [];
    tempItems.push(...items);
    let newItems = addedOrders;
    newItems[index].orders = tempItems;
    newItems[index].orders.sort((a, b) => (a.depth > b.depth ? 1 : -1));

    let tempOrders = Object.keys(newItems).map(function (i) {
      return newItems[i];
    });

    let newOrders = [];
    newOrders.push(...tempOrders);
    setOrderItems(newOrders);
    saveServices(newItems);
    let newAddedOrders = [];
    newAddedOrders.push(...newItems);
    setAddedOrders(newAddedOrders);
  };

  return !isLoaded ? (
    <div className="loading" />
  ) : (
    <>
      <Row className="app-row">
        <Colxx xxs="12">
          <h1>
            <IntlMessages id="menu.add-service" />
          </h1>
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row className="app-row">
        <Colxx sm="12" md="12" className="mb-4">
          {addedOrders.length != 0 && (
            <PutService
              match={match}
              allOrders={addedOrders}
              project={project}
              addItemsToCart={addItemsToCart}
            />
          )}
        </Colxx>
      </Row>
      <ServiceSideMenu
        addedItems={orderItems}
        match={match}
        history={history}
      />
    </>
  );
};
export default injectIntl(AddService);
