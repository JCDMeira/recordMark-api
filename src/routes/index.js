import express from "express";
import globalRoutes from "./routes.js";

const routes = (app) => {
  app.use(globalRoutes);
};

export default routes;
