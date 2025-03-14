import { useState, useEffect } from "react";
import axios from "axios";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import "./ProductList.css"; // ✅ Import CSS

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5041/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`http://localhost:5041/api/products/${id}`);
        alert("Product deleted successfully!");
        fetchProducts();
      } catch (error) {
        alert("Error deleting product.");
      }
    }
  };

  return (
    <div className="container">
      <h2>Product Inventory</h2>
      <AddProduct fetchProducts={fetchProducts} />

      {editingProduct && (
        <EditProduct
          product={editingProduct}
          fetchProducts={fetchProducts}
          closeEdit={() => setEditingProduct(null)}
        />
      )}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>
                <button className="edit" onClick={() => setEditingProduct(product)}>Edit</button>
                <button className="delete" onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;