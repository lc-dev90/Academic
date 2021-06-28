import React from "react";
import spinner from "../images/spin.gif";
import styled from "styled-components";

const Loader = () => {
  return (
    <Loading>
      <img src={spinner} alt="Loading" />
    </Loading>
  );
};

export default Loader;

const Loading = styled.div`
  img {
    margin: 2rem auto;
    display: block;
  }
`;
