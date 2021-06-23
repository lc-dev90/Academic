import React, { useState } from "react";
import SearchInput from "./SearchInput";
import "./App.css";

import styled from "styled-components";

function App() {
  const [text, setText] = useState("");
  console.log(text);
  return (
    <div className="App">
      <Header>
        <h1>Animes</h1>
        <SearchInput value={text} onChange={(e) => setText(e)} />
      </Header>
    </div>
  );
}

export default App;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  h1 {
    margin-bottom: 20px;
    letter-spacing: 1.4px;
  }
`;
