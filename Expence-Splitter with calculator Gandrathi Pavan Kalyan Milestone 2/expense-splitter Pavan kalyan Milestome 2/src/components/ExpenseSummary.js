import React, { useState, useEffect } from "react";
import ExpenseService from "../services/ExpenseService";
import FriendService from "../services/FriendService";
import CalculationService from "../services/CalculationService";
import "./ExpenseSummary.css";

const ExpenseSummary = () => {
  const [expenses, setExpenses] = useState([]);
  const [friends, setFriends] = useState([]);
  const [splitMethod, setSplitMethod] = useState("equal");
  const [customSplits, setCustomSplits] = useState({});

  useEffect(() => {
    setExpenses(ExpenseService.getExpenses());
    setFriends(FriendService.getFriends());
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem("friends", JSON.stringify(friends));
  }, [friends]);

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const calculateShares = () => {
    return CalculationService.calculateSplits(expenses, friends, splitMethod, customSplits);
  };

  return (
    <div className="expense-summary">
      <h2>Expense Summary</h2>
      <p><strong>Total Expenses:</strong> ${totalExpenses.toFixed(2)}</p>

      <h3>Amount Owed</h3>
      <ul>
        {Object.entries(calculateShares()).map(([friendId, amount]) => (
          <li key={friendId}>
            {friends.find(f => f.id === friendId)?.name} {amount > 0 ? `owes $${amount.toFixed(2)}` : `is owed $${Math.abs(amount).toFixed(2)}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseSummary;