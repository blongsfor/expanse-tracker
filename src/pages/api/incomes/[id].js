import dbConnect from "../../../../lib/dbConnect";
import Income from "../../../../lib/models/income";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  switch (request.method) {
    case "GET":
      try {
        const income = await Income.findById(id);
        if (!income) {
          return response.status(404).json({ status: "No Income Found" });
        }
        response.status(200).json(income);
      } catch (error) {
        console.error("Error fetching income:", error);
        response
          .status(500)
          .json({ status: "Server error", error: error.message });
      }
      break;

    case "DELETE":
      try {
        const deletedIncome = await Income.findByIdAndDelete(id);
        if (!deletedIncome) {
          return response.status(404).json({ status: "No Income Found" });
        }
        response.status(200).json({ status: "Income deleted successfully" });
      } catch (error) {
        console.error("Error deleting income:", error);
        response
          .status(500)
          .json({ status: "Server error", error: error.message });
      }
      break;

    default:
      response
        .status(405)
        .json({ status: `Method ${request.method} not allowed` });
  }
}
