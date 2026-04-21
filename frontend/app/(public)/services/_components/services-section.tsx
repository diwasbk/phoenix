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
        </main>
    );
}