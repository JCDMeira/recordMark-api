import express from "express";
import servless from "serverless-http";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/teste", (req, res) =>
  res.status(201).json({ message: "testando" })
);

app.use("/api", (req, res) => res.status(200).json({ message: "Hello world" }));

export default app;
export const handler = servless(app);
