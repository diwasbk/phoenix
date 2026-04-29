import { z } from "zod";

export const inquirySchema = z.object({
    fullName: z
        .string()
        .nonempty("Full name is required.")
        .min(5, "Full name must be at least 5 characters."),
    email: z
        .string()
        .nonempty("Email is required.")
        .email("Invalid email address."),
    phoneNumber: z.string()
        .nonempty("Phone number is required.")
        .length(10, "Phone number must be exactly 10 digits.")
        .regex(/^\d+$/, "Phone number must contain only digits"),
    address: z
        .string("Address is required.")
        .nonempty("Address is required.")
        .min(3, "Address must be at least 3 chatacters."),
    academicLevel: z
        .enum(["+2 / High School", "Bachelor Completed", "Master Completed", "Other"], {
            message: "Please select your academic level."
        }),
    destination: z
        .enum(["Japan", "UK", "Australia", "Korea", "USA"], {
            message: "Please select your preferred destination."
        }),
    message: z
        .string()
        .max(1000, "Message must be at most 1000 characters.")
        .optional(),
    agreeContact: z
        .boolean("You must agree to be contacted.")
        .refine((val) => val === true, "You must agree to be contacted.")
});

export type inquiryType = z.infer<typeof inquirySchema>;