import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AdminLayout from '../../layout/AdminLayout';

const Dashboard = React.lazy(() =>
  import(/* webpackChunkName: "dashboard" */ './dashboard')
);
const Users = React.lazy(() =>
  import(/* webpackChunkName: "users" */ './users')
);
const Projects = React.lazy(() =>
  import(/* webpackChunkName: "projects" */ './projects')
);
const Settings = React.lazy(() =>
  import(/* webpackChunkName: "projects" */ './settings')
);
const OrderList = React.lazy(() =>
  import(/* webpackChunkName: "projects" */ './orders')
);
const Coupons = React.lazy(() =>
  import(/* webpackChunkName: "coupons" */ './coupons')
);

const Admin = ({ match }) => {
  return (
    <AdminLayout>
      <div className="dashboard-wrapper">
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect
              exact
              from={`${match.url}/`}
              to={`${match.url}/dashboard`}
            />
            <Route
              path={`${match.url}/settings`}
              render={(props) => <Settings {...props} />}
            />
            <Route
              path={`${match.url}/dashboard`}
              render={(props) => <Dashboard {...props} />}
            />
            <Route
              path={`${match.url}/users`}
              render={(props) => <Users {...props} />}
            />
            <Route
              path={`${match.url}/projects`}
              render={(props) => <Projects {...props} />}
            />
            <Route
              path={`${match.url}/orders`}
              render={(props) => <OrderList {...props} />}
            />
            <Route
              path={`${match.url}/coupons`}
              render={(props) => <Coupons {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AdminLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(Admin));
