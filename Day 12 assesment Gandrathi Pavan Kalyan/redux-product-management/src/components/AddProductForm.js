import React, { useState } from "react";

const AddProductForm = ({ addProduct }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && price) {
      addProduct({ name, price });
      setName("");
      setPrice("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>

      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;