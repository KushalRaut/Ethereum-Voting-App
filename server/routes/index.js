import { Router } from "express";
import userRoutes from "../routes/user.routes.js";
// import candidateRoutes from "../routes/candidate.routes.js";

const routes = Router();

routes.use("/api/user", userRoutes);
// routes.use("/api/candidate/:id", candidateRoutes);

export default routes;
