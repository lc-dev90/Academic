import React from "react";
import styled from "styled-components";

const Section = () => {
  return <Container>section</Container>;
};

export default Section;

const Container = styled.div`
  background-color: blue;
  width: 100%;
  height: 100vh;
  background-image: url("/images/model-s.jpg");
  background-size: cover;
`;
