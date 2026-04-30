"use client";
import { useEffect, useRef, useState } from 'react';

const journeySteps = [
    {
        step: '01',
        title: 'Profile Evaluation',
        description:
            'We review your academics, budget, and goals to shortlist universities that are realistic and high-value for your future.',
    },
    {
        step: '02',
        title: 'Application Strategy',
        description:
            'From SOP refinement to documentation and submission timelines, we build a strategy that improves your admit chances.',
    },
    {
        step: '03',
        title: 'Visa to Departure',
        description:
            'You get complete support for visa preparation, financial checklist, and pre-departure guidance for a smooth transition.',
    },
];

export default function JourneySection() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const revealOnScroll = () => {
            if (isVisible || window.scrollY < 80) {
                return;
            }

            const currentSection = sectionRef.current;
            if (!currentSection) {
                return;
            }

            const sectionTop = currentSection.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight * 0.82;

            if (sectionTop <= triggerPoint) {
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

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        if (window.scrollY > 80) {
            const currentSection = sectionRef.current;
            if (!currentSection) {
                return;
            }

            const sectionTop = currentSection.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight * 0.82;
            if (sectionTop <= triggerPoint) {
                setIsVisible(true);
            }
        }
    }, []);

    return (
        <section ref={sectionRef} className="relative overflow-hidden bg-white px-4 py-10 sm:px-6 lg:px-8">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-blue-100/60 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-sky-100/70 blur-3xl"></div>
            </div>

            <div className="relative z-10 mx-auto">
                <div
                    className={`mx-auto max-w-2xl text-center motion-safe:transform motion-safe:transition-all motion-safe:duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Your Journey</p>
                    <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                        What Happens After You Click Apply?
                    </h2>
                    <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                        A clear, guided process from planning to departure so you never feel lost at any stage.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {journeySteps.map((item, index) => (
                        <article
                            key={item.step}
                            className={`group rounded-3xl border border-blue-100 bg-linear-to-b from-white to-blue-50/60 p-6 shadow-lg shadow-blue-100/50 motion-safe:transform motion-safe:transition-all motion-safe:duration-700 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: isVisible ? `${index * 130 + 120}ms` : '0ms' }}
                        >
                            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                                {item.step}
                            </div>
                            <h3 className="mt-5 text-xl font-bold text-slate-900">{item.title}</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{item.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}