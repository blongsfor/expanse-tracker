import React, { useState } from "react";

export default function EntryForm({
  initialData = {},
  onSubmit,
  isEditMode = false,
}) {
  const [entryType, setEntryType] = useState(
    initialData.entryType || "expense"
  );
  const [category, setCategory] = useState(initialData.category || "");
  const [amount, setAmount] = useState(initialData.amount || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [notes, setNotes] = useState(initialData.notes || "");
  const [date, setDate] = useState(
    initialData.date ? initialData.date.slice(0, 10) : ""
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    const entryData = {
      entryType,
      category,
      amount: parseFloat(amount),
      date: new Date(date),
      description,
      notes,
    };

    try {
      await onSubmit(entryData);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error processing the form. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="entryType">Type:</label>
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
          <option value="entertainment">Entertainment</option>
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

      <button type="submit">{isEditMode ? "Save Changes" : "Add Entry"}</button>
    </form>
  );
}
