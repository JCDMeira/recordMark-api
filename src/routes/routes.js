import express from "express";

const globalRoutes = express.Router();

globalRoutes.get("/user/create", (req, res) => res.json({ message: "wow" }));
globalRoutes.get("/user/login", (req, res) => res.json({ message: "wow" }));

export default globalRoutes;
