import React, { useState } from "react";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  return (
    <>
      <h3>Add New Transaction</h3>
      <form id="add-transaction">
        <div className="form-control">
          <label htmlFor="inc-exp">Text</label>
          <input
            id="inc-exp"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text here..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
