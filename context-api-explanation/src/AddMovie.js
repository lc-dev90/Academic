import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [
      ...prevMovies,
      { name: name, price: price, id: Math.ceil(Math.random() * 10000) },
    ]);
  };

  return (
    <form style={{ margin: "40px" }} onSubmit={addMovie}>
      <input
        style={{ padding: "5px", marginRight: "10px" }}
        id="name"
        type="text"
        name="name"
        value={name}
        onChange={updateName}
      />

      <input
        style={{ padding: "5px", marginRight: "10px" }}
        type="text"
        price="price"
        value={price}
        onChange={updatePrice}
      />
      <button style={{ padding: "5px" }}>Submit</button>
    </form>
  );
};

export default AddMovie;
