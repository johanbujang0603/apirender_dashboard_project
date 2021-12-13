import React, { useEffect, useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
} from 'reactstrap';
import { NotificationManager } from "../../components/common/react-notifications";
import axios from 'axios';

const initialState = {
  code: '',
  value: null,
};

const AddNewCouponModal = ({
  modalOpen,
  toggleModal,
  fetchCouponList,
  updateItem,
  currentItem
}) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (currentItem) setState(currentItem);
  }, [currentItem])

  const addNetItem = () => {
    if (state.code === '' || state.value === null){
      NotificationManager.warning("Please input all fields", "Error", 3000);
      return;
    }
    if (state.code === null){
      NotificationManager.warning("Please input all fields", "Error", 3000);
      return;
    }
    const newItem = {
      value: state.value,
      code: state.code,
    };
    if (currentItem) {
      axios.post("/api/coupon/update", { ...newItem, id: currentItem._id })
      .then((res) => {
        fetchCouponList();
      })
      .catch((err) => {

      });
    } else {
      axios.post("/api/coupon/new", newItem)
      .then((res) => {
        fetchCouponList();
      })
      .catch((err) => {

      });
    }
    toggleModal();
    setState(initialState);
    updateItem();
  };

  return (
    <Modal
      isOpen={modalOpen}
      toggle={toggleModal}
      wrapClassName="modal-right"
      backdrop="static"
    >
      <ModalHeader toggle={toggleModal}>
        New Coupon
      </ModalHeader>
      <ModalBody>
        <Label className="mt-4">
          Code
        </Label>
        <Input
          type="text"
          defaultValue={state.code}
          onChange={(event) =>
            setState({ ...state, code: event.target.value })
          }
        />
        <Label className="mt-4">
          Value
        </Label>
        <Input
          type="text"
          defaultValue={state.value}
          onChange={(event) =>
            setState({ ...state, value: event.target.value })
          }
        />
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" outline onClick={toggleModal}>
          Cancel
        </Button>
        <Button color="primary" onClick={() => addNetItem()}>
          Submit
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddNewCouponModal;
