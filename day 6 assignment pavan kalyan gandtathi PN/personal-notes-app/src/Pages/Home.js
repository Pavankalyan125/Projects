import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Welcome to Personal Notes</h1>
    <Link to="/notes">Go to Notes</Link>
  </div>
);

export default Home;