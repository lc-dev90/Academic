import React from "react";
import styled from "styled-components";

const Alert = ({ type, message }) => {
  return (
    <AlertContainer className={type}>
      <i className="fas fa-info-circle"></i> {message}
    </AlertContainer>
  );
};

export default Alert;

const AlertContainer = styled.div`
  padding: 10px 17px;
  font-size: 20px;
  border: 1px solid #171717;
  margin: 1rem 0;
`;
