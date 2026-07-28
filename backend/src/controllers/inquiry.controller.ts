import { Request, Response } from "express";
import { InquiryModel } from "../models/inquiry.model";
import { UserModel } from "../models/user.model";

class InquiryController {
    // Send Inquiry
    sendInquiry = async (req: Request, res: Response) => {
        try {
            const user = req.user as { id: string } | null;
            let isGuest = true;
            let userId: string | undefined;

            // Associate the inquiry with the user only if the authenticated user exists
            if (user && user.id) {
                const userExist = await UserModel.findOne({ _id: user.id });
                if (userExist) {
                    isGuest = false;
                    userId = user.id;
                };
            };

            const { fullName, email, phoneNumber, address, academicLevel, destination, message, agreeContact } = req.body;

            await InquiryModel.create({
                userId: userId,
                fullName: fullName,
                email: email,
                phoneNumber: phoneNumber,
                address: address,
                academicLevel: academicLevel,
                destination: destination,
                message: message,
                agreeContact: agreeContact,
                isGuest: isGuest
            });

            res.status(201).send({
                message: "Inquiry sent successfully.",
                success: true
            });

        } catch (err: any) {
            console.log(err);
            res.status(500).send({
                message: err.message ? `Internal server error: ${err.message}` : "Internal server error.",
                success: false
            });
        };
    };

    // Get All Inquiries
    getAllInquiries = async (req: Request, res: Response) => {
        try {
            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 5;

            const total = await InquiryModel.countDocuments();
            const result = await InquiryModel.find().sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit);;

            res.status(200).send({
                message: "Inquiries fetched successfully.",
                result: result,
                pagination: {
                    page: page,
                    limit: limit,
                    total: total,
                    totalPages: Math.ceil(total / limit),
                    hasNextPage: page < Math.ceil(total / limit),
                    hasPreviousPage: page > 1
                },
                success: true
            });

        } catch (err: any) {
            console.log(err);
            res.status(500).send({
                message: err.message ? `Internal server error: ${err.message}` : "Internal server error.",
                success: false
            });
        };
    };

    // Get All Inquiries By User Id
    getAllInquiriesByUserId = async (req: Request, res: Response) => {
        try {
            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 5;

            const userExist = await UserModel.findOne({ _id: req.params.userId });

            if (!userExist) {
                return res.status(404).send({
                    message: "User not found!",
                    success: false
                });
            };

            const total = await InquiryModel.countDocuments({ userId: req.params.userId });

            const result = await InquiryModel.find({ userId: req.params.userId }).skip((page - 1) * limit).limit(limit);

            res.status(200).send({
                message: result.length ? "Inquiries fetched successfully!" : "Inquiries not found!",
                result: result,
                pagination: {
                    page,
                    limit,
                    total,
                    totalPages: Math.ceil(total / limit),
                    hasNextPage: page < Math.ceil(total / limit),
                    hasPreviousPage: page > 1
                },
                success: true
            });

        } catch (err: any) {
            console.log(err);
            res.status(500).send({
                message: err.message ? `Internal server error: ${err.message}` : "Internal server error.",
                success: false
            });
        };
    };

    // Delete Inquiry By ID
    deleteInquiryByID = async (req: Request, res: Response) => {
        try {
            const inquiryExist = await InquiryModel.findOne({ _id: req.params.inquiryId });

            if (!inquiryExist) {
                return res.status(404).send({
                    message: "Inquiry not found!",
                    success: false
                });
            };

            await InquiryModel.findOneAndDelete({ _id: req.params.inquiryId });

            res.status(200).send({
                message: "Inquiry details deleted successfully!",
                success: true
            });

        } catch (err: any) {
            console.log(err);
            res.status(500).send({
                message: err.message ? `Internal server error: ${err.message}` : "Internal server error.",
                success: false
            });
        };
    };
};

export default InquiryController;