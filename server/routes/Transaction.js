import { Router } from "express";

import {
  createTransaction,
  deleteTransaction,
  getTransactions,
  updateTransaction,
} from "../controllers/TransactionController.js";

const router = Router();

router.post("/create", createTransaction);
router.get("/get", getTransactions);
router.delete("/delete/:id", deleteTransaction);
router.patch("/update/:id", updateTransaction);

export default router;
