/* eslint-disable react/no-array-index-key */
import React from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Card, CardBody, CardTitle, Badge } from 'reactstrap';

import IntlMessages from '../../helpers/IntlMessages';
import { projectCategories } from '../../constants/projectValues';
import { statusColor } from '../../constants/status';

const RecentProjects = (data) => {
  return (
    <Card>
      <div className="position-absolute card-top-buttons">
        <button type="button" className="btn btn-header-light icon-button">
          <i className="simple-icon-refresh" />
        </button>
      </div>
      <CardBody>
        <CardTitle>
          <IntlMessages id="dashboards.recent-projects" />
        </CardTitle>
        <div className="scroll dashboard-list-with-thumbs">
          <PerfectScrollbar
            options={{ suppressScrollX: true, wheelPropagation: false }}
          >
            {data.data.map((order, index) => {
              let item = projectCategories.find(o => o.value === order.category);
              return (
                <div key={index} className="d-flex flex-row mb-3">
                  <NavLink
                    to={`/app/projects/details/${order._id}`}
                    className="d-block position-relative"
                  >
                    <img
                      src={item.img}
                      alt={order.project_name}
                      className="border-0"
                      style={{width: "110px"}}
                    />
                    <Badge
                      color={statusColor[order.status]}
                      key={index}
                      className="position-absolute badge-top-right"
                      pill
                    >
                      {order.status}
                    </Badge>
                  </NavLink>

                  <div className="pl-3 pt-2 pr-2 pb-2">
                    <NavLink to={`/app/projects/details/${order._id}`}>
                      <p className="list-item-heading">{order.project_name}</p>
                      <div className="pr-4">
                        <p className="text-muted mb-1 text-small">
                          {item.desc}
                        </p>
                      </div>
                      <div className="text-primary text-small font-weight-medium d-none d-sm-block">
                        {moment(order.date).format('LLLL')}
                      </div>
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
export default RecentProjects;
