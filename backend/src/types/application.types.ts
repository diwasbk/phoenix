import { z } from "zod";
import mongoose from "mongoose";

export const applicationSchema = z.object({
    userId: z
        .instanceof(mongoose.Types.ObjectId)
        .optional(),
    fullName: z
        .string("Full name is required.")
        .nonempty("Full name is required.")
        .min(5, "Full name must be at least 5 characters."),
    email: z
        .string("Email is required.")
        .nonempty("Email is required.")
        .email("Invalid email address."),
    phoneNumber: z
        .string("Phone number is required.")
        .nonempty("Phone number is required.")
        .length(10, "Phone number must be exactly 10 digits.")
        .regex(/^\d+$/, "Phone number must contain only digits"),
    address: z
        .string("Address is required.")
        .nonempty("Address is required.")
        .min(3, "Address must be at least 3 characters."),
    gender: z
        .enum(["Male", "Female", "Others"], { message: "Gender is required." }),
    dob: z
        .string("Date of birth is required.")
        .nonempty("Date of birth is required."),
    age: z
        .number()
        .optional(),
    fatherName: z
        .string("Father's name is required.")
        .nonempty("Father's name is required.")
        .min(5, "Father's name must be at least 5 characters."),
    motherName: z
        .string("Mother's name is required.")
        .nonempty("Mother's name is required.")
        .min(5, "Mothers's name must be at least 5 characters."),
    parentPhone: z
        .string("Parent phone number is required.")
        .nonempty("Parent phone number is required.")
        .length(10, "Parent phone number must be exactly 10 digits.")
        .regex(/^\d+$/, "Phone number must contain only digits"),
    responsiblePerson: z
        .string()
        .optional(),
    responsiblePhone: z
        .string()
        .optional(),
    foreignLanguage: z
        .enum(["English", "Japanese", "Korean", "Others"], {
            message: "Please select a preferred foreign language."
        }),
    testPreparation: z
        .enum(["IELTS", "SAT", "JLPT / NAT", "Others"], {
            message: "Please select a test preparation option."
        }),
    otherService: z
        .enum(["Translation", "Documentation Guidance", "College / University Placement", "Visa Application / Interview Preparation", "Others"])
        .optional(),
    preferredCountry: z
        .enum(["Japan", "UK", "Australia", "Korea", "USA", "Others"], {
            message: "Preferred country is required."
        }),
    referralSource: z
        .enum(["Newspaper", "Board", "Friends", "Radio", "Websites", "Relatives", "TV", "Facebook", "Others"], {
            message: "Please select how you heard about us."
        }),
    termsAgreed: z
        .boolean("You must agree to the rules and regulations.")
        .refine((val) => val === true, "You must agree to the rules and regulations."),
    isGuest: z
        .boolean()
        .default(false)
});

export type applicationType = z.infer<typeof applicationSchema>;