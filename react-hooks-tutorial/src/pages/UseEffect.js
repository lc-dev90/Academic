import React, { useState, useEffect } from "react";
import styled from "styled-components";
const UseEffect = () => {
  /* const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then((response) => response.json())
    .then((json) => setItems(json));
    /* const [resourceType, setResourceType] = useState("posts");
  }, [resourceType]); */
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <h1>WELCOME TO USEEFFECT HOOKS PAGE!</h1>
      <div>{windowWidth}</div>
      {/* <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h2>{resourceType}</h2>
      {items.map((item) => (
        <pre key={item.id}>{JSON.stringify(item)}</pre>
      ))} */}
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
