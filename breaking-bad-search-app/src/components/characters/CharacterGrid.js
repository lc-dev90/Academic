import React from "react";
import CaracterItem from "./CharacterItem";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CaracterItem key={item.char_id} item={item} />
      ))}
    </section>
  );
};

export default CharacterGrid;
