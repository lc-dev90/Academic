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

const CartContainer = styled.div`
  display: flex;
  max-width: 1300px;
  margin: 2rem auto;
  h2 {
    margin-bottom: 1rem;
  }

  .left {
    flex: 0.7;
    margin-right: 1rem;
    background: transparent;
    padding: 1rem;
  }

  .right {
    flex: 0.3;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    height: fit-content;
    .info {
      p {
        padding: 8px;
        &:first-child {
          font-weight: bold;
        }
        &:last-child {
          border: none;
        }
      }
    }
    div {
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      padding: 1rem;
      button {
        padding: 10px 17px;
        width: 100%;
        background: #171717;
        color: #f4f4f4;
        border: 1px solid #171717;
        cursor: pointer;

        &:hover {
          opacity: 0.9;
        }
      }
    }
  }

  @media (max-width: 1320px) {
    max-width: 900px;
  }

  @media (max-width: 960px) {
    max-width: 800px;
  }

  @media (max-width: 960px) {
    flex-direction: column;

    .right {
      margin: 1rem;
    }
  }
`;
