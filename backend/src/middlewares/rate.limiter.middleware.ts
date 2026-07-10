import { Request, Response } from "express";
import rateLimit from "express-rate-limit";

export const apiLimiterMiddleware = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req: Request, res: Response) => {
        res.status(429).send({
            message: "Too many requests. Please try again later.",
            success: false,
        });
    },
});

export const authLimiterMiddleware = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 15,
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req: Request, res: Response) => {
        res.status(429).send({
            message: "Too many authentication attempts. Please try again after 15 minutes.",
            success: false,
        });
    },
});