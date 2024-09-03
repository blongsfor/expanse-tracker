// /components/DeleteEntryButton.jsx

import React from "react";

const DeleteEntryButton = ({ onDelete, id }) => {
  // Ensure id prop is received
  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this entry?")) {
      return;
    }

    try {
      const response = await fetch(`/api/expenses/${id}`, { method: "DELETE" }); // Use the id prop here

      if (response.ok) {
        onDelete(); // Execute the onDelete function after successful deletion
      } else {
        console.error("Failed to delete entry:", response);
      }
    } catch (error) {
      console.error("Error deleting entry:", error);
    }
  };

  return (
    <button onClick={handleDelete} style={buttonStyle}>
      Delete
    </button>
  );
};

export default DeleteEntryButton;

const buttonStyle = {
  padding: "10px 10px",
  backgroundColor: "#ff4d4d",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "12px",
};
