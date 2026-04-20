'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: 'Home', href: 'home' },
        { label: 'About', href: 'about' },
        { label: 'Services', href: 'services' },
        { label: 'Study in Japan', href: 'japan' },
        { label: 'Destinations', href: 'destinations' },
    ];

    return (
        <nav className="sticky top-0 z-50 animate-fade-in-down border-b border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo Section */}
                    <div className="shrink-0 group cursor-pointer">
                        <Link href={"/"}>
                            <Image
                                src="/logo.jpg"
                                alt="Phoenix logo"
                                width={112}
                                height={56}
                                className="w-full h-full object-contain"
                                priority
                            /></Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg transition-all duration-300 relative group text-[12px] uppercase tracking-wide"
                            >
                                {item.label}
                                <span className="absolute bottom-1 left-4 w-0 h-1 bg-linear-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-300 group-hover:right-4 group-hover:w-[calc(100%-2rem)]"></span>
                            </Link>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex gap-3">
                        <button className="border-2 border-gray-200 text-gray-500 px-6 py-2.5 rounded-lg font-semibold text-sm hover:border-blue-300 hover:text-blue-500 transition-all duration-300 hover:cursor-pointer">
                            Inquiry
                        </button>
                        <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:cursor-pointer">
                            Apply Now
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:bg-blue-100 transition-all duration-300"
                        >
                            <svg
                                className="h-6 w-6 transition-transform duration-300"
                                style={{ transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200/50 animate-slide-down">
                        <div className="px-2 pt-2 pb-4 space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-semibold transition-all duration-300 hover:translate-x-2 uppercase text-sm tracking-wide"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <button className="w-full mt-4 bg-linear-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-lg font-bold uppercase text-sm tracking-wide hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105">
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}