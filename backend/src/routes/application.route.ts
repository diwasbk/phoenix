import express from "express";
import ApplicationController from "../controllers/application.controller";
import schemaValidateMiddleware from "../middlewares/schema.validate.middleware";
import { applicationSchema } from "../types/application.types";
import { jwtAuthMiddleware } from "../utils/jwt";
import { authorizeAdminMiddleware } from "../middlewares/authorize.middleware";
import { csrfVerificationMiddleware } from "../middlewares/csrf.verification.middleware";

const applicationRouter = express.Router();
const applicationController = new ApplicationController();

applicationRouter.post("/submit", schemaValidateMiddleware(applicationSchema), applicationController.submitApplication);
applicationRouter.get("/all", jwtAuthMiddleware, authorizeAdminMiddleware, applicationController.getAllApplications);
applicationRouter.get("/:applicationId", jwtAuthMiddleware, authorizeAdminMiddleware, applicationController.getApplicationByID);
applicationRouter.put("/update/:applicationId", jwtAuthMiddleware, authorizeAdminMiddleware, csrfVerificationMiddleware, schemaValidateMiddleware(applicationSchema.partial()), applicationController.updateApplicationDetailByID);
applicationRouter.delete("/delete/:applicationId", jwtAuthMiddleware, authorizeAdminMiddleware, csrfVerificationMiddleware, applicationController.deleteApplicationByID);

export default applicationRouter;