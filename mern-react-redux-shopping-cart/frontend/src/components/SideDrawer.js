import React from "react";
import styled from "styled-components";

const SideDrawer = ({ show }) => {
  return <Side show={show}></Side>;
};

export default SideDrawer;

const Side = styled.div`
  width: 70%;
  background: #fff;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  transform: ${(props) =>
    props.show ? "transform: translateX(0)" : "translateX(-100%)"};
  transition: all 0.3s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
