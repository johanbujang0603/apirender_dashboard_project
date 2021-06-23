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

const ProjectCategoryWidget = ({ category, isSelected, onCheckItem, step }) => {
  return (
    <Colxx sm={6} lg={4} xl={4} className="mb-3">
        <Card
            onClick={(event) => onCheckItem(event, category.value, step)}
            className={classnames({
              active: isSelected === category.value ? true : false,
            })}
        >
        <div className="position-relative text-center">
            <NavLink to="#" className="w-40 w-sm-100">
              <CardImg top alt={category.desc} src={category.img} style={{width: '40%'}} />
            </NavLink>
        </div>
        <CardBody className="d-flex align-items-center justify-content-center">
            <CustomInput
            className="item-check mb-0 mr-1"
            type="checkbox"
            onChange={() => {}}
            checked={ isSelected.includes(category.value) ? true : false }
            id={`check_${category.id}`}
            label=""
            />
            <CardText className="text-default text-one mb-0 font-weight-light">
            {category.desc}
            </CardText>
        </CardBody>
        </Card>
    </Colxx>
  );
};

export default React.memo(ProjectCategoryWidget);