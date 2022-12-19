import { Router } from "express";
import passport from "passport";

import { getSignedInUser } from "../controllers/UserController.js";

const router = Router();

router.get(
  "/get",
  passport.authenticate("jwt", { session: false }),
  getSignedInUser,
);

export default router;
