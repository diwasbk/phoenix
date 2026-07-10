import mongoose, { Schema } from "mongoose";
import { signupType } from "../types/auth.types";

const userSchema: Schema = new mongoose.Schema<signupType>({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    loginAttempts: {
        type: Number,
        default: 0,
    },
    lockUntil: {
        type: Date,
        default: null,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    }
}, { timestamps: true });

export interface IUser extends signupType, Document {
    _id: mongoose.Types.ObjectId,
    createdAt: Date;
    updatedAt: Date;
};

export const UserModel = mongoose.model<IUser>("User", userSchema);