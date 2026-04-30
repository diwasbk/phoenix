import express from "express";
import AdmissionController from "../controllers/admission.controller";
import schemaValidateMiddleware from "../middlewares/schema.validate.middleware";
import { admissionSchema } from "../types/admission.types";
import { jwtAuthMiddleware } from "../utils/jwt";
import { authorizeAdminMiddleware } from "../middlewares/authorize.middleware";

const admissionRouter = express.Router();
const admissionController = new AdmissionController();

admissionRouter.post("/apply", schemaValidateMiddleware(admissionSchema), admissionController.applyAdmission);
admissionRouter.get("/all", jwtAuthMiddleware, authorizeAdminMiddleware, admissionController.getAllAdmission);
admissionRouter.put("/update/:admissionId", jwtAuthMiddleware, authorizeAdminMiddleware, schemaValidateMiddleware(admissionSchema.partial()), admissionController.updateAdmissionDetailByID);
admissionRouter.delete("/delete/:admissionId", jwtAuthMiddleware, authorizeAdminMiddleware, admissionController.deleteAdmissionByID);

export default admissionRouter;