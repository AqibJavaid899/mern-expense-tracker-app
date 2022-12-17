import { Router } from "express";
import passport from "passport";

import {
  createTransaction,
  deleteTransaction,
  getTransactions,
  updateTransaction,
} from "../controllers/TransactionController.js";

const router = Router();

router.post("/create", createTransaction);
router.get(
  "/get",
  passport.authenticate("jwt", { session: false }),
  getTransactions,
);
router.delete("/delete/:id", deleteTransaction);
router.patch("/update/:id", updateTransaction);

export default router;
