import express from "express";
import AuthController from "../controllers/auth.controller";
import schemaValidateMiddleware from "../middlewares/schema.validate.middleware";
import { changePasswordSchema, loginSchema, requestPasswordResetEmailSchema, resetPasswordSchema, signupSchema, twoFactorVerificationSchema } from "../types/auth.types";
import { jwtAuthMiddleware } from "../utils/jwt";
import { isOwnerOrAdminAuthMiddleware } from "../middlewares/authorize.middleware";
import { csrfVerificationMiddleware } from "../middlewares/csrf.verification.middleware";
import passport from "../config/passport";
import { CLIENT_URL } from "../config/config";

const authRouter = express.Router();
const authController = new AuthController();

// Google Login
authRouter.get("/google/login", passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
}));

// Google Callback
authRouter.get("/google/callback", passport.authenticate("google", { session: false, failureRedirect: `${CLIENT_URL}/error` }),
    authController.googleCallback
);

authRouter.post("/signup", schemaValidateMiddleware(signupSchema), authController.signupUser);
authRouter.post("/login", schemaValidateMiddleware(loginSchema), authController.loginUser);
authRouter.patch("/change-password", jwtAuthMiddleware, csrfVerificationMiddleware, schemaValidateMiddleware(changePasswordSchema), authController.changePassword);
authRouter.post("/request-password-reset-email", schemaValidateMiddleware(requestPasswordResetEmailSchema), authController.requestPasswordResetEmail);
authRouter.patch("/reset-account-password", schemaValidateMiddleware(resetPasswordSchema), authController.resetAccountPassword);
authRouter.delete("/delete-account/:userId", jwtAuthMiddleware, isOwnerOrAdminAuthMiddleware, csrfVerificationMiddleware, schemaValidateMiddleware(loginSchema.pick({ password: true })), authController.deleteUserAccountByUserId);

export default authRouter;