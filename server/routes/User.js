import { Router } from "express";

import { getSignedInUser } from "../controllers/UserController.js";

const router = Router();

router.get("/get", getSignedInUser);

export default router;
