import express from "express";
import ActivityLogController from "../controllers/activitylog.controller";
import { authorizeAdminMiddleware } from "../middlewares/authorize.middleware";
import { jwtAuthMiddleware } from "../utils/jwt";

const activityLogRouter = express.Router();
const activityLogController = new ActivityLogController();

activityLogRouter.get("/", jwtAuthMiddleware, authorizeAdminMiddleware, activityLogController.getActivityLogs);

export default activityLogRouter;