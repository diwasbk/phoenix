import Link from 'next/link';

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

const studentJourneyFlow = [
    { stage: 'Profile Review', value: '100%', widthClass: 'w-full' },
    { stage: 'University Match', value: '92%', widthClass: 'w-[92%]' },
    { stage: 'Application Ready', value: '85%', widthClass: 'w-[85%]' },
    { stage: 'Visa Approved', value: '78%', widthClass: 'w-[78%]' },
];

export default function AboutSection() {
    return (
        <main className="overflow-hidden bg-white text-slate-900">
            <section className="relative bg-linear-to-br from-blue-950 via-blue-900 to-blue-800 px-4 py-10 text-white sm:px-6 lg:px-8">
                {/* Hero section */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-20 top-14 h-72 w-72 rounded-full bg-cyan-200/10 blur-3xl animate-pulse"></div>
                    <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-blue-100/10 blur-3xl animate-pulse"></div>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl">
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
                                    href="/contact"
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

            <section className="relative bg-white px-4 py-10 sm:px-6 lg:px-8">
                {/* Infographic snapshot section */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-8 top-8 h-36 w-36 rounded-full bg-cyan-100/60 blur-3xl"></div>
                    <div className="absolute right-8 bottom-8 h-44 w-44 rounded-full bg-blue-100/60 blur-3xl"></div>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl">
                    <div className="max-w-3xl opacity-0 animate-[revealUp_0.7s_ease-out_forwards]">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Infographic Snapshot</p>
                        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                            How Students Progress With Phoenix
                        </h2>
                        <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                            A visual overview of our counseling pipeline, where each step is designed to reduce uncertainty and improve outcomes.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <article className="rounded-3xl border border-blue-100 bg-linear-to-b from-white to-blue-50/70 p-6 shadow-lg shadow-blue-100/50 opacity-0 animate-[revealUp_0.7s_ease-out_0.12s_forwards] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-700">Student Journey Funnel</p>
                            <div className="mt-5 space-y-4">
                                {studentJourneyFlow.map((item) => (
                                    <div key={item.stage}>
                                        <div className="mb-1 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-600">
                                            <span>{item.stage}</span>
                                            <span>{item.value}</span>
                                        </div>
                                        <div className="h-2.5 rounded-full bg-blue-100">
                                            <div className={`h-2.5 rounded-full bg-linear-to-r from-blue-700 to-cyan-500 transition-all duration-700 ${item.widthClass}`}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </article>

                        <article className="rounded-3xl border border-blue-100 bg-linear-to-b from-white to-blue-50/70 p-6 shadow-lg shadow-blue-100/50 opacity-0 animate-[revealUp_0.7s_ease-out_0.2s_forwards] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-700">Support Coverage</p>
                            <div className="mt-5 flex items-center justify-center">
                                <div className="relative h-44 w-44 rounded-full border-14 border-blue-100 bg-white">
                                    <div
                                        className="absolute inset-0 m-auto h-44 w-44 rounded-full border-14 border-cyan-400 border-t-blue-700 border-r-blue-700 border-b-cyan-400 border-l-blue-200 animate-spin"
                                        style={{ animationDuration: '7s' }}
                                    ></div>
                                    <div className="absolute inset-0 m-auto flex h-28 w-28 items-center justify-center rounded-full bg-blue-950 text-center text-white shadow-lg">
                                        <div>
                                            <p className="text-2xl font-black">360</p>
                                            <p className="text-xs uppercase tracking-wide text-blue-100">Care</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-5 text-center text-sm leading-7 text-slate-600">
                                We support academics, documents, applications, visa, and pre-departure readiness under one guided framework.
                            </p>
                        </article>

                        <article className="rounded-3xl border border-blue-100 bg-linear-to-b from-white to-blue-50/70 p-6 shadow-lg shadow-blue-100/50 opacity-0 animate-[revealUp_0.7s_ease-out_0.28s_forwards] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-700">Result Timeline</p>
                            <div className="mt-6 space-y-5">
                                <div className="flex items-start gap-3">
                                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-500 animate-pulse"></span>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">Week 1-2: Profile & Goal Mapping</p>
                                        <p className="text-sm text-slate-600">Target countries and realistic university tracks are finalized.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-600 animate-pulse"></span>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">Week 3-6: Application Execution</p>
                                        <p className="text-sm text-slate-600">SOP refinement, document packaging, and submissions are completed.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500 animate-pulse"></span>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">Final Stage: Visa & Departure Prep</p>
                                        <p className="text-sm text-slate-600">Interview prep, checklists, and transition support for smooth onboarding.</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className="relative px-4 pb-10 sm:px-6 lg:px-8">
                {/* Mission and vision section */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl"></div>
                </div>

                <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
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

            <section className="bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
                {/* Core values section */}
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-2xl opacity-0 animate-[revealUp_0.7s_ease-out_forwards]">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">What Defines Us</p>
                        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                            Core Values Behind Every Student Journey
                        </h2>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
                        {coreValues.map((value, index) => (
                            <article
                                key={value.title}
                                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm opacity-0 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                                style={{ animation: `revealUp 0.65s ease-out ${index * 0.1 + 0.1}s forwards` }}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-xl font-bold text-slate-900">{value.title}</h3>
                                    <div
                                        className="relative h-14 w-14 shrink-0 rounded-full"
                                        style={{
                                            background: `conic-gradient(#2563eb ${value.impact}, #dbeafe 0)`,
                                        }}
                                    >
                                        <div className="absolute inset-1 flex items-center justify-center rounded-full bg-white text-[11px] font-bold text-blue-700">
                                            {value.impact}
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-3 text-base leading-7 text-slate-600">{value.description}</p>

                                <div className="mt-5">
                                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-500">
                                        <span>{value.metricLabel}</span>
                                        <span>{value.metricValue}</span>
                                    </div>
                                    <div className="mt-2 h-2 rounded-full bg-blue-100">
                                        <div className={`h-2 rounded-full bg-linear-to-r from-blue-700 to-cyan-500 ${value.progressWidth}`}></div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}