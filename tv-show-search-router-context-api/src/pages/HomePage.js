import React from "react";
import styled from "styled-components";

//Components
import Searchbar from "../components/Searchbar";

const HomePage = () => {
  return (
    <Home>
      <Searchbar />
    </Home>
  );
};

export default HomePage;

const Home = styled.div``;
