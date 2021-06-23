import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  console.log(transactions);
  console.log(amounts);
  console.log(total);
  return (
    <>
      <h4>Your balance</h4>
      <h1>
        {total >= 0 ? "+" : "-"} ${Math.abs(total).toFixed(2)}
      </h1>
    </>
  );
};

export default Balance;
