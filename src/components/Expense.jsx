import useSWR from "swr";
import { useRouter } from "next/router";
import { format, parseISO } from "date-fns";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ExpenseDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(id ? `/api/expenses/${id}` : null, fetcher);

  if (error) return <div>Failed to load expenses</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2>{data.description}</h2>
      <p>Amount: {data.amount}€</p>
      <p>Category: {data.category}</p>
      <p>Date: {format(parseISO(data.date), "dd.MM.yyyy")}</p>
      <p>Notes: {data.notes}</p>
    </div>
  );
}
