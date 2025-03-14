// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import FriendList from "./components/FriendList";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/friends" element={<FriendList />} />
          <Route path="/expenses" element={<ExpenseList />} />
          <Route path="/summary" element={<ExpenseSummary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
