import { Router } from "express";
import { auth } from "../middleware/auth";
import { AuthRoute } from "./auth-route";
import { userRoute } from "./user-route";
import { RoleRoute } from "./role";

export const routes = Router();

routes.use("/auth", AuthRoute);
routes.use("/user", auth, userRoute);
routes.use("/role", auth, RoleRoute);
