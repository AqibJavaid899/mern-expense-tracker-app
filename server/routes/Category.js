import { Router } from "express";

import { deleteCategory } from "../controllers/CategoryController.js";

const router = Router();

router.delete("/delete/:id", deleteCategory);

export default router;
