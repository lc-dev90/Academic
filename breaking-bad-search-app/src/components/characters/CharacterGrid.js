import React from "react";
import CaracterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CaracterItem key={item.char_id} item={item} />
      ))}
    </section>
  );
};

export default CharacterGrid;
