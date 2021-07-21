import { v4 as uuidv4 } from "uuid";
import { GET_ITEMS, DELETE_ITEM, ADD_ITEM } from "../constants/types";

const initialState = {
  products: [
    { id: uuidv4(), name: "Eggs" },
    { id: uuidv4(), name: "Gasoline" },
    { id: uuidv4(), name: "Tomatoe" },
    { id: uuidv4(), name: "Milk" },
  ],
};

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
      };
    case ADD_ITEM:
      return {
        ...state,
        products: [...state.products, { id: uuidv4(), name: action.payload }],
      };
    case DELETE_ITEM:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
