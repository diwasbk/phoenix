import { loginType } from "@/app/(auth)/login/schema";
import { loginUser } from "../api/auth";

// Handle Login
export const handleLogin = async (data: loginType) => {
    try {
        const result = await loginUser(data);

        if (!result) {
            return {
                message: result.message || "Login failed!",
                success: false
            };
        };

        return {
            message: result.message || "Login successfully!",
            success: true
        };

    } catch (err: Error | any) {
        return {
            message: err.message || "Login failed!",
            success: false
        };
    };
};