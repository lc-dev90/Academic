import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const response = await fetch(
      "https://fortnite-api.theapinetwork.com/items/list"
    );
    const data = await response.json();
    console.log(data.data);
    setItems(data.data);
  };

  return (
    <div>
      <h1>Shop Page</h1>
      <div>
        {items.map((item) => (
          <h2 key={item.itemId}>
            <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
          </h2>
        ))}
      </div>
    </div>
  );
};

export default Shop;
