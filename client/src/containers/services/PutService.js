/* eslint-disable no-param-reassign */
import React from "react";
import { connect } from "react-redux";
import { Row } from "reactstrap";
import { injectIntl } from "react-intl";
import ServiceWidget from "./ServiceWidget";
import { services } from "../../constants/projectValues";

const PutService = ({ intl, allOrders, addItemsToCart, project }) => {
  // const { messages } = intl;
  return (
    <>
      <Row>
        {services[project.category].map((service, index) => {
          return (
            <ServiceWidget
              item={service}
              key={index}
              index={index}
              addToCartAction={addItemsToCart}
              currentItems={allOrders[index]}
            />
          );
        })}
      </Row>
    </>
  );
};

export default connect(null, {})(injectIntl(React.memo(PutService)));
