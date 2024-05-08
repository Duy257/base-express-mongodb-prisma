import { Router } from "express";
import userController from "../controller/user";

export const userRoute = Router();

userRoute.get("/:id", userController.fetch);
userRoute.put("/:id", userController.update);
