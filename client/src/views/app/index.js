import React, { Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';

const Dashboard = React.lazy(() =>
  import(/* webpackChunkName: "dashboard" */ './dashboard')
);
const Projects = React.lazy(() =>
  import(/* webpackChunkName: "projects" */ './projects')
);
const Settings = React.lazy(() =>
  import(/* webpackChunkName: "settings" */ './settings')
);
const Faq = React.lazy(() =>
  import(/* webpackChunkName: "faq" */ './faq')
);
const Contact = React.lazy(() =>
  import(/* webpackChunkName: "faq" */ './contact')
);
const Terms = React.lazy(() =>
  import(/* webpackChunkName: "terms and condition" */ "./terms")
);
const Privacy = React.lazy(() =>
  import(/* webpackChunkName: "privacy policy" */ "./privacy")
);
const App = ({ match }) => {
  return (
    <AppLayout>
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
              path={`${match.url}/support/faq`}
              render={(props) => <Faq {...props} />}
            />
            <Route
              path={`${match.url}/dashboard`}
              render={(props) => <Dashboard {...props} />}
            />
            <Route
              path={`${match.url}/projects`}
              render={(props) => <Projects {...props} />}
            />
            <Route
              path={`${match.url}/terms`}
              render={(props) => <Terms {...props} />}
            />
            <Route
              path={`${match.url}/privacy`}
              render={(props) => <Privacy {...props} />}
            />
            <Route
              path={`${match.url}/support/contact`}
              render={(props) => <Contact {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </div>
    </AppLayout>
  );
};

const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
