"use client";
import Image from "next/image";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdEmail, MdPassword, MdPerson, MdSecurity } from "react-icons/md";
import { useRouter } from "next/navigation";
import { handleSignup } from "@/app/lib/actions/auth-actions";
import { toast } from "react-toastify";
import { signupSchema, signupType } from "../schema";
import Link from "next/link";

export default function SignupPage() {
    const router = useRouter();

    const {
        register,
        control,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<signupType>({
        resolver: zodResolver(signupSchema)
    });

    const password = useWatch({ control, name: "password", defaultValue: "" });
    const passwordChecks = [
        password.length >= 8,
        /[A-Z]/.test(password),
        /[a-z]/.test(password),
        /[0-9]/.test(password),
        /[^A-Za-z0-9]/.test(password)
    ];
    const passwordScore = passwordChecks.filter(Boolean).length;
    const passwordStrength = passwordScore <= 1
        ? { label: "Weak", message: "Try a less predictable password.", color: "bg-rose-500", text: "text-rose-700", surface: "border-rose-100 bg-rose-50/70", icon: "bg-rose-100 text-rose-700" }
        : passwordScore <= 3
            ? { label: "Fair", message: "A little more complexity will help.", color: "bg-amber-500", text: "text-amber-700", surface: "border-amber-100 bg-amber-50/70", icon: "bg-amber-100 text-amber-700" }
            : passwordScore === 4
                ? { label: "Good", message: "Your password is nearly there.", color: "bg-blue-600", text: "text-blue-700", surface: "border-blue-100 bg-blue-50/70", icon: "bg-blue-100 text-blue-700" }
                : { label: "Strong", message: "Great choice — your password is secure.", color: "bg-emerald-600", text: "text-emerald-700", surface: "border-emerald-100 bg-emerald-50/70", icon: "bg-emerald-100 text-emerald-700" };

    const onSubmit = async (data: signupType) => {
        try {
            const res = await handleSignup(data);

            if (!res.success) {
                throw new Error(res.message || "Signup failed!");
            };

            toast.success(res.message || "Account created successfully!");

            router.push("/login");

        } catch (err: unknown) {
            toast.error(err instanceof Error ? err.message : "Signup failed!");
        };
    };

    return (
        <section className="relative min-h-screen overflow-hidden bg-slate-100 px-4 py-10 sm:px-6 lg:px-8">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-0 top-0 h-52 w-full bg-linear-to-r from-blue-900 via-blue-800 to-cyan-800" />
                <div className="absolute -left-20 top-8 h-52 w-52 rounded-full bg-cyan-300/25 blur-3xl" />
                <div className="absolute right-10 top-16 h-56 w-56 rounded-full bg-blue-300/20 blur-3xl" />
            </div>

            <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center justify-center">
                <div className="w-full rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-300/50">
                    <div className="grid lg:grid-cols-[1fr_1.05fr]">

                        <div className="flex flex-col justify-between border-b border-slate-200 p-7 sm:p-9 lg:border-b-0 lg:border-r">
                            <div>
                                <h1 className="mt-5 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
                                    Create New Account
                                </h1>

                                <p className="mt-3 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
                                    Register an authorized user account to manage applications, inquiries, and admission workflows securely.
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
                                        Account Security:
                                    </span>{" "}
                                    Role-based permissions enabled
                                </div>
                            </div>
                        </div>


                        <div className="p-7 sm:p-9">
                            <div className="mx-auto w-full max-w-md">

                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                                    Get Started
                                </p>

                                <p className="mt-2 text-sm leading-7 text-slate-600">
                                    Fill in your details to create a Phoenix user account.
                                </p>

                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="mt-8 space-y-5"
                                >

                                    {/* Full Name */}
                                    <div className="space-y-3">
                                        <label
                                            htmlFor="fullName"
                                            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500"
                                        >
                                            <MdPerson size={14} className="text-blue-700" />
                                            Full Name
                                        </label>

                                        <input
                                            {...register("fullName")}
                                            id="fullName"
                                            placeholder="John Doe"
                                            className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                                        />

                                        {errors.fullName && (
                                            <p className="text-sm font-medium text-red-600">
                                                {errors.fullName.message}
                                            </p>
                                        )}
                                    </div>


                                    {/* Email */}
                                    <div className="space-y-3">
                                        <label
                                            htmlFor="admin-email"
                                            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500"
                                        >
                                            <MdEmail size={14} className="text-blue-700" />
                                            Email
                                        </label>

                                        <input
                                            {...register("email")}
                                            id="admin-email"
                                            placeholder="hello@example.com"
                                            className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                                        />

                                        {errors.email && (
                                            <p className="text-sm font-medium text-red-600">
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Password */}
                                    <div className="space-y-3">
                                        <label
                                            htmlFor="admin-password"
                                            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500"
                                        >
                                            <MdPassword size={14} className="text-blue-700" />
                                            Password
                                        </label>

                                        <input
                                            {...register("password")}
                                            id="admin-password"
                                            type="password"
                                            autoComplete="new-password"
                                            aria-describedby="password-strength"
                                            placeholder="••••••••••"
                                            className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                                        />

                                        <div className={`rounded-2xl border p-3.5 transition-colors ${password ? passwordStrength.surface : "border-slate-200 bg-slate-50"}`}>
                                            <div id="password-strength" className="flex items-center gap-3">
                                                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${password ? passwordStrength.icon : "bg-slate-200 text-slate-500"}`}>
                                                    <MdSecurity size={19} aria-hidden="true" />
                                                </span>

                                                <div className="min-w-0 flex-1">
                                                    <div className="flex items-center justify-between gap-3">
                                                        <span className="text-xs font-semibold text-slate-600">Password strength</span>
                                                        <span className={`text-xs font-bold ${password ? passwordStrength.text : "text-slate-500"}`} aria-live="polite">
                                                            {password ? passwordStrength.label : "Not entered"}
                                                        </span>
                                                    </div>
                                                    <p className="mt-0.5 truncate text-xs text-slate-500">
                                                        {password ? passwordStrength.message : "Create a secure password for your account."}
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
                                                        className={`h-1.5 rounded-full transition-all ${index < passwordScore && password ? passwordStrength.color : "bg-slate-200"}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        {errors.password && (
                                            <p className="text-sm font-medium text-red-600">
                                                {errors.password.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Confirm Password */}
                                    <div className="space-y-3">
                                        <label
                                            htmlFor="confirm-password"
                                            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500"
                                        >
                                            <MdPassword size={14} className="text-blue-700" />
                                            Confirm Password
                                        </label>

                                        <input
                                            {...register("confirmPassword")}
                                            id="confirm-password"
                                            type="password"
                                            autoComplete="new-password"
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
                                        className={`w-full items-center justify-center bg-blue-700 text-white text-sm py-2.5 px-7 rounded-full font-bold shadow-xl shadow-blue-100
                                        ${isSubmitting
                                                ? "opacity-60"
                                                : "hover:bg-blue-800 cursor-pointer"
                                            }`}
                                    >
                                        {isSubmitting ? "Creating Account..." : "Create Account"}
                                    </button>
                                </form>
                                <div className="mt-6 text-center text-sm text-slate-600">
                                    Already have an account?{" "}
                                    <Link
                                        href={"/login"}
                                        className="font-semibold text-blue-700 hover:text-blue-800 hover:underline cursor-pointer"
                                    >
                                        Log in
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
