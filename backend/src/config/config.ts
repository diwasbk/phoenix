import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT as string;
export const MONGO_DB_URL = process.env.MONGO_DB_URL as string;
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string;
export const CLIENT_URL = process.env.CLIENT_URL as string;

export const APP_PASS = process.env.APP_PASS as string;
export const USER_EMAIL = process.env.USER_EMAIL as string;

export const GOOGLE_CLIENT_ID= process.env.GOOGLE_CLIENT_ID as string;
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string;
export const GOOGLE_CALLBACK_URL = process.env.GOOGLE_CALLBACK_URL as string;