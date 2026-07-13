import { z } from "zod";

/* Change Password Schema */
export const changePasswordSchema = z.object({
    currentPassword: z
        .string()
        .nonempty("Current Password is required."),
    newPassword: z
        .string()
        .nonempty("New password is required.")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
        .regex(/[0-9]/, "Password must contain at least one number.")
        .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character.")
        .min(8, "Password must be at least 8 characters."),
    confirmPassword: z
        .string()
        .nonempty("Confirm Password is required."),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"]
});
export type changePasswordType = z.infer<typeof changePasswordSchema>;

/* 2FA Setup Verification Schema */
export const twoFactorSetupVerificationSchema = z.object({
    authCode: z
        .string()
        .nonempty("Auth Code is required.")
});
export type twoFactorSetupVerificationType = z.infer<typeof twoFactorSetupVerificationSchema>;

/* 2FA Login Verification Schema */
export const twoFactorLoginVerificationSchema = z.object({
    authCode: z
        .string()
        .nonempty("Auth Code is required."),
    tempJWT: z
        .string()
        .nonempty("Token is required.")
});
export type twoFactorLoginVerificationType = z.infer<typeof twoFactorLoginVerificationSchema>;