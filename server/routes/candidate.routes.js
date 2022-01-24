import { Router } from "express";
import { postManifesto } from "../controller/candidate.controller.js";

const router = Router();

router.post("/manifesto/:id", postManifesto);
