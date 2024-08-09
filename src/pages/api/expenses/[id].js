import dbConnect from "../../../../lib/dbConnect";
import Expense from "../../../../lib/models/expenses";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const expense = await Expense.findById(id);
      if (!expense) {
        return response.status(404).json({ status: "No Expense Found" });
      }
      response.status(200).json(expense);
    } catch (error) {
      console.error("Error fetching expense:", error);
      response
        .status(500)
        .json({ status: "Server error", error: error.message });
    }
  } else {
    response
      .status(405)
      .json({ status: `Method ${request.method} not allowed` });
  }
}
