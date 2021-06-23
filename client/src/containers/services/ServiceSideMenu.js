import React from 'react';
import { connect } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { NavLink } from 'react-router-dom';

import IntlMessages from '../../helpers/IntlMessages';
import ApplicationMenu from '../../components/common/ApplicationMenu';

const ServiceSideMenu = ({
  addedItems,
  match,
  history
}) => {

  let totalPrice = 0;

  return (
    <ApplicationMenu>
      <PerfectScrollbar
        options={{ suppressScrollX: true, wheelPropagation: false }}
      >
        <div className="p-4">
          <p className="text-default font-weight-semibold text-one">
            <IntlMessages id="projects.order-summary" />
          </p>
          <ul className="list-unstyled mb-2">
            {
              addedItems.length !== 0 && addedItems.map((item, index) => {
                let subTotalPrice = 0;
                if (item.orders.length !== 0) {
                return (
                  <li className="added-cart-item nav-item" key={index}>
                    {
                      item.orders.length !== 0 && item.orders.map((order, o_index) => {
                        subTotalPrice += parseFloat(order.totalPrice);
                        totalPrice += parseFloat(order.totalPrice);
                      })
                    }
                    <span className="color-theme-1 font-weight-medium">{item.orders.length !==0 && item.name}</span>
                    <span className="float-right">${subTotalPrice}</span>
                  </li>
                )
                }
              })
            }
          </ul>
          {
            totalPrice!==0 && (
              <>
                <p className="text-center mt-5">
                  <NavLink
                    to={`/app/projects/payment/${match.params.id}`}
                    className="default mb-2 btn btn-danger"
                  >
                    <IntlMessages id="projects.pay" /> - AU${totalPrice.toFixed(2)}
                  </NavLink>{' '}
                </p>
                <p>
                  <img className="w-100" src="/assets/img/stripe_secure.png">
                  </img>
                </p>
                <p>
                  <img className="w-100" src="/assets/img/powered_by_paypal.png"></img>
                </p>
              </>
          )}
        </div>
      </PerfectScrollbar>
    </ApplicationMenu>
  );
};

export default connect(null, {
})(ServiceSideMenu);

