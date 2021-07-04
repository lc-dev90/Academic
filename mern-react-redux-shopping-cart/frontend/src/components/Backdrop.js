import React from "react";
import styled from "styled-components";

const Backdrop = ({ show, setSideToggle }) => {
  return (
    show && (
      <Back onClick={() => setSideToggle((prevState) => !prevState)}></Back>
    )
  );
};

export default Backdrop;

const Back = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
`;
