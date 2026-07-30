import { loginType } from "@/app/(auth)/login/schema";
import { changePassword, disableTwoFactor, enableTwoFactor, getMe, loginUser, requestPasswordResetEmail, resetAccountPassword, signupUser, verifyTwoFactorLogin, verifyTwoFactorSetup } from "../api/auth";
import { signupType } from "@/app/(auth)/signup/schema";
import { requestPasswordResetEmailType } from "@/app/(auth)/request-password/schema";
import { resetPasswordType } from "@/app/(auth)/reset-password/schema";
import { changePasswordType, twoFactorLoginVerificationType, twoFactorSetupVerificationType } from "../schemas/auth.schema";

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
            result: result.result,
            success: true
        };

    } catch (err: Error | any) {
        return {
            message: err.message || "Login failed!",
            success: false
        };
    };
};

// Handle Get Me
export const handleGetMe = async () => {
    try {
        const result = await getMe();

        if (!result) {
            return {
                message: result.message || "User not found!",
                success: false
            };
        };

        return {
            message: result.message || "User fetched successfully!",
            result: result.result,
            success: true
        };

    } catch (err: Error | any) {
        return {
            message: err.message || "User not found!",
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

// Handle Enable 2FA
export const handleEnableTwoFactor = async () => {
    try {
        const result = await enableTwoFactor();

        if (!result) {
            return {
                message: result?.message || "Failed to enable 2FA!",
                result: result?.result,
                success: false
            };
        };

        return {
            message: result.message || (result.success === false ? "Failed to enable 2FA!" : "2FA enabled successfully!"),
            result: result.result,
            success: result.success
        };

    } catch (err: Error | any) {
        return {
            message: err.message || "Failed to enable 2FA!",
            success: false
        };
    };
};

// Handle Verify 2FA Setup
export const handleVerifyTwoFactorSetup = async (data: twoFactorSetupVerificationType) => {
    try {
        const result = await verifyTwoFactorSetup(data);

        if (!result) {
            return {
                message: result?.message || "Failed to verify 2FA setup!",
                success: false
            };
        };

        return {
            message: result.message || "2FA verified successfully!",
            success: true
        };

    } catch (err: Error | any) {
        return {
            message: err.message || "Failed to verify 2FA setup!",
            success: false
        };
    };
};

// Handle Verify 2FA Login
export const handleVerifyTwoFactorLogin = async (data: twoFactorLoginVerificationType) => {
    try {
        const result = await verifyTwoFactorLogin(data);

        if (!result) {
            return {
                message: result?.message || "Failed to verify login!",
                success: false
            };
        };

        return {
            message: result.message || "Login verified successfully!",
            success: true,
            data: result.data
        };

    } catch (err: Error | any) {
        return {
            message: err.message || "Failed to verify login!",
            success: false,
        };
    };
};

// Handle Disable 2FA
export const handleDisableTwoFactor = async () => {
    try {
        const result = await disableTwoFactor();

        if (!result) {
            return {
                message: result?.message || "Failed to disable 2FA!",
                success: false
            };
        };

        return {
            message: result.message || "2FA disabled successfully!",
            success: true
        };

    } catch (err: Error | any) {
        return {
            message: err.message || "Failed to disable 2FA!",
            success: false
        };
    };
};