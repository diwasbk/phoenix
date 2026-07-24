import { applicationType } from "@/app/(public)/apply/schema";
import { deleteApplicationByID, getAllApplication, getApplicationByID, submitApplication, updateApplicationDetailByID } from "../api/application";

export const handleSubmitApplication = async (data: applicationType) => {
    try {
        const result = await submitApplication(data);

        if (!result.success) {
            return {
                message: result.message || "Failed to submit application!",
                success: false
            };
        };

        return {
            message: result.message || "Application submitted successfully!",
            success: true
        };

    } catch (err: Error | any) {
        return {
            message: err.message || "Failed to submit application!",
            success: false
        };
    };
};

// Handle Get All Application
export const handleGetAllApplication = async (page: number = 1, limit: number = 5) => {
    try {
        const result = await getAllApplication(page, limit);

        if (!result.success) {
            return {
                message: result.message || "Failed to fetch applications",
                success: false
            };
        };

        return {
            message: result.message || "Applications fetched successfully!",
            result: result.result,
            pagination: result.pagination,
            success: true
        };
    } catch
    (err: Error | any) {
        return {
            message: err.message || "Failed to fetch applications!",
            success: false
        };
    };
};

// Handle Get Application By ID
export const handleGetApplicationByID = async (applicationId: string) => {
    try {
        const result = await getApplicationByID(applicationId);

        if (!result.success) {
            return {
                message: result.message || "Failed to fetch application",
                success: false
            };
        };

        return {
            message: result.message || "Application fetched successfully!",
            result: result.result,
            success: true
        };

    } catch (err: Error | any) {
        return {
            message: err.message || "Failed to fetch application!",
            success: false
        };
    };
};

// Handle Update Application Detail
export const handleUpdateApplicationDetailByID = async (applicationId: string, data: applicationType) => {
    try {
        const result = await updateApplicationDetailByID(applicationId, data);

        if (!result.success) {
            return {
                message: result.message || "Failed to update application!",
                success: false
            };
        };

        return {
            message: result.message || "Application updated successfully!",
            success: true
        };

    } catch (err: Error | any) {
        return {
            message: err.message || "Failed to update application!",
            success: false
        };
    };
};

// Handle Delete Application By ID
export const handleDeleteApplicationByID = async (applicationId: string) => {
    try {
        const result = await deleteApplicationByID(applicationId);

        if (!result.success) {
            return {
                message: result.message || "Failed to delete application",
                success: false
            };
        };

        return {
            message: result.message || "Application deleted successfully!",
            success: true
        };

    } catch (err: Error | any) {
        return {
            message: err.message || "Failed to delete application!",
            success: false
        };
    };
};