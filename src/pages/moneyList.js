import useSWR from "swr";
import ExpenseList from "@/components/ExpenseList";

export default function MoneyList() {
  const { data, error, isLoading } = useSWR("/api/expenses");

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <h2></h2>
      <ExpenseList expenses={data} />
    </div>
  );
}
