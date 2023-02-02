import express from "express";
import "./config/dbConnect.js";
import routes from "./routes/index.js";
import dotenv from "dotenv";

const app = express();

app.use(express.json());

routes(app);
app.use("/.netlify/functions/api", routes); // path must route to lambda

export default app;
