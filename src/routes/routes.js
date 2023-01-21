import express from "express";
import userController from "../controllers/userController";

const globalRoutes = express.Router();

globalRoutes.post("/user/create", userController.createUser);
globalRoutes.get("/user/list", userController.getAllUsers);
globalRoutes.get("/user/login", (req, res) => res.json({ message: "wow" }));

export default globalRoutes;
