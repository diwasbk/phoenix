import axiosInstance from "./axios";
import API from "./endpoints";

// Get Activity Logs
export const getActivityLogs = async ( page: number = 1, limit: number = 5) => {
    try {
        const response = await axiosInstance.get(API.ACTIVITY_LOGS.GET_ALL(page, limit));

        return response.data;

    } catch (err: Error | any) {
        throw new Error(err.response?.data?.message || err.response ||  "Failed to fetch activity logs!");
    };
};