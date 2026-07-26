"use client";
import Image from "next/image";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdPassword, MdSecurity } from "react-icons/md";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import { resetPasswordSchema, resetPasswordType } from "../schema";
import { handleResetAccountPassword } from "@/app/lib/actions/auth-actions";

export default function ResetPasswordPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get("token") || "";

    const {
        register,
        control,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<resetPasswordType>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            token
        }
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

    const onSubmit = async (data: resetPasswordType) => {
        try {
            const res = await handleResetAccountPassword(data);

            if (!res.success) {
                throw new Error(res.message || "Password reset failed.");
            };

            toast.success(res.message || "Password updated successfully.");

            router.push("/login");

        } catch (err: unknown) {
            toast.error(err instanceof Error ? err.message : "Something went wrong.");
        }
    };

    return (
        <section className="relative min-h-screen overflow-hidden bg-slate-100 px-4 py-10 sm:px-6 lg:px-8">

            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-0 top-0 h-52 w-full bg-linear-to-r from-blue-900 via-blue-800 to-cyan-800" />
                <div className="absolute -left-20 top-8 h-52 h-52 w-52 rounded-full bg-cyan-300/25 blur-3xl" />
                <div className="absolute right-10 top-16 h-56 w-56 rounded-full bg-blue-300/20 blur-3xl" />
            </div>


            <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center justify-center">

                <div className="w-full rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-300/50">

                    <div className="grid lg:grid-cols-[1fr_1.05fr]">


                        {/* Left Content */}
                        <div className="flex flex-col justify-between border-b border-slate-200 p-7 sm:p-9 lg:border-b-0 lg:border-r">

                            <div>

                                <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">
                                    Phoenix Admin
                                </p>


                                <h1 className="mt-5 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
                                    Create New Password
                                </h1>


                                <p className="mt-3 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
                                    Set a new secure password for your Phoenix administrator account.
                                </p>

                            </div>


                            <Image
                                src="/images/logo.jpg"
                                alt="Phoenix logo"
                                width={200}
                                height={200}
                                className="w-full h-full object-contain"
                                priority
                            />


                            <div className="mt-7 grid gap-3 text-sm text-slate-700">

                                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                                    <span className="font-semibold text-slate-900">
                                        Security:
                                    </span>{" "}
                                    Use a strong password to protect your account
                                </div>


                                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                                    <span className="font-semibold text-slate-900">
                                        Access:
                                    </span>{" "}
                                    Admin account recovery
                                </div>

                            </div>

                        </div>




                        {/* Form */}
                        <div className="p-7 sm:p-9">

                            <div className="mx-auto w-full max-w-md">


                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                                    Password Recovery
                                </p>


                                <h2 className="mt-3 text-3xl font-black text-slate-900">
                                    Reset Password
                                </h2>


                                <p className="mt-2 text-sm leading-7 text-slate-600">
                                    Enter your new password below to complete account recovery.
                                </p>



                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="mt-8 space-y-5"
                                >


                                    {/* Hidden Token */}
                                    <input
                                        type="hidden"
                                        {...register("token")}
                                    />



                                    {/* New Password */}
                                    <div className="space-y-3">

                                        <label
                                            htmlFor="newPassword"
                                            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500"
                                        >
                                            <MdPassword size={14} className="text-blue-700" />
                                            New Password
                                        </label>


                                        <input
                                            {...register("newPassword")}
                                            id="newPassword"
                                            type="password"
                                            autoComplete="new-password"
                                            aria-describedby="reset-password-strength"
                                            placeholder="••••••••••"
                                            className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                                        />

                                        <div className={`rounded-2xl border p-3.5 transition-colors ${newPassword ? passwordStrength.surface : "border-slate-200 bg-slate-50"}`}>
                                            <div id="reset-password-strength" className="flex items-center gap-3">
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
                                            <MdPassword size={14} className="text-blue-700" />
                                            Confirm Password
                                        </label>


                                        <input
                                            {...register("confirmPassword")}
                                            id="confirmPassword"
                                            type="password"
                                            placeholder="••••••••••"
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
                                        className={`w-full bg-blue-700 text-white text-sm py-2.5 px-7 rounded-full font-bold shadow-xl shadow-blue-100
                                        ${isSubmitting
                                                ? "opacity-60"
                                                : "hover:bg-blue-800 cursor-pointer"
                                            }`}
                                    >
                                        {
                                            isSubmitting
                                                ? "Resetting..."
                                                : "Reset Password"
                                        }
                                    </button>


                                </form>


                            </div>

                        </div>


                    </div>

                </div>

            </div>

        </section>
    );
}
