import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css"; 

const Home = () => {
  // State for background color
  const [bgColor, setBgColor] = useState(getRandomColor());

  // Change background color every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBgColor(getRandomColor());
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Function to generate a random color
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Handle user color selection
  const handleColorChange = (event) => {
    setBgColor(event.target.value);
  };

  return (
    <div className="home-container" style={{ background: bgColor }}>
      <h1 className="home-title">Welcome to Task Manager</h1>
      <Link to="/login" className="home-login-link">Go to Login</Link>

      {/* Color Picker */}
      <input
        type="color"
        className="color-picker"
        value={bgColor}
        onChange={handleColorChange}
      />
      <p>Pick your favorite background color!</p>
    </div>
  );
};

export default Home;