export default function FaqSection() {
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
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">FAQ</p>
                        <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            Answers to Common Study Abroad Questions
                        </h1>
                        <p className="mt-6 text-base leading-8 text-blue-100/90 sm:text-lg">
                            Find clear answers about destinations, eligibility, documents, timelines, and counseling support before you begin your application journey.
                        </p>
                    </div>
                </div>
            </section>

            <section className="relative px-4 py-10 sm:px-6 lg:px-8">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-8 top-10 h-40 w-40 rounded-full bg-cyan-100/50 blur-3xl"></div>
                    <div className="absolute right-8 bottom-8 h-44 w-44 rounded-full bg-blue-100/50 blur-3xl"></div>
                </div>

                <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                    <article className="rounded-3xl border border-blue-100 bg-linear-to-b from-white to-blue-50/70 p-7 shadow-lg shadow-blue-100/50 opacity-0 animate-[revealUp_0.7s_ease-out_forwards]">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Before You Start</p>
                        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                            Quick Guidance for New Students
                        </h2>
                        <p className="mt-4 text-base leading-8 text-slate-600">
                            The information below is designed to help you move forward with confidence and understand the most common parts of the process.
                        </p>

                        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
                                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">Support Style</p>
                                <p className="mt-2 text-lg font-black text-slate-900">1:1 Counseling</p>
                                <p className="mt-1 text-sm leading-6 text-slate-600">Personalized advice based on your profile and goals.</p>
                            </div>
                            <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
                                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">Response Time</p>
                                <p className="mt-2 text-lg font-black text-slate-900">Within 24 Hours</p>
                                <p className="mt-1 text-sm leading-6 text-slate-600">We aim to reply quickly and keep the process moving.</p>
                            </div>
                        </div>
                    </article>

                    <div className="space-y-4 opacity-0 animate-[revealUp_0.7s_ease-out_0.12s_forwards]">
                        {[
                            {
                                question: 'Which countries do you currently support?',
                                answer: 'We currently focus on Japan, UK, Australia, Korea, and USA with structured counseling and application guidance.',
                            },
                            {
                                question: 'What documents should I prepare first?',
                                answer: 'Usually academic transcripts, passport copy, identification, and any available test scores or experience documents are a good starting point.',
                            },
                            {
                                question: 'Can I apply if I am still unsure about a country?',
                                answer: 'Yes. We start with your academic profile, budget, and goals, then help you compare destination options before deciding.',
                            },
                            {
                                question: 'Do you help with visa preparation too?',
                                answer: 'Yes, our support includes visa guidance, document readiness, and pre-departure preparation once your application moves forward.',
                            },
                            {
                                question: 'How do I start the counseling process?',
                                answer: 'You can submit the inquiry form or contact us directly, and a counselor will review your details and contact you with next steps.',
                            },
                            {
                                question: 'Is the counseling personalized?',
                                answer: 'Yes. Every recommendation is based on your academic background, preferred destination, timeline, and budget.',
                            },
                        ].map((item) => (
                            <details key={item.question} className="group rounded-3xl border border-blue-100 bg-white p-6 shadow-lg shadow-blue-100/40 transition-all duration-300 open:shadow-xl">
                                <summary className="cursor-pointer list-none text-lg font-black tracking-tight text-slate-900">
                                    <span className="flex items-center justify-between gap-4">
                                        {item.question}
                                        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-200/45 bg-blue-50 text-blue-700 transition-transform duration-300 group-open:rotate-45">
                                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                                            </svg>
                                        </span>
                                    </span>
                                </summary>
                                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                                    {item.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}