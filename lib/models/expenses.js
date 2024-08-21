import mongoose from "mongoose";

const { Schema } = mongoose;

const expenseSchema = new Schema({
  entrytype: { type: String, required: true },
  name: { type: String, required: true },
  from: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
});

const Expenses =
  mongoose.models.Expenses || mongoose.model("Expenses", expenseSchema);

export default Expenses;
