import mongoose, { Schema } from "mongoose";
import { applicationType } from "../types/application.types";

const applicationSchema: Schema = new mongoose.Schema<applicationType>({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: (["Male", "Female", "Others"]),
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },
    motherName: {
        type: String,
        required: true
    },
    parentPhone: {
        type: String,
        required: true
    },
    responsiblePerson: {
        type: String,
        default: "N/A"
    },
    responsiblePhone: {
        type: String,
        default: "N/A"
    },
    foreignLanguage: {
        type: String,
        enum: (["English", "Japanese", "Korean", "Others"]),
        required: true
    },
    testPreparation: {
        type: String,
        enum: (["IELTS", "SAT", "JLPT / NAT", "Others"]),
        required: true
    },
    otherService: {
        type: String,
        enum: (["Translation", "Documentation Guidance", "College / University Placement", "Visa Application / Interview Preparation", "Others"]),
        default: "N/A"
    },
    preferredCountry: {
        type: String,
        enum: (["Japan", "UK", "Australia", "Korea", "USA", "Others"]),
        required: true
    },
    referralSource: {
        type: String,
        enum: (["Newspaper", "Board", "Friends", "Radio", "Websites", "Relatives", "TV", "Facebook", "Others"]),
        required: true
    },
    termsAgreed: {
        type: Boolean,
        required: true
    }
}, { timestamps: true });

export interface IApplication extends applicationType, Document {
    _id: mongoose.Types.ObjectId,
    createdAt: Date;
    updatedAt: Date;
};

export const ApplicationModel = mongoose.model<IApplication>("Application", applicationSchema);