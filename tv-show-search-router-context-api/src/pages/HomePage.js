import React, { useContext } from "react";
import styled from "styled-components";

// Context
import ShowsContext from "../context/shows/showsContext";

//Components
import Searchbar from "../components/Searchbar";
import ListItem from "../components/ListItem";
import defaultImage from "../images/no-image-available-grid.jpg";

const HomePage = () => {
  const showsContext = useContext(ShowsContext);
  const { loading, shows } = showsContext;
  return (
    <Home>
      <Searchbar />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="homepage-list">
          {shows.map((item) => (
            <ListItem
              key={item.show.id}
              id={item.show.id}
              image={item.show.image ? item.show.image.medium : defaultImage}
              name={item.show.name}
              rating={
                item.show.rating.average
                  ? item.show.rating.average
                  : "No rating"
              }
            >
              {item.show.name}
            </ListItem>
          ))}
        </div>
      )}
    </Home>
  );
};

export default HomePage;

const Home = styled.div`
  .homepage-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
`;
