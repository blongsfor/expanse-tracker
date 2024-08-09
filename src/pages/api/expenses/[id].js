export default function handler(req, res) {
  const { id } = req.query;

  // Assuming you have a way to find the item based on `id`
  const expenseItem = findExpenseById(id); // Replace with your actual data fetching logic

  if (!expenseItem) {
    return res.status(404).json({ error: "Expense not found" });
  }

  return res.status(200).json(expenseItemItem);
}
