import { useRouter } from "next/router";

export default function ExpenseList({ expenses }) {
  const router = useRouter();

  if (!expenses || expenses.length === 0) {
    return <h1>No expenses available</h1>;
  }

  const handleItemClick = (id) => {
    router.push(`/expenses/${id}`);
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
            <h3>{singleExpense.description}</h3>
            <p>Amount: {singleExpense.amount}€</p>
            <p>Category: {singleExpense.category}</p>
            <p>Date: {singleExpense.date}</p>
            <p>Notes: {singleExpense.notes}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
