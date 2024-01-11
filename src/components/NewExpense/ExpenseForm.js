import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [item, setItem] = useState("");
  const [loc, setLoc] = useState("");
  const [amt, setAmt] = useState("");
  const [date, setDate] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    const expenseData = {
      item,
      loc,
      amt,
      date: new Date(date),
    };
    console.log(expenseData);
    setItem("");
    setLoc("");
    setAmt("");
    setDate("");
    props.onSaveExpenseData(expenseData);
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Expense Item</label>
            <input
              value={item}
              onChange={(event) => setItem(event.target.value)}
              type="text"
            />
          </div>
          <div className="new-expense__control">
            <label>Expenditure Location</label>
            <input
              value={loc}
              onChange={(event) => setLoc(event.target.value)}
              type="text"
            />
          </div>
          <div className="new-expense__control">
            <label>Expense Amount</label>
            <input
              value={amt}
              onChange={(event) => setAmt(event.target.value)}
              type="text"
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              value={date}
              type="date"
              min="2023-09-09"
              max="2024-12-31"
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
