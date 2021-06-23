import React, { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import "./App.css";

import styled from "styled-components";

function App() {
  const [info, setInfo] = useState({});
  const [text, setText] = useState("");

  useEffect(() => {
    if (text) {
      console.log(text);
      const fetchData = async () => {
        const response = await fetch(
          `https://kitsu.io/api/edge/anime?filter[text]=${text}&page[limit]=12`
        );
        const data = await response.json();
        setInfo(data);
      };
      fetchData();
    }
  }, [text]);
  return (
    <div className="App">
      <Header>
        <h1>Animes</h1>
        <SearchInput value={text} onChange={(e) => setText(e)} />
      </Header>
      {text && !info.data && <Loading>Carregando...</Loading>}
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
  text-align: center;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1.5rem;
  margin: 40px;
  padding-top: 10px;
  padding-bottom: 50px;
  li {
    img {
      max-width: 100%;
      display: block;
      margin: 0 auto;
      margin-bottom: 10px;
    }
  }
`;

const Loading = styled.div`
  margin: 0 auto;
  text-align: center;
  padding-top: 20px;
`;
