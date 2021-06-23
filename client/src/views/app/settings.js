import React, { useState } from "react";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";
import classnames from 'classnames';

import { Row, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import { Colxx } from "../../components/common/CustomBootstrap";
import CustomerSettings from "../../containers/users/CustomerSettings";
import ChangePassword from "../../containers/users/ChangePassword";

const Settings = ({ match, history, loginUser }) => {
  const [activeTab, setActiveTab] = useState('details');
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <div className="mb-2">
            <h1>
              <IntlMessages id="menu.settings" />
            </h1>
          </div>
          <Nav tabs className="separator-tabs ml-0 mb-5">
            <NavItem>
              <NavLink
                className={classnames({
                  active: activeTab === 'details',
                  'nav-link': true,
                })}
                onClick={() => setActiveTab('details')}
                to="#"
                location={{}}
              >
                <IntlMessages id="profile.details" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({
                  active: activeTab === 'change-password',
                  'nav-link': true,
                })}
                onClick={() => setActiveTab('change-password')}
                to="#"
                location={{}}
              >
                <IntlMessages id="profile.change-password" />
              </NavLink>
            </NavItem>
          </Nav>
          
        </Colxx>
      </Row>
      <Row>
        <Colxx sm={12}>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="details">
              {
                Object.keys(loginUser).length !== 0 && loginUser.constructor === Object && (
                  <CustomerSettings user={loginUser} history={history} />
                )
              }
            </TabPane>
            <TabPane tabId="change-password">
              {
                Object.keys(loginUser).length !== 0 && loginUser.constructor === Object && (
                  <ChangePassword user={loginUser} history={history} />
                )
              }
            </TabPane>
          </TabContent>
        </Colxx>
      </Row>
    </>
  );
};

const mapStateToProps = ({ authUser }) => {
  const loginUser = authUser.user;
  return {
    loginUser,
  };
};

export default connect(mapStateToProps, {})(injectIntl(React.memo(Settings)));
