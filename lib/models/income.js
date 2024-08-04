import mongoose from "mongoose";

const { Schema } = mongoose;

const incomeSchema = new Schema({
  name: { type: String, required: true },
  from: { type: String, required: true },
  value: { type: Number, required: true },
  date: { type: Date, required: true },
});

const Income = mongoose.models.Income || mongoose.model("Income", incomeSchema);

export default Income;
