import React, { useState } from "react";
import styled from "styled-components";

const UseRef = () => {
  const [name, setName] = useState("");
  return (
    <Container>
      <h2>Welcome to UseRef Hook Page</h2>
      <div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        ></input>
        <p>My name is: {name}</p>
      </div>
    </Container>
  );
};

export default UseRef;
const Container = styled.div`
  padding: 30px;
  width: 100%;
  h2 {
    margin-bottom: 30px;
  }
  div {
    font-size: 2rem;
    input {
      padding: 20px;
      font-size: 2rem;
      margin-bottom: 10px;
      border: 1px solid black;
    }
    button {
      padding: 20px;
      font-size: 2rem;
      cursor: pointer;
    }
  }
`;
