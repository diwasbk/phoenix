import { NextFunction, Request, Response } from "express";

export const csrfVerificationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const cookieCrsfToken = req.cookies.csrf_token;
    const headerCsrfToken = req.headers["x-csrf-token"];

    if (!cookieCrsfToken || !headerCsrfToken) {
        return res.status(403).json({
            message: "CSRF token missing"
        });
    };

    if (cookieCrsfToken !== headerCsrfToken) {
        return res.status(403).json({
            message: "Invalid CSRF token"
        });
    };

    next();
};