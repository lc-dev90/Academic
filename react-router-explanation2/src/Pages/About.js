import React, { useContext } from "react";
import { GlobalContext } from "../providers/GlobalContext";

const About = () => {
  const { state, setState } = useContext(GlobalContext);
  console.log(state);
  return (
    <>
      <h1>About Page</h1>
      <label value="Countrie">
        <input
          type="text"
          placeholder="countrie"
          onChange={(e) =>
            setState((prevState) => ({
              ...prevState,
              inputAnotherText: e.target.value,
            }))
          }
        />
      </label>
    </>
  );
};

export default About;
