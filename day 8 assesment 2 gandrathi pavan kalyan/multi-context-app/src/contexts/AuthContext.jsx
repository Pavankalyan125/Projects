import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  // Sample hardcoded user credentials (for demo purposes)
  const validUser = {
    email: "pavan@gmail.com",
    password: "password123",
    name: "pavan",
  };

  // Function to log in the user with email & password
  const login = (email, password) => {
    if (email === validUser.email && password === validUser.password) {
      setUser(validUser);
      localStorage.setItem("user", JSON.stringify(validUser));
    } else {
      alert("Invalid email or password. Try again.");
    }
  };

  // Function to log out the user
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};