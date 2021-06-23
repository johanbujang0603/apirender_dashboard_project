import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import IntlMessages from '../../helpers/IntlMessages';

const TopnavEasyAccess = () => {
  return (
    <div className="position-relative d-none d-sm-inline-block">
      <UncontrolledDropdown className="dropdown-menu-right">
        <DropdownToggle className="header-icon" color="empty">
          <i className="simple-icon-grid" />
        </DropdownToggle>
        <DropdownMenu
          className="position-absolute mt-3"
          right
          id="iconMenuDropdown"
        >
          <NavLink to="/app/dashboard" className="icon-menu-item">
            <i className="iconsminds-shop-4 d-block" />{' '}
            <IntlMessages id="menu.dashboard" />
          </NavLink>

          <NavLink to="/app/projects/list" className="icon-menu-item">
            <i className="simple-icon-briefcase d-block" />{' '}
            <IntlMessages id="menu.project-list" />
          </NavLink>

          <NavLink to="/app/tools" className="icon-menu-item">
            <i className="simple-icon-wrench d-block" />{' '}
            <IntlMessages id="menu.tools" />
          </NavLink>

          <NavLink to="/app/support" className="icon-menu-item">
            <i className="simple-icon-question d-block" />{' '}
            <IntlMessages id="menu.support" />
          </NavLink>
          
          <NavLink to="/app/settings" className="icon-menu-item">
            <i className="simple-icon-settings d-block" />{' '}
            <IntlMessages id="menu.settings" />
          </NavLink>

        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
};

export default TopnavEasyAccess;
