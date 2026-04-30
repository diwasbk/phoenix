import { loginType } from "@/app/(auth)/login/schema";
import axiosInstance from "./axios";
import API from "./endpoints";

// Login User
export const loginUser = async (data: loginType) => {
    try {
        const response = await axiosInstance.post(API.AUTH.LOGIN, data);

        return response.data;

    } catch (err: Error | any) {
        throw new Error(err.response?.data?.message || err.response || "Login failed!");
    };
};