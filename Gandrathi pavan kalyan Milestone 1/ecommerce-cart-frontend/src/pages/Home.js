import React from "react";
import { Link } from "react-router-dom";

const Home = ({ products, addToCart }) => {
  return (
    <div>
      <h1>ShopEase</h1>
      <nav>
        <Link to="/cart">Go to Cart</Link>
      </nav>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default Home;
