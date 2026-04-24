"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import DestinationCard from './destination-card';

const destinations = [
    {
        country: 'Japan',
        countryCode: 'JP',
        flagSrc: '/images/japan-flag.jpg',
        summary: 'Language schools, colleges, and universities with a clear and practical admission roadmap.',
    },
    {
        country: 'UK',
        countryCode: 'UK',
        flagSrc: '/images/united-kingdom-flag.jpg',
        summary: 'Support for foundation, undergraduate, and postgraduate study options in a trusted format.',
    },
    {
        country: 'Australia',
        countryCode: 'AU',
        flagSrc: '/images/australia-flag.jpg',
        summary: 'Flexible pathways for students looking for strong academics and a balanced lifestyle.',
    },
    {
        country: 'Korea',
        countryCode: 'KR',
        flagSrc: '/images/south-korea-flag.jpg',
        summary: 'A modern choice for students seeking quality education and a vibrant campus experience.',
    },
    {
        country: 'USA',
        countryCode: 'US',
        flagSrc: '/images/america-flag.jpg',
        summary: 'Guidance for competitive universities, admissions planning, and long-term study goals.',
    },
];

export default function DestinationsSection() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const revealOnScroll = () => {
            if (isVisible || window.scrollY < 100) {
                return;
            }

            const currentSection = sectionRef.current;
            if (!currentSection) {
                return;
            }

            if (currentSection.getBoundingClientRect().top <= window.innerHeight * 0.85) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', revealOnScroll, { passive: true });
        window.addEventListener('resize', revealOnScroll);

        return () => {
            window.removeEventListener('scroll', revealOnScroll);
            window.removeEventListener('resize', revealOnScroll);
        };
    }, [isVisible]);

    return (
        <main className="overflow-hidden bg-white text-slate-900">
            <section className="relative overflow-hidden bg-linear-to-br from-blue-950 via-blue-900 to-blue-800 px-4 py-10 text-white sm:px-6 lg:px-8">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-20 top-12 h-72 w-72 rounded-full bg-cyan-200/10 blur-3xl"></div>
                    <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-blue-100/10 blur-3xl"></div>
                    <div className="absolute inset-0 bg-linear-to-r from-blue-950/35 via-transparent to-blue-900/25"></div>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        <div className="opacity-0 animate-[revealUp_0.8s_ease-out_forwards]">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Destinations</p>
                            <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                                Five Focus Countries, One Consistent Process
                            </h1>
                            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/90 sm:text-lg">
                                We keep the experience clear and consistent across every destination. Explore the five countries we support and find the right study path with the same counseling flow, the same standards, and a design language that matches the rest of the site.
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
                                    View Services
                                </Link>
                            </div>
                        </div>

                        <div className="opacity-0 animate-[revealUp_0.8s_ease-out_0.16s_forwards]">
                            <div className="rounded-4xl border border-blue-200/25 bg-white/10 p-6 shadow-2xl shadow-blue-950/20 backdrop-blur-md">
                                <div className="grid grid-cols-5 gap-3">
                                    {destinations.map((item) => (
                                        <div
                                            key={item.countryCode}
                                            className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-center shadow-lg shadow-blue-950/20"
                                        >
                                            <Image src={item.flagSrc} alt={`${item.countryCode} flag`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 20vw, 140px" />
                                            <div className="absolute inset-0 bg-linear-to-t from-blue-950/60 via-blue-950/10 to-transparent"></div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 grid grid-cols-3 gap-3">
                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                        <p className="text-2xl font-black text-white">5</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-blue-100/80">Countries</p>
                                    </div>
                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                        <p className="text-2xl font-black text-white">1:1</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-blue-100/80">Guidance</p>
                                    </div>
                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                        <p className="text-2xl font-black text-white">Full</p>
                                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-blue-100/80">Support</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={sectionRef} className="relative px-4 py-14 sm:px-6 lg:px-8">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-0 top-10 h-40 w-40 rounded-full bg-cyan-100/50 blur-3xl"></div>
                    <div className="absolute right-0 top-32 h-48 w-48 rounded-full bg-blue-100/50 blur-3xl"></div>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl">
                    <div className="max-w-3xl opacity-0 animate-[revealUp_0.7s_ease-out_forwards]">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Country Selection</p>
                        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                            Choose The Country That Fits Your Goals
                        </h2>
                        <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                            Each destination is presented with the same card style, spacing, and hierarchy so the page feels like part of the same website system rather than a separate one-off design.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-6">
                        {destinations.map((item, index) => (
                            <DestinationCard
                                key={item.country}
                                country={item.country}
                                countryCode={item.countryCode}
                                flagSrc={item.flagSrc}
                                summary={item.summary}
                                fullImage
                                className={index >= 3 ? 'xl:col-span-3' : 'xl:col-span-2'}
                                delay={`${index * 120 + 80}ms`}
                                isVisible={isVisible}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 pb-14 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl rounded-4xl border border-blue-100 bg-linear-to-r from-blue-50 via-white to-cyan-50 px-6 py-8 shadow-lg shadow-blue-100/40">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Next Step</p>
                            <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-900">Need help choosing the right destination?</h3>
                            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                                Send your academic profile and we will help you match the right country, university, and timeline with the same transparent process used across the site.
                            </p>
                        </div>

                        <Link
                            href="/inquiry"
                            className="inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800"
                        >
                            Start Your Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}