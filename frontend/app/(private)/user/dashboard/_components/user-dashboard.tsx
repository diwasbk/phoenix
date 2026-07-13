"use client";
import Image from "next/image";

export default function UserDashboardPage() {
    // Generate dynamic dates based on the current time
    const now = new Date();
    const currentMonth = now.toLocaleString('default', { month: 'long' });
    
    // Formats date and time (e.g., "July 11, 2026, 3:41 AM")
    const fullDateTime = now.toLocaleString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true 
    });

    return (
        <div className="relative mx-auto flex w-full max-w-6xl items-center justify-center mt-20">
            <div className="w-full rounded-3xl border border-slate-200 bg-white shadow-xl">
                <div className="grid lg:grid-cols-[1fr_1.05fr]">
                    
                    {/* Left - Branding and Welcome */}
                    <div className="flex flex-col justify-between border-b border-slate-200 p-7 sm:p-9 lg:border-b-0 lg:border-r">
                        <div>
                            <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">
                                Dashboard
                            </p>
                            <h1 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
                                Welcome back!
                            </h1>
                            <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
                                You are now logged into your user portal. You can manage your account and monitor your status here.
                            </p>
                        </div>

                        <Image
                            src="/images/logo.jpg"
                            alt="Logo"
                            width={200}
                            height={200}
                            className="h-full w-full object-contain mt-10"
                            priority
                        />

                        <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                            <span className="font-semibold text-slate-900">Status:</span> Your account is active and verified.
                        </div>
                    </div>

                    {/* Right - Dashboard Summary */}
                    <div className="flex items-center justify-center p-7 sm:p-9">
                        <div className="text-center w-full max-w-sm">
                            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-blue-700 mb-6">
                                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-black text-slate-900">
                                User Overview
                            </h2>
                            <p className="mt-4 text-sm leading-7 text-slate-600">
                                Use the navigation bar above to manage your applications or update your security settings.
                            </p>
                            
                            <div className="mt-8 border-t border-slate-100 pt-8 text-left">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">Account Information</p>
                                <div className="space-y-4">
                                    <div className="flex justify-between border-b border-slate-100 pb-2">
                                        <span className="text-sm text-slate-600">Member Since</span>
                                        <span className="text-sm font-bold text-slate-900">{currentMonth} 2026</span>
                                    </div>
                                    <div className="flex justify-between border-b border-slate-100 pb-2">
                                        <span className="text-sm text-slate-600">Last Login</span>
                                        <span className="text-sm font-bold text-slate-900">{fullDateTime}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}