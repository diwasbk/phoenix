import { NextFunction, Request, Response } from "express";

// Admin Authorization
export const authorizeAdminMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as { role: string };
    
    if (user.role !== "admin") {
        return res.status(403).send({
            message: "Access Denied: Authorization Required!",
            success: false
        });
    };

    next();
};