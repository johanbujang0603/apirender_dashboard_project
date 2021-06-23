import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
const ProjectList = React.lazy(() =>
  import(/* webpackChunkName: "project-list" */ './project_list')
);
const ProjectDetails = React.lazy(() =>
  import(/* webpackChunkName: "project-details" */ './project_details')
);
const BriefingDetails = React.lazy(() =>
  import(/* webpackChunkName: "briefing-details" */ './briefing_details')
);

const Projects = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/list`} />
      <Route
        path={`${match.url}/list`}
        render={(props) => <ProjectList {...props} />}
      />
      <Route
        path={`${match.url}/details/:id`}
        render={(props) => <ProjectDetails {...props} />}
      />
      <Route
        path={`${match.url}/briefing/:id`}
        render={(props) => <BriefingDetails {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Projects;
