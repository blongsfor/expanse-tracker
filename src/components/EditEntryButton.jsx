import React from "react";

const EditEntryButton = ({ onEditToggle }) => {
  return (
    <button onClick={onEditToggle} style={buttonStyle}>
      Edit
    </button>
  );
};

export default EditEntryButton;

const buttonStyle = {
  padding: "10px 10px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "12px",
};
