import { loginType } from "@/app/(auth)/login/schema";
import axiosInstance from "./axios";
import API from "./endpoints";
import { signupType } from "@/app/(auth)/signup/schema";
import { requestPasswordResetEmailType } from "@/app/(auth)/request-password/schema";
import { resetPasswordType } from "@/app/(auth)/reset-password/schema";
import { twoFactorSetupVerificationType, twoFactorLoginVerificationType, changePasswordType } from "../schemas/auth.schema";

// Signup User
export const signupUser = async (data: signupType) => {
    try {
        const response = await axiosInstance.post(API.AUTH.SIGN_UP, data);

        return response.data;

    } catch (err: Error | any) {
        throw new Error(err.response?.data?.message || err.response || "Signup failed!");
    };
};

// Login User
export const loginUser = async (data: loginType) => {
    try {
        const response = await axiosInstance.post(API.AUTH.LOGIN, data);

        return response.data;

    } catch (err: Error | any) {
        throw new Error(err.response?.data?.message || err.response || "Login failed!");
    };
};

// Change Password
export const changePassword = async (data: changePasswordType) => {
    try {
        const response = await axiosInstance.patch(API.AUTH.CHANGE_PASSWORD, data);

        return response.data;

    } catch (err: Error | any) {
        throw new Error(err.response?.data?.message || err.response || "Failed to change password!");
    };
};

// Request Password Reset Email
export const requestPasswordResetEmail = async (data: requestPasswordResetEmailType) => {
    try {
        const response = await axiosInstance.post(API.AUTH.REQUEST_PASSWORD_RESET_EMAIL, data);

        return response.data;

    } catch (err: Error | any) {
        throw new Error(err.response?.data?.message || err.response || "Failed to request password reset email!");
    };
};

// Reset Account Password
export const resetAccountPassword = async (data: resetPasswordType) => {
    try {
        const response = await axiosInstance.patch(API.AUTH.RESET_ACCOUNT_PASSWORD, data);

        return response.data;

    } catch (err: Error | any) {
        throw new Error(err.response?.data?.message || err.response || "Failed to reset password!");
    };
};

// Enable 2FA
export const enableTwoFactor = async () => {
    try {
        const response = await axiosInstance.get(API.AUTH.ENABLE_2FA);

        return response.data;

    } catch (err: Error | any) {
        throw new Error(err.response?.data?.message || err.response || "Failed to enable 2FA!");
    };
};

// Verify 2FA Setup
export const verifyTwoFactorSetup = async (data: twoFactorSetupVerificationType) => {
    try {
        const response = await axiosInstance.post(API.AUTH.VERIFY_2FA_SETUP, data);

        return response.data;

    } catch (err: Error | any) {
        throw new Error(err.response?.data?.message || err.response || "Failed to verify 2FA setup!");
    };
};

// Verify 2FA Login
export const verifyTwoFactorLogin = async (data: twoFactorLoginVerificationType) => {
    try {
        const response = await axiosInstance.post(API.AUTH.VERIFY_2FA_LOGIN, data);

        return response.data;

    } catch (err: Error | any) {
        throw new Error(err.response?.data?.message || err.response || "Failed to verify 2FA login!");
    };
};

// Disable 2FA
export const disableTwoFactor = async () => {
    try {
        const response = await axiosInstance.get(API.AUTH.DISABLE_2FA);

        return response.data;

    } catch (err: Error | any) {
        throw new Error(err.response?.data?.message || err.response || "Failed to disable 2FA!");
    };
};