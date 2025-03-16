import React, { useState } from "react";
import ExpenseService from "../services/ExpenseService";
import "./ExpenseList.css";

const ExpenseList = () => {
  const [expenses, setExpenses] = useState(ExpenseService.getExpenses());
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [payer, setPayer] = useState(""); // ✅ Added payer state
  const [editingId, setEditingId] = useState(null);
  const [editedExpense, setEditedExpense] = useState({ description: "", amount: "", date: "", payer: "" });

  const addExpense = () => {
    if (description.trim() === "" || amount.trim() === "" || payer.trim() === "") return;

    const newExpense = { 
      id: Date.now(), 
      description, 
      amount: parseFloat(amount), 
      date: date || new Date().toISOString().split("T")[0], // Default to today if no date is entered
      payer // ✅ Added payer field
    };
    
    setExpenses([...expenses, newExpense]);
    setDescription("");
    setAmount("");
    setDate("");
    setPayer(""); // ✅ Reset payer field
  };

  const removeExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const startEditing = (expense) => {
    setEditingId(expense.id);
    setEditedExpense({ ...expense });
  };

  const saveEdit = () => {
    setExpenses(expenses.map(exp => 
      exp.id === editingId ? { ...exp, ...editedExpense } : exp
    ));
    setEditingId(null);
  };

  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      <input 
        type="text" 
        placeholder="Enter description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)}
      />
      <input 
        type="number" 
        placeholder="Enter amount" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)}
      />
      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="Enter payer's name" 
        value={payer} 
        onChange={(e) => setPayer(e.target.value)}
      /> {/* ✅ Added input field for payer */}
      <button onClick={addExpense}>Add Expense</button>

      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            {editingId === expense.id ? (
              <>
                <input 
                  type="text" 
                  value={editedExpense.description} 
                  onChange={(e) => setEditedExpense({ ...editedExpense, description: e.target.value })}
                />
                <input 
                  type="number" 
                  value={editedExpense.amount} 
                  onChange={(e) => setEditedExpense({ ...editedExpense, amount: e.target.value })}
                />
                <input 
                  type="date" 
                  value={editedExpense.date} 
                  onChange={(e) => setEditedExpense({ ...editedExpense, date: e.target.value })}
                />
                <input 
                  type="text" 
                  value={editedExpense.payer} 
                  onChange={(e) => setEditedExpense({ ...editedExpense, payer: e.target.value })}
                /> {/* ✅ Editable payer field */}
                <button onClick={saveEdit}>Save</button>
              </>
            ) : (
              <>
                {expense.description} - ${expense.amount} - {expense.date} 
                <strong> (Paid by: {expense.payer})</strong> {/* ✅ Display payer */}
                <button onClick={() => startEditing(expense)}>Modify</button>
                <button onClick={() => removeExpense(expense.id)}>Remove</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;