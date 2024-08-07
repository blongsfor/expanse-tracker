export default function IncomeList({ income }) {
  if (!income) {
    return <h1>No income available</h1>;
  }

  return (
    <ul>
      {income.map((singleIncome) => (
        <li key={singleIncome._id}>
          <div>
            <h3>{singleIncome.name}</h3>
            <p>{singleIncome.value}€</p>
            <p>{singleIncome.from}</p>
            <p>{singleIncome.date}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
