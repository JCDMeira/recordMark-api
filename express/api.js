import express from "express";
import servless from "serverless-http";
import cors from "cors";
import "../src/config/dbConnect.js";
// import globalRoutes from "../src/routes/routes.js";
// import userRoutes from "../src/routes/Auth/userRoutes.js";
// import remarkRouter from "../src/routes/Auth/remarkRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// const routes = (app) => {
//   app.use(globalRoutes);
//   app.use(userRoutes);
//   app.use(remarkRouter);
// };

export default app;
export const handler = servless(app);
