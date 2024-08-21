import { useRouter } from "next/router";
import useSWR from "swr";
import { format, parseISO } from "date-fns";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function IncomeDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(id ? `/api/incomes/${id}` : null, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.description}</h1>
      <p>Amount: {data.amount}</p>
      <p>Category: {data.category}</p>
      <p>Date: {format(parseISO(data.date), "dd.MM.yyyy")}</p>
      <p>Notes: {data.notes}</p>
    </div>
  );
}
