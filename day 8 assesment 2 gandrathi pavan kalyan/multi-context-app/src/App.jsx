import React, { useContext } from "react";
import { AuthProvider, AuthContext } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CartProvider } from "./contexts/CartContext";
import Login from "./components/login";
import Header from "./components/Header";
import Cart from "./components/Cart";


function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <CartProvider>
          <Header />
          <MainContent />
        </CartProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

// Separate component to conditionally render Cart or Login
const MainContent = () => {
  const { user } = useContext(AuthContext);

  return (
    <main>
      {user ? <Cart /> : <Login />}
    </main>
  );
};

export default App;
