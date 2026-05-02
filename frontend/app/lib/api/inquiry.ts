import { inquiryType } from "@/app/(public)/inquiry/schema";
import axiosInstance from "./axios";
import API from "./endpoints";

// Send Inquiry
export const sendInquiry = async (data: inquiryType) => {
    try {
        const response = await axiosInstance.post(API.INQUIRY.SEND, data);

        return response.data;

    } catch (err: Error | any) {
        throw new Error(err.response?.data?.message || err.response || "Failed to send inquiry!");
    };
};

// Get All Inquiries
export const getAllInquiries = async () => {
    try {
        const response = await axiosInstance.get(API.INQUIRY.GET_ALL);

        return response.data;

    } catch (err: Error | any) {
        throw new Error(err.response?.data?.message || err.response || "Failed to fetch inquiries!");
    };
};

// Delete Inquiry By ID
export const deleteInquiryByID = async (inquiryId: string) => {
    try {
        const response = await axiosInstance.delete(API.INQUIRY.DELETE_BY_ID(inquiryId));

        return response.data;

    } catch (err: Error | any) {
        throw new Error(err.response?.data?.message || err.response || "Failed to delete inquiry!");
    };
};