import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button onClick={handleBack} style={buttonStyle}>
      Go Back
    </button>
  );
}

const buttonStyle = {
  padding: "10px 10px",
  backgroundColor: "#0070f3",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "12px",
};
