import express from "express";

const globalRoutes = express.Router();

globalRoutes.get("/solutions", (req, res) => res.json({ message: "wow" }));

export default globalRoutes;
