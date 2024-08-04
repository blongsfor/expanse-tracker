import mongoose from "mongoose";

const { Schema } = mongoose;

const expenseSchema = new Schema({
  name: { type: String, required: true },
  from: { type: String, required: true },
  value: { type: Number, required: true },
  date: { type: Date, required: true },
});

const Expenses =
  mongoose.models.Expenses || mongoose.model("Expenses", expenseSchema);

export default Expenses;
