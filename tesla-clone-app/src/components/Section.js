import React from "react";
import styled from "styled-components";

const Section = ({
  title,
  descritpion,
  backgroundImg,
  rightBtnText,
  leftBtnText,
}) => {
  return (
    <Container backgroundImg={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{descritpion}</p>
      </ItemText>
      <ButtonGroup>
        <LeftButton>{leftBtnText}</LeftButton>
        <RightButton>{rightBtnText}</RightButton>
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
  background-image: ${(props) => `url('images/${props.backgroundImg}')`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
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
  margin-bottom: 40px;
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
