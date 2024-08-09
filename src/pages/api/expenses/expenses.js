import dbConnect from "../../../../lib/dbConnect";
import Expenses from "../../../../lib/models/expenses";

export default async function handler(req, res) {
  await dbConnect();

  console.log("request method:", req.method);

  try {
    switch (req.method) {
      case "GET":
        const expenses = await Expenses.find().lean();
        return res.status(200).json(expenses);
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Server error" });
  }
}
