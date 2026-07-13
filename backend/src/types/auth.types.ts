import { z } from "zod";

// Signup Schema
export const signupSchema = z.object({
    googleId: z
        .string()
        .optional(),
    profilePicture: z
        .string()
        .optional(),
    fullName: z
        .string("Full name is required.")
        .nonempty("Full name is required.")
        .min(5, "Full name must be at least 5 characters."),
    email: z
        .string("Email is required.")
        .nonempty("Email is required.")
        .email({ message: "Invalid email." }),
    password: z
        .string("Password is required.")
        .nonempty("Password is required.")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
        .regex(/[0-9]/, "Password must contain at least one number.")
        .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character.")
        .min(8, "Password must be at least 8 characters."),
    confirmPassword: z
        .string("Confirm password is required.")
        .nonempty("Confirm password is required."),
    loginAttempts: z
        .number()
        .default(0),
    lockUntil: z
        .coerce.date()
        .nullable()
        .default(null),
    provider: z
        .enum(["local", "google"])
        .default("local"),
    twoFactorEnabled: z
        .boolean()
        .default(false),
    twoFactorSecret: z
        .string()
        .nullable()
        .default(null),
    role: z
        .enum(["admin", "user"])
        .default("user")
}).refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"]
});
export type signupType = z.infer<typeof signupSchema>;

// Login Schema
export const loginSchema = z.object({
    email: z
        .string("Email is required.")
        .nonempty("Email is required.")
        .email({ message: "Invalid email." }),
    password: z
        .string("Password is required.")
        .nonempty("Password is required.")
        .min(8, "Password must be at least 8 characters."),
});
export type loginType = z.infer<typeof loginSchema>;

/* Change Password Schema */
export const changePasswordSchema = z.object({
    currentPassword: z
        .string("Current Password is required.")
        .nonempty("Current Password is required."),
    newPassword: z
        .string("New password is required.")
        .nonempty("New password is required.")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
        .regex(/[0-9]/, "Password must contain at least one number.")
        .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character.")
        .min(8, "Password must be at least 8 characters."),
    confirmPassword: z
        .string("Confirm Password is required.")
        .nonempty("Confirm Password is required."),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"]
});

/* Request Password Reset Email Schema */
export const requestPasswordResetEmailSchema = z.object({
    email: z
        .string("Email is required.")
        .nonempty("Email is required.")
        .email({ message: "Please enter a valid email address." })
});
export type sendPasswordResetEmaiType = z.infer<typeof requestPasswordResetEmailSchema>;

/* Reset Passsword Schema */
export const resetPasswordSchema = z.object({
    token: z
        .string("Token is required.")
        .nonempty("Token is required."),
    newPassword: z
        .string("New password is required.")
        .nonempty("New password is required.")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
        .regex(/[0-9]/, "Password must contain at least one number.")
        .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character.")
        .min(8, "Password must be at least 8 characters."),
    confirmPassword: z
        .string("Confirm Password is required.")
        .nonempty("Confirm Password is required."),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"]
});
export type resetPassswordType = z.infer<typeof resetPasswordSchema>;

/* 2FA Verification Schema */
export const twoFactorVerificationSchema = z.object({
    authCode: z
        .string("Auth Code is required.")
        .nonempty("Auth Code is required."),
    tempJWT: z
        .string("Token is required.")
        .nonempty("Token is required.")
});