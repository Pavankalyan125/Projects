import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <Link to="/" className="button">Dashboard</Link>
        <Link to="/friends" className="button">Friends</Link>
        <Link to="/expenses" className="button">Expenses</Link>
        <Link to="/summary" className="button">Summary</Link>
      </div>

      {/* Main Content */}
      <div className="dashboard">
        <div className="dashboard-container">
          <h2>Expense Splitter</h2>
          <p>Manage your expenses with friends easily.</p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;