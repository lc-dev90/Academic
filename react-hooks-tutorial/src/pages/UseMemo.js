import React, { useState, useMemo, useEffect } from "react";

import styled from "styled-components";

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme changed");
  }, [themeStyles]);
  return (
    <Container>
      <h1>Welcome to UseMemo Hook Page</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      ></input>
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </Container>
  );
};

function slowFunction(num) {
  console.log("Calling Slow Function");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

export default UseMemo;

const Container = styled.div`
  padding: 30px;
  width: 100%;
  font-size: 2rem;
  input {
    padding: 20px;
    display: block;
    font-size: 2rem;
  }
  button {
    padding: 20px;
    display: block;
    font-size: 2rem;
  }
  h2 {
    margin-bottom: 30px;
  }
  div {
    font-size: 2rem;
    padding: 20px;
    button {
      padding: 20px;
      font-size: 2rem;
      cursor: pointer;
    }
  }
`;
