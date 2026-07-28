import express from "express";
import InquiryController from "../controllers/inquiry.controller";
import schemaValidateMiddleware from "../middlewares/schema.validate.middleware";
import { inquirySchema } from "../types/inquiry.types";
import { jwtAuthMiddleware } from "../utils/jwt";
import { authorizeAdminMiddleware, optionalAuthMiddleware } from "../middlewares/authorize.middleware";
import { csrfVerificationMiddleware } from "../middlewares/csrf.verification.middleware";

const inquiryRoute = express.Router();
const inquiryController = new InquiryController();

inquiryRoute.post("/send", optionalAuthMiddleware, schemaValidateMiddleware(inquirySchema), inquiryController.sendInquiry);
inquiryRoute.get("/all", jwtAuthMiddleware, authorizeAdminMiddleware, inquiryController.getAllInquiries);
inquiryRoute.delete("/delete/:inquiryId", jwtAuthMiddleware, authorizeAdminMiddleware, csrfVerificationMiddleware, inquiryController.deleteInquiryByID);

export default inquiryRoute;