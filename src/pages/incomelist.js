import useSWR from "swr";
import IncomeList from "../components/IncomeList";
import BackButton from "@/components/BackButton";

const fetcher = (url) =>
  fetch(url).then((res) => {
    console.log("Fetcher response status:", res.status);
    return res.json();
  });

export default function IncomesList() {
  const { data, error } = useSWR("/api/incomes/income", fetcher);

  console.log("SWR data:", data);
  console.log("SWR error:", error);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <BackButton />
      <h2>List of all income</h2>
      <IncomeList income={data} />
    </div>
  );
}
