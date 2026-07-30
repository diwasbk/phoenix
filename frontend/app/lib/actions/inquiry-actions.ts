import { inquiryType } from "@/app/(public)/inquiry/schema";
import { deleteInquiryByID, getAllInquiries, getAllInquiriesByUserId, sendInquiry } from "../api/inquiry";

// Handle Send Inquiry
export const handleSendInquiry = async (data: inquiryType) => {
    try {
        const result = await sendInquiry(data);

        if (!result.success) {
            return {
                message: result.message || "Failed to send inquiry!",
                success: false
            };
        };

        return {
            message: result.message || "Inquiry send successfully!",
            success: true
        };

    } catch (err: Error | any) {
        return {
            message: err.message || "Failed to send inquiry!",
            success: false
        };
    };
};

// Handle Get All Inquiries
export const handleGetAllInquiries = async (page: number = 1, limit: number = 5) => {
    try {
        const result = await getAllInquiries(page, limit);

        if (!result.success) {
            return {
                message: result.message || "Failed to fetch inquiries",
                success: false
            };
        };

        return {
            message: result.message || "Inquiries fetched successfully!",
            result: result.result,
            pagination: result.pagination,
            success: true
        };
    } catch (err: Error | any) {
        return {
            message: err.message || "Failed to fetch inquiries!",
            success: false
        };
    };
};

// Handle Get All Inquiries By User ID
export const handleGetAllInquiriesByUserId = async (userId: string, page: number = 1, limit: number = 5) => {
    try {
        const result = await getAllInquiriesByUserId(userId, page, limit);

        if (!result.success) {
            return {
                message: result.message || "Failed to fetch inquiries!",
                success: false
            };
        };

        return {
            message: result.message || "Inquiries fetched successfully!",
            result: result.result,
            pagination: result.pagination,
            success: true
        };

    } catch (err: Error | any) {
        return {
            message: err.message || "Failed to fetch inquiries!",
            success: false
        };
    };
};

// Handle Delete Inquiry By ID
export const handleDeleteInquiryByID = async (inquiryId: string) => {
    try {
        const result = await deleteInquiryByID(inquiryId);

        if (!result.success) {
            return {
                message: result.message || "Failed to delete inquiry",
                success: false
            };
        };

        return {
            message: result.message || "Inquiry deleted successfully!",
            success: true
        };

    } catch (err: Error | any) {
        return {
            message: err.message || "Failed to delete inquiry!",
            success: false
        };
    };
};