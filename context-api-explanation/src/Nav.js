import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies] = useContext(MovieContext);
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "black",
        color: "white",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 100px",
        maxWidth: "100%",
      }}
    >
      <h3>Luiz</h3>
      <p>List of movies: {movies.length}</p>
    </div>
  );
};

export default Nav;
