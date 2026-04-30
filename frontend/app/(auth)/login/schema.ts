import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().nonempty("Email is required.").email({ message: "Invalid email." }),
    password: z.string().nonempty("Password is required.")
});

export type loginType = z.infer<typeof loginSchema>;