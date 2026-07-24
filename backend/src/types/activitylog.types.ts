import { z } from "zod";

export const activityLogSchema = z.object({
    actorId: z
        .string()
        .nullable()
        .optional(),
    actorEmail: z
        .string()
        .email("Invalid actor email address.")
        .nullable()
        .optional(),
    actorRole: z
        .string()
        .nullable()
        .optional(),
    route: z
        .string("Route is required.")
        .nonempty("Route is required."),
    method: z
        .enum(["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"], { message: "Invalid HTTP method." }),
    statusCode: z
        .number("Status code is required.")
        .int("Status code must be an integer.")
        .min(100, "Status code must be at least 100.")
        .max(599, "Status code cannot exceed 599."),
    success: z
        .boolean()
        .default(false),
    ipAddress: z
        .string()
        .nullable()
        .optional(),
    userAgent: z
        .string()
        .nullable()
        .optional(),
    durationMs: z
        .number()
        .min(0, "Duration cannot be negative.")
        .default(0),
    payload: z
        .unknown()
        .nullable()
        .optional(),
    createdAt: z
        .date()
        .optional(),
    updatedAt: z
        .date()
        .optional()
});

export type activityLogType = z.infer<typeof activityLogSchema>;