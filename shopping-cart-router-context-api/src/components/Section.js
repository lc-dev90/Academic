import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

import Products from "./section/Products";
import Details from "./section/Details";

const Section = () => {
  return (
    <SectionContainer>
      <Route path="/product" component={Products} exact></Route>
      <Route path="/product/:id" component={Details}></Route>
    </SectionContainer>
  );
};

export default Section;

const SectionContainer = styled.section`
  box-shadow: 0 0 5px #ccc;
  padding: 15px 10px;
`;
