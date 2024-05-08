import { Router } from "express";
import RoleController from "../controller/role";

export const RoleRoute = Router();

RoleRoute.put("/:id", RoleController.editRoleUser);
