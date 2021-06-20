import React from "react";

const Movie = ({ name, price, id }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>
        ID: {id} - Price: {price}
      </p>
    </div>
  );
};

export default Movie;
