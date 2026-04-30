"use client";
import ApplyForm from './apply-form';

export default function ApplyFormSection() {
    return (
        <main className="overflow-hidden bg-white text-slate-900">
            <section className="relative overflow-hidden bg-linear-to-br from-blue-950 via-blue-900 to-blue-800 px-4 py-10 text-white sm:px-6 lg:px-8">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-20 top-14 h-72 w-72 rounded-full bg-cyan-200/10 blur-3xl"></div>
                    <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-blue-100/10 blur-3xl"></div>
                    <div className="absolute inset-0 bg-linear-to-r from-blue-950/35 via-transparent to-blue-900/25"></div>
                </div>

                <div className="relative z-10 mx-auto">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                        <div className="opacity-0 animate-[revealUp_0.8s_ease-out_forwards]">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Apply</p>
                            <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                                Admission Form for Your Study Abroad Journey
                            </h1>
                            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/90 sm:text-lg">
                                Complete the form below so we can review your profile, understand your destination preferences, and guide you with the next steps.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative px-4 py-10 sm:px-6 lg:px-8">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-8 top-10 h-40 w-40 rounded-full bg-cyan-100/50 blur-3xl"></div>
                    <div className="absolute right-8 bottom-8 h-44 w-44 rounded-full bg-blue-100/50 blur-3xl"></div>
                </div>

                <div className="relative z-10 mx-auto">
                    <article className="overflow-hidden rounded-4xl border border-blue-100 bg-linear-to-b from-white to-blue-50/70 shadow-2xl shadow-blue-100/50">
                        <div className="border-b border-blue-100 bg-white px-5 py-4 sm:px-6">
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Student Details</p>
                                    <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900">Complete Your Admission Information</h2>
                                </div>
                                <div className="rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                                    Required fields marked with *
                                </div>
                            </div>
                        </div>
                        <ApplyForm />
                    </article>
                </div>
            </section>
        </main>
    );
}