import { Request, Response } from "express";
import { inquiryModel } from "../models/inquiry.model";

class InquiryController {
    // Send Inquiry
    sendInquiry = async (req: Request, res: Response) => {
        try {
            const { fullName, email, phoneNumber, address, academicLevel, destination, message, agreeContact } = req.body;

            await inquiryModel.create({
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
            const result = await inquiryModel.find();

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
};

export default InquiryController;