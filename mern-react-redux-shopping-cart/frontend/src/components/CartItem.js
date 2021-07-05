import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CartItem = () => {
  return (
    <CartItemContainer>
      <div className="image">
        <img
          src="https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
          alt="product name"
        />
      </div>
      <Link to={`/product/${111}`} className="cart-item-name">
        <p>Product 1</p>
      </Link>

      <p className="price">$499.99</p>
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <button>
        <i className="fas fa-trash"></i>
      </button>
    </CartItemContainer>
  );
};

export default CartItem;

const CartItemContainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr 1fr;
  gap: 8px;
  background: #fff;
  border-radius: 2px;
  place-items: center;
  margin-bottom: 8px;

  .cart-item-name {
    text-decoration: none;
    color: #171717;
    &:hover {
      color: #dd219e;
    }
  }

  select {
    padding: 10px 17px;
  }

  button {
    padding: 10px 17px;
    color: red;
    background: #f4f4f4;
    border: 1px solid #171717;
    cursor: pointer;
    transition: all 0.3s ease-out;

    &:hover,
    &:active,
    &:focus {
      background: #171717;
      transform: scale(1.2);
    }
  }

  @media (max-width: 700px) {
    .cart-item-name {
      font-size: 0.8rem;
    }

    select,
    button {
      padding: 8px 13px;
    }

    .price {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 700px) {
    .cart-item-name {
      font-size: 0.6rem;
    }

    select,
    button {
      padding: 5px 8px;
    }

    .price {
      font-size: 0.6rem;
    }
  }
`;
