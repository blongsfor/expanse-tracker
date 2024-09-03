// /pages/expense/[id].js

import BackButton from "@/components/BackButton";
import ExpenseDetails from "../../components/Expense";
import DeleteEntryButton from "@/components/DeleteEntryButton";
import { useRouter } from "next/router"; // Import useRouter

export default function ExpensePage() {
  const router = useRouter(); // Get the router object
  const { id } = router.query; // Extract the id from the query

  const handleDelete = () => {
    // Redirect or perform some action after deletion
    router.push("/expenselist"); // Redirect to the home page or any other page after deletion
  };

  return (
    <>
      <BackButton />
      <ExpenseDetails />
      <DeleteEntryButton id={id} onDelete={handleDelete} />{" "}
      {/* Pass the id prop */}
    </>
  );
}
