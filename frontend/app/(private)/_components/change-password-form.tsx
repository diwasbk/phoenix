"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdPassword } from "react-icons/md";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { changePasswordSchema, changePasswordType } from "@/app/lib/schemas/auth.schema";
import { handleChangePassword } from "@/app/lib/actions/auth-actions";

export default function ChangePasswordPage({ }) {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<changePasswordType>({
        resolver: zodResolver(changePasswordSchema),
    });

    const onSubmit = async (data: changePasswordType) => {
        try {
            const res = await handleChangePassword(data);

            if (!res.success) {
                throw new Error(res.message || "Failed to change password!");
            };

            toast.success(res.message || "Password changed successfully!");

            reset();

            router.push("/login");

        } catch (err: any) {
            toast.error(err.message || "Failed to change password!");
        };
    };

    return (
        <div className="relative mx-auto flex w-full max-w-6xl items-center justify-center mt-20">
            <div className="w-full rounded-3xl border border-slate-200 bg-white shadow-xl">
                <div className="grid lg:grid-cols-[1fr_1.05fr]">

                    {/* Left */}
                    <div className="flex flex-col justify-between border-b border-slate-200 p-7 sm:p-9 lg:border-b-0 lg:border-r">
                        <div>
                            <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">
                                Security
                            </p>

                            <h1 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
                                Change Password
                            </h1>

                            <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
                                Update your password to keep your account secure.
                            </p>
                        </div>

                        <Image
                            src="/images/logo.jpg"
                            alt="Logo"
                            width={200}
                            height={200}
                            className="h-full w-full object-contain"
                            priority
                        />

                        <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                            <span className="font-semibold text-slate-900">
                                Tip:
                            </span>{" "}
                            Use a strong password with uppercase, lowercase,
                            numbers, and special characters.
                        </div>
                    </div>

                    {/* Right */}
                    <div className="p-7 sm:p-9">
                        <div className="mx-auto w-full max-w-md">

                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                                Account Security
                            </p>

                            <h2 className="mt-3 text-3xl font-black text-slate-900">
                                Change Password
                            </h2>

                            <p className="mt-2 text-sm leading-7 text-slate-600">
                                Enter your current password and choose a new one.
                            </p>

                            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
                                {/* Current Password */}
                                <div className="space-y-3">
                                    <label
                                        htmlFor="currentPassword"
                                        className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500"
                                    >
                                        <MdPassword
                                            size={14}
                                            className="text-blue-700"
                                        />
                                        Current Password
                                    </label>

                                    <input
                                        {...register("currentPassword")}
                                        id="currentPassword"
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                                    />

                                    {errors.currentPassword && (
                                        <p className="text-sm font-medium text-red-600">
                                            {errors.currentPassword.message}
                                        </p>
                                    )}
                                </div>

                                {/* New Password */}
                                <div className="space-y-3">
                                    <label
                                        htmlFor="newPassword"
                                        className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500"
                                    >
                                        <MdPassword
                                            size={14}
                                            className="text-blue-700"
                                        />
                                        New Password
                                    </label>

                                    <input
                                        {...register("newPassword")}
                                        id="newPassword"
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                                    />

                                    {errors.newPassword && (
                                        <p className="text-sm font-medium text-red-600">
                                            {errors.newPassword.message}
                                        </p>
                                    )}
                                </div>

                                {/* Confirm Password */}
                                <div className="space-y-3">
                                    <label
                                        htmlFor="confirmPassword"
                                        className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500"
                                    >
                                        <MdPassword
                                            size={14}
                                            className="text-blue-700"
                                        />
                                        Confirm Password
                                    </label>

                                    <input
                                        {...register("confirmPassword")}
                                        id="confirmPassword"
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                                    />

                                    {errors.confirmPassword && (
                                        <p className="text-sm font-medium text-red-600">
                                            {errors.confirmPassword.message}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full rounded-full bg-blue-700 px-7 py-2.5 text-sm font-bold text-white shadow-xl shadow-blue-100 ${isSubmitting
                                        ? "opacity-60"
                                        : "cursor-pointer hover:bg-blue-800"
                                        }`}
                                >
                                    {isSubmitting
                                        ? "Changing Password..."
                                        : "Change Password"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}