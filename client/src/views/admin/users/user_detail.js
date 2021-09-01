import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import { connect } from 'react-redux';
import IntlMessages from '../../../helpers/IntlMessages';
import AdminDetail from '../../../containers/users/AdminDetail';
import CustomerDetail from '../../../containers/users/CustomerDetail';

const UserDetail = ({ intl, match, history }) => {
  // const { messages } = intl;
  const [user, setUser] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await axios
        .post(
          `/api/users/detail?id=${match.params.id}`
        )
        .then((res) => {
          return res.data;
        })
        .then((data) => {
          setUser(data);
          setIsLoaded(true);
        });
    }
    fetchData();
  }, [match.params.id]);

  return (
    !isLoaded ? (
      <div className="loading" />
    ) : (
    <>
      <Row>
        <Colxx xxs="12">
          <h1>
            <IntlMessages id="menu.update-user" />
          </h1>
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      {
        user && user.role === 'admin' && (<AdminDetail user={user} history={history} />)
      }
      {
        user && user.role !== 'admin' && (<CustomerDetail user={user} history={history} />)
      }
    </>
    )
  );
};

export default connect(null, {
})(UserDetail);
