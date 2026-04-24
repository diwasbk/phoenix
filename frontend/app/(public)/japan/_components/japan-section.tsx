import Image from 'next/image';
import Link from 'next/link';

export default function JapanSection() {
    return (
        <main className="overflow-hidden bg-white text-slate-900">
            <section className="relative overflow-hidden px-4 py-10 text-white sm:px-6 lg:px-8">
                <Image
                    src="/images/japanese-city.jpg"
                    alt="Japan cityscape"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
                
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-linear-to-br from-blue-950/55 via-blue-900/35 to-blue-800/10"></div>
                    <div className="absolute -left-16 top-12 h-72 w-72 rounded-full bg-cyan-200/10 blur-3xl"></div>
                    <div className="absolute -right-20 bottom-8 h-80 w-80 rounded-full bg-blue-100/10 blur-3xl"></div>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl">
                    <div className="opacity-0 animate-[revealUp_0.8s_ease-out_forwards]">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Study In Japan</p>
                        <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            Build Your Japan Admission Plan With Confidence
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-8 text-blue-100/90 sm:text-lg">
                            Structured counseling for university selection, application quality, and visa readiness so every step stays clear and aligned.
                        </p>

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <Link
                                href="/inquiry"
                                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 font-semibold text-blue-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
                            >
                                Start Your Japan Plan
                            </Link>
                            <Link
                                href="/services"
                                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                            >
                                View All Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Study in Japan highlight */}
            <section className="bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
                    <div className="opacity-0 animate-[revealUp_0.7s_ease-out_forwards]">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Study In Japan</p>
                        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                            Professional Planning. Predictable Outcomes.
                        </h2>
                        <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                            A structured pathway designed for students who want clarity, speed, and accuracy from counseling to departure.
                        </p>

                        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <article className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
                                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">100% COE Results</p>
                                <p className="mt-2 text-lg font-black text-slate-900">Process-First Submission Model</p>
                                <p className="mt-2 text-sm leading-6 text-slate-600">Every file is reviewed with a standardized checklist before final submission.</p>
                            </article>
                            <article className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
                                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Language + City Choice</p>
                                <p className="mt-2 text-lg font-black text-slate-900">Expert-Led Preparation</p>
                                <p className="mt-2 text-sm leading-6 text-slate-600">Free language classes and city-fit planning based on your budget and goals.</p>
                            </article>
                        </div>

                        <div className="mt-6 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">Student Benefits Snapshot</p>
                            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                                <p className="text-sm font-semibold text-slate-700">Easy Documentation</p>
                                <p className="text-sm font-semibold text-slate-700">Pay After Visa</p>
                                <p className="text-sm font-semibold text-slate-700">Free Language Classes</p>
                                <p className="text-sm font-semibold text-slate-700">Language Classes By Expert Teachers</p>
                            </div>
                        </div>

                        <Link
                            href="/inquiry"
                            className="mt-7 inline-flex items-center justify-center rounded-full bg-blue-900 px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800"
                        >
                            Book Your Japan Consultation
                        </Link>
                    </div>

                    <div className="mt-15 rounded-3xl border border-blue-100 bg-white p-5 shadow-xl shadow-blue-100/60 opacity-0 animate-[revealUp_0.7s_ease-out_0.12s_forwards] sm:p-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">Admission Infographic</p>
                        <h3 className="text-2xl font-black tracking-tight text-slate-900">Japan Success Flow</h3>

                        <div className="mt-5 rounded-2xl border border-blue-100 bg-slate-50 p-3">
                            <svg viewBox="0 0 720 260" className="h-auto w-full" role="img" aria-labelledby="japan-flow-title japan-flow-desc">
                                <title id="japan-flow-title">Japan admission process infographic</title>
                                <desc id="japan-flow-desc">Five-stage flow from profile review to departure planning.</desc>
                                <defs>
                                    <linearGradient id="japanFlowLine" x1="0" y1="0" x2="1" y2="0">
                                        <stop offset="0%" stopColor="#1d4ed8" />
                                        <stop offset="100%" stopColor="#06b6d4" />
                                    </linearGradient>
                                </defs>

                                <line x1="95" y1="120" x2="625" y2="120" stroke="url(#japanFlowLine)" strokeWidth="4" strokeLinecap="round" />

                                <g>
                                    <circle cx="95" cy="120" r="30" fill="#1e3a8a" />
                                    <text x="95" y="115" textAnchor="middle" fill="#e0f2fe" fontSize="14" fontWeight="800">01</text>
                                    <text x="95" y="138" textAnchor="middle" fill="#bfdbfe" fontSize="9" fontWeight="700">PROFILE</text>
                                </g>
                                <g>
                                    <circle cx="228" cy="120" r="30" fill="#1d4ed8" />
                                    <text x="228" y="115" textAnchor="middle" fill="#ecfeff" fontSize="14" fontWeight="800">02</text>
                                    <text x="228" y="138" textAnchor="middle" fill="#dbeafe" fontSize="9" fontWeight="700">DOCS</text>
                                </g>
                                <g>
                                    <circle cx="360" cy="120" r="30" fill="#0369a1" />
                                    <text x="360" y="115" textAnchor="middle" fill="#ecfeff" fontSize="14" fontWeight="800">03</text>
                                    <text x="360" y="138" textAnchor="middle" fill="#bae6fd" fontSize="9" fontWeight="700">COE</text>
                                </g>
                                <g>
                                    <circle cx="492" cy="120" r="30" fill="#0e7490" />
                                    <text x="492" y="115" textAnchor="middle" fill="#ecfeff" fontSize="14" fontWeight="800">04</text>
                                    <text x="492" y="138" textAnchor="middle" fill="#ccfbf1" fontSize="9" fontWeight="700">VISA</text>
                                </g>
                                <g>
                                    <circle cx="625" cy="120" r="30" fill="#0f172a" />
                                    <text x="625" y="115" textAnchor="middle" fill="#e2e8f0" fontSize="14" fontWeight="800">05</text>
                                    <text x="625" y="138" textAnchor="middle" fill="#cbd5e1" fontSize="9" fontWeight="700">DEPART</text>
                                </g>

                                <text x="95" y="180" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="600">Counseling</text>
                                <text x="228" y="180" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="600">Easy Documentation</text>
                                <text x="360" y="180" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="600">100% COE Track</text>
                                <text x="492" y="180" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="600">Pay After Visa</text>
                                <text x="625" y="180" textAnchor="middle" fill="#334155" fontSize="10" fontWeight="600">City Selection</text>
                            </svg>
                        </div>

                        <div className="mt-5 grid grid-cols-2 gap-3">
                            <div className="rounded-2xl border border-blue-100 bg-white p-3 shadow-sm">
                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Language Support</p>
                                <p className="mt-1 text-sm font-bold text-slate-900">Free Classes</p>
                            </div>
                            <div className="rounded-2xl border border-blue-100 bg-white p-3 shadow-sm">
                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Guidance Model</p>
                                <p className="mt-1 text-sm font-bold text-slate-900">Expert Teachers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}