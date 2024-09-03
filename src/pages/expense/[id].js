import { useState } from "react";
import BackButton from "@/components/BackButton";
import ExpenseDetails from "../../components/Expense";
import EntryForm from "@/components/EntryForm";
import DeleteExpenseButton from "../../components/DeleteExpenseButton";
import EditEntryButton from "@/components/EditEntryButton";

import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ExpensePage() {
  const router = useRouter();
  const { id } = router.query;
  const [isEditing, setIsEditing] = useState(false);

  const { data, error } = useSWR(id ? `/api/expenses/${id}` : null, fetcher);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleEdit = async (updatedData) => {
    try {
      const response = await fetch(`/api/expenses/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        setIsEditing(false); // Exit edit mode
      } else {
        throw new Error("Failed to update entry");
      }
    } catch (error) {
      console.error("Error updating entry:", error);
      alert("There was an error updating the entry. Please try again.");
    }
  };

  if (error) return <div>Failed to load expense</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <BackButton />
      {isEditing ? (
        <EntryForm initialData={data} onSubmit={handleEdit} isEditMode />
      ) : (
        <>
          <ExpenseDetails />
          <EditEntryButton onEditToggle={handleEditToggle} />
          <DeleteExpenseButton
            id={id}
            onDelete={() => router.push("/expenselist")}
          />
        </>
      )}
    </>
  );
}
