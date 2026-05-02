import express from "express";
import ApplicationController from "../controllers/application.controller";
import schemaValidateMiddleware from "../middlewares/schema.validate.middleware";
import { applicationSchema } from "../types/application.types";
import { jwtAuthMiddleware } from "../utils/jwt";
import { authorizeAdminMiddleware } from "../middlewares/authorize.middleware";

const applicationRouter = express.Router();
const applicationController = new ApplicationController();

applicationRouter.post("/submit", schemaValidateMiddleware(applicationSchema), applicationController.aubmitApplication);
applicationRouter.get("/all", jwtAuthMiddleware, authorizeAdminMiddleware, applicationController.getAllApplications);
applicationRouter.get("/:applicationId", jwtAuthMiddleware, authorizeAdminMiddleware, applicationController.getApplicationByID);
applicationRouter.put("/update/:applicationId", jwtAuthMiddleware, authorizeAdminMiddleware, schemaValidateMiddleware(applicationSchema.partial()), applicationController.updateApplicationDetailByID);
applicationRouter.delete("/delete/:applicationId", jwtAuthMiddleware, authorizeAdminMiddleware, applicationController.deleteApplicationByID);

export default applicationRouter;