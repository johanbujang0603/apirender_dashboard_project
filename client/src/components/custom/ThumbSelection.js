import React from 'react';
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CustomInput,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { Colxx } from '../../components/common/CustomBootstrap';

const ThumbSelection = ({ item, isSelected, onCheckItem }) => {
  return (
    <Colxx sm={3} lg={2} xl={2} className="mb-3">
        <Card
            onClick={(event) => onCheckItem(event, item.value)}
            className={classnames({
              active: isSelected === item.value ? true : false,
            })}
        >
        <div className="position-relative text-center">
            <NavLink to="#" className="w-sm-100">
              <CardImg top alt={item.label} src={item.img_src} style={{width: '100%'}} />
            </NavLink>
        </div>
        <CardBody className="d-flex align-items-center justify-content-center">
            <CustomInput
            className="item-check mb-0 mr-1"
            type="checkbox"
            onChange={() => {}}
            checked={ item.value === isSelected ? true : false }
            id={`check_${item.value}`}
            label=""
            />
            <CardText className="text-small mb-0 font-weight-light">
            {item.label}
            </CardText>
        </CardBody>
        </Card>
    </Colxx>
  );
};

export default React.memo(ThumbSelection);