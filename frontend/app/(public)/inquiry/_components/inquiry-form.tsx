"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { inquirySchema, inquiryType } from "../schema";
import { handleSendInquiry } from "@/app/lib/actions/inquiry-actions";
import { toast } from "react-toastify";
import { handleGetMe } from "@/app/lib/actions/auth-actions";

const destinations = ['Japan', 'UK', 'Australia', 'Korea', 'USA'];

export default function InquiryForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<inquiryType>({
        resolver: zodResolver(inquirySchema),

        defaultValues: async () => {
            const res = await handleGetMe();
            return {
                fullName: res.result?.fullName ?? "",
                email: res.result?.email ?? "",

            } as any;
        }
    });

    const onSubmit = async (data: inquiryType) => {
        try {
            const res = await handleSendInquiry(data);

            if (!res.success) {
                throw new Error(res.message || "Failed to submit inquiry");
            };

            toast.success(res.message || "Inquiry submitted successfully!");
            reset();

        } catch (err: any) {
            toast.error(err.message || "Failed to submit application!");
        };
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Full Name *</span>
                    <input
                        {...register("fullName")}
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                        placeholder="Enter your full name"
                    />
                    {errors.fullName && <p className="text-sm text-red-600">{errors.fullName.message}</p>}
                </label>
                <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Email Address *</span>
                    <input
                        {...register("email")}
                        type="email"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                        placeholder="you@example.com"
                    />
                    {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
                </label>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Phone Number *</span>
                    <input
                        {...register("phoneNumber")}
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                        placeholder="98XXXXXXXX"
                    />
                    {errors.phoneNumber && <p className="text-sm text-red-600">{errors.phoneNumber.message}</p>}
                </label>
                <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Address *</span>
                    <input
                        {...register("address")}
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                        placeholder="Enter your address"
                    />
                    {errors.address && <p className="text-sm text-red-600">{errors.address.message}</p>}
                </label>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Academic Level *</span>
                    <select
                        {...register("academicLevel")}
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                        defaultValue=""
                    >
                        <option value="" disabled>Select your level</option>
                        <option>+2 / High School</option>
                        <option>Bachelor Completed</option>
                        <option>Master Completed</option>
                        <option>Others</option>
                    </select>
                    {errors.academicLevel && <p className="text-sm text-red-600">{errors.academicLevel.message}</p>}
                </label>
                <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Preferred Destination *</span>
                    <select
                        {...register("destination")}
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                        defaultValue=""
                    >
                        <option value="" disabled>Select a destination</option>
                        {destinations.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                    {errors.destination && <p className="text-sm text-red-600">{errors.destination.message}</p>}
                </label>
            </div>

            <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">Your Message</span>
                <textarea
                    {...register("message")}
                    rows={5}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    placeholder="Tell us about your goals, budget, or questions..."
                />
                {errors.message && <p className="text-sm text-red-600">{errors.message.message}</p>}
            </label>
            <label className="flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50/50 p-4">
                <input type="checkbox" {...register("agreeContact")} className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-700" />
                <span className="text-sm leading-7 text-slate-600">
                    I agree to be contacted by Butwal Phoenix Education Hub regarding my inquiry.
                </span>
            </label>
            {errors.agreeContact && <p className="text-sm text-red-600">{errors.agreeContact.message}</p>}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center justify-center bg-blue-700 text-white text-sm py-2.5 px-7 rounded-full font-bold  transition-all duration-300 shadow-xl shadow-blue-100
                        ${isSubmitting ? "opacity-60" : "hover:bg-blue-800 hover:-translate-y-0.5 cursor-pointer"}`}
                >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                </button>
            </div>
        </form>
    );
}