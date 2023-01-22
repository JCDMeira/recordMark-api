import express from "express";
import globalRoutes from "./routes.js";
import userRoutes from "./Auth/userRoutes.js";

const routes = (app) => {
  app.use(globalRoutes);
  app.use(userRoutes);
};

export default routes;
