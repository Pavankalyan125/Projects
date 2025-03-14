const CalculationService = {
    calculateSplits: (expenses, friends, splitMethod, customSplits) => {
      let balances = {};
      
      friends.forEach(friend => (balances[friend.id] = 0));
  
      expenses.forEach(expense => {
        const payerId = expense.paidBy;
        let shares = {};
  
        if (splitMethod === "equal") {
          const share = expense.amount / friends.length;
          friends.forEach(friend => (shares[friend.id] = share));
        } else if (splitMethod === "custom") {
          let totalPercentage = Object.values(customSplits).reduce((sum, perc) => sum + perc, 0);
          friends.forEach(friend => {
            shares[friend.id] = (customSplits[friend.id] || 0) * expense.amount / totalPercentage;
          });
        }
  
        friends.forEach(friend => {
          if (friend.id !== payerId) {
            balances[friend.id] += shares[friend.id];
            balances[payerId] -= shares[friend.id];
          }
        });
      });
  
      return balances;
    }
  };
  
  export default CalculationService;