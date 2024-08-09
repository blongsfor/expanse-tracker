import { useRouter } from "next/router";

export default function IncomeList({ income }) {
  const router = useRouter();

  if (!income || income.length === 0) {
    return <h1>No income available</h1>;
  }

  const handleItemClick = (id) => {
    router.push(`/income/${id}`);
  };

  return (
    <ul>
      {income.map((singleIncome) => (
        <li
          key={singleIncome._id}
          onClick={() => handleItemClick(singleIncome._id)}
          style={{ cursor: "pointer" }}
        >
          <div>
            <h3>{singleIncome.description}</h3>
            <p>Amount: {singleIncome.amount}€</p>
            <p>Category: {singleIncome.category}</p>
            <p>Date: {singleIncome.date}</p>
            <p>Notes: {singleIncome.notes}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
