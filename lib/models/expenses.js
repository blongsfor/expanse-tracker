import mongoose from "mongoose";

const { Schema } = mongoose;

const expenseSchema = new Schema({
  entryType: { type: String, required: true },
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  notes: { type: String, required: false },
});

const Expenses =
  mongoose.models.Expenses || mongoose.model("Expenses", expenseSchema);

export default Expenses;
