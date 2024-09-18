import EntryForm from "@/components/EntryForm";
import Component from "@/components/LoginButton";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Component />
      <h1>Expense Tracker</h1>
      <EntryForm />
      <Link href={`/expenselist`}>Go to Expense List</Link>
      <Link href={`/incomelist`}>Go to Income List</Link>
    </>
  );
}
