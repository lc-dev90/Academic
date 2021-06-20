import React, { useState } from "react";
import Movie from "./Movie";

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$10",
      id: 23124,
    },
    {
      name: "Game of Thrones",
      price: "$10",
      id: 343243,
    },
    {
      name: "Inception",
      price: "$10",
      id: 365365,
    },
  ]);
  return (
    <div>
      {movies.map((movie) => (
        <Movie movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
