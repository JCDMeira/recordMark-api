import express from "express";
import globalRoutes from "../src/routes/routes.js";
import userRoutes from "../src/routes/Auth/userRoutes.js";
import remarkRouter from "../src/routes/Auth/remarkRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

const routes = (app) => {
  app.use(globalRoutes);
  app.use(userRoutes);
  app.use(remarkRouter);
};
app.use("/.netlify/functions/api", routes); // path must route to lambda

export default app;
export const handler = servless(app);
