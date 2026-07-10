import { z } from "zod";

// Signup Schema
export const signupSchema = z.object({
    fullName: z
        .string()
        .nonempty("Full name is required.")
        .min(5, "Full name must be at least 5 characters."),
    email: z
        .string()
        .nonempty("Email is required.")
        .email({ message: "Invalid email." }),
    password: z
        .string()
        .nonempty("Password is required.")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
        .regex(/[0-9]/, "Password must contain at least one number.")
        .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character.")
        .min(8, "Password must be at least 8 characters."),
    confirmPassword: z
        .string()
        .nonempty("Confirm password is required.")
}).refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"]
});
export type signupType = z.infer<typeof signupSchema>;