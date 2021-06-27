import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GlobalContext } from "../GlobalContext";

const Products = () => {
  const [products] = useContext(GlobalContext);
  return (
    <Product id="product">
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
    </Product>
  );
};

export default Products;

const Product = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .card {
    min-width: 300px;
    min-height: 400px;
    border: 1px solid #eee;
    overflow: hidden;
    padding: 10px;
    box-shadow: 2px 8px 20px #ddd;
    transition: 0.5s linear;
    &:hover {
      box-shadow: none;
    }
    img {
      max-width: 300px;
      width: 100%;
      height: 100%;
      max-height: 300px;
      display: block;
      object-fit: cover;
    }
    h3 {
      text-transform: uppercase;
      margin: 10px 0;
      a {
        text-decoration: none;
        color: #333;
        &:hover {
          color: crimson;
        }
      }
    }
    span {
      color: crimson;
    }

    p {
      margin: 10px 0;
    }
    button {
      border: none;
      outline: none;
      background: #333;
      color: white;
      width: 100%;
      height: 40px;
      display: block;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin: 15px 0;
    }
  }
`;
