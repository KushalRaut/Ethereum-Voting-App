import { Router } from "express";

const routes = Router();

routes.use("/", (req, res) => {
  res.send("Check 123");
});

export default routes;
