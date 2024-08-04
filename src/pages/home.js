import EntryForm from "@/components/EntryForm";
import MinusButton from "@/components/MinusButton";
import PlusButton from "@/components/PlusButton";
import MoneyList from "./moneyList";

export default function HomePage() {
  return (
    <>
      <h1>Expense Tracker</h1>
      <EntryForm />
      <PlusButton />
      <MinusButton />
      <MoneyList />
    </>
  );
}
