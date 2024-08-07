import useSWR from "swr";
import IncomeList from "../components/IncomeList";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function IncomesList() {
  const { data, error } = useSWR("/api/income", fetcher);

  console.log("SWR data:", data);
  console.log("SWR error:", error);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h2>List of all income</h2>
      <IncomeList income={data} />
    </div>
  );
}
