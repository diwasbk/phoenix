import { Request, Response } from "express";
import { applicationModel } from "../models/application.model";
import { ageCalculator } from "../services/common";

class ApplicationController {
    // Submit Application
    aubmitApplication = async (req: Request, res: Response) => {
        try {
            const { fullName, email, phoneNumber, address, gender, dob, fatherName, motherName, parentPhone, responsiblePerson, responsiblePhone, foreignLanguage, testPreparation, otherService, preferredCountry, referralSource, termsAgreed } = req.body;

            const calculatedAge = ageCalculator(dob);

            const result = await applicationModel.create({
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
                termsAgreed: termsAgreed
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
            const result = await applicationModel.find();

            res.status(200).send({
                message: result.length ? "Applications fetched successfully!" : "applications not found!",
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

    // Get Application By ID
    getApplicationByID = async (req: Request, res: Response) => {
        try {
            const applicationExist = await applicationModel.findOne({ _id: req.params.applicationId });

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
            const applicationExist = await applicationModel.findOne({ _id: req.params.applicationId });

            if (!applicationExist) {
                return res.status(404).send({
                    message: "Application not found!",
                    success: false
                });
            };

            const { fullName, email, phoneNumber, address, gender, dob, fatherName, motherName, parentPhone, responsiblePerson, responsiblePhone, foreignLanguage, testPreparation, otherService, preferredCountry, referralSource } = req.body;

            const calculatedAge = ageCalculator(dob);

            await applicationModel.findOneAndUpdate(
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
            const applicationExist = await applicationModel.findOne({ _id: req.params.applicationId });

            if (!applicationExist) {
                return res.status(404).send({
                    message: "Application not found!",
                    success: false
                });
            };

            await applicationModel.findOneAndDelete({ _id: req.params.applicationId });

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