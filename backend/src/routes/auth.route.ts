import express from "express";
import AuthController from "../controllers/auth.controller";
import schemaValidateMiddleware from "../middlewares/schema.validate.middleware";
import { changePasswordSchema, loginSchema, requestPasswordResetEmailSchema, resetPasswordSchema, signupSchema } from "../types/auth.types";
import { jwtAuthMiddleware } from "../utils/jwt";
import { isOwnerOrAdminAuthMiddleware } from "../middlewares/authorize.middleware";

const authRouter = express.Router();
const authController = new AuthController();

authRouter.post("/signup", schemaValidateMiddleware(signupSchema), authController.signupUser);
authRouter.post("/login", schemaValidateMiddleware(loginSchema), authController.loginUser);
authRouter.patch("/change-password", jwtAuthMiddleware, schemaValidateMiddleware(changePasswordSchema), authController.changePassword);
authRouter.post("/request-password-reset-email", schemaValidateMiddleware(requestPasswordResetEmailSchema), authController.requestPasswordResetEmail);
authRouter.patch("/reset-account-password", schemaValidateMiddleware(resetPasswordSchema), authController.resetAccountPassword);
authRouter.delete("/delete-account/:userId", jwtAuthMiddleware, isOwnerOrAdminAuthMiddleware, schemaValidateMiddleware(loginSchema.pick({ password: true })), authController.deleteUserAccountByUserId)

export default authRouter;