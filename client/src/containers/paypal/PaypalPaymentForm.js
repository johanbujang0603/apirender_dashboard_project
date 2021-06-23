import React, {Component, useState} from 'react';
import { PayPalButton } from "react-paypal-button-v2";
import {
  Card,
  CardBody,
  FormGroup,
  Label,
  Button,
  Form,
} from 'reactstrap';
import axios from "axios";
import {PAYPAL_CLIENT_ID} from '../../config/keys';
import { NotificationManager } from '../../components/common/react-notifications';

const PaypalPaymentForm = ({match, totalAmount, history}) => {
   
  const [isLoading, setIsLoading] = useState(true);
  return (!isLoading ? (
    <div className="loading" />
  ) : (
      <Card>
          <CardBody>
            <Label className="font-weight-bold mb-3 text-primary">
              Pay with Paypal
            </Label>
            <PayPalButton
                amount={totalAmount}
                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                onSuccess={(details, data) => {
                    setIsLoading(false);
                    NotificationManager.success("Transaction completed by " + details.payer.name.given_name, 'Success', 3000, null, null, '');
                    const postData = {
                        orderId: data.orderID,
                        projectId: match.params.id,
                    };
                    return axios.post(
                        `/api/payments/paypal-transaction-complete`
                    , postData).then((res) => {
                        setIsLoading(true);
                        history.push(`/thank-you/payment/${match.params.id}`);
                    });
                }}
                options={{
                    currency: "AUD",
                    clientId: PAYPAL_CLIENT_ID
                }}
            />
          </CardBody>
      </Card>
    )
  );
}

export default PaypalPaymentForm;