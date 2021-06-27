import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../GlobalContext";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Details = (props) => {
  const [products] = useContext(GlobalContext);

  const [state, setState] = useState([]);

  const getProduct = () => {
    if (props.match.params.id) {
      const res = products;
      const [data] = res.filter(
        (product) => product._id === props.match.params.id
      );
      setState([data]);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const product = state;

  return (
    <>
      {product.map((item) => (
        <DetailsContainer key={item._id}>
          <img src={item.src} alt={item.title} />
          <div className="box">
            <div className="row">
              <h2>{item.title}</h2>
              <span>${item.price}</span>
            </div>
            <p>
              {item.colors.map((color, index) => (
                <button
                  key={index}
                  style={{ backgroundColor: `${color}` }}
                ></button>
              ))}
            </p>
            <p>{item.description}</p>
            <p>{item.content}</p>
            <Link to="/cart" className="cart">
              Add to cart
            </Link>
          </div>
        </DetailsContainer>
      ))}
    </>
  );
};

export default Details;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 50px 0;
  img {
    max-width: 500px;
    min-width: 290px;
    height: 300px;
    width: 100%;
    display: block;
    object-fit: cover;
  }
  .box {
    max-width: 500px;
    min-width: 290px;
    margin: 25px;
    .cart {
      background: #333;
      color: white;
      text-decoration: none;
      padding: 10px 25px;
      display: inline-block;
    }
    .row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      h2 {
        text-transform: uppercase;
        letter-spacing: 2px;
      }
      span {
        color: crimson;
      }
    }
    p {
      line-height: 1.5;
      margin: 15px 0;
      button {
        width: 30px;
        height: 30px;
        border: 1px solid #333;
        outline: none;
        margin-right: 5px;
        cursor: pointer;
      }
    }
  }
`;
