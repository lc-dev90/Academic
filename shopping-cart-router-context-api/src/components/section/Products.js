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
          <div className="context">
            <h3>
              <Link to={`/product/${product._id}`}>{product.title}</Link>
            </h3>
            <span>${product.price}</span>
            <p>{product.description}</p>
            <button>Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
