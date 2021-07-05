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
      <button className="delete-btn">
        <i className="fas fa-trash"></i>
      </button>
    </CartItemContainer>
  );
};

export default CartItem;

const CartItemContainer = styled.div``;
