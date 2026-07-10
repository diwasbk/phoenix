import { z } from "zod";

/* Reset Password Schema */
export const resetPasswordSchema = z.object({
    token: z
        .string("Token is required."),
    newPassword: z
        .string()
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
export type resetPasswordType = z.infer<typeof resetPasswordSchema>;