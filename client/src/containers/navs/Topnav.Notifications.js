/* eslint-disable react/no-array-index-key */
import React, {useEffect, useState} from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import axios from 'axios';
import moment from 'moment';

const NotificationItem = ({ title, link, date }) => {
  return (
    <div className="d-flex flex-row mb-3 pb-3 border-bottom">
      <div className="pl-3 pr-2">
        <a href={`/app/${link}`}>
          <p className="font-weight-medium mb-1">{title}</p>
          <p className="text-muted mb-0 text-small">{moment(date).format('LLLL')}</p>
        </a>
      </div>
    </div>
  );
};

const TopnavNotifications = () => {
  
  const [notifications, setNotifications] = useState([]);
  // useEffect(() => {
  //   axios.post(`/api/actions/get-latest`, {user_id: JSON.parse(localStorage.getItem('user')).uid})
  //   .then((res) => {
  //     return res.data;
  //   })
  //   .then((data) => {
  //     setNotifications(data);
  //   });
  // }, []);
  
  return (
    <div className="position-relative d-inline-block">
      <UncontrolledDropdown className="dropdown-menu-right">
        <DropdownToggle
          className="header-icon notificationButton"
          color="empty"
        >
          <i className="simple-icon-bell" />
          <span className="count">3</span>
        </DropdownToggle>
        <DropdownMenu
          className="position-absolute mt-3 scroll"
          right
          id="notificationDropdown"
        >
          <PerfectScrollbar
            options={{ suppressScrollX: true, wheelPropagation: false }}
          >
            {notifications.map((notification, index) => {
              return <NotificationItem key={index} {...notification} />;
            })}
          </PerfectScrollbar>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
};

export default TopnavNotifications;
