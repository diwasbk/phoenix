"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import DestinationCard from './destination-card';

const destinations = [
    {
        country: 'Japan',
        countryCode: 'JP',
        flagSrc: '/images/japan-flag.jpg',
    },
    {
        country: 'UK',
        countryCode: 'UK',
        flagSrc: '/images/united-kingdom-flag.jpg',
    },
    {
        country: 'Australia',
        countryCode: 'AU',
        flagSrc: '/images/australia-flag.jpg',
    },
    {
        country: 'Korea',
        countryCode: 'KR',
        flagSrc: '/images/south-korea-flag.jpg',
    },
    {
        country: 'USA',
        countryCode: 'US',
        flagSrc: '/images/america-flag.jpg',
    },
];

export default function DestinationsSection() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const revealOnScroll = () => {
            if (isVisible || window.scrollY < 120) {
                return;
            }

            const currentSection = sectionRef.current;
            if (!currentSection) {
                return;
            }

            const sectionTop = currentSection.getBoundingClientRect().top;
            if (sectionTop <= window.innerHeight * 0.85) {
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
        <section
            ref={sectionRef}
            id="destinations"
            className="relative overflow-hidden bg-linear-to-br from-blue-950 via-blue-900 to-blue-800 px-4 py-10 sm:px-6 lg:px-8"
        >
            {/* Background decorative elements - subtle gradient and blur effects */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-16 top-14 h-72 w-72 rounded-full bg-cyan-300/12 blur-2xl"></div>
                <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-blue-300/12 blur-2xl"></div>
                <div className="absolute -bottom-14 left-1/3 h-64 w-64 rounded-full bg-sky-200/12 blur-2xl"></div>
                <div className="absolute inset-0 bg-linear-to-r from-blue-950/35 via-transparent to-blue-900/30"></div>
            </div>

            <div className="relative z-10 mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
                {/* Left Content - Sticky heading and infographic section */}
                <div
                    className={`self-start lg:sticky lg:top-24 transition-all duration-700 motion-safe:transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Where We Send Students</p>
                    <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                        Focus Countries You Can Apply To With Us
                    </h2>
                    <p className="mt-4 max-w-xl text-base leading-7 text-blue-100/85 sm:text-lg">
                        We currently support admissions only for Japan, UK, Australia, Korea, and USA with end-to-end guidance.
                    </p>

                    <div
                        className={`mt-8 transition-all duration-700 motion-safe:transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        style={{ transitionDelay: isVisible ? '220ms' : '0ms' }}
                    >
                        <Link
                            href="/destinations"
                            className="inline-flex items-center rounded-full border border-cyan-200/45 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/25 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-100 hover:bg-white/15 hover:text-cyan-100"
                        >
                            Explore Countries
                        </Link>
                    </div>

                    {/* Support Infographic - visualizes key offerings */}
                    <div
                        className={`mt-8 transition-all duration-700 motion-safe:transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        style={{ transitionDelay: isVisible ? '340ms' : '0ms' }}
                    >
                        <div className="rounded-2xl border border-blue-200/25 bg-white/10 p-3 shadow-lg shadow-blue-950/20 backdrop-blur-sm">
                            <svg
                                viewBox="0 0 720 220"
                                className="h-auto w-full"
                                role="img"
                                aria-labelledby="destinations-infographic-title destinations-infographic-desc"
                            >
                                <title id="destinations-infographic-title">Destinations support infographic</title>
                                <desc id="destinations-infographic-desc">
                                    Summary of support: five focus countries, one to one guidance, and end to end process.
                                </desc>

                                <defs>
                                    <linearGradient id="lineBlue" x1="0" y1="0" x2="1" y2="0">
                                        <stop offset="0%" stopColor="#7dd3fc" />
                                        <stop offset="100%" stopColor="#22d3ee" />
                                    </linearGradient>
                                </defs>

                                <line x1="150" y1="110" x2="570" y2="110" stroke="url(#lineBlue)" strokeWidth="3" strokeLinecap="round" />

                                <g>
                                    <circle cx="150" cy="110" r="38" fill="#1e3a8a" stroke="#7dd3fc" strokeWidth="2" />
                                    <text x="150" y="104" textAnchor="middle" fill="#e0f2fe" fontSize="24" fontWeight="800">5</text>
                                    <text x="150" y="126" textAnchor="middle" fill="#bae6fd" fontSize="10" fontWeight="600">COUNTRIES</text>
                                </g>

                                <g>
                                    <circle cx="360" cy="110" r="38" fill="#0f766e" stroke="#67e8f9" strokeWidth="2" />
                                    <text x="360" y="104" textAnchor="middle" fill="#ecfeff" fontSize="20" fontWeight="800">1:1</text>
                                    <text x="360" y="126" textAnchor="middle" fill="#ccfbf1" fontSize="10" fontWeight="600">GUIDANCE</text>
                                </g>

                                <g>
                                    <circle cx="570" cy="110" r="38" fill="#1e293b" stroke="#93c5fd" strokeWidth="2" />
                                    <text x="570" y="104" textAnchor="middle" fill="#dbeafe" fontSize="10" fontWeight="800">END-TO</text>
                                    <text x="570" y="120" textAnchor="middle" fill="#dbeafe" fontSize="10" fontWeight="800">END</text>
                                    <text x="570" y="136" textAnchor="middle" fill="#bfdbfe" fontSize="9" fontWeight="600">SUPPORT</text>
                                </g>

                                <text x="150" y="182" textAnchor="middle" fill="#bfdbfe" fontSize="11" fontWeight="500">Japan, UK, Australia, Korea, USA</text>
                                <text x="360" y="182" textAnchor="middle" fill="#bfdbfe" fontSize="11" fontWeight="500">Dedicated counselor at each stage</text>
                                <text x="570" y="182" textAnchor="middle" fill="#bfdbfe" fontSize="11" fontWeight="500">Profile to departure assistance</text>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Destination Cards Grid - responsive layout with staggered reveal animation */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {destinations.map((item, index) => (
                        <DestinationCard
                            key={item.country}
                            country={item.country}
                            countryCode={item.countryCode}
                            flagSrc={item.flagSrc}
                            className={item.country === 'USA' ? 'sm:col-span-2' : undefined}
                            delay={`${index * 120 + 100}ms`}
                            isVisible={isVisible}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}