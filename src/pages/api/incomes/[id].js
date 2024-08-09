import dbConnect from "../../../../lib/dbConnect";
import Income from "../../../../lib/models/income";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const income = await Income.findById(id);

    if (!income) {
      return response.status(404).json({ status: "No Income Found" });
    }

    response.status(200).json(income);
  }
}
