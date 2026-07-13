"use client";
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { loginSchema, loginType } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { MdEmail, MdPassword } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { handleLogin } from '@/app/lib/actions/auth-actions';
import { toast } from 'react-toastify';
import { getDecodedTokenFromCookie } from '@/app/lib/cookie';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { API_BASE_URL } from '@/app/lib/config/config';

export default function LoginPage() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<loginType>({
        resolver: zodResolver(loginSchema)
    });

    const onSubmit = async (data: loginType) => {
        try {
            const res = await handleLogin(data);

            if (!res.success) {
                throw new Error(res.message || "Login failed!");
            };

            if (res.result?.requires2FA && res.result?.tempJWT) {
                return router.push(`/login/2fa?tempJWT=${res.result.tempJWT}`)
            };

            // Decoding after successful login (cookie is now set)
            const decoded = await getDecodedTokenFromCookie();

            switch (decoded.role) {
                case "admin":
                    router.replace("/admin/dashboard");
                    break;
                case "user":
                    router.replace("/user/dashboard");
                    break;
                default:
                    router.replace("/");
            };

            toast.success(res.message || "Login successful!");

        } catch (err: any) {
            toast.error(err.message || "Login failed!");
        };
    };

    const handleGoogleLogin = () => {
        window.location.href = `${API_BASE_URL}/auth/google/login`;
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
                                <h1 className="mt-5 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">Control Panel Login</h1>
                                <p className="mt-3 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
                                    Monitor applications, manage inquiries, and keep admissions workflows organized in one secure dashboard.
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
                                    <span className="font-semibold text-slate-900">Role:</span> Authorized staff and counselors
                                </div>
                                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                                    <span className="font-semibold text-slate-900">Admin Sticker:</span> Verified staff access only
                                </div>
                            </div>
                        </div>

                        <div className="p-7 sm:p-9">
                            <div className="mx-auto w-full max-w-md">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Welcome Back</p>
                                <h2 className="mt-3 text-3xl font-black text-slate-900">Login</h2>
                                <p className="mt-2 text-sm leading-7 text-slate-600">Enter your credentials to open the Phoenix admin workspace.</p>

                                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
                                    {/* Email */}
                                    <div className="space-y-3">
                                        <label htmlFor="admin-email" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
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
                                            <p className="text-sm font-medium text-red-600">{errors.email?.message}</p>
                                        )}
                                    </div>
                                    {/* Password */}
                                    <div className="space-y-3">
                                        <label htmlFor="admin-password" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
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
                                            <p className="text-sm font-medium text-red-600">{errors.password?.message}</p>
                                        )}
                                    </div>

                                    <div className="flex justify-end">
                                        <Link
                                            href={"/request-password"}
                                            className="text-sm font-medium text-blue-700 hover:text-blue-800 hover:underline"
                                        >
                                            Forgot Password?
                                        </Link>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full items-center justify-center bg-blue-700 text-white text-sm py-2.5 px-7 rounded-full font-bold shadow-xl shadow-blue-100
                                            ${isSubmitting ? "opacity-60" : "hover:bg-blue-800 cursor-pointer"}`}
                                    >
                                        {isSubmitting ? "Logging in..." : "Login"}
                                    </button>
                                    <div className="flex items-center gap-4 py-1">
                                        <div className="h-px flex-1 bg-slate-200" />
                                        <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                                            OR
                                        </span>
                                        <div className="h-px flex-1 bg-slate-200" />
                                    </div>
                                    <button
                                        type="button"
                                        onClick={handleGoogleLogin}
                                        className="flex w-full items-center justify-center gap-3 rounded-full border border-slate-300 bg-white px-6 py-2.5 font-semibold text-slate-700 transition-all duration-200 hover:border-slate-400 hover:bg-slate-50 cursor-pointer"
                                    >
                                        <FcGoogle size={22} />
                                        Continue with Google
                                    </button>
                                </form>
                                <div className="mt-6 text-center text-sm text-slate-600">
                                    New to Phoenix?{" "}
                                    <Link
                                        href={"/signup"}
                                        className="font-semibold text-blue-700 hover:text-blue-800 hover:underline cursor-pointer"
                                    >
                                        Create an account
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