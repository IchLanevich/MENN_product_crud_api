import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ProductRoute from "./routes/ProductRoute.ts";
import { logRequest } from "./middleware/logs.ts";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(logRequest);
app.use(ProductRoute);

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running");
});