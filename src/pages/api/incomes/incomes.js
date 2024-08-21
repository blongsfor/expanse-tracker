import dbConnect from "../../../../lib/dbConnect";
import Income from "../../../../lib/models/income";

export default async function handler(req, res) {
  await dbConnect();

  try {
    switch (req.method) {
      case "GET":
        const income = await Income.find().lean();
        return res.status(200).json(income);

      case "POST":
        const { entrytype, category, amount, date, description, notes } =
          req.body;
        const newIncome = new Income({
          entrytype,
          category,
          amount,
          date,
          description,
          notes,
        });
        const savedIncome = await newIncome.save();
        return res.status(201).json(savedIncome);

      default:
        return res
          .status(405)
          .json({ error: `Method ${req.method} not allowed` });
    }
  } catch (error) {
    // Keep this log for error tracking
    console.error("Error in API route:", error);
    return res.status(500).json({ error: "Server error" });
  }
}
