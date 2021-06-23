import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const expenses = transactions
    .filter((transaction) => transaction.amount < 0)
    .map((x) => x.amount);

  const incomes = transactions
    .filter((transaction) => transaction.amount > 0)
    .map((x) => x.amount);

  const totalExpenseValue = expenses
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const totalIncomeValue = incomes
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${totalIncomeValue}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">
          -${Math.abs(totalExpenseValue).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
