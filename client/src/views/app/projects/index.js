import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const NewProject = React.lazy(() =>
  import(/* webpackChunkName: "projects-new" */ './new_project')
);

const ProjectDetails = React.lazy(() =>
  import(/* webpackChunkName: "projects-new" */ './project_details')
);

const AddService = React.lazy(() =>
  import(/* webpackChunkName: "projects-new" */ './add_service')
);

const Payment = React.lazy(() =>
  import(/* webpackChunkName: "projects-new" */ './payment')
);

const ProjectList = React.lazy(() =>
  import(/* webpackChunkName: "projects-new" */ './project_list')
);

const AddBriefing = React.lazy(() =>
  import(/* webpackChunkName: "add-briefing" */ './add_briefing')
);

const BriefingDetails = React.lazy(() =>
  import(/* webpackChunkName: "briefing-details" */ './briefing_details')
);

const Projects = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/new-project`} />
      <Route
        path={`${match.url}/new-project`}
        render={(props) => <NewProject {...props} />}
      />
      <Route
        path={`${match.url}/list`}
        render={(props) => <ProjectList {...props} />}
      />
      <Route
        path={`${match.url}/details/:id`}
        render={(props) => <ProjectDetails {...props} />}
      />
      <Route
        path={`${match.url}/add-service/:id`}
        render={(props) => <AddService {...props} />}
      />
      <Route
        path={`${match.url}/payment/:id`}
        render={(props) => <Payment {...props} />}
      />
      <Route
        path={`${match.url}/briefing/:id`}
        render={(props) => <AddBriefing {...props} />}
      />
      <Route
        path={`${match.url}/view-briefing/:id`}
        render={(props) => <BriefingDetails {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Projects;
