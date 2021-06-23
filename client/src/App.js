import React, { Suspense } from "react";
import { connect, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { IntlProvider } from "react-intl";
import AppLocale from "./lang";
import ColorSwitcher from "./components/common/ColorSwitcher";
import { NotificationContainer } from "./components/common/react-notifications";
import { isMultiColorActive } from "./constants/defaultValues";
import { getDirection, checkAuthenticated } from "./helpers/Utils";
import { logoutUser } from "./redux/actions";

const ViewMain = React.lazy(() =>
  import(/* webpackChunkName: "views" */ "./views")
);
const ViewApp = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ "./views/app")
);
const ViewAdmin = React.lazy(() =>
  import(/* webpackChunkName: "views-admin" */ "./views/admin")
);
const ViewUser = React.lazy(() =>
  import(/* webpackChunkName: "views-user" */ "./views/user")
);
const ViewError = React.lazy(() =>
  import(/* webpackChunkName: "views-error" */ "./views/error")
);
const Thankyou = React.lazy(() =>
  import(/* webpackChunkName: "views-user" */ "./views/thank-you")
);

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  const dispatch = useDispatch()
  return (
    <Route
      {...rest}
      render={(props) => {
        const currentUser = JSON.parse(localStorage.getItem("current_user"));
        if (!currentUser || !checkAuthenticated(localStorage.getItem("token"))) {
          dispatch(logoutUser());
          // localStorage.clear();
          // not logged in so redirect to login page with the return url
          return (
            <Redirect
              to={{ pathname: "/user/login", state: { from: props.location } }}
            />
          );
        }

        // check if route is restricted by role
        if (roles && roles.indexOf(currentUser.role) === -1) {
          // role not authorised so redirect to home page
          return currentUser.role === 'customer' ? <Redirect to={{ pathname: "/" }} /> : <Redirect to={{ pathname: "/admin" }} />;
          
        }

        // authorised so return component
        return <Component {...props} />;
      }}
    />
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    const direction = getDirection();
    if (direction.isRtl) {
      document.body.classList.add("rtl");
      document.body.classList.remove("ltr");
    } else {
      document.body.classList.add("ltr");
      document.body.classList.remove("rtl");
    }
  }

  render() {
    const { locale } = this.props;
    const currentAppLocale = AppLocale[locale];

    return (
      <div className="h-100">
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <>
            <NotificationContainer />
            {isMultiColorActive && <ColorSwitcher />}
            <Suspense fallback={<div className="loading" />}>
              <Router>
                <Switch>
                  <PrivateRoute
                    path="/app"
                    roles={["customer"]}
                    component={ViewApp}
                  />
                  <PrivateRoute
                    path="/admin"
                    roles={["admin"]}
                    component={ViewAdmin}
                  />
                  <Route
                    path="/user"
                    render={(props) => <ViewUser {...props} />}
                  />
                  <Route
                    path="/error"
                    exact
                    render={(props) => <ViewError {...props} />}
                  />
                  <Route
                    path="/thank-you/:action/:id"
                    exact
                    render={(props) => <Thankyou {...props} />}
                  />
                  <Route
                    path="/"
                    exact
                    render={(props) => <ViewMain {...props} />}
                  />
                  <Redirect to="/error" />
                </Switch>
              </Router>
            </Suspense>
          </>
        </IntlProvider>
      </div>
    );
  }
}

const mapStateToProps = ({ settings, authUser }) => {
  const loginUser = authUser.user;
  const { locale } = settings;
  return { loginUser, locale };
};
export default connect(mapStateToProps)(App);
