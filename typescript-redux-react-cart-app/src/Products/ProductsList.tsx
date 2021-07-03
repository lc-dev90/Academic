import React, { useState } from "react";

interface ProductsListProps {}

const initialProducts = [
  { title: "Escape from Tarkov", price: 60, id: "eft" },
  { title: "Hunt: Showdown", price: 70, id: "hunt" },
  { title: "Hell the lose", price: 55, id: "h11" },
];

interface Product {
  title: string;
  price: number;
  id: string;
}

const ProductsList: React.FC<ProductsListProps> = ({}) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  return (
    <div>
      <h1>Games List</h1>
      {products.map((product) => (
        <div key={product.id}>
          <span>
            {product.title} : {product.price}
          </span>
        </div>
      ))}
      <button
        onClick={() =>
          setProducts((prevProducts) => [
            ...prevProducts,
            {
              title: "Halo",
              price: 100,
              id: "h1",
            },
          ])
        }
      >
        Add Product
      </button>
    </div>
  );
};

export default ProductsList;
