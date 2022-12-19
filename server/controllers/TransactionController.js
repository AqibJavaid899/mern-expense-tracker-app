import Transaction from "../models/Transaction.js";

export const createTransaction = async (req, res) => {
  try {
    const transaction = req.body;
    const newTransaction = new Transaction({
      ...transaction,
      amount: parseInt(transaction.amount),
    });
    await newTransaction.save();
    res
      .status(201)
      .json({ message: "Transaction has been created successfully" });
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

export const deleteTransaction = async (req, res) => {
  try {
    await Transaction.findOneAndDelete({
      _id: req.params.id,
    });
    res
      .status(200)
      .json({ message: "Transaction has been deleted successfully" });
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
};

export const updateTransaction = async (req, res) => {
  try {
    await Transaction.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: req.body },
    );
    res
      .status(200)
      .json({ message: "Transaction has been updated successfully" });
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
};
