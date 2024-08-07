import useSWR from "swr";
import ExpenseList from "../components/ExpenseList";
import BackButton from "@/components/BackButton";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ExpensesList() {
  const { data, error } = useSWR("/api/expenses", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <BackButton />
      <h2>List of all expenses</h2>
      <ExpenseList expenses={data} />
    </div>
  );
}
