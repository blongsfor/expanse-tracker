import React, { useState } from "react";

export default function EntryForm() {
  const [income, setIncome] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [entryType, setEntryType] = useState("expense");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const apiEndpoint =
        entryType === "income"
          ? "/api/incomes/incomes"
          : "/api/expenses/expenses";

      const res = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          entryType: entryType,
          category: category,
          amount: parseFloat(amount),
          date: new Date(date),
          description: description,
          notes: notes,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        if (entryType === "income") {
          setIncome([data, ...income]);
        } else {
          setExpenses([data, ...expenses]);
        }
        setEntryType("expense");
        setCategory("");
        setAmount("");
        setDescription("");
        setNotes("");
        setDate("");
      } else {
        throw new Error(data.error || "Failed to save entry");
      }
    } catch (error) {
      console.error("Error adding entry:", error);
      alert("There was an error adding the entry. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="entryType">Typ:</label>
        <select
          id="entryType"
          value={entryType}
          onChange={(e) => setEntryType(e.target.value)}
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
      </div>

      <div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Please Select</option>
          <option value="housing">Housing</option>
          <option value="salary">Salary</option>
          <option value="groceries">Groceries</option>
          <option value="transportation">Transport</option>
          <option value="entertainment">Enternainment</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          step="0.01"
          required
        />
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="notes">Notes:</label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      <button type="submit">Add Entry</button>
    </form>
  );
}
