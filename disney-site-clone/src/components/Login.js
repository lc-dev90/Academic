import React from "react";
import styled from "styled-components";

const Login = () => {
  return <Container>Login</Container>;
};

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;
