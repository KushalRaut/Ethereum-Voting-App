import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/index.js";
import connDB from "./config/db.js";

let app = express();

dotenv.config();

//enable cors
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
connDB();
app.use(routes);

const PORT = process.env.PORT;
const ENV = process.env.NODE_ENV;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} in ${ENV} mode.`.yellow.bold);
});
