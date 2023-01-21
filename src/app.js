import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import dotenv from "dotenv";

db.on("error", console.log.bind(console, "Connetion error"));
db.once("open", () => console.log("sucessful connection"));

const app = express();

app.use(express.json());

routes(app);

export default app;
