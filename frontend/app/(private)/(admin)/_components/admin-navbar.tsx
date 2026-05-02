"use client";
import { clearAuthTokenCookie } from "@/app/lib/cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await clearAuthTokenCookie();

            router.replace("/login");

        } catch (err: any) {
            console.error("Logout Error:", err);
        }
    }
    return (
        <>
            <div aria-hidden className="h-20" />
            <nav
                className="fixed left-0 right-0 z-50 animate-fade-in-down border-b border-gray-200 bg-white"
                style={{ top: "env(safe-area-inset-top)" }}
            >
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <div className="shrink-0 group cursor-pointer">
                            <Link href={"/dashboard"}>
                                <Image
                                    src="/images/logo.jpg"
                                    alt="Phoenix logo"
                                    width={112}
                                    height={56}
                                    className="h-full w-full object-contain"
                                    priority
                                />
                            </Link>
                        </div>

                        <div className="hidden md:flex items-center gap-2">
                            <div className="hidden md:flex gap-3">
                                <Link
                                    href={"/applications"}
                                    className="border-2 border-blue-300 text-blue-400 px-6 py-2.5 rounded-lg font-semibold text-sm hover:border-blue-400 hover:text-blue-500 transition-all duration-300 hover:cursor-pointer">
                                    Applications
                                </Link>

                                <Link
                                    href={"/inquiries"}
                                    className="border-2 border-blue-300 text-blue-400 px-6 py-2.5 rounded-lg font-semibold text-sm hover:border-blue-400 hover:text-blue-500 transition-all duration-300 hover:cursor-pointer">
                                    Inquiries
                                </Link>
                                <button
                                    className="bg-red-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-red-700 transition-all duration-300 hover:shadow-lg hover:cursor-pointer"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </div>
                        </div>

                        <div className="md:hidden">
                            <button
                                type="button"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 transition-all duration-300 hover:bg-blue-100"
                                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            >
                                <svg
                                    className="h-6 w-6 transition-transform duration-300"
                                    style={{ transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)" }}
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.5}
                                        d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {isMenuOpen && (
                        <div className="md:hidden border-t border-gray-200/50 bg-white animate-slide-down">
                            <div className="space-y-2 px-2 pt-2 pb-4">
                                <Link
                                    href="/applications"
                                    className="block rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wide text-gray-700 transition-all duration-300 hover:translate-x-2 hover:bg-blue-50 hover:text-blue-600"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Applications
                                </Link>
                                <Link
                                    href="/inquiries"
                                    className="block rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wide text-gray-700 transition-all duration-300 hover:translate-x-2 hover:bg-blue-50 hover:text-blue-600"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Inquiry
                                </Link>
                                <button
                                    onClick={async () => {
                                        setIsMenuOpen(false);
                                        await handleLogout();
                                    }}
                                    className="mt-4 block w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold uppercase tracking-wide text-slate-700 transition-all duration-300 hover:border-red-300 hover:text-red-700 hover:border-red-200 hover:bg-red-50"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}