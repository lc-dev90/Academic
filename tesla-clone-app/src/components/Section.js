import React from "react";
import styled from "styled-components";

const Section = () => {
  return (
    <Container>
      <ItemText>
        <h1>Model S</h1>
        <p>Order Online for Touchless Delivery</p>
      </ItemText>
      <ButtonGroup>
        <LeftButton>Custom Order</LeftButton>
        <RightButton>Existing Inventory</RightButton>
      </ButtonGroup>
      <DownArrow src="/images/down-arrow.svg" />
    </Container>
  );
};

export default Section;

const Container = styled.div`
  background-color: blue;
  width: 100%;
  height: 100vh;
  background-image: url("/images/model-s.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemText = styled.div`
  text-align: center;
  padding-top: 15vh;
  flex-grow: 1;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 250px;
  border-radius: 100px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  opacity: 0.85;
  margin: 8px;
  cursor: pointer;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  color: rgba(23, 26, 32, 0.8);
  opacity: 0.65;
`;

const DownArrow = styled.img`
  height: 40px;
  cursor: pointer;
  animation: animate-down infinite 3s;
  margin-bottom: 20px;
`;
