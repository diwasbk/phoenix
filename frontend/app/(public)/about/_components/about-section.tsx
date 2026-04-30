'use client';
import Link from 'next/link';
import { useState } from 'react';

const coreValues = [
    {
        title: 'Transparency First',
        description: 'Clear guidance, realistic timelines, and honest advice so students and parents can make informed decisions.',
        impact: '92%',
        progressWidth: 'w-[92%]',
        metricLabel: 'Clarity Score',
        metricValue: 'High',
    },
    {
        title: 'Student-Centered Planning',
        description: 'Every plan is tailored to academic profile, budget, long-term career goals, and personal comfort.',
        impact: '95%',
        progressWidth: 'w-[95%]',
        metricLabel: 'Plan Fit',
        metricValue: 'Personalized',
    },
    {
        title: 'End-to-End Support',
        description: 'From profile assessment to visa and pre-departure readiness, we stay with you at every step.',
        impact: '98%',
        progressWidth: 'w-[98%]',
        metricLabel: 'Coverage',
        metricValue: 'Full Journey',
    },
    {
        title: 'Outcome Driven',
        description: 'We focus on strong applications, higher admit chances, and successful student transitions abroad.',
        impact: '90%',
        progressWidth: 'w-[90%]',
        metricLabel: 'Result Focus',
        metricValue: 'Strong',
    },
];

export default function AboutSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const activeValue = coreValues[currentSlide] ?? coreValues[0];

    return (
        <main className="overflow-hidden bg-white text-slate-900">
            <section className="relative bg-linear-to-br from-blue-950 via-blue-900 to-blue-800 px-4 py-10 text-white sm:px-6 lg:px-8">
                {/* Hero section */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-20 top-14 h-72 w-72 rounded-full bg-cyan-200/10 blur-3xl animate-pulse"></div>
                    <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-blue-100/10 blur-3xl animate-pulse"></div>
                </div>

                <div className="relative z-10 mx-auto">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                        <div className="opacity-0 animate-[revealUp_0.8s_ease-out_forwards]">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">About Us</p>
                            <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                                Helping Students Build Their Global Future
                            </h1>
                            <p className="mt-6 max-w-xl text-base leading-8 text-blue-100/90 sm:text-lg">
                                Butwal Phoenix Education Hub supports ambitious students with practical, honest, and personalized guidance for studying abroad. We combine deep counseling experience with a proven process so every student can move forward with clarity and confidence.
                            </p>

                            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                <Link
                                    href="/inquiry"
                                    className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 font-semibold text-blue-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
                                >
                                    Talk to a Counselor
                                </Link>
                                <Link
                                    href="/services"
                                    className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                                >
                                    Explore Services
                                </Link>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 opacity-0 animate-[revealUp_0.8s_ease-out_0.18s_forwards]">
                            <article className="rounded-2xl border border-blue-200/30 bg-white/10 p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
                                <p className="text-3xl font-black text-white sm:text-4xl">10K+</p>
                                <p className="mt-2 text-sm uppercase tracking-wide text-blue-100/90">Students Guided</p>
                            </article>
                            <article className="rounded-2xl border border-blue-200/30 bg-white/10 p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
                                <p className="text-3xl font-black text-white sm:text-4xl">98%</p>
                                <p className="mt-2 text-sm uppercase tracking-wide text-blue-100/90">Visa Success</p>
                            </article>
                            <article className="rounded-2xl border border-blue-200/30 bg-white/10 p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
                                <p className="text-3xl font-black text-white sm:text-4xl">15+</p>
                                <p className="mt-2 text-sm uppercase tracking-wide text-blue-100/90">Years Experience</p>
                            </article>
                            <article className="rounded-2xl border border-blue-200/30 bg-white/10 p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
                                <p className="text-3xl font-black text-white sm:text-4xl">5+</p>
                                <p className="mt-2 text-sm uppercase tracking-wide text-blue-100/90">Destination Options</p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative px-4 py-10 sm:px-6 lg:px-8">
                {/* Mission and vision section */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl"></div>
                </div>

                <div className="relative z-10 mx-auto grid grid-cols-1 gap-6 md:grid-cols-2">
                    <article className="rounded-3xl border border-blue-100 bg-linear-to-b from-white to-blue-50/70 p-7 shadow-lg shadow-blue-100/50 opacity-0 animate-[revealUp_0.7s_ease-out_forwards] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-700">Our Mission</p>
                        <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900">Accessible Global Education</h2>
                        <p className="mt-4 text-base leading-8 text-slate-600">
                            Our mission is to simplify the international education journey for students and families through transparent counseling, strategic planning, and complete support from application to arrival.
                        </p>
                    </article>

                    <article className="rounded-3xl border border-blue-100 bg-linear-to-b from-white to-blue-50/70 p-7 shadow-lg shadow-blue-100/50 opacity-0 animate-[revealUp_0.7s_ease-out_0.14s_forwards] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-700">Our Vision</p>
                        <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900">A Trusted Student Success Partner</h2>
                        <p className="mt-4 text-base leading-8 text-slate-600">
                            We aim to become the most trusted consultancy in the region by delivering ethical guidance, measurable results, and long-term student success in academics and career pathways.
                        </p>
                    </article>
                </div>
            </section>

            <section className="relative px-4 py-10 sm:px-6 lg:px-8">
                {/* Core values section */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-0 top-8 h-40 w-40 rounded-full bg-cyan-100/50 blur-3xl"></div>
                    <div className="absolute right-0 top-20 h-44 w-44 rounded-full bg-blue-100/50 blur-3xl"></div>
                </div>

                <div className="relative z-10 mx-auto">
                    <div className="max-w-3xl opacity-0 animate-[revealUp_0.7s_ease-out_forwards]">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">What Defines Us</p>
                        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                            Core Values Behind Every Student Journey
                        </h2>
                        <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                            A focused view of the principles that shape every counseling decision and student outcome.
                        </p>
                    </div>

                    <div
                        className="mt-10 grid grid-cols-1 gap-6 rounded-3xl border border-blue-100 bg-white p-4 shadow-lg shadow-blue-100/50 opacity-0 animate-[revealUp_0.7s_ease-out_0.08s_forwards] sm:p-5"
                        role="tablist"
                        aria-label="Core value tabs"
                    >
                        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
                            {coreValues.map((value, index) => (
                                <button
                                    key={value.title}
                                    type="button"
                                    role="tab"
                                    aria-selected={index === currentSlide}
                                    aria-controls={`core-value-panel-${index}`}
                                    id={`core-value-tab-${index}`}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`rounded-2xl border px-4 py-3 text-left transition-all duration-300 ${index === currentSlide
                                            ? 'border-blue-300 bg-linear-to-r from-blue-50 to-cyan-50 shadow-sm'
                                            : 'border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50'
                                        }`}
                                >
                                    <p className={`text-sm font-bold tracking-tight ${index === currentSlide ? 'text-blue-800' : 'text-slate-800'}`}>
                                        {value.title}
                                    </p>
                                    <p className={`mt-1 text-xs font-semibold uppercase tracking-[0.14em] ${index === currentSlide ? 'text-blue-700' : 'text-slate-500'}`}>
                                        {value.metricLabel}
                                    </p>
                                </button>
                            ))}
                        </div>

                        <article
                            id={`core-value-panel-${currentSlide}`}
                            role="tabpanel"
                            aria-labelledby={`core-value-tab-${currentSlide}`}
                            className="rounded-3xl border border-blue-100 bg-linear-to-b from-white to-blue-50/60 p-6 shadow-sm transition-all duration-300 sm:p-7"
                        >
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <h3 className="text-2xl font-black tracking-tight text-slate-800">{activeValue.title}</h3>
                                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-1.5">
                                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Confidence</span>
                                    <span className="text-sm font-black text-blue-800">{activeValue.impact}</span>
                                </div>
                            </div>

                            <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{activeValue.description}</p>

                            <div className="mt-6 h-3 rounded-full bg-blue-100">
                                <div
                                    className="h-3 rounded-full bg-linear-to-r from-blue-700 to-cyan-500 transition-all duration-700"
                                    style={{ width: activeValue.impact }}
                                ></div>
                            </div>

                            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                <div className="rounded-2xl border border-blue-100 bg-white p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{activeValue.metricLabel}</p>
                                    <p className="mt-1 text-lg font-black text-slate-700">{activeValue.metricValue}</p>
                                </div>
                                <div className="rounded-2xl border border-blue-100 bg-white p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Service Standard</p>
                                    <p className="mt-1 text-lg font-black text-slate-700">Student-First Counseling</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    );
}