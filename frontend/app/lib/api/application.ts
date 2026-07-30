import { applicationType } from "@/app/(public)/apply/schema";
import axiosInstance from "./axios";
import API from "./endpoints";

// Submit Application
export const submitApplication = async (data: applicationType) => {
    try {
        const response = await axiosInstance.post(API.APPLICATION.SUBMIT, data);

        return response.data;

    } catch (err: Error | any) {
        throw new Error(err.response?.data?.message || err.response || "Failed to submit application!");
    };
};

// Get All Application
export const getAllApplication = async (page: number = 1, limit: number = 5) => {
    try {
        const response = await axiosInstance.get(API.APPLICATION.GET_ALL(page, limit));

        return response.data;

    } catch (err: Error | any) {
        throw new Error(err.response?.data?.message || err.response || "Failed to fetch applications!");
    };
};

// Get All Application By User Id
export const getAllApplicationByUserId = async (userId: string, page: number = 1, limit: number = 5) => {
    try {
        const response = await axiosInstance.get(API.APPLICATION.GET_ALL_BY_USER_ID(userId, page, limit));

        return response.data;

    } catch (err: Error | any) {
        throw new Error(err.response?.data?.message || err.response || "Failed to fetch applications!");
    };
};

// Get Application By ID
export const getApplicationByID = async (applicationId: string) => {
    try {
        const response = await axiosInstance.get(API.APPLICATION.GET_BY_ID(applicationId));

        return response.data;

    } catch (err: Error | any) {
        throw new Error(err.response?.data?.message || err.response || "Failed to fetch application!");
    };
};

// Update Application Detail By ID
export const updateApplicationDetailByID = async (applicationId: string, data: applicationType) => {
    try {
        const response = await axiosInstance.put(API.APPLICATION.UPDATE_BY_ID(applicationId), data);

        return response.data;

    } catch (err: Error | any) {
        throw new Error(err.response?.data?.message || err.response || "Failed to update application detail!");
    };
};

// Delete Application By ID
export const deleteApplicationByID = async (applicationId: string) => {
    try {
        const response = await axiosInstance.delete(API.APPLICATION.DELETE_BY_ID(applicationId));

        return response.data;

    } catch (err: Error | any) {
        throw new Error(err.response?.data?.message || err.response || "Failed to delete application!");
    };
};