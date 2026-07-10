import { Request, Response } from "express";
import { InquiryModel } from "../models/inquiry.model";

class InquiryController {
    // Send Inquiry
    sendInquiry = async (req: Request, res: Response) => {
        try {
            const { fullName, email, phoneNumber, address, academicLevel, destination, message, agreeContact } = req.body;

            await InquiryModel.create({
                fullName: fullName,
                email: email,
                phoneNumber: phoneNumber,
                address: address,
                academicLevel: academicLevel,
                destination: destination,
                message: message,
                agreeContact: agreeContact
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
            const result = await InquiryModel.find();

            res.status(200).send({
                message: "Inquiries fetched successfully.",
                result: result,
                success: true,
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