import Transaction from "../models/Transaction.js";

export const createTransaction = async (req, res) => {
  try {
    const transaction = req.body;
    const newTransaction = new Transaction({
      ...transaction,
      amount: parseInt(transaction.amount),
    });
    const result = await newTransaction.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({}).sort({ createdAt: -1 });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
