import { Router } from "express";
import {
  candidateRegister,
  getAllManifestos,
  postManifesto,
} from "../controller/candidate.controller.js";
import { upload } from "../multer/multer.js";

const router = Router();

router.post("/register", upload.single("photo"), candidateRegister);
router.post("/manifesto/:id", upload.single("partyImage"), postManifesto);
router.get("/manifesto/:id", getAllManifestos);

export default router;
