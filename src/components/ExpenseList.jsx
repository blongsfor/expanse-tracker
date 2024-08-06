export default function ExpenseList({ expenses }) {
  if (!expenses) {
    return <h1>No expenses available</h1>;
  }

  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense._id}>
          <div>
            <h2>
              {expense.name} {expense.value}
            </h2>
          </div>
        </li>
      ))}
    </ul>
  );
}
