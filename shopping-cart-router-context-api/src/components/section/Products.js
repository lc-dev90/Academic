import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../GlobalContext";

const Products = () => {
  const { state } = useContext(GlobalContext);
  const { products } = state;
  console.log(products);
  return (
    <div id="product">
      {products.map((product) => (
        <div className="card" key={product._id}>
          <Link to={`/product/${product._id}`}>
            <img src={product.src} alt={product.name} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
