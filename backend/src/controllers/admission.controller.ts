import { Request, Response } from "express";
import { admissionModel } from "../models/admission.model";
import { ageCalculator } from "../services/common";

class AdmissionController {
    // Apply Admission
    applyAdmission = async (req: Request, res: Response) => {
        try {
            const { fullName, email, phoneNumber, address, gender, dob, fatherName, motherName, parentPhone, responsiblePerson, responsiblePhone, foreignLanguage, testPreparation, otherService, preferredCountry, referralSource, termsAgreed } = req.body;

            const calculatedAge = ageCalculator(dob);

            const result = await admissionModel.create({
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
                message: "Admission submitted successfully!",
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

    // Get All Admission
    getAllAdmission = async (req: Request, res: Response) => {
        try {
            const result = await admissionModel.find();

            res.status(200).send({
                message: result.length ? "Admissions fetched successfully!" : "Admissions not found!",
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
};

export default AdmissionController;