import React, {useEffect, useState} from 'react';
import { Row } from 'reactstrap';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import IntlMessages from '../../helpers/IntlMessages';
import { Colxx, Separator } from '../../components/common/CustomBootstrap';
import RecentProjects from '../../containers/dashboard/RecentProjects';
import NewComments from '../../containers/dashboard/NewComments';

const Dashboard = ({ match, loginUser }) => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [latestProjects, setLatestProjects] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    let unmounted = false;
    axios.post(`/api/projects/get-latest`, {user_id: loginUser._id, role: loginUser.role})
    .then((res) => {
      return res.data;
    })
    .then((data) => {
      if (!unmounted) {
        setIsLoading(false);
        setLatestProjects(data.projects);
        setMessages(data.messages);
      }
    });
    return () => { unmounted = true };
  }, [loginUser]);
  
  return (
    isLoading ? (
        <div className="loading" />
    ): (
    <>
      <Row>
        <Colxx xxs="12">  
            <div className="mb-2">
                <h1>
                  <IntlMessages id="menu.welcome" /> {`${loginUser.first_name}`}
                </h1>
                {
                  latestProjects.length === 0 && (
                    <div className="text-zero top-right-button-container">
                      <NavLink
                        exact={true}
                        to="/app/projects/new-project"
                        className="top-right-button btn btn-primary btn-lg"
                      >
                      <IntlMessages id="projects.add-new" />
                      </NavLink>
                  </div>
                  )
                }
            </div>
            <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx lg="8" xl="4" className="mb-4">
          { latestProjects.length !== 0 && (<RecentProjects data={latestProjects} />) }
        </Colxx>
        <Colxx lg="8" xl="4" className="mb-4">
          { messages.length !== 0 && (<NewComments comments={messages} />) }
        </Colxx>
      </Row>
    </>
  ));
};

const mapStateToProps = ({ authUser }) => {
  const loginUser = authUser.user;
  return {
    loginUser
  };
};
export default injectIntl(
  connect(mapStateToProps, {})(Dashboard)
);
