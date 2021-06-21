import React, { useEffect, useState } from "react";

const ItemDetail = ({ match }) => {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({
    images: {},
  });
  const fetchItem = async () => {
    const response = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );
    const data = await response.json();
    console.log(data.data.item);
    setItem(data.data.item);
  };

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.background} alt="x"></img>
    </div>
  );
};

export default ItemDetail;
