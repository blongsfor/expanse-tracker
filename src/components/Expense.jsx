import useSWR from "swr";
import { useRouter } from "next/router";

export default function Expense() {
  const router = useRouter();
  const { id } = router.query;

  const { data: expense, error } = useSWR(`/api/expenses/${id}`);

  if (!expense && !error) {
    return <h1>Loading ...</h1>;
  }

  if (error) {
    return <h1>Error loading expense data</h1>;
  }

  if (!expense) {
    return <h1>Expense data not available</h1>;
  }
  return (
    <>
      <div>
        <p>{expense.name}</p>
      </div>
    </>
  );
}
