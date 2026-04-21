import Image from 'next/image';
import Link from 'next/link';

const supportTrack = [
    {
        step: '01',
        title: 'Japan Profile Review',
        text: 'We align your academics, budget, and timeline with realistic universities in Japan.',
    },
    {
        step: '02',
        title: 'Application Strategy',
        text: 'We prepare SOP, document sequencing, and intake-wise shortlists for stronger submissions.',
    },
    {
        step: '03',
        title: 'Visa And Departure',
        text: 'We guide visa paperwork, interview readiness, and pre-departure planning in one flow.',
    },
];

const japanHighlights = [
    '100% COE RESULTS',
    'FREE LANGUAGE CLASSES',
    'EASY DOCUMENTATION',
    'PAY AFTER VISA',
    'CHOICE OF YOUR CITY',
    'LANGUAGE CLASS BY EXPERT TEACHERS',
];

export default function JapanSection() {
    return (
        <main className="overflow-hidden bg-white text-slate-900">
            <section className="relative overflow-hidden px-4 py-10 text-white sm:px-6 lg:px-8">
                <Image
                    src="/japanese-city.jpg"
                    alt="Japan cityscape"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-linear-to-br from-blue-950/75 via-blue-900/70 to-blue-800/20"></div>
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
                                href="/contact"
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
        </main>
    );
}
