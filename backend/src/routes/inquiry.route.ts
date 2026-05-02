import express from "express";
import InquiryController from "../controllers/inquiry.controller";
import schemaValidateMiddleware from "../middlewares/schema.validate.middleware";
import { inquirySchema } from "../types/inquiry.types";
import { jwtAuthMiddleware } from "../utils/jwt";
import { authorizeAdminMiddleware } from "../middlewares/authorize.middleware";

const inquiryRoute = express.Router();
const inquiryController = new InquiryController();

inquiryRoute.post("/send", schemaValidateMiddleware(inquirySchema), inquiryController.sendInquiry);
inquiryRoute.get("/all", jwtAuthMiddleware, authorizeAdminMiddleware, inquiryController.getAllInquiries);
inquiryRoute.delete("/delete/:inquiryId", jwtAuthMiddleware, authorizeAdminMiddleware, inquiryController.deleteInquiryByID);

export default inquiryRoute;