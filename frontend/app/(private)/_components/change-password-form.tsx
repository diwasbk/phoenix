"use client";
import Image from "next/image";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdPassword, MdSecurity } from "react-icons/md";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { changePasswordSchema, changePasswordType } from "@/app/lib/schemas/auth.schema";
import { handleChangePassword } from "@/app/lib/actions/auth-actions";

export default function ChangePasswordPage({ }) {
    const router = useRouter();

    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<changePasswordType>({
        resolver: zodResolver(changePasswordSchema),
    });

    const newPassword = useWatch({ control, name: "newPassword", defaultValue: "" });
    const passwordChecks = [
        newPassword.length >= 8,
        /[A-Z]/.test(newPassword),
        /[a-z]/.test(newPassword),
        /[0-9]/.test(newPassword),
        /[^A-Za-z0-9]/.test(newPassword)
    ];
    const passwordScore = passwordChecks.filter(Boolean).length;
    const passwordStrength = passwordScore <= 1
        ? { label: "Weak", message: "Try a less predictable password.", color: "bg-rose-500", text: "text-rose-700", surface: "border-rose-100 bg-rose-50/70", icon: "bg-rose-100 text-rose-700" }
        : passwordScore <= 3
            ? { label: "Fair", message: "A little more complexity will help.", color: "bg-amber-500", text: "text-amber-700", surface: "border-amber-100 bg-amber-50/70", icon: "bg-amber-100 text-amber-700" }
            : passwordScore === 4
                ? { label: "Good", message: "Your password is nearly there.", color: "bg-blue-600", text: "text-blue-700", surface: "border-blue-100 bg-blue-50/70", icon: "bg-blue-100 text-blue-700" }
                : { label: "Strong", message: "Great choice — your password is secure.", color: "bg-emerald-600", text: "text-emerald-700", surface: "border-emerald-100 bg-emerald-50/70", icon: "bg-emerald-100 text-emerald-700" };

    const onSubmit = async (data: changePasswordType) => {
        try {
            const res = await handleChangePassword(data);

            if (!res.success) {
                throw new Error(res.message || "Failed to change password!");
            };

            toast.success(res.message || "Password changed successfully!");

            reset();

            router.push("/login");

        } catch (err: unknown) {
            toast.error(err instanceof Error ? err.message : "Failed to change password!");
        };
    };

    return (
        <div className="relative mx-auto flex w-full max-w-6xl items-center justify-center mt-20">
            <div className="w-full rounded-3xl border border-slate-200 bg-white shadow-xl mb-10">
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
                                        autoComplete="new-password"
                                        aria-describedby="change-password-strength"
                                        placeholder="••••••••"
                                        className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                                    />

                                    <div className={`rounded-2xl border p-3.5 transition-colors ${newPassword ? passwordStrength.surface : "border-slate-200 bg-slate-50"}`}>
                                        <div id="change-password-strength" className="flex items-center gap-3">
                                            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${newPassword ? passwordStrength.icon : "bg-slate-200 text-slate-500"}`}>
                                                <MdSecurity size={19} aria-hidden="true" />
                                            </span>
                                            <div className="min-w-0 flex-1">
                                                <div className="flex items-center justify-between gap-3">
                                                    <span className="text-xs font-semibold text-slate-600">Password strength</span>
                                                    <span className={`text-xs font-bold ${newPassword ? passwordStrength.text : "text-slate-500"}`} aria-live="polite">
                                                        {newPassword ? passwordStrength.label : "Not entered"}
                                                    </span>
                                                </div>
                                                <p className="mt-0.5 truncate text-xs text-slate-500">
                                                    {newPassword ? passwordStrength.message : "Create a secure password for your account."}
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="mt-3 grid grid-cols-5 gap-1.5"
                                            role="progressbar"
                                            aria-label="Password strength"
                                            aria-valuemin={0}
                                            aria-valuemax={5}
                                            aria-valuenow={passwordScore}
                                        >
                                            {passwordChecks.map((_, index) => (
                                                <span
                                                    key={index}
                                                    className={`h-1.5 rounded-full transition-all ${index < passwordScore && newPassword ? passwordStrength.color : "bg-slate-200"}`}
                                                />
                                            ))}
                                        </div>
                                    </div>

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
