import React from "react";

const Transaction = ({ transaction: { amount, text } }) => {
  return (
    <li className={amount > 0 ? "plus" : "minus"}>
      {text}{" "}
      <span>
        {amount > 0 ? "+" : "-"}${Math.abs(amount)}
      </span>
      <button className="delete-btn">x</button>
    </li>
  );
};

export default Transaction;
