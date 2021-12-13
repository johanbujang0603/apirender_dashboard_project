import React from 'react';
import axios from 'axios';
import { Card, CardBody, Button } from 'reactstrap';

import { Colxx } from '../common/CustomBootstrap';

const CouponListItem = ({ item, fetchCouponList, toggleModal, updateItem }) => {
  const editItem = () => {
    toggleModal();
    updateItem();
  }
  const removeItem = () => {
    axios.delete(`/api/coupon/remove?id=${item._id}`)
      .then((res) => {
        fetchCouponList();
      });
  }

  return (
    <Colxx xxs="12">
      <Card className="card d-flex flex-row mb-3">
        <div className="d-flex flex-grow-1 min-width-zero">
          <CardBody className="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
            <span className="align-middle d-inline-block">{item.code}</span>
            <p className="mb-1 text-muted text-small w-15 w-xs-100">
              {item.value} %
            </p>
            <div className="w-15 w-xs-100">
              <Button className="mx-2" color="primary" onClick={editItem}>Edit</Button>
              <Button className="mx-2" color="danger" onClick={removeItem}>Delete</Button>
            </div>
          </CardBody>
        </div>
      </Card>
    </Colxx>
  );
};

export default React.memo(CouponListItem);
