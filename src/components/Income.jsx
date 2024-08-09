import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function IncomeDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(id ? `/api/incomes/${id}` : null, fetcher);

  if (error) return <div>Failed to load income</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2>{data.description}</h2>
      <p>Amount: {data.amount}€</p>
      <p>Category: {data.category}</p>
      <p>Date: {data.date}</p>
      <p>Notes: {data.notes}</p>
    </div>
  );
}
