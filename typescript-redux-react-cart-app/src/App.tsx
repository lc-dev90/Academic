import React from "react";
import "./App.css";

import ProductsList from "./Products/ProductsList";
import ProductForm from "./Products/ProductForm";
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductsList />
        <ProductForm />
      </div>
    </Provider>
  );
};

export default App;
