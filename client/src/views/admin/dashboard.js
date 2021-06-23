import React, {useEffect, useState} from 'react';
import { Row } from 'reactstrap';
import axios from 'axios';
import IntlMessages from '../../helpers/IntlMessages';
import { Colxx, Separator } from '../../components/common/CustomBootstrap';
import Statistics from '../../containers/dashboard/Statistics';

const Dashboard = ({ match }) => {
  const [someStatistics, setSomeStatistics] = useState([]);
  useEffect(() => {
    axios.post(`/api/dashboard/admin-statistics`)
    .then((res) => {
      return res.data;
    })
    .then((data) => {
      setSomeStatistics([
        {
          title: 'dashboards.total-projects-in-progress', icon: 'iconsminds-clock', value: data.totalProjectsInProgress
        },
        {
          title: 'dashboards.total-payments', icon: 'iconsminds-clock', value: 'AU$' + data.totalPayments
        },
        {
          title: 'dashboards.total-projects-awaiting', icon: 'iconsminds-clock', value: data.totalProjectsAwaiting
        },
        {
          title: 'dashboards.total-projects-completed', icon: 'iconsminds-clock', value: data.totalProjectsCompleted
        }
      ]);
    });
  }, []);

  return (
    <>
      <Row>
        <Colxx xxs="12">  
            <div className="mb-2">
                <h1>
                    <IntlMessages id="menu.dashboard" />
                </h1>
            </div>
            <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx lg="12" xl="12" className="mb-4">
          {
            someStatistics && (
              <Statistics data={someStatistics} />
            )
          }
        </Colxx>
        <Colxx lg="8" xl="4" className="mb-4">
          {/* { messages.length != 0 && (<NewComments comments={messages} />) } */}
        </Colxx>
      </Row>
    </>
  );
};

export default Dashboard;
