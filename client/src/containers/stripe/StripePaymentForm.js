import React, { Component, useState } from "react";
import {
  CardElement,
  injectStripe,
  StripeProvider,
  Elements,
} from "react-stripe-elements";

import axios from "axios";

import { Card, CardBody, FormGroup, Label, Button, Form } from "reactstrap";

import { NotificationManager } from "../../components/common/react-notifications";
import { STRIPE_API_KEY } from "../../config/keys";

const checkObject = (obj) => {
  for (const key in obj) {
    if (obj[key] === null && key !== 'unitNumber')
      return false;
  }
  return true;
}

// You can customize your Elements to give it the look and feel of your site.
const createOptions = () => {
  return {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        fontFamily: "Open Sans, sans-serif",
        letterSpacing: "0.025em",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#c23d4b",
      },
    },
  };
};

class _CardForm extends Component {
  state = {
    errorMessage: "",
  };

  handleChange = ({ error }) => {
    if (error) {
      this.setState({ errorMessage: error.message });
    } else {
      this.setState({ errorMessage: "" });
    }
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    if (this.props.printingService === true && !checkObject(this.props.deliveryAddr)) {
      NotificationManager.warning(
        "Please fill delivery address.",
        "Error",
        3000,
        null,
        null,
        ""
      );
      return;
    }
    if (
      this.props.printingService === true &&
      this.props.deliveryOption === null
    ) {
      this.props.handleResult();
    } else {
      this.props.setIsLoading(true);
      if (this.props.stripe) {
        this.props.stripe.createToken().then(this.props.handleResult);
      } else {
        console.log("Stripe.js hasn't loaded yet.");
      }
    }
  };

  render() {
    return (
      <Card className="mb-5">
        <CardBody>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup>
              <Label className="font-weight-bold mb-3 text-primary">
                Pay with Credit Card
              </Label>
              <CardElement
                className="form-control"
                onChange={this.handleChange}
                {...createOptions()}
              />
            </FormGroup>
            <div className="error text-danger" role="alert">
              {this.state.errorMessage}
            </div>

            <Button
              color="primary"
              className={`btn-shadow w-100 mb-5 mt-3 btn-multiple-state ${
                this.props.isLoading ? "show-spinner" : ""
              }`}
              size="lg"
            >
              <span className="spinner d-inline-block">
                <span className="bounce1" />
                <span className="bounce2" />
                <span className="bounce3" />
              </span>
              <span className="label">PAY - $ {this.props.totalAmount}</span>
            </Button>
            <p className="w-100 text-center">
              <img className="w-50" src="/assets/img/stripe_secure.png"></img>
            </p>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

const CardForm = injectStripe(_CardForm);

const StripePaymentForm = ({
  match,
  totalAmount,
  history,
  delivery,
  isPrintingService,
  deliveryAddr
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleResult = (data) => {
    if (isPrintingService === true && delivery === null) {
      NotificationManager.warning("Please select one delivery option.", "Error", 3000);
      return;
    }
    if (data.error) {
      NotificationManager.warning(data.error.message, "Error", 3000);
      return;
    }
    const postData = {
      token: data.token,
      projectID: match.params.id,
      userEmail: JSON.parse(localStorage.getItem("current_user")).email,
      deliveryOption: delivery,
      deliveryAddress: deliveryAddr
    };
    axios.post(`/api/payments/charge`, postData).then((res) => {
      setIsLoading(false);
      history.push(`/thank-you/payment/${match.params.id}`);
    }).catch((err) => {
      setIsLoading(false);
      NotificationManager.warning(err.response.data.message, "Error", 3000);
      console.log(err);
    });
  };

  return (
    <StripeProvider apiKey={STRIPE_API_KEY}>
      <Elements>
        <CardForm
          handleResult={handleResult}
          totalAmount={totalAmount}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          printingService={isPrintingService}
          deliveryOption={delivery}
          deliveryAddr={deliveryAddr}
        />
      </Elements>
    </StripeProvider>
  );
};

export default StripePaymentForm;
