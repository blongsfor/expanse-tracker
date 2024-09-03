import BackButton from "@/components/BackButton";
import IncomeDetails from "../../components/Income";
import { useRouter } from "next/router";
import DeleteIncomeButton from "@/components/DeleteIncomeButton";

export default function IncomePage() {
  const router = useRouter();
  const { id } = router.query;

  const handleDelete = () => {
    router.push("/incomelist");
  };

  return (
    <>
      <BackButton />
      <IncomeDetails />
      <DeleteIncomeButton id={id} onDelete={handleDelete} />{" "}
    </>
  );
}
