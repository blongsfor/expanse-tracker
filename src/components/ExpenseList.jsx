import useSWR from "swr";

export default function ExpenseList() {
  const { data: expenses, error } = useSWR(`/api/expenses`);

  if (!expenses && !error) {
    return <h1>Loading ...</h1>;
  }

  if (error) {
    return <h1>Error loading expense list</h1>;
  }

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
