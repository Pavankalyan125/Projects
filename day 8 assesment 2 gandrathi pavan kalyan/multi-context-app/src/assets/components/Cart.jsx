import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { AuthContext } from "../contexts/AuthContext";

const Cart = () => {
  const { cart, addItem, removeItem, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const [itemName, setItemName] = useState("");

  const handleAddItem = () => {
    if (!itemName.trim()) return;

    const newItem = {
      id: Date.now(),
      name: itemName,
      price: Math.floor(Math.random() * 100) + 1,
    };

    addItem(newItem);
    setItemName("");
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li className="cart-item" key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeItem(item.id)}>❌</button>
            </li>
          ))}
        </ul>
      )}
      {user ? (
        <>
          <input
            type="text"
            placeholder="Enter item name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <button onClick={handleAddItem}>➕ Add Item</button>
          <button onClick={clearCart} style={{ backgroundColor: "#dc3545" }}>
            🗑️ Clear Cart
          </button>
        </>
      ) : (
        <p>Login to add items to your cart.</p>
      )}
    </div>
  );
};

export default Cart;
