import EntryForm from "@/components/EntryForm";
import MinusButton from "@/components/MinusButton";
import PlusButton from "@/components/PlusButton";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>Expense Tracker</h1>
      <EntryForm />
      <PlusButton />
      <MinusButton />
      <Link href={`/expenseList`}>Go to Expense List</Link>
      <Link href={`/incomeList`}>Go to Income List</Link>
    </>
  );
}
