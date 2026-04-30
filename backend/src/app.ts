import cookieParser from "cookie-parser";
import express, { Application } from "express";
import cors from "cors";
import { CLIENT_URL } from "./config/config";
import authRouter from "./routes/auth.route";
import inquiryRoute from "./routes/inquiry.route";
import admissionRouter from "./routes/admission.route";

const app: Application = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: CLIENT_URL,
    credentials: true,
}));

app.use("/api/auth", authRouter);
app.use("/api/inquiry", inquiryRoute);
app.use("/api/admission", admissionRouter);

export default app;