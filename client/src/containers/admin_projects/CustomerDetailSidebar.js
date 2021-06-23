import React from 'react';
import { connect } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';

import IntlMessages from '../../helpers/IntlMessages';
import ApplicationMenu from '../../components/common/ApplicationMenu';

const CustomerDetailSidebar = ({
  customer,
  match,
  history
}) => {
  return (
    <ApplicationMenu>
      <PerfectScrollbar
        options={{ suppressScrollX: true, wheelPropagation: false }}
      >
        <div className="p-4">
          <p className="text-muted text-small">
            <IntlMessages id="pages.customer-detail" />
          </p>
          <ul className="list-unstyled mb-2">
            <li className="nav-item text-center">
               <img src={`/${customer.avatar}`} alt="Avatar" className="rounded-circle" width="100" height="100"/>
            </li>
            <li className="nav-item text-center">
                <span className="text-primary">{`${customer.first_name} ${customer.last_name}`}</span>
            </li>
            <li className="nav-item text-center">
                Company: <span className="text-muted">{customer.company_name}</span>
            </li>
          </ul>
        </div>
      </PerfectScrollbar>
    </ApplicationMenu>
  );
};

export default connect(null, {
})(CustomerDetailSidebar);

