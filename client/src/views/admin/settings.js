import React, {useEffect, useState} from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';

import { Row } from 'reactstrap';
import axios from 'axios';

import IntlMessages from '../../helpers/IntlMessages';
import { Colxx, Separator } from '../../components/common/CustomBootstrap';
import AdminDetail from '../../containers/users/AdminDetail';
import CustomerDetail from '../../containers/users/CustomerDetail';

const Settings = ({ match, history, loginUser }) => {
  const [user, setUser] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const role = loginUser.role;

  useEffect(() => {
    async function fetchData() {
      const user_id = loginUser._id;
      await axios
        .post(
          `/api/users/detail?id=${user_id}`
        )
        .then((res) => {
          return res.data;
        })
        .then((data) => {
          setUser(data.data);
          setIsLoaded(true);
        });
    }
    fetchData();
  }, [loginUser]);

  return (
    !isLoaded ? (
      <div className="loading" />
    ) : (
    <>
      <Row>
        <Colxx xxs="12">  
            <div className="mb-2">
                <h1>
                    <IntlMessages id="menu.settings" />
                </h1>
            </div>
            <Separator className="mb-5" />
        </Colxx>
      </Row>
      {
        role === 'admin' ? (
          <AdminDetail user={user} history={history} />
        ) : (
          <CustomerDetail user={user} history={history} />
        )
      }
      
    </>
  ));
};

const mapStateToProps = ({ authUser }) => {
  const loginUser = authUser.user;
  return {
    loginUser
  };
};

export default connect(mapStateToProps, {
})(injectIntl(React.memo(Settings)));

