import React, { useState, useEffect } from 'react';
import {
  Button,
  Input,
} from 'reactstrap';
import Lightbox from 'react-image-lightbox';
import { NavLink } from 'react-router-dom';

const SubOption = ({ 
  rootItem,
  subOption,
  addSubOption,
  currentItems,
  rootQuantity,
  parentQuantity,
  parentOption
}) => {
    const [serviceQty, setServiceQty] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [curIndex, setCurIndex] = useState(0);

    useEffect(() => {  
      if (currentItems.length == 0)
          setServiceQty(0);
        // check item if there is same service
      let searchItem = currentItems.find((o, i) => {
          if (o.value === subOption.value) {
              setServiceQty(o.quantity);
              return true; // stop searching
          }
      });
    }, [currentItems]);

    const checkSiblingQty = () => {
      let searchResult = false;
      currentItems.find((o, i) => {
        if (o.parent === parentOption.name && o.depth === 3 && o.quantity >= 1) {
          searchResult = true;
          return true;
        }
      });
      return searchResult;
    }

    const increament = () => {
      if (subOption.required === "AT_LEAST_ONE" && !checkSiblingQty()) return;
      if (rootItem.price && rootQuantity == 0) {
        setServiceQty(0);
        return;
      }
      if (parentOption.price && serviceQty + 1 > parentQuantity)
        return;
      let quantity = serviceQty + 1;
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
      setServiceQty(quantity);
    }
    const decrement = () => {
      if (subOption.required === "AT_LEAST_ONE" && !checkSiblingQty()) return;
      if (rootItem.price && rootQuantity == 0) {
        setServiceQty(0);
        return;
      }
      let quantity = serviceQty;
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
      setServiceQty(quantity);
    }

  return (
    <li className="mt-1 mb-1">
        <div className="d-flex" style={{"alignItems": "center", "justifyContent": "space-between"}}>
        <span className="mb-0 text-default color-theme-1">{subOption.name}
          <span className="ml-2 text-muted">
          {
            subOption.price > 0 && (
              <>
              {subOption.price} / {subOption.unit ? subOption.unit : 'photo'}
              </>
            )
          }
          </span>
        </span>
        <div className="option-quantity-input">                
            <Button color="primary" className="default" onClick={() => decrement()} >
            &mdash;
            </Button>
            <Input type="text" value={serviceQty} readOnly/>
            <Button color="primary" className="default" onClick={() => increament()} >
            &#xff0b;
            </Button>
        </div>
        </div>
        {
          subOption.example_images && (
            <NavLink 
                to={'#'}
                className="ml-1 text-small text-danger"
                onClick={() => {
                    setLightboxOpen(true);
                    setCurIndex(0);
                }}
                location={{}}
            >
              &nbsp;(View Example)&nbsp;
            </NavLink>
          )
        }
        {
          subOption.example_link && (
            <a 
              target='_blank'
              href={subOption.example_link}
              className="ml-1 text-small text-danger" >
              &nbsp;(View Example)&nbsp;
           </a>
          )
        }
        {lightboxOpen && (
            <Lightbox
                mainSrc={subOption.example_images[curIndex]}
                nextSrc={subOption.example_images[(curIndex + 1) % subOption.example_images.length]}
                prevSrc={subOption.example_images[(curIndex + subOption.example_images.length - 1) % subOption.example_images.length]}
                onCloseRequest={() => setLightboxOpen(false)}
                onMovePrevRequest={() =>
                    setCurIndex((curIndex + subOption.example_images.length - 1) % subOption.example_images.length)
                }
                onMoveNextRequest={() =>
                    setCurIndex((curIndex + 1) % subOption.example_images.length)
                }
            />
        )}
    </li>
  );
};

/* React.memo detail : https://reactjs.org/docs/react-api.html#reactpurecomponent  */
export default React.memo(SubOption);
