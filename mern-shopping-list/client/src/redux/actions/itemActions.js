import { GET_ITEMS, DELETE_ITEM, ADD_ITEM } from "../constants/types";

export const getItems = () => {
  return {
    type: GET_ITEMS,
  };
};

export const addItem = (name) => {
  return {
    type: ADD_ITEM,
    payload: name,
  };
};

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload: id,
  };
};