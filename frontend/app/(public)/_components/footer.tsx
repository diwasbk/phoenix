"use client";
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-linear-to-br from-slate-900 via-blue-900 to-blue-950 text-white relative overflow-hidden">
            {/* Background decorative elements - subtle gradient and blur effects */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-cyan-300/12 blur-3xl"></div>
                <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-300/12 blur-3xl"></div>
                <div className="absolute inset-0 bg-linear-to-r from-blue-950/40 via-transparent to-blue-900/35"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                {/* Main Footer Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Branding Section */}
                    <div className="md:col-span-1">
                        <div className="mb-4">
                            <h2 className="text-2xl font-black text-white">Butwal Phoenix Education Hub Pvt.Ltd</h2>
                            <p className="text-sm text-blue-200 mt-2">Your gateway to global education</p>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-3 mt-6">
                            {/* Phone Number */}
                            <div className="flex items-start gap-3">
                                <svg className="h-5 w-5 text-cyan-300 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:+1234567890" className="text-sm text-blue-100/85 hover:text-cyan-200 transition-colors duration-300">
                                    071-537037<br></br>
                                    9843113713
                                </a>
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-3">
                                <svg className="h-5 w-5 text-cyan-300 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div className="text-sm text-blue-100/85">
                                    <p>Traffic Chowk, Butwal</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-200 mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-sm text-blue-100/85 hover:text-cyan-200 transition-colors duration-300">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/destinations" className="text-sm text-blue-100/85 hover:text-cyan-200 transition-colors duration-300">
                                    Destinations
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-sm text-blue-100/85 hover:text-cyan-200 transition-colors duration-300">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-sm text-blue-100/85 hover:text-cyan-200 transition-colors duration-300">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Section */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-200 mb-6">Resources</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/blog" className="text-sm text-blue-100/85 hover:text-cyan-200 transition-colors duration-300">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-sm text-blue-100/85 hover:text-cyan-200 transition-colors duration-300">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/inquiry" className="text-sm text-blue-100/85 hover:text-cyan-200 transition-colors duration-300">
                                    Inquiry
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="text-sm text-blue-100/85 hover:text-cyan-200 transition-colors duration-300">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-200 mb-6">Follow Us</h3>
                        <div className="flex gap-4">
                            {/* LinkedIn */}
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-cyan-200/40 bg-white/10 text-cyan-100 hover:bg-cyan-200/20 hover:border-cyan-200/60 transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>

                            {/* Facebook */}
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-cyan-200/40 bg-white/10 text-cyan-100 hover:bg-blue-500/25 hover:border-blue-300/70 hover:text-blue-100 transition-all duration-300"
                                aria-label="Facebook"
                            >
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-cyan-200/40 bg-white/10 text-cyan-100 hover:bg-pink-500/25 hover:border-pink-300/70 hover:text-pink-100 transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="currentColor" />
                                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                                </svg>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://www.whatsapp.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-cyan-200/40 bg-white/10 text-cyan-100 hover:bg-green-500/25 hover:border-green-300/70 hover:text-green-100 transition-all duration-300"
                                aria-label="WhatsApp"
                            >
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12.04 2C6.53 2 2.06 6.47 2.06 11.98c0 1.76.46 3.48 1.34 5l-1.42 5.2 5.33-1.4a9.94 9.94 0 004.73 1.2h.01c5.51 0 9.98-4.47 9.98-9.98A9.95 9.95 0 0012.04 2zm0 18.3h-.01a8.27 8.27 0 01-4.2-1.14l-.3-.18-3.16.83.84-3.08-.2-.32a8.22 8.22 0 01-1.27-4.43c0-4.56 3.72-8.28 8.29-8.28 2.21 0 4.29.86 5.85 2.42a8.21 8.21 0 012.43 5.86c0 4.57-3.72 8.29-8.27 8.29zm4.54-6.2c-.25-.13-1.47-.73-1.7-.81-.23-.09-.4-.13-.57.12-.17.25-.65.81-.8.98-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.99-1.22a7.35 7.35 0 01-1.37-1.7c-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.12-.14.16-.25.25-.42.08-.16.04-.31-.02-.44-.06-.12-.57-1.36-.78-1.87-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.44.06-.67.31s-.88.86-.88 2.1.9 2.43 1.03 2.6c.12.16 1.76 2.68 4.25 3.75.59.25 1.06.4 1.42.51.6.19 1.15.16 1.59.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z" />
                                </svg>
                            </a>
                        </div>

                        <div className="mt-4 overflow-hidden p-1 shadow-lg shadow-black/20">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.544749857592!2d83.46297167505051!3d27.700462125795752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996870040cf5585%3A0xc2bf9e257ffe4bc0!2zQlVUV0FMIFBIT0VOSVgg8J-QpuKAjfCflKUgRURVQ0FUSU9OIEhVQiBQVlQuIExURC4!5e0!3m2!1sen!2snp!4v1776696188436!5m2!1sen!2snp"
                                className="h-30 w-full rounded-xl"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Butwal Phoenix Education Hub Location"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-linear-to-r from-blue-950/0 via-cyan-200/25 to-blue-950/0 mb-8"></div>

                {/* Bottom Section - Credits and Copyright - Centered */}
                <div className="flex justify-center items-center">
                    <p className="text-sm text-blue-100/70 text-center">
                        &copy; {currentYear} Butwal Phoenix Education Hub Pvt.Ltd. All rights reserved. |{' '}
                        Designed and developed by{' '}
                        <span className="text-cyan-200">
                            <a
                                href="https://github.com/diwasbk"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Diwas Bk
                            </a>
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
