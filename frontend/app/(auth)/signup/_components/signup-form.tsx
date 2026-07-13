"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdEmail, MdPassword, MdPerson } from "react-icons/md";
import { useRouter } from "next/navigation";
import { handleSignup } from "@/app/lib/actions/auth-actions";
import { toast } from "react-toastify";
import { signupSchema, signupType } from "../schema";
import Link from "next/link";

export default function SignupPage() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<signupType>({
        resolver: zodResolver(signupSchema)
    });

    const onSubmit = async (data: signupType) => {
        try {
            const res = await handleSignup(data);

            if (!res.success) {
                throw new Error(res.message || "Signup failed!");
            };

            toast.success(res.message || "Account created successfully!");

            router.push("/login");

        } catch (err: any) {
            toast.error(err.message || "Signup failed!");
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
                                <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">
                                    Phoenix Admin
                                </p>

                                <h1 className="mt-5 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
                                    Create Admin Account
                                </h1>

                                <p className="mt-3 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
                                    Register an authorized administrator account to manage applications, inquiries, and admission workflows securely.
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
                                        Role:
                                    </span>{" "}
                                    Authorized staff and counselors
                                </div>

                                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                                    <span className="font-semibold text-slate-900">
                                        Account Security:
                                    </span>{" "}
                                    Protected admin access
                                </div>
                            </div>
                        </div>


                        <div className="p-7 sm:p-9">
                            <div className="mx-auto w-full max-w-md">

                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                                    Get Started
                                </p>

                                <h2 className="mt-3 text-3xl font-black text-slate-900">
                                    Create Account
                                </h2>

                                <p className="mt-2 text-sm leading-7 text-slate-600">
                                    Fill in your details to create a Phoenix admin account.
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
                                            placeholder="••••••••••"
                                            className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                                        />

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