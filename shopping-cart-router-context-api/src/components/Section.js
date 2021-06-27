import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "./GlobalContext";

const Section = () => {
  const { state } = useContext(GlobalContext);
  console.log(state);
  return <SectionContainer>Section</SectionContainer>;
};

export default Section;

const SectionContainer = styled.section`
  box-shadow: 0 0 5px #ccc;
  padding: 15px 10px;
`;
