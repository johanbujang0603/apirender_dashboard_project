import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const NewUser = React.lazy(() =>
  import(/* webpackChunkName: "users-new" */ './new_user')
);
const UserList = React.lazy(() =>
  import(/* webpackChunkName: "users-new" */ './user_list')
);
const UserDetail = React.lazy(() =>
  import(/* webpackChunkName: "users-new" */ './user_detail')
);

const Users = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/new`} />
      <Route
        path={`${match.url}/new`}
        render={(props) => <NewUser {...props} />}
      />
      <Route
        path={`${match.url}/list`}
        render={(props) => <UserList {...props} />}
      />
      <Route
        path={`${match.url}/detail/:id`}
        render={(props) => <UserDetail {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Users;
