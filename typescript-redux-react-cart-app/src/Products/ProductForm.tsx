import React from "react";

interface ProductFormProps {}

const ProductForm: React.FC<ProductFormProps> = ({}) => {
  return (
    <>
      <h2>Add Game To The Store</h2>
      <form>
        <input type="text" placeholder="Game title" name="title" />
        <input type="number" placeholder="Price" name="price" />
        <input type="text" placeholder="Id" name="id" />
        <button>Add Game</button>
      </form>
    </>
  );
};

export default ProductForm;
