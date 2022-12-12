import { Router } from "express";

import {
  createTransaction,
  getTransactions,
} from "../controllers/TransactionController.js";

const router = Router();

router.post("/create", createTransaction);
router.get("/get", getTransactions);

export default router;
