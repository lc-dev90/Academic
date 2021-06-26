import React, { useState, createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [state, setState] = useState([
    {
      inputText: "",
      isDark: false,
      inputAnotherText: "",
    },
  ]);
  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
