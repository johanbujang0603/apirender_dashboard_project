import React, { useState, useEffect } from "react";
import { injectIntl } from "react-intl";
import axios from "axios";
import { Row } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import StripePaymentForm from "../../../containers/stripe/StripePaymentForm";
import PaypalPaymentForm from "../../../containers/paypal/PaypalPaymentForm";
import OrderSummary from "../../../containers/projects/OrderSummary";

const Payment = ({ intl, match, history }) => {
  // const { messages } = intl;
  const [services, setServices] = useState([]);
  const [project, setProject] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [delivery, setDelivery] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [couponCode, setCouponCode] = useState('');
  const [deliveryAddr, setDeliveryAddr] = useState({
    streetName: null,
    streetNumber: null,
    unitNumber: null,
    suburb: null,
    zipCode: null,
    country: null,
  })

  useEffect(() => {
    fetchData();
  }, []);

  const updateCouponCode = (val) => {
    setCouponCode(val);
  }

  const handleUpdateService = (service) => {
    axios
      .post(`/api/services/update`, service)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        fetchData();
      });
  };

  const fetchData = () => {
    axios
      .post(`/api/projects/get-info?_id=${match.params.id}`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setProject(data.project);
        setServices(data.services);
        setTotalPrice(data.services.reduce(
          (a, b) => a + (b["total_price"] || 0),
          0
        ));
        setIsLoaded(true);
      });
  };

  const setDeliveryOption = (name, price) => {
    const amount = services.reduce(
      (a, b) => a + (b["total_price"] || 0),
      0
    );
    setTotalPrice(amount + price);
    setDelivery(name);
  }

  const updateDeliveryAddr = (e) => {
    setDeliveryAddr({
      ...deliveryAddr,
      [e.target.name]: e.target.value.trim()
    });
  }

  return !isLoaded ? (
    <div className="loading" />
  ) : (
    <>
      <Row>
        <Colxx xxs="12">
          <h1>
            <IntlMessages id="projects.payment" />
          </h1>
          <span className="pt-0 ml-4 breadcrumb-container d-none text-primary text-one d-sm-block d-lg-inline-block">
            ( {project.project_name} )
          </span>
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx sm="12" md="8" className="mb-4">
          <OrderSummary
            services={services}
            project={project}
            handleUpdateService={handleUpdateService}
            setDeliveryOption={setDeliveryOption}
            changeDeliveryAddr={updateDeliveryAddr}
            updateCoupon={updateCouponCode}
            couponCode={couponCode}
          />
        </Colxx>
        <Colxx sm="12" md="4" className="mb-4">
          <StripePaymentForm
            match={match}
            services={services}
            totalAmount={totalPrice}
            delivery={delivery}
            deliveryAddr={deliveryAddr}
            history={history}
            couponCode={couponCode}
            isPrintingService={project.category === "PRINTING_SERVICES" ? true : false}
          />
          <PaypalPaymentForm
            match={match}
            totalAmount={totalPrice}
            history={history}
            delivery={delivery}
            isPrintingService={project.category === "PRINTING_SERVICES" ? true : false}
          />
        </Colxx>
      </Row>
    </>
  );
};
export default injectIntl(Payment);
