import { Request, Response } from "express";
import { ApplicationModel } from "../models/application.model";
import { ageCalculator } from "../services/common";
import { UserModel } from "../models/user.model";

class ApplicationController {
    // Submit Application
    submitApplication = async (req: Request, res: Response) => {
        try {
            const user = req.user as { id: string } | null;
            let isGuest = true;
            let userId: string | undefined;

            // Associate the application with the user only if the authenticated user exists
            if (user && user.id) {
                const userExist = await UserModel.findOne({ _id: user.id });
                if (userExist) {
                    isGuest = false;
                    userId = user.id;
                };
            };

            const { fullName, email, phoneNumber, address, gender, dob, fatherName, motherName, parentPhone, responsiblePerson, responsiblePhone, foreignLanguage, testPreparation, otherService, preferredCountry, referralSource, termsAgreed } = req.body;

            const calculatedAge = ageCalculator(dob);

            const result = await ApplicationModel.create({
                userId: userId,
                fullName: fullName,
                email: email,
                phoneNumber: phoneNumber,
                address: address,
                gender: gender,
                dob: dob,
                age: calculatedAge,
                fatherName: fatherName,
                motherName: motherName,
                parentPhone: parentPhone,
                responsiblePerson: responsiblePerson,
                responsiblePhone: responsiblePhone,
                foreignLanguage: foreignLanguage,
                testPreparation: testPreparation,
                otherService: otherService,
                preferredCountry: preferredCountry,
                referralSource: referralSource,
                termsAgreed: termsAgreed,
                isGuest: isGuest
            });

            res.status(201).send({
                message: "Application submitted successfully!",
                result: result,
                success: true
            });

        } catch (err: any) {
            console.log(err);
            res.status(500).send({
                message: err.message ? `Internal server error: ${err.message}` : "Internal server",
                success: false
            });
        };
    };

    // Get All Applications
    getAllApplications = async (req: Request, res: Response) => {
        try {
            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 5;

            const total = await ApplicationModel.countDocuments();
            const result = await ApplicationModel.find().sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit);

            res.status(200).send({
                message: result.length ? "Applications fetched successfully!" : "applications not found!",
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
                message: err.message ? `Internal server error: ${err.message}` : "Internal server",
                success: false
            });
        };
    };

    // Get Application By ID
    getApplicationByID = async (req: Request, res: Response) => {
        try {
            const applicationExist = await ApplicationModel.findOne({ _id: req.params.applicationId });

            if (!applicationExist) {
                return res.status(404).send({
                    message: "Application not found!",
                    success: false
                });
            };

            res.status(200).send({
                message: "Application fetched successfully!",
                result: applicationExist,
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

    // Update Application Detail By ID
    updateApplicationDetailByID = async (req: Request, res: Response) => {
        try {
            const applicationExist = await ApplicationModel.findOne({ _id: req.params.applicationId });

            if (!applicationExist) {
                return res.status(404).send({
                    message: "Application not found!",
                    success: false
                });
            };

            const { fullName, email, phoneNumber, address, gender, dob, fatherName, motherName, parentPhone, responsiblePerson, responsiblePhone, foreignLanguage, testPreparation, otherService, preferredCountry, referralSource } = req.body;

            const calculatedAge = ageCalculator(dob);

            await ApplicationModel.findOneAndUpdate(
                { _id: req.params.applicationId },
                {
                    $set: {
                        fullName: fullName,
                        email: email,
                        phoneNumber: phoneNumber,
                        address: address,
                        gender: gender,
                        dob: dob,
                        age: calculatedAge,
                        fatherName: fatherName,
                        motherName: motherName,
                        parentPhone: parentPhone,
                        responsiblePerson: responsiblePerson,
                        responsiblePhone: responsiblePhone,
                        foreignLanguage: foreignLanguage,
                        testPreparation: testPreparation,
                        otherService: otherService,
                        preferredCountry: preferredCountry,
                        referralSource: referralSource,
                    }
                }
            );

            res.status(200).send({
                message: "Application details updated successfully!",
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

    // Delete application By ID
    deleteApplicationByID = async (req: Request, res: Response) => {
        try {
            const applicationExist = await ApplicationModel.findOne({ _id: req.params.applicationId });

            if (!applicationExist) {
                return res.status(404).send({
                    message: "Application not found!",
                    success: false
                });
            };

            await ApplicationModel.findOneAndDelete({ _id: req.params.applicationId });

            res.status(200).send({
                message: "Application details deleted successfully!",
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

export default ApplicationController;