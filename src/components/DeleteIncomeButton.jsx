import React from "react";

const DeleteIncomeButton = ({ onDelete, id }) => {
  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this entry?")) {
      return;
    }

    try {
      const response = await fetch(`/api/incomes/${id}`, { method: "DELETE" });

      if (response.ok) {
        onDelete();
      } else {
        console.error("Failed to delete income:", response);
      }
    } catch (error) {
      console.error("Error deleting income:", error);
    }
  };

  return (
    <button onClick={handleDelete} style={buttonStyle}>
      Delete
    </button>
  );
};

export default DeleteIncomeButton;

const buttonStyle = {
  padding: "10px 10px",
  backgroundColor: "#ff4d4d",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "12px",
};
