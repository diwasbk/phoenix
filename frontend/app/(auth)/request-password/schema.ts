import {z} from "zod";

/* Request Password Reset Email Schema */
export const requestPasswordResetEmailSchema = z.object({
    email: z
        .string()
        .nonempty("Email is required.")
        .email({ message: "Invalid email." })
});
export type requestPasswordResetEmailType = z.infer<typeof requestPasswordResetEmailSchema>;