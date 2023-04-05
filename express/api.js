import express from "express";
import servless from "serverless-http";
import cors from "cors";
// import "../src/config/dbConnect.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose.set("strictQuery", true);

mongoose.connect(process.env.CONNECTIONSTRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.log.bind(console, "Connetion error"));
db.once("open", () => console.log("sucessful connection"));

// import globalRoutes from "../src/routes/routes.js";
// import userRoutes from "../src/routes/Auth/userRoutes.js";
// import remarkRouter from "../src/routes/Auth/remarkRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", (req, res) => res.json({ message: "hello" }));
// app.use(globalRoutes);
// app.use("/api", userRoutes);
// app.use("/api", remarkRouter);

export default app;
export const handler = servless(app);
