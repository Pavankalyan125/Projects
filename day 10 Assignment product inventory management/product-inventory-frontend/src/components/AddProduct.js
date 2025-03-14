import { useState } from "react";
import axios from "axios";

const AddProduct = ({ fetchProducts }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price) {
      alert("Please enter product name and price.");
      return;
    }

    try {
      await axios.post("http://localhost:5041/api/products", {
        name,
        price: parseFloat(price),
      });
      alert("Product added successfully!");
      setName("");
      setPrice("");
      fetchProducts(); // Refresh product list
    } catch (error) {
      alert("Error adding product. Product may already exist.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;