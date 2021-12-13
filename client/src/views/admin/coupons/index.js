/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { injectIntl } from 'react-intl';
import { Row, Button } from 'reactstrap';
import axios from 'axios';

import IntlMessages from '../../../helpers/IntlMessages';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import CouponListItem from '../../../components/coupon';
import AddNewCouponModal from '../../../containers/coupon/AddNewCouponModal';

const Coupon = ({ match, intl }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [couponItems, setCouponItems] = useState([]);

  const fetchCouponList = () => {
    axios.get('/api/coupon/list')
      .then((res) => {
        setCouponItems(res.data.data);
        setLoading(false);
      })
      .catch((err) => {

      })
  }

  useEffect(() => {
    fetchCouponList();
  }, []);

  return (
    <>
      <Row className="">
        <Colxx xxs="12">
          <div className="mb-2">
            <h1>
              <IntlMessages id="menu.coupons" />
            </h1>
            <div className="text-zero top-right-button-container">
              <Button
                color="primary"
                size="lg"
                className="top-right-button mr-1"
                onClick={() => setModalOpen(true)}
              >
                Add New
              </Button>
            </div>
          </div>
          <Separator className="mb-5" />
          <Row>
            {!loading ? (
              couponItems.map((item, index) => {
                return (
                  <CouponListItem
                    key={`todo_item_${index}`}
                    item={item}
                    fetchCouponList={fetchCouponList}
                    toggleModal={() => setModalOpen(!modalOpen)}
                    updateItem={() => setCurrentItem(item)}
                  />
                );
              })
            ) : (
              <div className="loading" />
            )}
          </Row>
        </Colxx>
      </Row>

      <AddNewCouponModal
        toggleModal={() => setModalOpen(!modalOpen)}
        modalOpen={modalOpen}
        fetchCouponList={fetchCouponList}
        currentItem={currentItem}
        updateItem={() => setCurrentItem(null)}
      />
    </>
  );
};
const mapStateToProps = ({ surveyListApp }) => {
  const {
    surveyItems,
    searchKeyword,
    loading,
    orderColumn,
    orderColumns,
    selectedItems,
  } = surveyListApp;

  return {
    surveyItems,
    searchKeyword,
    loading,
    orderColumn,
    orderColumns,
    selectedItems,
  };
};
export default injectIntl(Coupon);
