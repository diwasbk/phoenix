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

// Owner Or Admin Middleware
export const isOwnerOrAdminAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as { id: string, role: string };

    if (user.role !== "admin" && user.id !== req.params.userId) {
        return res.status(403).send({
            message: "Forbidden: Access Denied!",
            success: false
        });
    };

    next();
};