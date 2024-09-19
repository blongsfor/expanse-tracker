import EntryForm from "@/components/EntryForm";
import Link from "next/link";
import Login from "./login";

export default function HomePage() {
  return (
    <>
      <Login />
      <h1>Expense Tracker</h1>
      <EntryForm />
      <Link href={`/expenselist`}>Go to Expense List</Link>
      <Link href={`/incomelist`}>Go to Income List</Link>
    </>
  );
}
