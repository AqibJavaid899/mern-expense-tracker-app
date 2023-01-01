import { Router } from "express";

import {
  createCategory,
  deleteCategory,
  updateCategory,
} from "../controllers/CategoryController.js";

const router = Router();

router.post("/create/", createCategory);
router.patch("/update/:id", updateCategory);
router.delete("/delete/:id", deleteCategory);

export default router;
