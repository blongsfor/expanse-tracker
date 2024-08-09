import dbConnect from "../../../../lib/dbConnect";
import Expense from "../../../../lib/models/expenses";

export default async function handler(req, res) {
  await dbConnect();

  try {
    if (req.method === "GET") {
      const expenses = await Expense.find().lean();
      return res.status(200).json(expenses);
    } else {
      return res
        .status(405)
        .json({ error: `Method ${req.method} not allowed` });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Server error" });
  }
}
