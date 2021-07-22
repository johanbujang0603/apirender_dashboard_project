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

const MultipleSelectOption = ({
  parent,
  option,
  addServices,
  currentItems,
  depth
}) => {
  const [isChecked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(false);
    // check item if there is same service
    let searchItem = currentItems.find((o, i) => {
      if (o.value === option.value) {
        setChecked(true);
        return true; // stop searching
      }
    });
  });

  const handleChangeCheckBox = (s) => {
    let item = {
      name: option.name,
      price: option.price,
      value: option.value,
      quantity: 1,
      depth: depth,
      type: "CHECKBOX",
      totalPrice: parseFloat(option.price),
    };
    if (depth === 3)
      item.parent = parent.name;
    addServices(item);
    setChecked(!isChecked);
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
                    className="text-left"
                    type="checkbox"
                    name={`CHECKBOX_${option.value}`}
                    id={`CHECKBOX_${option.value}`}
                    label={option.name}
                    value={option.value}
                    onChange={handleChangeCheckBox}
                    checked={isChecked}
                  />
                </Label>
              </FormGroup>
              <div className="option-quantity-input">
                {
                  option.price > 0 && (
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                      <Input value={option.price} readOnly />
                    </InputGroup>
                  )
                }
              </div>
            </div>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(MultipleSelectOption);
