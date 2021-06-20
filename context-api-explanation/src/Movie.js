import React from "react";

const Movie = ({ movie }) => {
  return (
    <div key={movie.id}>
      <h1>{movie.name}</h1>
      <p>
        Id: {movie.id} Price: {movie.price}
      </p>
    </div>
  );
};

export default Movie;
