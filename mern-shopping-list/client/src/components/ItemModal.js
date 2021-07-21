import React, { useState } from "react";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { addItem } from "../redux/actions/itemActions";
import { useDispatch } from "react-redux";

const ItemModal = () => {
  const [modal, setModal] = useState(false);
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const toggleModal = () => {
    setModal(!modal);
  };

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addItem(inputText));
    setModal(!modal);
  };

  return (
    <div>
      <Button
        color="dark"
        style={{ marginBottom: "2rem" }}
        onClick={toggleModal}
      >
        Add Item
      </Button>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Add To Shopping List</ModalHeader>
        <ModalBody>
          <Form onSubmit={submitHandler}>
            <FormGroup>
              <Label for="item">Item</Label>
              <Input
                type="text"
                name="name"
                id="item"
                placeholder="Add Shopping Item"
                onChange={inputHandler}
              />
              <Button color="dark" style={{ marginTop: "1rem" }}>
                Ok
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ItemModal;
