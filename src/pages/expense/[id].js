import BackButton from "@/components/BackButton";
import ExpenseDetails from "../../components/Expense";
import DeleteExpenseButton from "../../components/DeleteExpenseButton";
import { useRouter } from "next/router";

export default function ExpensePage() {
  const router = useRouter();
  const { id } = router.query;

  const handleDelete = () => {
    router.push("/expenselist");
  };

  return (
    <>
      <BackButton />
      <ExpenseDetails />
      <DeleteExpenseButton id={id} onDelete={handleDelete} />{" "}
    </>
  );
}
