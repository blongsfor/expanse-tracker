import dbConnect from "../../../../lib/dbConnect";
import Expense from "../../../../lib/models/expenses";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  switch (request.method) {
    case "GET":
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
      break;

    case "PUT":
      try {
        const updatedExpense = await Expense.findByIdAndUpdate(
          id,
          request.body,
          {
            new: true,
            runValidators: true,
          }
        );

        if (!updatedExpense) {
          return response.status(404).json({ status: "No Expense Found" });
        }

        response.status(200).json(updatedExpense);
      } catch (error) {
        console.error("Error updating expense:", error);
        response
          .status(500)
          .json({ status: "Server error", error: error.message });
      }
      break;

    case "DELETE":
      try {
        const deletedExpense = await Expense.findByIdAndDelete(id);
        if (!deletedExpense) {
          return response.status(404).json({ status: "No Expense Found" });
        }
        response.status(200).json({ status: "Expense deleted successfully" });
      } catch (error) {
        console.error("Error deleting expense:", error);
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
