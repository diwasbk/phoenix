export default function BlogSection() {
    return (
        <main className="overflow-hidden bg-white text-slate-900">
            <section className="relative overflow-hidden bg-linear-to-br from-blue-950 via-blue-900 to-blue-800 px-4 py-10 text-white sm:px-6 lg:px-8">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-20 top-14 h-72 w-72 rounded-full bg-cyan-200/10 blur-3xl"></div>
                    <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-blue-100/10 blur-3xl"></div>
                    <div className="absolute inset-0 bg-linear-to-r from-blue-950/35 via-transparent to-blue-900/25"></div>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl">
                    <div className="max-w-3xl opacity-0 animate-[revealUp_0.8s_ease-out_forwards]">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Blog</p>
                        <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            This Feature Is Coming Soon
                        </h1>
                        <p className="mt-6 text-base leading-8 text-blue-100/90 sm:text-lg">
                            We are preparing study abroad articles, destination updates, and practical counseling tips for students and parents.
                        </p>
                    </div>
                </div>
            </section>

            <section className="relative px-4 py-10 sm:px-6 lg:px-8">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-8 top-10 h-40 w-40 rounded-full bg-cyan-100/50 blur-3xl"></div>
                    <div className="absolute right-8 bottom-8 h-44 w-44 rounded-full bg-blue-100/50 blur-3xl"></div>
                </div>

                <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-stretch">
                    <article className="rounded-3xl border border-blue-100 bg-linear-to-b from-white to-blue-50/70 p-7 shadow-lg shadow-blue-100/50 opacity-0 animate-[revealUp_0.7s_ease-out_forwards]">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Coming Soon</p>
                        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                            Study Abroad Articles and Tips
                        </h2>
                        <p className="mt-4 text-base leading-8 text-slate-600">
                            The blog will soon include admission timelines, visa guidance, country comparisons, and preparation advice designed for your journey.
                        </p>
                    </article>

                    <article className="rounded-3xl border border-blue-100 bg-linear-to-br from-blue-900 via-blue-800 to-cyan-700 p-7 text-white shadow-xl shadow-blue-900/20 opacity-0 animate-[revealUp_0.7s_ease-out_0.12s_forwards]">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Coming Soon</p>
                        <h3 className="mt-3 text-2xl font-black tracking-tight">This feature is coming soon</h3>
                        <p className="mt-4 text-sm leading-7 text-blue-100/90">
                            We are building a content section to keep students informed with fresh updates and useful counseling insights.
                        </p>
                        <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">What to Expect</p>
                            <ul className="mt-4 space-y-3 text-sm text-blue-100/95">
                                <li className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300"></span>
                                    Admission timeline updates
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300"></span>
                                    Visa and document tips
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300"></span>
                                    Country comparison articles
                                </li>
                            </ul>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    );
}