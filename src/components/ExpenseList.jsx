export default function ExpenseList({ expenses }) {
  if (!expenses) {
    return <h1>No expenses available</h1>;
  }

  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense._id}>
          <div>
            <h3>{expense.name}</h3>
            <p>{expense.value}€</p>
            <p>{expense.from}</p>
            <p>{expense.date}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
