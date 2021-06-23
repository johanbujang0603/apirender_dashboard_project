/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Row } from 'reactstrap';
import IconCard from '../../components/cards/IconCard';
import { Colxx } from '../../components/common/CustomBootstrap';

const Statistics = ({ data }) => {
  return (
    <Row className="icon-cards-row">
      {data.map((item, index) => {
        return (
          <Colxx lg="2" xl="2" className="mb-4" key={`icon_card_${index}`}>
            <IconCard {...item} className="mb-4" />
          </Colxx>
        );
      })}
    </Row>
  );
};
export default Statistics;
