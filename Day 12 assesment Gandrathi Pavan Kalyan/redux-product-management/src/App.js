import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import Wishlist from "./components/Wishlist";
import NavigationBar from "./components/Navbar";

function App() {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    if (!wishlist.some((item) => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (product) => {
    setWishlist(wishlist.filter((item) => item.id !== product.id));
  };

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<ProductList addToWishlist={addToWishlist} />} />
        <Route path="/wishlist" element={<Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} />} />
      </Routes>
    </Router>
  );
}

export default App;