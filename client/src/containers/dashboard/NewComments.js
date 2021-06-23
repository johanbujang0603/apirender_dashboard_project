/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { NavLink } from 'react-router-dom';

import IntlMessages from '../../helpers/IntlMessages';
import moment from 'moment';

const NewComments = ({ className = '', comments }) => {
  return (
    <Card className={className}>
      <CardBody>
        <CardTitle>
          <IntlMessages id="dashboards.recent-messages" />
        </CardTitle>
        <div className="dashboard-list-with-user">
          <PerfectScrollbar
            options={{ suppressScrollX: true, wheelPropagation: false }}
          >
            {comments.map((item, index) => {
              return (
                <div
                  key={index}
                  className="d-flex flex-row mb-3 pb-3 border-bottom"
                >
                  <NavLink to="#">
                    
                    {
                      item.user_details.avatar != null ? (
                        <img alt={item.user_details.first_name + ' ' + item.user_details.last_name}
                             className="img-object-fit border-0 rounded-circle" width="40" height="40"
                             src={`/${item.user_details.avatar}`} />
                      ): (
                        <img alt={item.user_details.first_name + ' ' + item.user_details.last_name}
                             className="img-object-fit border-0 rounded-circle" width="40" height="40"
                             src='/assets/img/avatar.png' />
                      )
                    }
                  </NavLink>

                  <div className="pl-3 pr-2">
                    <NavLink to={`/app/projects/view-briefing/${item.service_id}`}>
                      <p className="font-weight-medium mb-0">{item.message}</p>
                      <p className="text-muted mb-0 text-small">
                        {item.user_details.first_name + ' ' + item.user_details.last_name}&nbsp;|&nbsp;
                        {item.project_name} | {moment(item.date).format('LLLL')}
                      </p>
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </PerfectScrollbar>
        </div>
      </CardBody>
    </Card>
  );
};

export default NewComments;
