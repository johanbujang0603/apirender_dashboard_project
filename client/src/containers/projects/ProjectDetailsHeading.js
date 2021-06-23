/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import {
  Row,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Collapse,
} from 'reactstrap';
import { injectIntl } from 'react-intl';

import { NavLink } from 'react-router-dom';
import { Colxx, Separator } from '../../components/common/CustomBootstrap';
import IntlMessages from '../../helpers/IntlMessages';

const ProjectDetailsHeading = ({
  intl,
  changeOrderBy,
  changePageSize,
  selectedPageSize,
  totalItemCount,
  selectedOrderOption,
  match,
  startIndex,
  endIndex,
  onSearchKey,
  orderOptions,
  pageSizes,
  heading,
  projectID,
  project,
  totalPrice,
}) => {
  const [displayOptionsIsOpen, setDisplayOptionsIsOpen] = useState(false);
  const { messages } = intl;
  return (
    <Row>
      <Colxx xxs="12">
        <div className="mb-2">
          <h1>
            {heading}
          </h1>
          {
            project.is_paid === false && (
              <>
              <div className="text-zero top-right-button-container">
                <NavLink
                    exact={true}
                    to={`/app/projects/add-service/${projectID}`}
                    className="top-right-button btn btn-primary btn-lg"
                >
                <IntlMessages id="projects.add-new-service" />
                </NavLink>
                {'  '}
                {
                  totalPrice !== 0 && (
                    <NavLink
                      exact={true}
                      to={`/app/projects/payment/${projectID}`}
                      className="top-right-button btn btn-danger btn-lg"
                    >
                      PAY - AU${totalPrice.toFixed(2)}
                    </NavLink>
                  )
                }
              </div>
              </>
            )
          }
        </div>

        <div className="mb-2">
          <Button
            color="empty"
            className="pt-0 pl-0 d-inline-block d-md-none"
            onClick={() => setDisplayOptionsIsOpen(!displayOptionsIsOpen)}
          >
            <IntlMessages id="pages.display-options" />{' '}
            <i className="simple-icon-arrow-down align-middle" />
          </Button>
          <Collapse
            isOpen={displayOptionsIsOpen}
            className="d-md-block"
            id="displayOptions"
          >
            <div className="d-block d-md-inline-block pt-1">
              <UncontrolledDropdown className="mr-1 float-md-left btn-group mb-1">
                <DropdownToggle caret color="outline-dark" size="xs">
                  {selectedOrderOption.label}
                </DropdownToggle>
                <DropdownMenu>
                  {orderOptions.map((order, index) => {
                    return (
                      <DropdownItem
                        key={index}
                        onClick={() => changeOrderBy(order.column)}
                      >
                        {order.label}
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </UncontrolledDropdown>
              <div className="search-sm d-inline-block float-md-left mr-1 mb-1 align-top">
                <input
                  type="text"
                  name="keyword"
                  id="search"
                  placeholder={messages['menu.search']}
                  onKeyPress={(e) => onSearchKey(e)}
                />
              </div>
            </div>
            <div className="float-md-right pt-1">
              <span className="text-muted text-small mr-1">{`${startIndex}-${endIndex} of ${totalItemCount} `}</span>
              <UncontrolledDropdown className="d-inline-block">
                <DropdownToggle caret color="outline-dark" size="xs">
                  {selectedPageSize}
                </DropdownToggle>
                <DropdownMenu right>
                  {pageSizes.map((size, index) => {
                    return (
                      <DropdownItem
                        key={index}
                        onClick={() => changePageSize(size)}
                      >
                        {size}
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </Collapse>
        </div>
        <Separator className="mb-5" />
      </Colxx>
    </Row>
  );
};

export default injectIntl(ProjectDetailsHeading);
