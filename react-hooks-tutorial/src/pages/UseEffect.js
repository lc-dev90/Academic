import React, { useState } from "react";
import styled from "styled-components";
const UseEffect = () => {
  const [resourceType, setResourceType] = useState("posts");
  return (
    <Container>
      <h1>WELCOME TO USEEFFECT HOOKS PAGE!</h1>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h2>{resourceType}</h2>
    </Container>
  );
};

export default UseEffect;

const Container = styled.div`
  padding: 30px;
  width: 100%;
  h1 {
    margin-bottom: 20px;
  }
  h2 {
    margin-top: 30px;
  }
  div {
    font-size: 2rem;
    button {
      padding: 20px;
      margin-right: 1rem;
      font-size: 2rem;
      cursor: pointer;
    }
  }
`;
