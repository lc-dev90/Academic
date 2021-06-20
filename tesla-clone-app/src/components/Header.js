import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <a href="#">
        <img src="/images/logo.svg" alt="Logo" />
      </a>
    </Container>
  );
};

export default Header;

const Container = styled.div``;
