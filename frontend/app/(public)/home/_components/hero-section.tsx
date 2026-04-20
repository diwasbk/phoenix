"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
    const headlineText = 'Study Abroad at Your Dream University';
    const descriptionText = "We help ambitious students choose the right university, prepare strong applications, and move forward with clarity, confidence, and complete support.";

    const [typedHeadline, setTypedHeadline] = useState('');
    const [typedDescription, setTypedDescription] = useState('');
    const [isFeaturedLoaded, setIsFeaturedLoaded] = useState(false);

    useEffect(() => {
        let headlineIndex = 0;
        let descriptionIndex = 0;
        let descriptionTimer: ReturnType<typeof setInterval> | null = null;

        const headlineTimer = setInterval(() => {
            headlineIndex += 1;
            setTypedHeadline(headlineText.slice(0, headlineIndex));

            if (headlineIndex >= headlineText.length) {
                clearInterval(headlineTimer);

                descriptionTimer = setInterval(() => {
                    descriptionIndex += 1;
                    setTypedDescription(descriptionText.slice(0, descriptionIndex));

                    if (descriptionIndex >= descriptionText.length && descriptionTimer) {
                        clearInterval(descriptionTimer);
                    }
                }, 14);
            }
        }, 38);

        return () => {
            clearInterval(headlineTimer);
            if (descriptionTimer) {
                clearInterval(descriptionTimer);
            }
        };
    }, []);

    return (
        <section id="home" className="bg-linear-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
            {/* Background decorative elements - subtle and professional */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-40 right-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-10"></div>
                <div className="absolute -bottom-20 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-10"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className=" lg:pr-6">
                        {/* Main Headline */}
                        <div className="hero-reveal">
                            <h1 className="max-w-2xl text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.02] tracking-tight text-white mb-6 min-h-[10.5rem] md:min-h-[13rem] lg:min-h-[16rem]">
                                {typedHeadline.includes('Dream') ? (
                                    <>
                                        {typedHeadline.slice(0, typedHeadline.indexOf('Dream'))}
                                        <span className="text-blue-200">
                                            {typedHeadline.slice(
                                                typedHeadline.indexOf('Dream'),
                                                typedHeadline.indexOf('Dream') + 'Dream'.length,
                                            )}
                                        </span>
                                        {typedHeadline.slice(typedHeadline.indexOf('Dream') + 'Dream'.length)}
                                    </>
                                ) : (
                                    typedHeadline
                                )}
                            </h1>
                        </div>

                        {/* Description */}
                        <p className="hero-reveal hero-delay-1 max-w-xl text-base sm:text-lg leading-8 text-blue-50/90 font-light min-h-[7rem]">
                            {typedDescription}
                        </p>

                        {/* CTA Buttons */}
                        <div className="hero-reveal hero-delay-2 flex flex-col sm:flex-row gap-4">
                            <button className="cta-attention cta-entry cta-entry-1 bg-white text-blue-950 px-8 py-3.5 rounded-full font-semibold text-base hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 focus:ring-offset-blue-900 transition-all duration-200 shadow-xl shadow-blue-950/25 flex items-center justify-center gap-2 hover:cursor-pointer">
                                Apply Now
                            </button>
                            <button className="cta-entry cta-entry-2 border border-white/25 bg-white/5 text-white px-8 py-3.5 rounded-full font-semibold text-base hover:bg-white/10 hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 focus:ring-offset-blue-900 transition-all duration-200 backdrop-blur-md hover:cursor-pointer">
                                Send Inquiry
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Featured Image */}
                    <div className="relative w-full h-full px-2 sm:px-4 md:px-0 self-start lg:-mt-6 hero-image-float">
                        <Image
                            src="/featured-image.webp"
                            alt="Featured Image"
                            fill
                            sizes="100vw"
                            className={`object-contain object-top transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${isFeaturedLoaded ? 'opacity-100 translate-y-0 scale-100 blur-0' : 'opacity-0 translate-y-3 scale-[0.985] blur-[2px]'}`}
                            style={{ mixBlendMode: 'normal' }}
                            onLoad={() => setIsFeaturedLoaded(true)}
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Support chips */}
            <div className="hero-reveal hero-delay-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pb-5 m-3">
                <div className="support-card-entry support-card-delay-1 relative overflow-hidden rounded-2xl border border-blue-200/30 bg-gradient-to-br from-blue-300/20 via-blue-200/10 to-white/10 px-5 py-4 shadow-xl shadow-blue-950/30 backdrop-blur-md">
                    <div className="absolute right-0 top-0 h-16 w-16 rounded-bl-full bg-blue-100/15"></div>
                    <p className="text-3xl md:text-4xl font-black text-white">10K+</p>
                    <p className="mt-1 text-blue-50/85 text-sm font-medium uppercase tracking-wide">Students placed</p>
                </div>
                <div className="support-card-entry support-card-delay-2 relative overflow-hidden rounded-2xl border border-blue-200/30 bg-gradient-to-br from-blue-300/20 via-blue-200/10 to-white/10 px-5 py-4 shadow-xl shadow-blue-950/30 backdrop-blur-md">
                    <div className="absolute right-0 top-0 h-16 w-16 rounded-bl-full bg-blue-100/15"></div>
                    <p className="text-3xl md:text-4xl font-black text-white">98%</p>
                    <p className="mt-1 text-blue-50/85 text-sm font-medium uppercase tracking-wide">Success rate</p>
                </div>
                <div className="support-card-entry support-card-delay-3 relative overflow-hidden rounded-2xl border border-blue-200/30 bg-gradient-to-br from-blue-300/20 via-blue-200/10 to-white/10 px-5 py-4 shadow-xl shadow-blue-950/30 backdrop-blur-md">
                    <div className="absolute right-0 top-0 h-16 w-16 rounded-bl-full bg-blue-100/15"></div>
                    <p className="text-3xl md:text-4xl font-black text-white">15+</p>
                    <p className="mt-1 text-blue-50/85 text-sm font-medium uppercase tracking-wide">Years active</p>
                </div>
                <div className="support-card-entry support-card-delay-4 group rounded-2xl border border-white/15 bg-blue-900/40 px-5 py-4 shadow-lg shadow-black/10 backdrop-blur-sm flex items-center gap-3 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-blue-900/45 hover:border-cyan-200/40 hover:shadow-xl hover:shadow-cyan-900/25">
                    <div className="flex items-center gap-3 transition-transform duration-300 group-hover:translate-x-0.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-cyan-200 transition-all duration-300 group-hover:scale-125 group-hover:bg-cyan-100"></span>
                        <p className="text-base font-semibold text-gray-200">University selection</p>
                    </div>
                </div>
                <div className="support-card-entry support-card-delay-5 group rounded-2xl border border-white/15 bg-blue-900/40 px-5 py-4 shadow-lg shadow-black/10 backdrop-blur-sm flex items-center gap-3 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-blue-900/45 hover:border-cyan-200/40 hover:shadow-xl hover:shadow-cyan-900/25">
                    <div className="flex items-center gap-3 transition-transform duration-300 group-hover:translate-x-0.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-cyan-200 transition-all duration-300 group-hover:scale-125 group-hover:bg-cyan-100"></span>
                        <p className="text-base font-semibold text-gray-200">Visa guidance</p>
                    </div>
                </div>
                <div className="support-card-entry support-card-delay-6 group rounded-2xl border border-white/15 bg-blue-900/40 px-5 py-4 shadow-lg shadow-black/10 backdrop-blur-sm flex items-center gap-3 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-blue-900/45 hover:border-cyan-200/40 hover:shadow-xl hover:shadow-cyan-900/25">
                    <div className="flex items-center gap-3 transition-transform duration-300 group-hover:translate-x-0.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-cyan-200 transition-all duration-300 group-hover:scale-125 group-hover:bg-cyan-100"></span>
                        <p className="text-base font-semibold text-gray-200">Application support</p>
                    </div>
                </div>
            </div>
        </section>
    );
}