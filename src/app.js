import express from "express";
import "./config/dbConnect.js";
import routes from "./routes/index.js";
import dotenv from "dotenv";
import servless from "serverless-http";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

routes(app);
app.use("/.netlify/functions/api", routes); // path must route to lambda

export default app;
export const handler = servless(app);
