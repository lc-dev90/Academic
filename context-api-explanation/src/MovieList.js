import React, { useState } from "react";

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
        <div key={movie.id}>
          <h1>{movie.name}</h1>
          <p>
            Id: {movie.id} Price: {movie.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
