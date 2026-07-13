"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { handleEnableTwoFactor, handleVerifyTwoFactorSetup, handleDisableTwoFactor, } from "@/app/lib/actions/auth-actions";
import { twoFactorSetupVerificationSchema, twoFactorSetupVerificationType, } from "@/app/lib/schemas/auth.schema";
import { FaCircleCheck } from "react-icons/fa6";

export default function EnableTwoFactorPage() {
    const router = useRouter();

    const [qrCode, setQrCode] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [alreadyEnabled, setAlreadyEnabled] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<twoFactorSetupVerificationType>({
        resolver: zodResolver(twoFactorSetupVerificationSchema),
    });

    useEffect(() => {
        const init2FA = async () => {
            const res = await handleEnableTwoFactor();

            if (res.success && res.result) {
                setQrCode(res.result);

            } else if (res.result?.twoFactorAlreadyEnabled) {
                setAlreadyEnabled(true);

            } else {
                toast.error(res.message || "Failed to load 2FA setup");
            };

            setIsLoading(false);
        };

        init2FA();
    }, []);

    const onSubmit = async (data: twoFactorSetupVerificationType) => {
        const res = await handleVerifyTwoFactorSetup(data);

        if (res.success) {
            toast.success(res.message || "2FA verified successfully!");

            router.back();

        } else {
            toast.error(res.message || "Failed to verify 2FA setup!");
        };
    };

    const handleDisable = async () => {
        const res = await handleDisableTwoFactor();

        if (res.success) {
            toast.success(res.message || "2FA disabled successfully!");

            router.back();

        } else {
            toast.error(res.message || "Failed to disable 2FA!");
        };
    };

    return (
        <div className="relative mx-auto mt-20 flex w-full max-w-6xl items-center justify-center">
            <div className="w-full rounded-3xl border border-slate-200 bg-white shadow-xl">
                <div className="grid lg:grid-cols-[1fr_1.05fr]">
                    {/* Left */}
                    <div className="flex flex-col items-center justify-center border-b border-slate-200 p-7 sm:p-9 lg:border-b-0 lg:border-r">
                        {alreadyEnabled ? (
                            <>
                                <h3 className="mb-6 text-xl font-bold text-slate-900">
                                    Two-Factor Authentication
                                </h3>
                                <div className="rounded-2xl border border-green-200 bg-green-50 px-6 py-8 text-center">
                                    <div className="flex justify-center">
                                        <FaCircleCheck className="text-5xl text-green-600" />
                                    </div>

                                    <p className="mt-4 text-lg font-semibold text-green-700">
                                        2FA is Enabled
                                    </p>

                                    <p className="mt-3 max-w-xs mx-auto text-sm text-slate-600">
                                        Your account is currently protected with two-factor authentication.
                                    </p>
                                </div>
                            </>
                        ) : (
                            <>
                                <h3 className="mb-6 text-xl font-bold text-slate-900">
                                    Scan QR Code
                                </h3>

                                {isLoading ? (
                                    <div className="h-48 w-48 animate-pulse rounded-xl bg-slate-100" />
                                ) : (
                                    qrCode && (
                                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                            <img
                                                src={qrCode}
                                                alt="2FA QR Code"
                                                className="h-48 w-48"
                                            />
                                        </div>
                                    )
                                )}

                                <p className="mt-6 max-w-xs text-center text-sm text-slate-500">
                                    Scan this code with your Google Authenticator
                                    or Authy app.
                                </p>
                            </>
                        )}
                    </div>

                    {/* Right */}
                    <div className="p-7 sm:p-9">
                        <div className="mx-auto w-full max-w-md">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                                Security
                            </p>

                            <h2 className="mt-3 text-3xl font-black text-slate-900">
                                {alreadyEnabled
                                    ? "Manage 2FA"
                                    : "Verify 2FA"}
                            </h2>

                            <p className="mt-2 text-sm leading-7 text-slate-600">
                                {alreadyEnabled
                                    ? "Two-factor authentication is already enabled on your account."
                                    : "Enter the 6-digit code from your app to enable two-factor authentication."}
                            </p>

                            {alreadyEnabled ? (
                                <div className="mt-8">
                                    <button
                                        type="button"
                                        onClick={handleDisable}
                                        className="w-full cursor-pointer rounded-full border border-red-600 px-7 py-3.5 text-sm font-bold text-red-600 transition-all hover:bg-red-50"
                                    >
                                        Disable 2FA
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5" >
                                    <div className="space-y-3">
                                        <label
                                            htmlFor="authCode"
                                            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500"
                                        >
                                            <MdOutlineQrCodeScanner
                                                size={14}
                                                className="text-blue-700"
                                            />
                                            Auth Code
                                        </label>

                                        <input
                                            {...register("authCode")}
                                            id="authCode"
                                            type="text"
                                            maxLength={6}
                                            placeholder="000000"
                                            className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-center text-xl tracking-[0.5em] text-slate-900 placeholder:text-slate-400 transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                                        />

                                        {errors.authCode && (
                                            <p className="text-sm font-medium text-red-600">
                                                {errors.authCode.message}
                                            </p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full rounded-full bg-blue-700 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-100 transition-all ${isSubmitting
                                            ? "opacity-60"
                                            : "cursor-pointer hover:bg-blue-800"
                                            }`}
                                    >
                                        {isSubmitting ? "Verifying..." : "Verify & Enable 2FA"}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}