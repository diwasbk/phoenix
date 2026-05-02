import { z } from "zod";

export const applicationSchema = z.object({
    fullName: z
        .string()
        .nonempty("Full name is required.")
        .min(5, "Full name must be at least 5 characters."),
    email: z
        .string()
        .nonempty("Email is required.")
        .email("Invalid email address."),
    phoneNumber: z
        .string()
        .nonempty("Phone number is required.")
        .length(10, "Phone number must be exactly 10 digits.")
        .regex(/^\d+$/, "Phone number must contain only digits"),
    address: z
        .string("Address is required.")
        .nonempty("Address is required.")
        .min(3, "Address must be at least 3 chatacters."),
    gender: z
        .enum(["Male", "Female", "Other"], { message: "Gender is required." }),
    dob: z
        .string("Date of birth is required.")
        .nonempty("Date of birth is required."),
    fatherName: z
        .string()
        .nonempty("Father's name is required.")
        .min(5, "Father's name must be at least 5 characters."),
    motherName: z
        .string()
        .nonempty("Mother's name is required.")
        .min(5, "Mothers's name must be at least 5 characters."),
    parentPhone: z
        .string()
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
        .enum(["English", "Japanese", "Korean", "Other"], {
            message: "Please select a preferred foreign language."
        }),
    testPreparation: z
        .enum(["IELTS", "SAT", "JLPT / NAT", "Other"], {
            message: "Please select a test preparation option."
        }),
    otherService: z
        .enum(["Translation", "Documentation Guidance", "College / University Placement", "Visa Application / Interview Preparation", "Other"]).optional(),
    preferredCountry: z
        .enum(["Japan", "UK", "Australia", "Korea", "USA", "Other"], {
            message: "Preferred country is required."
        }),
    referralSource: z
        .enum(["Newspaper", "Board", "Friends", "Radio", "Websites", "Relatives", "TV", "Facebook", "Other"], {
            message: "Please select how you heard about us."
        }),
    termsAgreed: z
        .boolean("You must agree to the rules and regulations.")
        .refine((val) => val === true, "You must agree to the rules and regulations.")
});

export type applicationType = z.infer<typeof applicationSchema>;