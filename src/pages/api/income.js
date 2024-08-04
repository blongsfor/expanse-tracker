import dbConnect from "../../../lib/dbConnect";
import Income from "../../../lib/models/income";

export default async function handler(req, res) {
  await dbConnect();

  console.log("request method:", req.method);

  try {
    switch (req.method) {
      case "GET":
        const income = await Income.find().lean();
        return res.status(200).json(income);
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Server error" });
  }
}
