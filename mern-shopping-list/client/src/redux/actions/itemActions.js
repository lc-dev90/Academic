import axios from "axios";
import {
  GET_ITEMS,
  DELETE_ITEM,
  ADD_ITEM,
  ITEMS_LOADING,
} from "../constants/types";

export const getItems = () => async (dispatch) => {
  dispatch(setItemsLoading());
  const { data } = await axios.get("/api/items");

  dispatch({
    type: GET_ITEMS,
    payload: data,
  });
};

export const addItem = (name) => async (dispatch) => {
  const body = {
    name: name,
  };
  const data = await axios.post("/api/items", body);
  dispatch({
    type: ADD_ITEM,
    payload: data.data,
  });
};

export const deleteItem = (id) => async (dispatch) => {
  const { data } = await axios.delete(`api/items/${id}`);

  dispatch({
    type: DELETE_ITEM,
    payload: id,
  });
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};
