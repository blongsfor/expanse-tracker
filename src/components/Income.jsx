import useSWR from "swr";
import { useRouter } from "next/router";

export default function Income() {
  const router = useRouter();
  const { id } = router.query;

  const { data: income, error } = useSWR(`/api/income/${id}`);

  if (!income && !error) {
    return <h1>Loading ...</h1>;
  }

  if (error) {
    return <h1>Error loading income data</h1>;
  }

  if (!income) {
    return <h1>Income data not available</h1>;
  }
  return (
    <>
      <div>
        <p>{income.name}</p>
      </div>
    </>
  );
}
