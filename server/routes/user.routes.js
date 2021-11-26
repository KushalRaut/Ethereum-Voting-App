import express from "express";
import {
  userRegister,
  userLogin,
  getUserById,
  verifyLogin,
} from "../controller/user.controller.js";
import { upload } from "../multer/multer.js";

const router = express.Router();

router.get("/:id", getUserById);
router.post("/register", upload.single("photo"), userRegister);
router.post("/login", userLogin);
router.post("/verifylogin", verifyLogin);

export default router;
