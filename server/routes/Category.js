import { Router } from "express";

import {
  createCategory,
  deleteCategory,
} from "../controllers/CategoryController.js";

const router = Router();

router.post("/create/", createCategory);
router.delete("/delete/:id", deleteCategory);

export default router;
