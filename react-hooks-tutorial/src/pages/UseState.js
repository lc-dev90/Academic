import React, { useState } from "react";
import styled from "styled-components";

const UseState = () => {
  //const [count, setCount] = useState(0); // 0 will reload every time the component render
  const [count, setCount] = useState(() => {
    console.log("run function");
    return 0;
  });

  const [state, setState] = useState({ count: 0, theme: "dark" });

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    setState((prevState) => {
      return {
        ...prevState,
        theme: "blue",
      };
    });
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <Container>
      <h2>UseState Hook Page</h2>
      <div>
        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
      </div>
    </Container>
  );
};

export default UseState;

const Container = styled.div`
  padding: 30px;
  width: 100%;
  h2 {
    margin-bottom: 30px;
  }
  div {
    font-size: 2rem;
    button {
      padding: 20px;
      font-size: 2rem;
      cursor: pointer;
    }
  }
`;

// you can only use Hooks inside function component - not aplicable in class components

// every time your component render, your hooks must execute in exact same order

// it's not allowed put a useState hook inside of if statement , functions, loops, nested in anything
// must be in a top level component
