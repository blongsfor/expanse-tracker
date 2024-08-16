import { useRouter } from "next/router";

// ExpenseList.jsx
export default function ExpenseList({ expenses }) {
  const router = useRouter();

  if (!expenses || expenses.length === 0) {
    return <h1>No expenses available</h1>;
  }

  const handleItemClick = (id) => {
    router.push(`/expense/${id}`);
  };

  return (
    <ul>
      {expenses.map((singleExpense) => (
        <li
          key={singleExpense._id}
          onClick={() => handleItemClick(singleExpense._id)}
          style={{ cursor: "pointer" }}
        >
          <div>
            <h3>{singleExpense.name}</h3>
            <p>Amount: {singleExpense.value}€</p>
            <p>Category: {singleExpense.from}</p>
            <p>Date: {new Date(singleExpense.date).toLocaleDateString()}</p>
            <p>Notes: {singleExpense.notes}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
