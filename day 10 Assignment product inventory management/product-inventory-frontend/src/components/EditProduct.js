import { useState } from "react";
import axios from "axios";

const EditProduct = ({ product, fetchProducts, closeEdit }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!name || !price) {
      alert("Please enter product name and price.");
      return;
    }

    try {
      await axios.put(`http://localhost:5041/api/products/${product.id}`, {
        name,
        price: parseFloat(price),
      });
      alert("Product updated successfully!");
      fetchProducts(); // Refresh product list
      closeEdit(); // Close edit form
    } catch (error) {
      alert("Error updating product.");
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Update Product</button>
      <button type="button" onClick={closeEdit}>
        Cancel
      </button>
    </form>
  );
};

export default EditProduct;