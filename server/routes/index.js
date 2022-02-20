import { Router } from "express";
import userRoutes from "../routes/user.routes.js";
import candidateRoutes from "../routes/candidate.routes.js";
import walletRoutes from "../routes/metaId.routes.js";

const routes = Router();

routes.use("/api/user", userRoutes);
routes.use("/api/candidate", candidateRoutes);
routes.use("/api/wallet", walletRoutes);

export default routes;
