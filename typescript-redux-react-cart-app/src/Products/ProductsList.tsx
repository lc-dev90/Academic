import React, { useState } from "react";
import { getProductsSelector } from "./products.slice";
import { useSelector } from "react-redux";

interface ProductsListProps {}

const ProductsList: React.FC<ProductsListProps> = ({}) => {
  const products = useSelector(getProductsSelector);
  return (
    <div>
      <h1>Games List</h1>
      {products.map((product) => (
        <div key={product.id}>
          <span>
            {product.title} : {product.price}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
