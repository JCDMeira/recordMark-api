import express from "express";
import userController from "../controllers/userController";

const globalRoutes = express.Router();

globalRoutes.post("/user/create", userController.createUser);
globalRoutes.post("/user/login", userController.login);

export default globalRoutes;
