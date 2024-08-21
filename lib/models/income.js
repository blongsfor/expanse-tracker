import mongoose from "mongoose";

const { Schema } = mongoose;

const incomeSchema = new Schema({
  entryType: { type: String, required: true },
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  notes: { type: String, required: false },
});

const Income = mongoose.models.Income || mongoose.model("Income", incomeSchema);

export default Income;
