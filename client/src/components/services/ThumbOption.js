import React, { useState, useEffect } from 'react';
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  Button,
  Input
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Colxx } from '../../components/common/CustomBootstrap';

const ThumbSelection = ({ subOption, parentOption, addedItems, addSubOption }) => {
  const [thumbQty, setThumbQty] = useState(0);
  useEffect(() => {  
    if (addedItems.length === 0)
        setThumbQty(0);
      // check item if there is same service
    addedItems.find((o, i) => {
        if (o.value === subOption.value) {
            setThumbQty(o.quantity);
            return true; // stop searching
        }
    });
  }, [addedItems]);
  const increament = () => {
    let quantity = thumbQty + 1;
    let item = {
        name: subOption.name,
        price: subOption.price,
        value: subOption.value,
        quantity: quantity,
        depth: 3,
        parent: parentOption.name,
        totalPrice: parseFloat(subOption.price) * quantity,
    }
    addSubOption(item);
    setThumbQty(quantity);
  }
  const decrement = () => {
    let quantity = thumbQty;
    quantity = quantity > 0 ? quantity - 1 : 0;
    let item = {
        name: subOption.name,
        price: subOption.price,
        value: subOption.value,
        quantity: quantity,
        depth: 3,
        parent: parentOption.name,
        totalPrice: parseFloat(subOption.price) * quantity,
    }
    addSubOption(item);
    setThumbQty(quantity);
  }

  return (
    <Colxx sm={6} lg={6} xl={6} className="mb-3">
        <Card>
        <p className="text-small text-center p-2 mb-0 font-weight-light">{subOption.name}</p>
        <div className="position-relative text-center">
            <NavLink to="#" className="w-sm-100">
              <CardImg top alt={subOption.name} src={subOption.img} style={{width: '100%'}} />
            </NavLink>
        </div>
        <CardBody className="text-center" style={{padding: '0.5rem'}}>
          <label className="">Select number of floors</label>
          <div className="d-flex items-center justify-content-center">
            <div className="option-quantity-input mb-1">                
                <Button color="primary" className="default" onClick={() => decrement()} >
                &mdash;
                </Button>
                <Input type="text" value={thumbQty} readOnly/>
                <Button color="primary" className="default" onClick={() => increament()} >
                &#xff0b;
                </Button>
            </div>
            </div>
            <CardText className="text-small mb-0 font-weight-light">
              <span className="text-primary">${subOption.price}&nbsp;/&nbsp;{subOption.unit}</span>
            </CardText>
        </CardBody>
        </Card>
    </Colxx>
  );
};

export default React.memo(ThumbSelection);