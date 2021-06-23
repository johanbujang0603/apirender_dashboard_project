import React, { useState, useEffect } from "react";
import { Row, Card, Button, Collapse, Input } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Colxx } from "../../components/common/CustomBootstrap";
import Lightbox from "react-image-lightbox";
import Switch from 'rc-switch';
import 'rc-switch/assets/index.css';

import SelectionOption from "./SelectionOption";
import MultipleSelectOption from "./MultipleSelectOption";
import SubOption from "./SubOption";
import ThumbOption from "./ThumbOption";

const ServiceOption = ({
  rootItem,
  option,
  addServices,
  addSelectionService,
  currentItems,
  serviceQuantity,
}) => {
  const [checkOption, setCheckOption] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [serviceQty, setServiceQty] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [curIndex, setCurIndex] = useState(0);

  useEffect(() => {
    if (currentItems.length == 0) setServiceQty(0);
    // check item if there is same service
    let searchItem = currentItems.find((o, i) => {
      if (o.value === option.value) {
        if (o.type === "YES_OR_NO") {
          setCheckOption(true);
        }
        else {
          setServiceQty(o.quantity);
        }
        return true; // stop searching
      }
    });
  });

  const increament = () => {
    if (rootItem.price && serviceQuantity === 0)
      return;
    let quantity = serviceQty + 1;
    const totalPrice = option.first_price ? option.first_price + (parseFloat(option.price) * (quantity - 1)) : parseFloat(option.price) * quantity;
    let item = {
      name: option.name,
      price: option.price,
      value: option.value,
      quantity: quantity,
      depth: 2,
      totalPrice: totalPrice,
    };
    addServices(item);
    setServiceQty(quantity);
  };

  const decrement = () => {
    if (rootItem.price && serviceQuantity === 0)
      return;
    let quantity = serviceQty;
    quantity = quantity > 0 ? quantity - 1 : 0;
    const totalPrice = option.first_price ? option.first_price + (parseFloat(option.price) * (quantity - 1)) : parseFloat(option.price) * quantity;
    let item = {
      name: option.name,
      price: option.price,
      value: option.value,
      quantity: quantity,
      depth: 2,
      totalPrice: totalPrice,
    };
    addServices(item);
    setServiceQty(quantity);
  };

  const handleCheckOption = (check) => {
    let item = {
      name: option.name,
      value: option.value,
      price: option.price,
      quantity: 1,
      type: "YES_OR_NO",
      checked: check,
      depth: 2,
      totalPrice: parseFloat(option.price)
    }
    addServices(item);
    setCheckOption(check);
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
              <a
                href="#!"
                onClick={(e) => option.is_collapse !== false ? setIsOpen(!isOpen) : e.preventDefault() }
                className={`${option.is_collapse === false ? 'text-black' : 'color-theme-1'}`}
              >
                { option.is_collapse !== false && ( <i className="simple-icon-arrow-down align-middle mr-2" /> ) }
                { option.name }
                { option.price && !option.first_price && ( <span className="mb-0 ml-2 text-muted">${option.price} / {option.unit ? option.unit : 'photo'}</span> ) }
              </a>
              { option.price && (
                <>
                  {
                    option.type === "YES_OR_NO" ? (
                      <div className="option-quantity-input">
                        <Switch
                          className="custom-switch custom-switch-primary"
                          checked={checkOption}
                          onChange={handleCheckOption}
                        />
                      </div>
                    ) : (
                      <div className="option-quantity-input">
                        <Button color="primary" className="default" onClick={() => decrement()}>
                          &mdash;
                        </Button>
                        <Input type="text" value={serviceQty} readOnly />
                        <Button color="primary" className="default" onClick={() => increament()}>
                          &#xff0b;
                        </Button>
                      </div>
                    )
                  }
                </>
              )}
            </div>
            {
              option.is_collapse === false ? (
                <div className="text-left mt-2">
                  <p className="text-muted text-small">
                    {option.desc}
                    {option.example_images && (
                      <NavLink
                        className="text-danger"
                        to={"#!"}
                        onClick={() => {
                          setLightboxOpen(true);
                          setCurIndex(0);
                        }}
                        locaiont={{}}
                      >
                        &nbsp;(View Example)&nbsp;
                      </NavLink>
                    )}
                    {
                      option.example_link && (
                        <a 
                          target='_blank'
                          href={option.example_link}
                          className="ml-1 text-small text-danger" >
                          &nbsp;(View Example)&nbsp;
                      </a>
                      )
                    }
                  </p>
                  <ul className="list-unstyled">
                    {option.items &&
                      option.items.map((item, index) => {
                        if (option.itemsType === "SELECT_ONE") {
                          return (
                            <SelectionOption
                              key={index}
                              parent={option}
                              option={item}
                              addServices={addServices}
                              currentItems={currentItems}
                              depth={3}
                            /> 
                          )
                        }
                        else if (option.itemsType === "SELECT_MULTIPLE") {
                          return (
                            <MultipleSelectOption
                              key={index}
                              parent={option}
                              option={item}
                              addServices={addServices}
                              currentItems={currentItems}
                              depth={3}
                            />
                          )
                        }
                        else {
                          return (
                            <SubOption
                              key={index}
                              rootItem={rootItem}
                              subOption={item}
                              addSubOption={addServices}
                              currentItems={currentItems}
                              parentOption={option}
                              parentQuantity={serviceQty}
                              rootQuantity={serviceQuantity}
                            />
                          )
                        }
                      })}
                  </ul>
                  {option.thumb_items &&
                    <Row>
                    {
                      option.thumb_items.map((item, index) => {
                        return (
                          <ThumbOption
                            key={index}
                            subOption={item}
                            addSubOption={addServices}
                            addedItems={currentItems}
                            parentOption={option}
                          />
                        );
                      })
                    }
                    </Row>
                  }
                </div>
              ) : (
                <Collapse isOpen={isOpen}>
                  <div className="text-left mt-2">
                    <p className="text-muted text-small">
                      {option.desc}
                      {option.example_images && (
                        <NavLink
                          className="text-danger"
                          to={"#!"}
                          onClick={() => {
                            setLightboxOpen(true);
                            setCurIndex(0);
                          }}
                          locaiont={{}}
                        >
                          &nbsp;(View Example)&nbsp;
                        </NavLink>
                      )}
                      {
                        option.example_link && (
                          <a 
                            target='_blank'
                            href={option.example_link}
                            className="ml-1 text-small text-danger" >
                            &nbsp;(View Example)&nbsp;
                        </a>
                        )
                      }
                    </p>
                    <ul className="list-unstyled">
                      {option.items &&
                        option.items.map((item, index) => {
                          if (option.itemsType === "SELECT_ONE") {
                            return (
                              <SelectionOption
                                key={index}
                                parent={option}
                                option={item}
                                addServices={addServices}
                                currentItems={currentItems}
                                depth={3}
                              /> 
                            )
                          }
                          else if (option.itemsType === "SELECT_MULTIPLE") {
                            return (
                              <MultipleSelectOption
                                key={index}
                                parent={option}
                                option={item}
                                addServices={addServices}
                                currentItems={currentItems}
                                depth={3}
                              />
                            )
                          }
                          else {
                            return (
                              <SubOption
                                key={index}
                                rootItem={rootItem}
                                subOption={item}
                                addSubOption={addServices}
                                currentItems={currentItems}
                                parentOption={option}
                                parentQuantity={serviceQty}
                                rootQuantity={serviceQuantity}
                              />
                            )
                          }
                        })}
                    </ul>
                    {option.thumb_items &&
                      <Row>
                      {
                        option.thumb_items.map((item, index) => {
                          return (
                            <ThumbOption
                              key={index}
                              subOption={item}
                              addSubOption={addServices}
                              addedItems={currentItems}
                              parentOption={option}
                            />
                          );
                        })
                      }
                      </Row>
                    }
                  </div>
                </Collapse>
              )
            }
            <Collapse isOpen={isOpen}>
              
            </Collapse>
          </Card>
        </Colxx>
      </Row>
      {lightboxOpen && (
        <Lightbox
          mainSrc={option.example_images[curIndex]}
          nextSrc={
            option.example_images[(curIndex + 1) % option.example_images.length]
          }
          prevSrc={
            option.example_images[
              (curIndex + option.example_images.length - 1) %
                option.example_images.length
            ]
          }
          onCloseRequest={() => setLightboxOpen(false)}
          onMovePrevRequest={() =>
            setCurIndex(
              (curIndex + option.example_images.length - 1) %
                option.example_images.length
            )
          }
          onMoveNextRequest={() =>
            setCurIndex((curIndex + 1) % option.example_images.length)
          }
        />
      )}
    </>
  );
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(ServiceOption);
