import { getActivityLogs } from "../api/activity-log";

// Handle Get Activity Logs
export const handleGetActivityLogs = async (page: number = 1, limit: number = 5) => {
    try {
        const result = await getActivityLogs(page, limit);

        if (!result.success) {
            return {
                message: result.message || "Failed to fetch activity logs!",
                success: false
            };
        };

        return {
            message: result.message || "Activity logs fetched successfully!",
            result: result.result,
            pagination: result.pagination,
            success: true
        };

    } catch (err: Error | any) {
        return {
            message: err.message || "Failed to fetch activity logs!",
            success: false
        };
    };
};