"use client";
import Image from "next/image";
import Link from "next/link";
import { RiLockPasswordLine, RiShieldCheckLine } from "react-icons/ri";

export default function SecurityPage({ navUrl }: { navUrl: string }) {

    return (
        <div className="mx-auto mt-20 w-full max-w-6xl">
            <div className="w-full rounded-3xl border border-slate-200 bg-white shadow-xl">
                <div className="grid lg:grid-cols-[1fr_1.05fr]">
                    {/* Left Sidebar */}
                    <div className="flex flex-col justify-between border-b border-slate-200 p-7 sm:p-9 lg:border-b-0 lg:border-r bg-slate-50/50 rounded-l-3xl">
                        <Image
                            src="/images/logo.jpg"
                            alt="Logo"
                            width={200}
                            height={200}
                            className="mt-10 h-48 w-full object-contain"
                            priority
                        />
                    </div>

                    {/* Right Content */}
                    <div className="p-7 sm:p-9">
                        <div>
                            <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">
                                Settings
                            </p>
                            <h1 className="mt-5 text-3xl font-black text-slate-900">Security</h1>
                            <p className="mt-2 text-sm text-slate-600">
                                Manage your authentication and password preferences.
                            </p>

                            <nav className="mt-8 flex flex-col gap-2">
                                <Link
                                    href={`${navUrl}/security/change-password`}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all text-slate-500 hover:text-blue-800 hover:bg-white/50 cursor-pointer"
                                >
                                    <RiLockPasswordLine size={20} />
                                    Change Password
                                </Link>

                                <Link
                                    href={`${navUrl}/security/2fa`}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all text-slate-500 hover:text-blue-800 hover:bg-white/50 cursor-pointer"
                                >
                                    <RiShieldCheckLine size={20} />
                                    2FA Security
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}