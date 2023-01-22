import express from "express";
import userController from "../../controllers/userController";
import Auth from "../../middleware/auth";

const userRoutes = express.Router();

userRoutes.get("/user/list", Auth, userController.getAllUsers);
userRoutes.put("/user/edit/:id", Auth, userController.editUser);
userRoutes.delete("/user/edit/:id", Auth, userController.deletUser);

export default userRoutes;
