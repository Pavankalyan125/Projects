import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, setCart, addToCart }) => {
  const navigate = useNavigate(); // ✅ Hook to navigate between pages

  // Increase item quantity
  const increaseQuantity = (product) => {
    addToCart(product);
  };

  // Decrease item quantity
  const decreaseQuantity = (product) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove item completely
  const removeItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Calculate total price
  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <img src={item.image} alt={item.name} width="50" />
              <p>{item.name} - ₹{item.price}</p>
              <button onClick={() => decreaseQuantity(item)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQuantity(item)}>+</button>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ₹{getTotalPrice()}</h3>

          {/* ✅ Checkout Button */}
          <button onClick={() => navigate("/checkout")} style={{ marginTop: "20px", padding: "10px", fontSize: "16px" }}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;




