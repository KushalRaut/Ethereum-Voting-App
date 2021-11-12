import express from "express";
import {
  userRegister,
  userLogin,
  getUserById,
} from "../controller/user.controller.js";

const router = express.Router();

router.get("/:id", getUserById);
router.post("/register", userRegister);
router.post("/login", userLogin);

export default router;
