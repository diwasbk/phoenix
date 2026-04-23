export default function PrivacyPolicyPage() {
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
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Privacy Policy</p>
                        <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            Your Privacy and Data Security Matter
                        </h1>
                        <p className="mt-6 text-base leading-8 text-blue-100/90 sm:text-lg">
                            We keep your information minimal, relevant, and protected so that counseling stays confidential and professional at every step.
                        </p>
                    </div>
                </div>
            </section>

            <section className="relative px-4 py-10 sm:px-6 lg:px-8">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-8 top-10 h-40 w-40 rounded-full bg-cyan-100/50 blur-3xl"></div>
                    <div className="absolute right-8 bottom-8 h-44 w-44 rounded-full bg-blue-100/50 blur-3xl"></div>
                </div>

                <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2">
                    <article className="rounded-3xl border border-blue-100 bg-linear-to-b from-white to-blue-50/70 p-7 shadow-lg shadow-blue-100/50 opacity-0 animate-[revealUp_0.7s_ease-out_forwards]">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Overview</p>
                        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">How We Handle Your Information</h2>
                        <p className="mt-4 text-base leading-8 text-slate-600">
                            We collect only the details necessary to understand your study goals, respond to your inquiry, and provide counseling support.
                        </p>

                        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
                                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Collected Data</p>
                                <p className="mt-2 text-lg font-black text-slate-900">Contact and Profile Details</p>
                            </div>
                            <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
                                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Protected Use</p>
                                <p className="mt-2 text-lg font-black text-slate-900">Counseling Only</p>
                            </div>
                        </div>
                    </article>

                    <div className="space-y-4 opacity-0 animate-[revealUp_0.7s_ease-out_0.12s_forwards]">
                        {[
                            {
                                title: 'Information We Collect',
                                text: 'We may collect your name, phone number, email, academic background, and destination preference when you contact us or submit a form.',
                            },
                            {
                                title: 'How We Use It',
                                text: 'We use the information to respond to inquiries, recommend suitable countries and programs, and manage counseling support.',
                            },
                            {
                                title: 'Sharing and Security',
                                text: 'We do not sell your personal information. Access is limited to authorized staff and used only for service delivery.',
                            },
                            {
                                title: 'Your Choices',
                                text: 'You may ask us to update or remove your contact details whenever needed by reaching out through our contact channels.',
                            },
                        ].map((item) => (
                            <article key={item.title} className="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg shadow-blue-100/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{item.title}</p>
                                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}