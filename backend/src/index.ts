import fs from "fs";
import https from "https";
import path from "path";
import app from "./app";
import { PORT } from "./config/config";
import connectDB from "./db/db";

const sslOptions = {
    key: fs.readFileSync(
        path.join(process.cwd(), "certs", "localhost+2-key.pem")
    ),
    cert: fs.readFileSync(
        path.join(process.cwd(), "certs", "localhost+2.pem")
    ),
};
const startServer = async () => {
    try {
        await connectDB();

        https.createServer(sslOptions, app).listen(PORT, () => {
            console.log(`✅ Server is running at https://localhost:${PORT}`);
        });

    } catch (err: any) {
        console.error("❌ Failed to start server:", err.message);
        process.exit(1);
    }
};
startServer();