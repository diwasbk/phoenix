"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function CTASection() {
    return (
        <>
            {/* Call To Action Section - prominent conversion focused section */}
            <section className="relative overflow-hidden bg-white text-gray-900">
                {/* Background decorative elements - subtle and professional */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute right-0 top-1/2 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl"></div>
                    <div className="absolute -bottom-20 left-0 h-80 w-80 rounded-full bg-cyan-100/20 blur-3xl"></div>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                    {/* Main Content Container */}
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
                        {/* Left Side - Graduation visual */}
                        <div className="relative w-full">
                            <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl shadow-blue-200/40">
                                <Image
                                    src="/graduation.png"
                                    alt="Graduating student celebrating academic success"
                                    width={900}
                                    height={1100}
                                    className="h-105 w-full object-cover sm:h-125"
                                    priority
                                />
                                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-blue-950/20 via-transparent to-cyan-200/10"></div>
                            </div>
                        </div>

                        {/* Right Side - CTA content */}
                        <div className="flex flex-col items-start gap-8 text-left">
                            {/* Educational Infographics - Icons representing future and academic growth */}
                            <div className="mb-1 flex flex-wrap items-center gap-4">
                                {/* University/Crown Icon */}
                                <div className="rounded-full border border-blue-200/60 bg-blue-100/40 p-3">
                                    <svg className="h-8 w-8 text-blue-700" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-4.41 0-8-3.59-8-8V8.36l8-4 8 4V12c0 4.41-3.59 8-8 8z" />
                                        <path d="M10 17h4v-3h-4v3zm6-6H8v3h8v-3z" />
                                    </svg>
                                </div>

                                {/* Globe Icon */}
                                <div className="rounded-full border border-cyan-200/60 bg-cyan-100/40 p-3">
                                    <svg className="h-8 w-8 text-cyan-600" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </div>

                                {/* Star/Achievement Icon */}
                                <div className="rounded-full border border-yellow-200/60 bg-yellow-100/40 p-3">
                                    <svg className="h-8 w-8 text-yellow-600" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                                    </svg>
                                </div>

                                {/* Growth/Arrow Icon */}
                                <div className="rounded-full border border-green-200/60 bg-green-100/40 p-3">
                                    <svg className="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31.84 2.41 2 2.83V23h2v-3.17c1.16-.42 2-1.52 2-2.83 0-1.66-1.34-3-3-3zm13.71-9.71L17 6.41 13.88 3.29c-.39-.39-1.02-.39-1.41 0L3.29 12.47c-.39.39-.39 1.02 0 1.41l9.17 9.17c.39.39 1.02.39 1.41 0L20 13.59 21.12 14.7c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0L20 13.59" />
                                    </svg>
                                </div>
                            </div>

                            {/* Heading */}
                            <div>
                                <h2 className="mb-4 text-4xl font-black leading-[1.1] tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">
                                    Ready to Transform Your <span className="text-cyan-600">Future?</span>
                                </h2>
                                <p className="max-w-2xl text-lg font-light text-gray-600 sm:text-xl">
                                    Join thousands of students who have successfully studied abroad with our expert guidance. Start your journey today.
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="mt-3 flex flex-col gap-4 sm:flex-row">
                                {/* Primary CTA Button */}
                                <Link
                                    href="/apply"
                                    className="inline-flex items-center justify-center rounded-full bg-blue-50 px-8 py-4 text-base font-semibold text-blue-900 shadow-xl shadow-blue-800/40 transition-all duration-300 hover:-translate-y-0.5 hover:cursor-pointer hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 focus:ring-offset-white"
                                >
                                    Start Your Application
                                    <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                                    </svg>
                                </Link>

                                {/* Secondary CTA Button */}
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center rounded-full border border-blue-950/30 bg-blue-950/5 px-8 py-4 text-base font-semibold text-blue-950 transition-all duration-300 hover:-translate-y-0.5 hover:cursor-pointer hover:border-blue-950/50 hover:bg-blue-950/10 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 focus:ring-offset-white"
                                >
                                    Schedule a Consultation
                                </Link>
                            </div>

                            {/* Trust Badges */}
                            <div className="mt-3 flex w-full flex-col items-start gap-8 border-t border-gray-200 pt-8 sm:flex-row">
                                {/* Badge 1 */}
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/50 bg-cyan-100/50">
                                        <svg className="h-6 w-6 text-cyan-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-semibold text-blue-950">5000+</p>
                                        <p className="text-xs text-gray-600">Successful Admissions</p>
                                    </div>
                                </div>

                                {/* Badge 2 */}
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/50 bg-cyan-100/50">
                                        <svg className="h-6 w-6 text-cyan-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-semibold text-blue-950">Expert Counselors</p>
                                        <p className="text-xs text-gray-600">Dedicated Support</p>
                                    </div>
                                </div>

                                {/* Badge 3 */}
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/50 bg-cyan-100/50">
                                        <svg className="h-6 w-6 text-cyan-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20H7m6-4h.01M15 12H9" />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-semibold text-blue-950">Global Partners</p>
                                        <p className="text-xs text-gray-600">World-class Universities</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
