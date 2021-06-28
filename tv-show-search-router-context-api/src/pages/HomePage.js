import React, { useContext } from "react";
import styled from "styled-components";

// Context
import ShowsContext from "../context/shows/showsContext";

//Components
import Searchbar from "../components/Searchbar";
import ListItem from "../components/ListItem";
import defaultImage from "../images/no-image-available-grid.jpg";
import Loader from "../components/Loader";

const HomePage = () => {
  const showsContext = useContext(ShowsContext);
  const { loading, shows } = showsContext;
  return (
    <Home>
      <Searchbar />
      {loading ? (
        <Loader />
      ) : (
        <div className="homepage-list">
          {shows.length === 0 ? (
            <h1 className="no-results">Sorry, no results.</h1>
          ) : (
            shows.map((item) => (
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
            ))
          )}
        </div>
      )}
    </Home>
  );
};

export default HomePage;

const Home = styled.div`
  .homepage-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));

    text-align: center;
  }
  .no-results {
    position: absolute;
  }
`;
