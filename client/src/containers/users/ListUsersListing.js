import React from 'react';
import { Row } from 'reactstrap';
import Pagination from './Pagination';
import { Colxx } from '../../components/common/CustomBootstrap';
import { Card } from 'reactstrap';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

const ListUsersListing = ({
  items,
  currentPage,
  totalPage,
  onChangePage,
}) => {
  return (
    <Row>
      {items.map((user, index) => {
        return (
          <Colxx xxs="12" className="mb-3" key={index}>
            <Card className='d-flex flex-row'>
              <div className="pl-2 d-flex flex-grow-1 min-width-zero">
                <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                  <NavLink to={`/admin/users/detail/${user._id}`} className="list-item-heading mb-1 truncate w-25">
                    {user.first_name + ' ' + user.last_name}
                  </NavLink>
                  <p className="mb-1 text-small w-20 w-sm-100 text-primary">
                    {user.email}
                  </p>
                  <p className="mb-1 text-muted text-small w-10 w-sm-100">
                    {user.role}
                  </p>
                  <p className="mb-1 text-muted text-small w-30 w-sm-100">
                    {moment(user.date).format('LLLL')}
                  </p>
                </div>
              </div>
            </Card>
          </Colxx>
        );
      })}
      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        onChangePage={(i) => onChangePage(i)}
      />
    </Row>
  );
};

export default React.memo(ListUsersListing);
