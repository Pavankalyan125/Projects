const ExpenseService = {
    getExpenses: () => {
      return JSON.parse(localStorage.getItem("expenses")) || [];
    },
  
    addExpense: (expense) => {
      const expenses = ExpenseService.getExpenses();
      expenses.push(expense);
      localStorage.setItem("expenses", JSON.stringify(expenses));
      return expenses;
    },
  
    removeExpense: (id) => {
      let expenses = ExpenseService.getExpenses();
      expenses = expenses.filter(expense => expense.id !== id);
      localStorage.setItem("expenses", JSON.stringify(expenses));
      return expenses;
    }
  };
  
  export default ExpenseService;