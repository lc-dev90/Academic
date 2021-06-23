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
        <List>
          {info.data.map((anime) => (
            <li key={anime.id}>
              <img
                src={anime.attributes.posterImage.small}
                alt={anime.attributes.canonicalTitle}
              />
              {anime.attributes.canonicalTitle}
            </li>
          ))}
        </List>
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

const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1.5rem;
`;
