import React, { useContext } from "react";
import { GlobalContext } from "../providers/GlobalContext";
const Home = () => {
  const { state, setState } = useContext(GlobalContext);
  console.log(state);
  return (
    <>
      <h1>Home Page</h1>
      <br />

      <label htmlFor="name">
        Name:
        <input
          type="text"
          placeholder="Enter your name..."
          id="name"
          onChange={(e) =>
            setState((prevState) => ({
              ...prevState,
              inputText: e.target.value,
            }))
          }
        />
      </label>
    </>
  );
};

export default Home;
