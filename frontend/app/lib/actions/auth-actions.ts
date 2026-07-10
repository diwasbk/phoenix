import { loginType } from "@/app/(auth)/login/schema";
import { changePassword, loginUser, requestPasswordResetEmail, resetAccountPassword, signupUser } from "../api/auth";
import { signupType } from "@/app/(auth)/signup/schema";
import { changePasswordType } from "@/app/(private)/admin/change-password/schema";
import { requestPasswordResetEmailType } from "@/app/(auth)/request-password/schema";
import { resetPasswordType } from "@/app/(auth)/reset-password/schema";

// Handle Signup
export const handleSignup = async (data: signupType) => {
    try {
        const result = await signupUser(data);

        if (!result) {
            return {
                message: result.message || "Signup failed!",
                success: false
            };
        };

        return {
            message: result.message || "Signup successfully!",
            success: true
        };

    } catch (err: Error | any) {
        return {
            message: err.message || "Signup failed!",
            success: false
        };
    };
};

// Handle Login
export const handleLogin = async (data: loginType) => {
    try {
        const result = await loginUser(data);

        if (!result) {
            return {
                message: result.message || "Login failed!",
                success: false
            };
        };

        return {
            message: result.message || "Login successfully!",
            success: true
        };

    } catch (err: Error | any) {
        return {
            message: err.message || "Login failed!",
            success: false
        };
    };
};

// Handle Change Password
export const handleChangePassword = async (data: changePasswordType) => {
    try {
        const result = await changePassword(data);

        if (!result) {
            return {
                message: result.message || "Failed to change password!",
                success: false
            };
        };

        return {
            message: result.message || "Password changed successfully!",
            success: true
        };

    } catch (err: Error | any) {
        return {
            message: err.message || "Failed to change password!",
            success: false
        };
    };
};

// Handle Request Password Reset Email
export const handleRequestPasswordResetEmail = async (data: requestPasswordResetEmailType) => {
    try {
        const result = await requestPasswordResetEmail(data);

        if (!result) {
            return {
                message: result.message || "Failed to request password reset email!",
                success: false
            };
        };

        return {
            message: result.message || "Password reset email sent successfully!",
            success: true
        };

    } catch (err: Error | any) {
        return {
            message: err.message || "Failed to request password reset email!",
            success: false
        };
    };
};

// Handle Reset Account Password
export const handleResetAccountPassword = async (data: resetPasswordType) => {
    try {
        const result = await resetAccountPassword(data);

        if (!result) {
            return {
                message: result.message || "Failed to reset password!",
                success: false
            };
        };

        return {
            message: result.message || "Password reset successfully!",
            success: true
        };

    } catch (err: Error | any) {
        return {
            message: err.message || "Failed to reset password!",
            success: false
        };
    };
};