const express = require("express");
const router = express.Router();
import { signUpController } from "../controllers/auth.controller";

router.post("/signup", signUpController);

export default router;
