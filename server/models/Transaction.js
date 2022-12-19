import mongoose from "mongoose";

const transactionSchema = mongoose.Schema(
  {
    userId: mongoose.Types.ObjectId,
    amount: Number,
    description: String,
    date: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamps: true },
);

const Transaction = new mongoose.model("Transaction", transactionSchema);
export default Transaction;
