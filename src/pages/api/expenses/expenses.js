import dbConnect from "../../../../lib/dbConnect";
import Expense from "../../../../lib/models/expenses";

export default async function handler(req, res) {
  await dbConnect();

  try {
    switch (req.method) {
      case "GET":
        const expenses = await Expense.find().lean();
        return res.status(200).json(expenses);
      case "POST":
        const { entryType, category, amount, date, description, notes } =
          req.body;

        const newExpense = new Expense({
          entryType,
          category,
          amount,
          date,
          description,
          notes,
        });
        const savedExpense = await newExpense.save();
        return res.status(201).json(savedExpense);
    }
  } catch (error) {
    console.error("Error in API route:", error);
    return res.status(500).json({ error: "Server error" });
  }
}
