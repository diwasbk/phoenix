import mongoose, { Schema } from "mongoose";
import { inquiryType } from "../types/inquiry.types";

const inquirySchema: Schema = new mongoose.Schema<inquiryType>({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    },
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
    academicLevel: {
        type: String,
        enum: (["+2 / High School", "Bachelor Completed", "Master Completed", "Others"]),
        required: true
    },
    destination: {
        type: String,
        enum: (["Japan", "UK", "Australia", "Korea", "USA"]),
        required: true
    },
    message: {
        type: String,
    },
    agreeContact: {
        type: Boolean,
        required: true
    },
    isGuest: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

export interface IInquiry extends inquiryType, Document {
    _id: mongoose.Types.ObjectId,
    createdAt: Date;
    updatedAt: Date;
};

export const InquiryModel = mongoose.model<IInquiry>("Inquiry", inquirySchema);