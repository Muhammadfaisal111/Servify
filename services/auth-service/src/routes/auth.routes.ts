const express = require("express");
const router = express.Router();
import { sendEmailController } from "../controllers/auth.controller";

router.post("/signup", sendEmailController);

export default router;
