import { Router } from "express";
import userRoutes from "../routes/user.routes.js";

const routes = Router();

routes.use("/api/user", userRoutes);

export default routes;
