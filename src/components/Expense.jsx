import { useRouter } from "next/router";
import useSWR from "swr";

export default function ExpenseDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(id ? `/api/expenses/${id}` : null, fetcher);

  if (error) return <div>Failed to load expenses</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2>{data.name}</h2>
      <p>Amount: {data.value}€</p>
      <p>Category: {data.from}</p>
      <p>Date: {new Date(data.date).toLocaleDateString()}</p>
      <p>Notes: {data.notes}</p>
      <p>Description: {data.description}</p>
    </div>
  );
}
