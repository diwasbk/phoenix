import Link from 'next/link';

const services = [
    {
        title: 'Profile Evaluation',
        description: 'We assess your academics, goals, and budget to build a realistic and effective study abroad plan.',
        points: ['Academic review', 'Budget mapping', 'Country matching'],
        impact: '92%',
    },
    {
        title: 'University Shortlisting',
        description: 'We narrow down the best-fit universities based on your profile, preferences, and admission chances.',
        points: ['Targeted selection', 'Program fit', 'Intake planning'],
        impact: '95%',
    },
    {
        title: 'Application Support',
        description: 'From SOP guidance to document checking, we help you submit a cleaner, stronger application.',
        points: ['SOP support', 'Document review', 'Submission checklist'],
        impact: '98%',
    },
    {
        title: 'Visa Guidance',
        description: 'We prepare you for interviews, finances, and visa documentation so your process stays organized.',
        points: ['Interview prep', 'Financial checklist', 'Visa filing'],
        impact: '90%',
    },
    {
        title: 'Pre-Departure Briefing',
        description: 'We walk you through travel, accommodation, and arrival readiness for a smooth transition.',
        points: ['Travel planning', 'Accommodation tips', 'Arrival checklist'],
        impact: '88%',
    },
    {
        title: 'Ongoing Counseling',
        description: 'Even after submission, we stay available for follow-ups, updates, and next-step guidance.',
        points: ['Progress tracking', 'Follow-up support', 'Next-step advice'],
        impact: '94%',
    },
];

const serviceFlow = [
    { step: '01', title: 'Evaluate', text: 'We start with your profile, goals, and destination preference.' },
    { step: '02', title: 'Plan', text: 'We build a practical roadmap for universities and documents.' },
    { step: '03', title: 'Apply', text: 'We support application packaging and submission accuracy.' },
    { step: '04', title: 'Launch', text: 'We guide visa, travel, and departure preparation.' },
];

export default function ServicesSection() {
    return (
        <main className="overflow-hidden bg-white text-slate-900">
            {/* Hero section */}
            <section className="relative bg-linear-to-br from-blue-950 via-blue-900 to-blue-800 px-4 py-10 text-white sm:px-6 lg:px-8">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-20 top-14 h-72 w-72 rounded-full bg-cyan-200/10 blur-3xl animate-pulse"></div>
                    <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-blue-100/10 blur-3xl animate-pulse"></div>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                        <div className="opacity-0 animate-[revealUp_0.8s_ease-out_forwards]">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Services</p>
                            <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                                Complete Support for Every Study Abroad Step
                            </h1>
                            <p className="mt-6 max-w-xl text-base leading-8 text-blue-100/90 sm:text-lg">
                                We provide a consistent, student-first support system covering profile assessment, university shortlisting, applications, visas, and pre-departure preparation.
                            </p>

                            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 font-semibold text-blue-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
                                >
                                    Book a Session
                                </Link>
                                <Link
                                    href="/about"
                                    className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                                >
                                    Learn About Us
                                </Link>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 opacity-0 animate-[revealUp_0.8s_ease-out_0.18s_forwards]">
                            <article className="rounded-2xl border border-blue-200/30 bg-white/10 p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
                                <p className="text-3xl font-black text-white sm:text-4xl">6</p>
                                <p className="mt-2 text-sm uppercase tracking-wide text-blue-100/90">Core Services</p>
                            </article>
                            <article className="rounded-2xl border border-blue-200/30 bg-white/10 p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
                                <p className="text-3xl font-black text-white sm:text-4xl">98%</p>
                                <p className="mt-2 text-sm uppercase tracking-wide text-blue-100/90">Application Accuracy</p>
                            </article>
                            <article className="rounded-2xl border border-blue-200/30 bg-white/10 p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
                                <p className="text-3xl font-black text-white sm:text-4xl">360</p>
                                <p className="mt-2 text-sm uppercase tracking-wide text-blue-100/90">Support Approach</p>
                            </article>
                            <article className="rounded-2xl border border-blue-200/30 bg-white/10 p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
                                <p className="text-3xl font-black text-white sm:text-4xl">1:1</p>
                                <p className="mt-2 text-sm uppercase tracking-wide text-blue-100/90">Counseling Style</p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infographic section */}
            <section className="relative bg-white px-4 py-10 sm:px-6 lg:px-8">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-8 top-8 h-36 w-36 rounded-full bg-cyan-100/60 blur-3xl"></div>
                    <div className="absolute right-8 bottom-8 h-44 w-44 rounded-full bg-blue-100/60 blur-3xl"></div>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl">
                    <div className="max-w-3xl opacity-0 animate-[revealUp_0.7s_ease-out_forwards]">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Service Infographic</p>
                        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                            How Our Service Flow Works
                        </h2>
                        <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                            A visual breakdown of how we move from evaluation to launch with structured, reliable support.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
                        <article className="rounded-3xl border border-blue-100 bg-linear-to-b from-white to-blue-50/70 p-6 shadow-lg shadow-blue-100/50 opacity-0 animate-[revealUp_0.7s_ease-out_0.12s_forwards] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-700">Service Pipeline</p>
                            <div className="mt-6 space-y-5">
                                {serviceFlow.map((item, index) => (
                                    <div key={item.step} className="flex items-start gap-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white shadow-lg shadow-blue-700/30">
                                            {item.step}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                                            <p className="mt-1 text-sm leading-7 text-slate-600">{item.text}</p>
                                        </div>
                                        {index < serviceFlow.length - 1 ? (
                                            <div className="ml-auto hidden h-16 w-px bg-linear-to-b from-blue-200 via-cyan-200 to-transparent sm:block"></div>
                                        ) : null}
                                    </div>
                                ))}
                            </div>
                        </article>

                        <article className="rounded-3xl border border-blue-100 bg-linear-to-b from-white to-blue-50/70 p-6 shadow-lg shadow-blue-100/50 opacity-0 animate-[revealUp_0.7s_ease-out_0.2s_forwards] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-700">Coverage Overview</p>
                            <div className="mt-5 grid grid-cols-2 gap-4">
                                <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                                    <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Primary Goal</p>
                                    <p className="mt-2 text-xl font-black text-slate-900">Better Admissions</p>
                                    <p className="mt-2 text-sm leading-6 text-slate-600">We make every step more organized and effective.</p>
                                </div>
                                <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                                    <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Support Style</p>
                                    <p className="mt-2 text-xl font-black text-slate-900">1:1 Guidance</p>
                                    <p className="mt-2 text-sm leading-6 text-slate-600">A counselor stays aligned with your profile.</p>
                                </div>
                                <div className="col-span-2 rounded-2xl border border-blue-100 bg-linear-to-r from-blue-950 to-blue-800 p-5 text-white shadow-lg">
                                    <div className="flex items-center justify-between gap-4">
                                        <div>
                                            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-200">Service Strength</p>
                                            <p className="mt-2 text-2xl font-black">End-to-End</p>
                                        </div>
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg font-black">
                                            360
                                        </div>
                                    </div>
                                    <div className="mt-4 h-2 rounded-full bg-white/15">
                                        <div className="h-2 w-[94%] rounded-full bg-linear-to-r from-cyan-300 to-blue-300"></div>
                                    </div>
                                    <p className="mt-3 text-sm leading-7 text-blue-100/90">
                                        From the first consultation to your departure checklist, everything stays connected.
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* Services grid section */}
            <section className="bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-2xl opacity-0 animate-[revealUp_0.7s_ease-out_forwards]">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">What We Offer</p>
                        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                            Core Consultancy Services
                        </h2>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {services.map((service, index) => (
                            <article
                                key={service.title}
                                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm opacity-0 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                                style={{ animation: `revealUp 0.65s ease-out ${index * 0.1 + 0.1}s forwards` }}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                                    <div className="relative h-14 w-14 shrink-0 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#2563eb_0_#0ea5e9_70%,#dbeafe_70%_100%)]">
                                        <div className="absolute inset-1 flex items-center justify-center rounded-full bg-white text-[11px] font-bold text-blue-700">
                                            {service.impact}
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-3 text-base leading-7 text-slate-600">{service.description}</p>
                                <ul className="mt-5 space-y-2">
                                    {service.points.map((point) => (
                                        <li key={point} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                            <span className="h-2.5 w-2.5 rounded-full bg-cyan-500"></span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-5 h-2 rounded-full bg-blue-100">
                                    <div className="h-2 w-[88%] rounded-full bg-linear-to-r from-blue-700 to-cyan-500 transition-all duration-700 group-hover:w-[96%]"></div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="bg-linear-to-r from-blue-950 via-blue-900 to-blue-800 px-4 py-10 text-white sm:px-6 lg:px-8">
                <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                    <div className="max-w-2xl opacity-0 animate-[revealUp_0.7s_ease-out_forwards]">
                        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-200">Ready To Start?</p>
                        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Let Us Build the Right Service Plan for You</h2>
                        <p className="mt-4 text-base leading-7 text-blue-100/90">
                            Book a consultation and get the exact support you need for your destination, deadline, and profile.
                        </p>
                    </div>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 font-semibold text-blue-950 opacity-0 animate-[revealUp_0.7s_ease-out_0.12s_forwards] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
                    >
                        Book Consultation
                    </Link>
                </div>
            </section>
        </main>
    );
}