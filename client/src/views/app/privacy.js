/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import { Row, Collapse, Card, Button } from 'reactstrap';
import {
  Colxx,
} from '../../components/common/CustomBootstrap';
import data from '../../constants/privacy';

const Privacy = ({ match }) => {
  const [showingIndex, setShowIndex] = useState(0);
  return (
    <>
      <Row>
        {/* <Colxx xxs="12">
          <Breadcrumb heading="menu.privacy" match={match} />
          <Separator className="mb-5" />
        </Colxx> */}

        <Colxx xxs="12" className="mb-4">
          <>
            {data.map((item, index) => {
              return (
                <Card className="d-flex mb-3" key={`faqItem_${index}`}>
                  <div className="d-flex flex-grow-1 min-width-zero">
                    <Button
                      color="link"
                      className="card-body  btn-empty btn-link list-item-heading text-left text-one"
                      onClick={() => setShowIndex(index)}
                      aria-expanded={showingIndex === index}
                    >
                      {item.question}
                    </Button>
                  </div>
                  <Collapse isOpen={showingIndex === index}>
                    <div
                      className="card-body accordion-content pt-0"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  </Collapse>
                </Card>
              );
            })}
          </>
        </Colxx>
      </Row>
    </>
  );
};

export default Privacy;
