import { Router } from "express";
import {
  getAllManifestos,
  postManifesto,
} from "../controller/candidate.controller.js";
import { upload } from "../multer/multer.js";

const router = Router();

router.post("/manifesto/:id", upload.single("partyImage"), postManifesto);
router.get("/manifesto/:id", getAllManifestos);

export default router;
