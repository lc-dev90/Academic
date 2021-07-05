import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <Prod>
      <img src="" alt=""></img>
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

const Prod = styled.div``;
