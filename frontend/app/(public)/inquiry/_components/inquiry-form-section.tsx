"use client";
import InquiryForm from "./inquiry-form";

export default function InquiryFormSection() {
    return (
        <main className="overflow-hidden bg-white text-slate-900">
            <section className="relative overflow-hidden bg-linear-to-br from-blue-950 via-blue-900 to-blue-800 px-4 py-10 text-white sm:px-6 lg:px-8">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-20 top-14 h-72 w-72 rounded-full bg-cyan-200/10 blur-3xl"></div>
                    <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-blue-100/10 blur-3xl"></div>
                    <div className="absolute inset-0 bg-linear-to-r from-blue-950/35 via-transparent to-blue-900/25"></div>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Inquiry</p>
                    <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                        Inquiry Form for Study Abroad Counseling
                    </h1>
                    <p className="mt-6 max-w-3xl text-base leading-8 text-blue-100/90 sm:text-lg">
                        Fill in your details and our counselors will contact you with destination suggestions, timeline guidance, and next steps based on your profile.
                    </p>
                </div>
            </section>

            <section className="relative px-4 py-10 sm:px-6 lg:px-8">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-8 top-10 h-36 w-36 rounded-full bg-cyan-100/60 blur-3xl"></div>
                    <div className="absolute right-8 bottom-8 h-44 w-44 rounded-full bg-blue-100/60 blur-3xl"></div>
                </div>

                <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                    <article className="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg shadow-blue-100/50 sm:p-7">
                        <h2 className="text-2xl font-black tracking-tight text-slate-900">Student Inquiry Form</h2>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
                            Required fields are marked with *
                        </p>
                        <InquiryForm/>
                    </article>

                    <aside className="space-y-4">
                        <article className="rounded-3xl border border-blue-100 bg-linear-to-br from-blue-900 via-blue-800 to-cyan-700 p-6 text-white shadow-xl shadow-blue-900/20">
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Quick Help</p>
                            <h3 className="mt-2 text-2xl font-black tracking-tight">What Happens Next?</h3>
                            <ul className="mt-4 space-y-3 text-sm text-blue-100/90">
                                <li className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300"></span>
                                    Profile review by counselor
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300"></span>
                                    Country and course discussion
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300"></span>
                                    Next-step checklist shared with you
                                </li>
                            </ul>
                        </article>

                        <article className="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg shadow-blue-100/40">
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Need Direct Support?</p>
                            <p className="mt-2 text-sm leading-7 text-slate-600">
                                Call us for urgent inquiries during office hours.
                            </p>
                            <div className="mt-4 space-y-2">
                                <a href="tel:071537037" className="block text-lg font-black text-slate-800">071-537037</a>
                                <a href="tel:9843113713" className="block text-lg font-black text-slate-800">9843113713</a>
                            </div>
                        </article>
                    </aside>
                </div>
            </section>
        </main>
    );
}
