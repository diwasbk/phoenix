import cookieParser from "cookie-parser";
import express, { Application } from "express";
import cors from "cors";
import { CLIENT_URL } from "./config/config";
import authRouter from "./routes/auth.route";
import inquiryRoute from "./routes/inquiry.route";
import applicationRouter from "./routes/application.route";
import { apiLimiterMiddleware, authLimiterMiddleware } from "./middlewares/rate.limiter.middleware";
import passport from "./config/passport";

const app: Application = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: CLIENT_URL,
    credentials: true,
}));

app.use(passport.initialize());
app.use("/api", apiLimiterMiddleware);
app.use("/api/auth", authLimiterMiddleware, authRouter);
app.use("/api/inquiry", inquiryRoute);
app.use("/api/application", applicationRouter);

export default app;