import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TopNav from '../containers/navs/Topnav';
import Sidebar from '../containers/navs/Sidebar';
import Footer from '../containers/navs/Footer';

import {
  receiveAuthUser,
} from '../redux/actions';

const AppLayout = ({ containerClassnames, children, history, receiveAuthUserAction, loginUser }) => {

  useEffect(() => {
    receiveAuthUserAction(history);
  }, []);

  return Object.keys(loginUser).length == 0 ? (
    <div className="loading" />
  ) : (
    <div id="app-container" className={containerClassnames}>
      <TopNav history={history} />
      <Sidebar />
      <main>
        <div className="container-fluid">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
const mapStateToProps = ({ menu, authUser }) => {
  const { containerClassnames } = menu;
  const loginUser = authUser.user;
  return { containerClassnames, loginUser};
};
const mapActionToProps = {
  receiveAuthUserAction: receiveAuthUser
};

export default withRouter(
  connect(mapStateToProps, mapActionToProps)(AppLayout)
);
