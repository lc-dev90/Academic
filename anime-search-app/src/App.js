import React, { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import "./App.css";

import styled from "styled-components";

function App() {
  const [info, setInfo] = useState({});
  const [text, setText] = useState("");

  useEffect(() => {
    if (text) {
      const fetchData = async () => {
        const response = await fetch(
          `https://kitsu.io/api/edge/anime?filter[text]=${text}`
        );
        const data = await response.json();
        setInfo(data);
      };
      fetchData();
    }
  }, [text]);
  console.log(text);
  return (
    <div className="App">
      <Header>
        <h1>Animes</h1>
        <SearchInput value={text} onChange={(e) => setText(e)} />
      </Header>
      {info.data && (
        <ul>
          {info.data.map((anime) => (
            <li key={anime.id}>{anime.attributes.canonicalTitle}</li>
          ))}
        </ul>
      )}
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
