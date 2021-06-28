import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ListItem = ({ image, name, rating, id }) => {
  return (
    <Link to={`/details/${id}`}>
      <Item>
        <img src={image} alt={name} />
        <div className="information">
          <h4>{name}</h4>
          <h4>{rating}</h4>
        </div>
      </Item>
    </Link>
  );
};

export default ListItem;

const Item = styled.div`
  width: 210px;
  background: #f1f1f1;
  box-shadow: 0 0 1px 1px rgba(20, 23, 28, 0.1),
    0 3px 1px 0 rgba(20, 23, 28, 0.1);
  margin: 1rem auto;
  cursor: pointer;
  display: inline-block;
  :hover {
    transform: scale(1.03);
  }

  img {
    width: 210px;
    height: 295px;
    object-fit: cover;
    max-width: 100%;
  }

  div {
    color: #171717;
    text-align: center;
    h4 {
      :nth-of-type(1) {
        font-size: 1rem;
        padding: 5px;
      }
      :nth-of-type(2) {
        color: #049372;
        padding: 5px;
      }
    }
  }
`;
