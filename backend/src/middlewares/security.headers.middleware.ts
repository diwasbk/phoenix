import { NextFunction, Request, Response } from "express";

export const securityHeadersMiddleware = (_req: Request, res: Response, next: NextFunction) => {
    res.setHeader("Content-Security-Policy", "default-src 'none'; frame-ancestors 'none'");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "DENY");
    res.setHeader("Referrer-Policy", "no-referrer");

    next();
};