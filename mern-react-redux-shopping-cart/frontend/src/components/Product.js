import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <Prod>
      <img
        src="https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
        alt="product name"
      ></img>
      <div>
        <p>Product 1</p>
        <p>
          Lorem ipsun dolor natate sfsare adforsal gorlisk mulitapete smam
          tiluski numipo retokil nanadal retemo
        </p>
        <p>$ 499.99</p>
        <Link to={`/product/${1111}`}> View</Link>
      </div>
    </Prod>
  );
};

export default Product;

const Prod = styled.div`
  width: 300px;
  padding: 1rem;
  background: #fff;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  margin: 8px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-direction: column;

  img {
    width: 100%;
    height: 170px;
    object-fit: contain;
    border-radius: 8px;
  }

  p {
    margin-bottom: 8px;
    &:nth-of-type(3) {
      font-weight: bold;
    }
    &:nth-of-type(1) {
      font-size: 1rem;
      overflow: hidden;
    }
    &:nth-of-type(2) {
      font-size: 0.8rem;
    }
  }
  a {
    display: block;
    text-decoration: none;
    text-align: center;
    color: #171717;
    width: 100%;
    padding: 8px 16px;
    background-color: #f4f4f4;
    border: 1px solid #171717;
    font-size: 1rem;
    &:hover {
      background: #171717;
      color: #f4f4f4;
    }
  }

  @media (max-width: 1232px) {
    width: 360px;
  }

  @media (max-width: 1115px) {
    width: 330px;
  }

  @media (max-width: 1028px) {
    width: 300px;
  }

  @media (max-width: 950px) {
    width: 400px;
  }

  @media (max-width: 830px) {
    width: 330px;
  }

  @media (max-width: 700px) {
    width: 290px;
  }

  @media (max-width: 630px) {
    width: 450px;
  }

  @media (max-width: 500px) {
    width: 350px;
  }

  @media (max-width: 400px) {
    width: 300px;
  }
`;
