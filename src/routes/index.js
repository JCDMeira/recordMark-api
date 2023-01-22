import express from "express";
import globalRoutes from "./routes.js";
import userRoutes from "./Auth/userRoutes.js";
import remarkRouter from "./Auth/remarkRoutes.js";

const routes = (app) => {
  app.use(globalRoutes);
  app.use(userRoutes);
  app.use(remarkRouter);
};

export default routes;
