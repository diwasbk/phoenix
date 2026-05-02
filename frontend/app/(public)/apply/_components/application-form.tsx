"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { applicationSchema, applicationType } from "../schema";
import { handleSubmitApplication } from "@/app/lib/actions/application-actions";
import { useState } from "react";

const countryOptions = ['Japan', 'UK', 'Australia', 'Korea', 'USA'];
const languageOptions = ['English', 'Japanese', 'Korean', 'Others'];
const serviceOptions = [
    'Translation',
    'Documentation Guidance',
    'College / University Placement',
    'Visa Application / Interview Preparation',
    'Others',
];

const sourceOptions = ['Newspaper', 'Board', 'Friends', 'Radio', 'Websites', 'Relatives', 'TV', 'Facebook', 'Others'];

export default function ApplicationForm() {
    const [err, setError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<applicationType>({
        resolver: zodResolver(applicationSchema),
    });

    const onSubmit = async (data: applicationType) => {
        try {
            const res = await handleSubmitApplication(data);

            if (!res.success) {
                throw new Error(res.message || "Failed to submit application!");
            };

        } catch (err: any) {
            setError(err.message || "Failed to submit application!");
        };
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 p-5 sm:p-6">
            {/* Server Error */}
            {err && (
                <div className="bg-red-300 p-2 rounded-[10px] text-xs text-red-600 mt-2">{err}</div>
            )}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Name *</span>
                    <input
                        {...register("fullName")}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100" placeholder="Full name" />
                    {errors.fullName && <p className="text-sm text-red-600">{errors.fullName.message}</p>}
                </label>
                <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Email *</span>
                    <input
                        {...register("email")}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100" placeholder="you@example.com" />
                    {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
                </label>
                <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Phone Number *</span>
                    <input
                        {...register("phoneNumber")}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100" placeholder="98XXXXXXXX" />
                    {errors.phoneNumber && <p className="text-sm text-red-600">{errors.phoneNumber.message}</p>}
                </label>
                <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Address *</span>
                    <input
                        {...register("address")}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100" placeholder="Address" />
                    {errors.address && <p className="text-sm text-red-600">{errors.address.message}</p>}
                </label>
                <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Date of Birth *</span>
                    <input
                        {...register("dob")}
                        type="date"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100" placeholder="DD/MM/YYYY" />
                    {errors.dob && <p className="text-sm text-red-600">{errors.dob.message}</p>}
                </label>
                <div className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Gender *</span>
                    <div className="flex flex-wrap gap-3 text-sm text-slate-700">
                        <label className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                            <input
                                {...register("gender")}
                                type="radio"
                                value="Male"
                                className="h-4 w-4 border-slate-300 text-blue-700" />
                            <span>Male</span>
                        </label>
                        <label className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                            <input
                                {...register("gender")}
                                type="radio"
                                value="Female"
                                className="h-4 w-4 border-slate-300 text-blue-700" />
                            <span>Female</span>
                        </label>
                        <label className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                            <input
                                {...register("gender")}
                                type="radio"
                                value="Others"
                                className="h-4 w-4 border-slate-300 text-blue-700" />
                            <span>Others</span>
                        </label>
                    </div>
                    {errors.gender && <p className="text-sm text-red-600">{errors.gender.message}</p>}
                </div>
                <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Father’s Name *</span>
                    <input
                        {...register("fatherName")}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100" placeholder="Father's name" />
                    {errors.fatherName && <p className="text-sm text-red-600">{errors.fatherName.message}</p>}
                </label>
                <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Mother’s Name *</span>
                    <input
                        {...register("motherName")}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100" placeholder="Mother's name" />
                    {errors.motherName && <p className="text-sm text-red-600">{errors.motherName.message}</p>}
                </label>
                <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Phone/Mobile *</span>
                    <input
                        {...register("parentPhone")}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100" placeholder="Parent/guardian number" />
                    {errors.parentPhone && <p className="text-sm text-red-600">{errors.parentPhone.message}</p>}
                </label>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Immediate responsible person</span>
                    <input
                        {...register("responsiblePerson")}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100" placeholder="Name of responsible person" />
                    {errors.responsiblePerson && <p className="text-sm text-red-600">{errors.responsiblePerson.message}</p>}
                </label>
                <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Phone/Mobile of this person</span>
                    <input
                        {...register("responsiblePhone")}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100" placeholder="Contact number" />
                    {errors.responsiblePhone && <p className="text-sm text-red-600">{errors.responsiblePhone.message}</p>}
                </label>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm sm:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Service Taken</p>
                <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <div>
                        <h3 className="text-base font-black text-slate-900">Foreign Languages</h3>
                        <div className="mt-3 space-y-3 text-sm text-slate-700">
                            {languageOptions.map((item) => (
                                <label key={item} className="flex items-center gap-3">
                                    <input
                                        {...register("foreignLanguage")}
                                        type="radio"
                                        value={item}
                                        className="h-4 w-4 border-slate-300 text-blue-700" />
                                    <span>{item}</span>
                                </label>
                            ))}
                        </div>
                        {errors.foreignLanguage && <p className="mt-3 text-sm text-red-600">{errors.foreignLanguage.message}</p>}
                    </div>

                    <div>
                        <h3 className="text-base font-black text-slate-900">Test Preparation</h3>
                        <div className="mt-3 space-y-3 text-sm text-slate-700">
                            {['IELTS', 'SAT', 'JLPT / NAT', 'Others'].map((item) => (
                                <label key={item} className="flex items-center gap-3">
                                    <input
                                        {...register("testPreparation")}
                                        type="radio"
                                        value={item}
                                        className="h-4 w-4 border-slate-300 text-blue-700" />
                                    <span>{item}</span>
                                </label>
                            ))}
                        </div>
                        {errors.testPreparation && <p className="mt-3 text-sm text-red-600">{errors.testPreparation.message}</p>}
                    </div>

                    <div>
                        <h3 className="text-base font-black text-slate-900">Other Services</h3>
                        <div className="mt-3 space-y-3 text-sm text-slate-700">
                            {serviceOptions.map((item) => (
                                <label key={item} className="flex items-center gap-3">
                                    <input
                                        {...register("otherService")}
                                        type="radio"
                                        value={item}
                                        className="h-4 w-4 border-slate-300 text-blue-700" />
                                    <span>{item}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm sm:p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Preferred Country</p>
                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-700 sm:grid-cols-3">
                        {countryOptions.map((item) => (
                            <label key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                                <input
                                    {...register("preferredCountry")}
                                    type="radio"
                                    value={item}
                                    className="h-4 w-4 border-slate-300 text-blue-700" />
                                <span>{item}</span>
                            </label>
                        ))}
                        <label className="col-span-2 flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 sm:col-span-1">
                            <input
                                {...register("preferredCountry")}
                                type="radio"
                                value="Others"
                                className="h-4 w-4 border-slate-300 text-blue-700" />
                            <span>Others</span>
                        </label>
                    </div>
                    {errors.preferredCountry && <p className="mt-3 text-sm text-red-600">{errors.preferredCountry.message}</p>}
                </div>

                <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm sm:p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">How Did You Hear About Us?</p>
                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-700 sm:grid-cols-3">
                        {sourceOptions.map((item) => (
                            <label key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                                <input
                                    {...register("referralSource")}
                                    type="radio"
                                    value={item}
                                    className="h-4 w-4 border-slate-300 text-blue-700" />
                                <span>{item}</span>
                            </label>
                        ))}
                    </div>
                    {errors.referralSource && <p className="mt-3 text-sm text-red-600">{errors.referralSource.message}</p>}
                </div>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-linear-to-br from-blue-50 to-white p-5 shadow-sm sm:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Rules and Regulations</p>
                <ol className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                    <li>1. I will help the organization to provice best services and environment for my own success.</li>
                    <li>2. I will follow guidelines and lessons for the success of enrolled services.</li>
                    <li>3. I am fully aware that any violating nature and activities might lead to cancellation of the services.</li>
                    <li>4. I will maintain respect, harmony, and sincerity with all people in the organization during and after the rendered service period.</li>
                    <li>5. I will be liable for any damage done to the office assets and disparagement created to the organization reputation.</li>
                    <li>6. I am agreed to submit all the required documents for my further processing.</li>
                    <li>7. I will be responsible for everything if the submitted documents found unlawful and illicit.</li>
                    <li>8. The fees once paid will not be refunded for any reason to the client. However, the amount will only be refunded if the institution could not deliver the schedule services.</li>
                </ol>

                <div className="mt-6 space-y-4">
                    <label className="flex items-start gap-3 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
                        <input
                            {...register("termsAgreed")}
                            type="checkbox"
                            className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-700" />
                        <span className="text-sm leading-7 text-slate-600">
                            I hereby, abide by all the rules and regulations of the organization.
                        </span>
                    </label>
                    {errors.termsAgreed && <p className="text-sm text-red-600">{errors.termsAgreed.message}</p>}

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex items-center justify-center rounded-full bg-blue-700 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-70">
                            {isSubmitting ? "Submitting..." : "Submit Application Form"}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}