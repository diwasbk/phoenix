"use server";
import { cookies } from "next/headers"

// Clear Auth Token Cookie
export const clearAuthTokenCookie = async () => {
    const cookieStore = await cookies();
    cookieStore.delete("auth_token");
};