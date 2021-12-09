import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/index.js";
import connDB from "./config/db.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT;
const ENV = process.env.NODE_ENV;

//enable cors
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
connDB();
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} in ${ENV} mode.`.yellow.bold);
});
