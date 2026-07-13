"use client";
import Image from "next/image";
import { handleVerifyTwoFactorLogin } from "@/app/lib/actions/auth-actions";
import { getDecodedTokenFromCookie } from "@/app/lib/cookie";
import { twoFactorLoginVerificationSchema, twoFactorLoginVerificationType } from "@/app/lib/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { toast } from "react-toastify";

export default function TwoFactorLoginPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const tempJWT = searchParams.get("tempJWT") as string;

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<twoFactorLoginVerificationType>({
        resolver: zodResolver(twoFactorLoginVerificationSchema),
        defaultValues: {
            tempJWT
        }
    });

    const onSubmit = async (data: twoFactorLoginVerificationType) => {
        try {
            const res = await handleVerifyTwoFactorLogin(data);

            if (!res.success) {
                throw new Error(res.message || "Login failed!");
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

    return (
        <section className="relative min-h-screen overflow-hidden bg-slate-100 px-4 py-10 sm:px-6 lg:px-8">
            {/* Background Decorations */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-0 top-0 h-52 w-full bg-linear-to-r from-blue-900 via-blue-800 to-cyan-800" />
                <div className="absolute -left-20 top-8 h-52 w-52 rounded-full bg-cyan-300/25 blur-3xl" />
                <div className="absolute right-10 top-16 h-56 w-56 rounded-full bg-blue-300/20 blur-3xl" />
            </div>

            {/* Container */}
            <div className="relative mx-auto flex min-h-[calc(100vh-10rem)] w-full max-w-5xl items-center justify-center">
                <div className="w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/50">
                    <div className="grid lg:grid-cols-[1fr_1.2fr]">
                        {/* Left: Branding */}
                        <div className="hidden items-center justify-center border-r border-slate-200 bg-slate-50 p-12 lg:flex">
                            <Image
                                src="/images/logo.jpg"
                                alt="Phoenix logo"
                                width={300}
                                height={300}
                                className="h-auto w-full object-contain"
                                priority
                            />
                        </div>

                        {/* Right: Form */}
                        <div className="p-8 sm:p-12">
                            <div className="mx-auto w-full max-w-sm">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Security</p>
                                <h2 className="mt-3 text-3xl font-black text-slate-900">Verify Identity</h2>
                                <p className="mt-2 text-sm text-slate-600">Enter the 6-digit code from your authenticator app.</p>

                                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
                                    <div className="space-y-3">
                                        <label htmlFor="authCode" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                                            <MdOutlineQrCodeScanner size={14} className="text-blue-700" />
                                            6-Digit Code
                                        </label>
                                        <input
                                            {...register("authCode")}
                                            id="authCode"
                                            type="text"
                                            maxLength={6}
                                            placeholder="000000"
                                            className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-center text-xl tracking-[0.5em] text-slate-900 placeholder:text-slate-400 transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                                        />
                                        {errors.authCode && <p className="text-sm font-medium text-red-600">{errors.authCode.message}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full rounded-full bg-blue-700 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-100 transition-all ${isSubmitting ? "opacity-60" : "hover:bg-blue-800 cursor-pointer"}`}
                                    >
                                        {isSubmitting ? "Verifying..." : "Verify and Login"}
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