import React, { useState, useEffect } from "react";
import {
  Row,
  Card,
  InputGroup,
  InputGroupAddon,
  Input,
  FormGroup,
  Label,
  CustomInput
} from "reactstrap";
import { Colxx } from "../../components/common/CustomBootstrap";

const SelectionOption = ({
  parent,
  option,
  addServices,
  currentItems,
  depth
}) => {
  const handleChangeRadio = () => {
    let item = {
      name: option.name,
      price: option.price,
      value: parent.value,
      quantity: 1,
      depth: depth,
      type: "RADIO",
      radioValue: option.value,
      totalPrice: parseFloat(option.price),
    };
    if (depth === 3)
      item.parent = parent.name;
    addServices(item);
  }
  return (
    <>
      <Row className="mb-2">
        <Colxx sm="12" lg="12" md="12">
          <Card className="pt-3 pb-3 pl-3 pr-3">
            <div
              className="d-flex flex-grow-1 min-width-zero"
              style={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <FormGroup check>
                <Label check>
                  <CustomInput
                    type="radio"
                    name={`RADIO_${option.value}`}
                    id={`RADIO_${option.value}`}
                    label={option.name}
                    value={option.value}
                    onChange={handleChangeRadio}
                    checked={currentItems.find(e => e.radioValue === option.value) ? true : false}
                  />
                </Label>
              </FormGroup>
              <div className="option-quantity-input">
                {
                  option.price !== 0 && (
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                  <Input value={option.price === 0 ? 'Free' : option.price} readOnly/>
                    </InputGroup>
                  )
                }
              </div>
            </div>
            {
              option.desc && (
                <p className="text-left text-muted text-small mb-0 ml-4">{option.desc}</p>
              )
            }
          </Card>
        </Colxx>
      </Row>
    </>
  );
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(SelectionOption);
