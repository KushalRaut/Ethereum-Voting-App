import { Router } from "express";
import userRoutes from "../routes/user.routes.js";
// import candidateRoutes from "../routes/candidate.routes.js";

const routes = Router();

routes.use("/api/user", userRoutes);
<<<<<<< HEAD
routes.use("/api/candidate", candidateRoutes);
=======
// routes.use("/api/candidate/:id", candidateRoutes);
>>>>>>> ca5320d6043d2df83b22b9de41e971bb01698e6a

export default routes;
