import { Request, Response } from "express";
import { IUser, UserModel } from "../models/user.model";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt";
import jwt, { JwtPayload } from "jsonwebtoken";
import { CLIENT_URL, JWT_SECRET_KEY } from "../config/config";
import { sendEmail } from "../services/email";
import { generatePasswordResetEmail, generatePasswordUpdatedEmail } from "../templates/email.templates";
import { generateCsrfToken } from "../helpers/helper";
import speakeasy from "speakeasy";
import QRCode from "qrcode";

class AuthController {
    // Signup User
    signupUser = async (req: Request, res: Response) => {
        try {
            const { fullName, email, password } = req.body;

            const userExist = await UserModel.findOne({ email: email });

            if (userExist) {
                return res.status(400).send({
                    message: "This email is already in use!",
                    success: false
                });
            };

            const salt = await bcrypt.genSalt(10);

            const hash = await bcrypt.hash(password, salt);

            await UserModel.create({
                fullName: fullName,
                email: email,
                password: hash
            });

            res.status(201).send({
                message: "Signup successful!",
                success: true
            });

        } catch (err: any) {
            console.log(err);
            res.status(500).send({
                message: err.message ? `Internal server error: ${err.message}` : "Internal server error!",
                success: false
            });
        };
    };

    // Login User
    loginUser = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;

            const MAX_ATTEMPTS = 10;
            const LOCK_TIME = 15 * 60 * 1000; // 15 minutes

            const userExist = await UserModel.findOne({ email: email });

            if (!userExist) {
                return res.status(401).send({
                    message: "Invalid email or password!",
                    success: false
                });
            };

            // Check if the account is currently locked
            if (userExist.lockUntil && userExist.lockUntil.getTime() > Date.now()) {
                return res.status(423).send({
                    message: "Your account is temporarily locked. Please try again later!.",
                    success: false,
                });
            };

            // Reset lock after the lock period has expired
            if (userExist.lockUntil && userExist.lockUntil.getTime() <= Date.now()) {
                userExist.lockUntil = null;
                userExist.loginAttempts = 0;
                await userExist.save();
            };

            const isPasswordMatch = await bcrypt.compare(password, userExist.password);

            // Handle failed login attempts
            if (!isPasswordMatch) {
                userExist.loginAttempts += 1;

                const attemptsLeft = Math.max(0, MAX_ATTEMPTS - userExist.loginAttempts);

                if (userExist.loginAttempts >= MAX_ATTEMPTS) {
                    userExist.lockUntil = new Date(Date.now() + LOCK_TIME);
                };

                await userExist.save();

                return res.status(401).send({
                    message: attemptsLeft > 0
                        ? `Invalid email or password! You have ${attemptsLeft} login attempt${attemptsLeft === 1 ? "" : "s"} remaining before your account is temporarily locked.`
                        : "Invalid email or password! Your account has been temporarily locked due to too many failed login attempts.",
                    success: false
                });
            };

            // Successful login
            userExist.loginAttempts = 0;
            userExist.lockUntil = null;
            await userExist.save();

            // If 2FA is enabled, don't issue JWT yet
            if (userExist.twoFactorEnabled) {
                const tempJWT = jwt.sign({ id: userExist._id }, JWT_SECRET_KEY, { expiresIn: "5m" });
                return res.status(200).json({
                    message: "2FA verification required.",
                    result: {
                        requires2FA: true,
                        tempJWT: tempJWT
                    },
                    success: true
                });
            };

            const payload = {
                id: userExist._id.toString(),
                email: userExist.email,
                role: userExist.role
            };

            const auth_token = generateToken(payload);

            res.cookie("auth_token", auth_token, {
                httpOnly: true,
                maxAge: 60 * 60 * 24 * 15 * 1000,
                sameSite: "lax",
                secure: true
            });

            const csrfToken = generateCsrfToken();

            res.cookie("csrf_token", csrfToken, {
                httpOnly: false,
                secure: true,
                sameSite: "lax"
            });

            res.status(200).send({
                message: "Logged in successfully!",
                success: true
            });

        } catch (err: any) {
            console.log(err);
            res.status(500).send({
                message: err.message ? `Internal server error: ${err.message}` : "Internal server error!",
                success: true
            });
        };
    };

    // Get Current User
    getMe = async (req: Request, res: Response) => {
        try {
            const user = req.user as { id: string };

            const userExist = await UserModel.findOne({ _id: user.id }).select("profilePicture fullName email").lean();

            if (!userExist) {
                return res.status(404).send({
                    message: "User not found!",
                    success: false
                });
            };

            res.status(200).send({
                message: "User fetched successfully!",
                result: userExist,
                success: true
            });

        } catch (err: any) {
            console.log(err);
            res.status(500).send({
                message: err.message ? `Internal server error: ${err.message}` : "Internal server error.",
                success: false
            });
        };
    };

    // Google Callback
    googleCallback = async (req: Request, res: Response) => {
        try {
            const user = req.user as IUser;

            if (user.twoFactorEnabled) {
                const tempJWT = jwt.sign({ id: user._id }, JWT_SECRET_KEY, { expiresIn: "5m" });

                // Send user to a 2FA login verification page
                return res.redirect(
                    `${CLIENT_URL}/login/2fa?tempJWT=${tempJWT}`
                );
            };

            const payload = {
                id: user?._id.toString(),
                email: user?.email,
                role: user?.role
            };

            const token = generateToken(payload);

            res.cookie("auth_token", token, {
                httpOnly: true,
                sameSite: "lax",
                maxAge: 60 * 60 * 1000,
                secure: false
            });

            const csrfToken = generateCsrfToken();

            res.cookie("csrf_token", csrfToken, {
                httpOnly: false,
                secure: true,
                sameSite: "lax"
            });

            switch (user.role) {
                case "admin":
                    res.redirect(`${CLIENT_URL}/admin/dashboard`);
                    break;
                case "user":
                    res.redirect(`${CLIENT_URL}/user/dashboard`);
                    break;
                default:
                    res.redirect(`${CLIENT_URL}/login`);
            };

        } catch (err: any) {
            console.log(err);
            res.status(500).send({
                message: err.message ? `Internal server error: ${err.message}` : "Internal server error!",
                success: false
            });
        };
    };

    // Change Password
    changePassword = async (req: Request, res: Response) => {
        try {
            const { currentPassword, newPassword } = req.body;

            const user = req.user as { id: string };

            const userExist = await UserModel.findOne({ _id: user.id });

            if (!userExist) {
                return res.status(404).send({
                    message: "User not found!",
                    success: false
                });
            };

            const isPasswordMatch = await bcrypt.compare(currentPassword, userExist.password);

            if (!isPasswordMatch) {
                return res.status(401).send({
                    message: "Current password do not match!",
                    success: false
                });
            };

            const salt = await bcrypt.genSalt(10);

            const hash = await bcrypt.hash(newPassword, salt);

            await UserModel.findOneAndUpdate(
                { _id: user.id },
                { $set: { password: hash } }
            );

            res.clearCookie("auth_token", {
                httpOnly: true,
                secure: true,
                sameSite: "lax"
            });

            res.clearCookie("csrf_token", {
                httpOnly: false,
                secure: true,
                sameSite: "lax"
            });

            res.status(200).send({
                message: "Password changed successfully. Please log in again!",
                success: true
            });

        } catch (err: any) {
            console.log(err);
            res.status(500).send({
                message: err.message ? `Internal server error: ${err.message}` : "Internal server error!",
                success: false
            });
        };
    };

    // Request Password Reset Email
    requestPasswordResetEmail = async (req: Request, res: Response) => {
        try {
            const userExist = await UserModel.findOne({ email: req.body.email });

            if (!userExist) {
                return res.status(404).send({
                    message: "Something went wrong! Please try again later!",
                    success: false
                });
            };

            const token = jwt.sign({ email: userExist.email }, JWT_SECRET_KEY, { expiresIn: "5m" })

            const resetUrl = `${CLIENT_URL}/reset-password?token=${token}`;

            await sendEmail(userExist.email, "Reset Your Password", generatePasswordResetEmail(userExist, resetUrl));

            res.status(200).send({
                message: "Password reset email send successfully!",
                success: true
            });

        } catch (err: any) {
            console.log(err);
            res.status(500).send({
                message: err.response.message ? `Internal server error: ${err.message}` : "Internal server error!",
                success: false
            });
        };
    };

    // Reset Account Password
    resetAccountPassword = async (req: Request, res: Response) => {
        try {
            const { token, newPassword } = req.body;

            let decoded;

            try {
                decoded = jwt.verify(token, JWT_SECRET_KEY) as JwtPayload;

            } catch (err: any) {
                return res.status(400).send({
                    message: "Invalid or expired token!",
                    success: false
                });
            };

            const salt = await bcrypt.genSalt(10);

            const hash = await bcrypt.hash(newPassword, salt);

            const userExist = await UserModel.findOneAndUpdate(
                { email: decoded.email },
                { $set: { password: hash } }
            );

            if (!userExist) {
                return res.status(404).send({
                    message: "User not found!",
                    success: false
                });
            };

            await sendEmail(userExist.email, "Your password has been changed", generatePasswordUpdatedEmail(userExist));

            res.status(200).send({
                message: "Your password changed successfully!",
                success: true
            });

        } catch (err: any) {
            console.log(err);
            res.status(500).send({
                message: err.response.message ? `Internal server error: ${err.message}` : "Internal server error!",
                success: false
            });
        };
    };

    // Delete User Account By ID
    deleteUserAccountByUserId = async (req: Request, res: Response) => {
        try {
            const user = req.user as { id: string };

            const userExist = await UserModel.findOne({ _id: req.params.userId });

            if (!userExist) {
                return res.status(404).send({
                    message: "User not found!",
                    success: false
                });
            };

            const authUser = await UserModel.findOne({ _id: user.id });

            if (!authUser) {
                return res.status(404).send({
                    message: "Something went wrong! Please try again later.",
                    success: false
                });
            };

            if (authUser?.role === "admin" && authUser._id.toString() === req.params.userId) {
                return res.status(403).send({
                    message: "Admin cannot delete their own account!",
                    success: false
                });
            };

            const isPasswordMatch = await bcrypt.compare(req.body.password, authUser.password)

            if (!isPasswordMatch) {
                return res.status(401).send({
                    message: "Password do not match!",
                    success: false
                });
            };

            await UserModel.findOneAndDelete({ _id: req.params.userId });

            res.status(200).send({
                message: "User account deleted successfully!",
                success: true
            });

        } catch (err: any) {
            console.log(err);
            res.status(500).send({
                message: err.message ? `Internal server error: ${err.message}` : "Internal server error!",
                success: false
            });
        };
    };

    // Enable 2FA
    enable2FA = async (req: Request, res: Response) => {
        try {
            const user = req.user as { id: string };

            const userExist = await UserModel.findOne({ _id: user.id });

            if (!userExist) {
                return res.status(404).send({
                    message: "User not found!",
                    success: false
                });
            };

            if (userExist.twoFactorEnabled) {
                return res.status(400).send({
                    message: "2FA is already enabled.",
                    result: {
                        twoFactorAlreadyEnabled: true
                    },
                    success: false
                });
            };

            let secret;

            if (!userExist.twoFactorSecret) {
                secret = speakeasy.generateSecret({
                    issuer: "QuickAuth",
                    name: userExist.email
                });

                userExist.twoFactorSecret = secret.base32;
                await userExist.save();
            } else {
                secret = {
                    otpauth_url: speakeasy.otpauthURL({
                        secret: userExist.twoFactorSecret,
                        label: userExist.email,
                        issuer: "QuickAuth",
                        encoding: "base32"
                    }),
                };
            };

            const qrCode = await QRCode.toDataURL(secret.otpauth_url as any);

            return res.status(200).send({
                message: "QR code generated successfully.",
                result: qrCode,
                success: true
            });

        } catch (err: any) {
            console.log(err);
            return res.status(500).send({
                message: err.message ? `Internal server error: ${err.message}` : "Internal server error!",
                success: false
            });
        };
    };

    // Verify 2FA Setup
    verify2FASetup = async (req: Request, res: Response) => {
        try {
            const user = req.user as { id: string };

            const { authCode } = req.body;

            const userExist = await UserModel.findOne({ _id: user.id });

            if (!userExist) {
                return res.status(404).send({
                    message: "User not found.",
                    success: false
                });
            };

            const verified = speakeasy.totp.verify({
                secret: userExist.twoFactorSecret as string,
                encoding: "base32",
                token: authCode,
                window: 1
            });

            if (!verified) {
                return res.status(400).send({
                    message: "Invalid authentication code.",
                    success: false
                });
            };

            userExist.twoFactorEnabled = true;
            await userExist.save();

            res.status(200).send({
                message: "2FA Enabled",
                success: true
            });

        } catch (err: any) {
            console.log(err);
            return res.status(500).send({
                message: err.message ? `Internal server error: ${err.message}` : "Internal server error!",
                success: false
            });
        };
    };

    // Verify Login 2FA
    verify2FALogin = async (req: Request, res: Response) => {
        try {

            const { tempJWT, authCode } = req.body;

            const decoded = jwt.verify(tempJWT, JWT_SECRET_KEY) as JwtPayload;

            const userExist = await UserModel.findOne({ _id: decoded.id });

            if (!userExist) {
                return res.status(404).send({
                    message: "User not found.",
                    success: false
                });
            };

            if (!userExist.twoFactorEnabled) {
                return res.status(400).send({
                    message: "2FA is not enabled.",
                    success: false
                });
            };

            const verified = speakeasy.totp.verify({
                secret: userExist.twoFactorSecret as string,
                encoding: "base32",
                token: authCode,
                window: 1
            });

            if (!verified) {
                return res.status(400).send({
                    message: "Invalid authentication code.",
                    success: false
                });
            };

            const payload = {
                id: userExist._id.toString(),
                email: userExist.email,
                role: userExist.role
            };

            const auth_token = generateToken(payload);

            res.cookie("auth_token", auth_token, {
                httpOnly: true,
                maxAge: 60 * 60 * 1000,
                sameSite: "lax",
                secure: false
            });

            const csrfToken = generateCsrfToken();

            res.cookie("csrf_token", csrfToken, {
                httpOnly: false,
                secure: true,
                sameSite: "lax"
            });

            return res.status(200).send({
                message: "Login successfully.",
                success: true
            });

        } catch (err: any) {
            console.log(err)
            return res.status(500).send({
                message: err.message ? `Internal server error: ${err.message}` : "Internal server error!",
                success: false
            });
        };
    };

    // Disable 2FA
    disable2FA = async (req: Request, res: Response) => {
        try {
            const user = req.user as { id: string };

            const userExist = await UserModel.findOne({ _id: user.id });

            if (!userExist) {
                return res.status(404).send({
                    message: "User not found.",
                    success: false
                });
            };

            if (!userExist.twoFactorEnabled) {
                return res.status(400).send({
                    message: "2FA is not enabled.",
                    success: false
                });
            };

            userExist.twoFactorEnabled = false;
            userExist.twoFactorSecret = null;

            await userExist.save();

            return res.status(200).send({
                message: "2FA disabled successfully.",
                success: true
            });

        } catch (err: any) {
            console.log(err);
            return res.status(500).send({
                message: err.message ? `Internal server error: ${err.message}` : "Internal server error!",
                success: false
            });
        };
    };
};

export default AuthController;