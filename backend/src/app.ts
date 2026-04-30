import cookieParser from "cookie-parser";
import express, { Application } from "express";
import cors from "cors";
import { CLIENT_URL } from "./config/config";
import authRouter from "./routes/auth.route";

const app: Application = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: CLIENT_URL,
    credentials: true,
}));

app.use("/api/auth", authRouter);

export default app;