import React from "react";
import styled from "styled-components";
import CartItem from "../components/CartItem";

const CartScreen = () => {
  return (
    <CartContainer>
      <div className="left">
        <h2>Shopping Cart</h2>
        <CartItem />
      </div>
      <div className="right">
        <div className="info">
          <p>Subtotal (0) items</p>
          <p>$ 499.99</p>
        </div>
        <div>
          <button>Procced To Checkout</button>
        </div>
      </div>
    </CartContainer>
  );
};

export default CartScreen;

const CartContainer = styled.div``;
