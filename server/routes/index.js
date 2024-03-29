import { Router } from "express";
import passport from "passport";

import transactionRoutes from "./Transaction.js";
import authenticationRoutes from "./Authentication.js";
import userRoutes from "./User.js";
import categoryRoutes from "./Category.js";

const router = Router();

const authMiddleware = passport.authenticate("jwt", { session: false });

router.use("/transaction", authMiddleware, transactionRoutes);
router.use("/authentication", authenticationRoutes);
router.use("/user", authMiddleware, userRoutes);
router.use("/category", authMiddleware, categoryRoutes);

export default router;
