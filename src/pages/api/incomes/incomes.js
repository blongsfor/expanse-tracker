import dbConnect from "../../../../lib/dbConnect";
import Income from "../../../../lib/models/income";

export default async function handler(req, res) {
  await dbConnect();

  try {
    switch (req.method) {
      case "GET":
        const incomes = await Income.find().lean();
        return res.status(200).json(incomes);
      case "POST":
        const { entryType, category, amount, date, description, notes } =
          req.body;

        const newIncome = new Income({
          entryType,
          category,
          amount,
          date,
          description,
          notes,
        });
        const savedIncome = await newIncome.save();
        return res.status(201).json(savedIncome);
    }
  } catch (error) {
    console.error("Error in API route:", error);
    return res.status(500).json({ error: "Server error" });
  }
}
