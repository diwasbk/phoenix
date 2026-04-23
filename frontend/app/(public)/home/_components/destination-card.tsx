import Image from 'next/image';
import Link from 'next/link';

type DestinationCardProps = {
    country: string;
    delay: string;
    isVisible: boolean;
    className?: string;
    countryCode?: string;
    flagSrc?: string;
};

export default function DestinationCard({ country, delay, isVisible, className, countryCode, flagSrc }: DestinationCardProps) {
    return (
        <>
            {/* Destination Card - interactive card with hover effects and scroll reveal animation */}
            <article
            className={`group relative overflow-hidden rounded-3xl border border-blue-200/25 bg-white/5 p-6 shadow-xl shadow-blue-950/20 backdrop-blur-sm transition-all duration-700 hover:-translate-y-1 hover:border-cyan-200/45 hover:shadow-cyan-900/25 motion-safe:transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className ?? ''}`}
            style={{ transitionDelay: isVisible ? delay : '0ms' }}
        >
            {/* Decorative background glow effect */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-200/15 blur-xl"></div>
            
            {/* Card Header - Country name and country code badge */}
            <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-cyan-200/35 bg-white/10 shadow-inner shadow-blue-950/20">
                        {flagSrc ? (
                            <Image src={flagSrc} alt={`${country} flag`} fill className="object-contain p-1" sizes="48px" />
                        ) : (
                            <span className="flex h-full w-full items-center justify-center text-2xl" aria-hidden="true">🌐</span>
                        )}
                    </div>
                    <h3 className="text-xl font-black tracking-tight text-white">{country}</h3>
                </div>
                {/* Country code badge - conditionally rendered */}
                {countryCode ? (
                    <div className="rounded-full border border-cyan-200/40 bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-cyan-100">
                        {countryCode}
                    </div>
                ) : null}
            </div>

            {/* Card Footer - Description and interactive arrow button */}
            <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-blue-100/80">Applications open for upcoming intakes</p>
                {/* Arrow Icon Button - subtle hover animation */}
                <Link
                    href="/apply"
                    aria-label={`Apply for ${country}`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cyan-200/45 bg-white/10 text-cyan-100 transition-transform duration-300 group-hover:translate-x-0.5"
                >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                </Link>
            </div>
            </article>
        </>
    );
}