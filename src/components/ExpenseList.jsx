export default function ExpenseList({ expenses }) {
  if (!expenses || expenses.length === 0) {
    return <h1>No expenses available</h1>;
  }

  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.date + expense.description}>
          <div>
            <h3>{expense.description}</h3>
            <p>Amount: {expense.amount}€</p>
            <p>Category: {expense.category}</p>
            <p>Date: {expense.date}</p>
            <p>Notes: {expense.notes}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
