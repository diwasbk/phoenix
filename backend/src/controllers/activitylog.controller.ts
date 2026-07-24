import { Request, Response } from "express";
import { ActivityLogModel } from "../models/activitylog.model";

class ActivityLogController {
    // Get Activity Logs
    getActivityLogs = async (req: Request, res: Response) => {
        try {
            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 5;

            const filter: Record<string, unknown> = {};

            if (typeof req.query.actorId === "string" && req.query.actorId.trim()) {
                filter.actorId = req.query.actorId.trim();
            };

            if (typeof req.query.actorEmail === "string" && req.query.actorEmail.trim()) {
                filter.actorEmail = { $regex: req.query.actorEmail.trim(), $options: "i" };
            };

            if (typeof req.query.actorRole === "string" && req.query.actorRole.trim()) {
                filter.actorRole = req.query.actorRole.trim();
            };

            if (typeof req.query.action === "string" && req.query.action.trim()) {
                filter.action = { $regex: req.query.action.trim(), $options: "i" };
            };

            if (typeof req.query.route === "string" && req.query.route.trim()) {
                filter.route = { $regex: req.query.route.trim(), $options: "i" };
            };

            if (typeof req.query.success === "string") {
                filter.success = req.query.success === "true";
            };

            if (typeof req.query.statusCode === "string" && req.query.statusCode.trim()) {
                filter.statusCode = Number(req.query.statusCode);
            };

            const total = await ActivityLogModel.countDocuments(filter);

            const result = await ActivityLogModel.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit);

            res.status(200).send({
                message: total ? "Activity logs fetched successfully!" : "Activity logs not found!",
                result: result,
                pagination: {
                    page: page,
                    limit: limit,
                    total: total,
                    totalPages: Math.ceil(total / limit),
                    hasNextPage: page < Math.ceil(total / limit),
                    hasPreviousPage: page > 1
                },
                success: true
            });

        } catch (err: any) {
            console.log(err);
            res.status(500).send({
                message: err.message ? `Internal server error: ${err.message}` : "Internal server error.",
                success: false
            });
        };
    };
};

export default ActivityLogController;