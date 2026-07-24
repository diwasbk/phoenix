import { NextFunction, Request, Response } from "express";
import { ActivityLogModel } from "../models/activitylog.model";
import { sanitizePayload } from "../utils/sanitize.payload";

export const activityLoggingMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const startTime = Date.now();

    // Don't log activity log endpoints
    if (req.originalUrl.startsWith("/api/activity-logs")) {
        return next();
    };

    res.on("finish", async () => {
        try {
            const user = req.user as | { id?: string; email?: string; role?: string; } | undefined;

            await ActivityLogModel.create({
                actorId: user?.id || null,
                actorEmail: user?.email || null,
                actorRole: user?.role || null,

                route: req.originalUrl,
                method: req.method,

                statusCode: res.statusCode,
                success: res.statusCode < 400,

                ipAddress: req.ip,
                userAgent: req.headers["user-agent"],

                durationMs: Date.now() - startTime,

                payload: {
                    params: sanitizePayload(req.params),
                    query: sanitizePayload(req.query),
                    body: sanitizePayload(req.body),
                },
            });

        } catch (err) {
            console.error("Activity log failed:", err);
        };
    });

    next();
};