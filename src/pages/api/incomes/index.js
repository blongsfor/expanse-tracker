/* import dbConnect from "../../../../lib/dbConnect";
import Income from "../../../../lib/models/income";

export default async function handler(req, res) {
  await dbConnect();

  try {
    switch (req.method) {
      case "GET":
        const incomes = await Income.find().lean();
        return res.status(200).json(incomes);

      case "POST":
        const { name, from, value, date } = req.body;
        const newIncome = new Income({ name, from, value, date });
        await newIncome.save();
        return res.status(201).json({ status: "Income saved successfully" });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Server error" });
  }
}
 */

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
        const { name, from, value, date } = req.body;

        if (!name || !from || !value || !date) {
          return res.status(400).json({ error: "Missing required fields" });
        }

        const newIncome = new Income({ name, from, value, date });
        await newIncome.save();

        return res.status(201).json({ status: "Income saved successfully" });

      default:
        return res
          .status(405)
          .json({ error: `Method ${req.method} not allowed` });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Server error" });
  }
}
