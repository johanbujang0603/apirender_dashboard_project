import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import IntlMessages from '../../../helpers/IntlMessages';
import CreateProject from '../../../containers/projects/CreateProject';

const NewProject = ({ intl, match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <h1>
            <IntlMessages id="menu.new-project" />
          </h1>
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx sm="12" md="12" className="mb-4">
          <CreateProject />
        </Colxx>
      </Row>
    </>
  );
};
export default injectIntl(NewProject);
