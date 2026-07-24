import mongoose, { Schema } from "mongoose";
import { activityLogType } from "../types/activitylog.types";

const activityLogSchema: Schema = new mongoose.Schema<activityLogType>({
    actorId: {
        type: String,
        default: null,
        index: true
    },
    actorEmail: {
        type: String,
        default: null,
        index: true
    },
    actorRole: {
        type: String,
        default: null,
        index: true
    },
    route: {
        type: String,
        required: true,
        index: true
    },
    method: {
        type: String,
        required: true
    },
    statusCode: {
        type: Number,
        required: true,
        index: true
    },
    success: {
        type: Boolean,
        default: false,
        index: true
    },
    ipAddress: {
        type: String,
        default: null
    },
    userAgent: {
        type: String,
        default: null
    },
    durationMs: {
        type: Number,
        default: 0
    },
    payload: {
        type: Schema.Types.Mixed,
        default: null
    },
}, { timestamps: true });

export interface IActivityLog extends activityLogType, Document {
    _id: mongoose.Types.ObjectId,
    createdAt: Date;
    updatedAt: Date;
};

export const ActivityLogModel = mongoose.model<IActivityLog>("ActivityLog", activityLogSchema);