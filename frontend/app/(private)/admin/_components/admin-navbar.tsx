"use client";
import { clearAuthTokenCookie } from "@/app/lib/cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AdminNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const handleLogout = async () => {
        try {
            await clearAuthTokenCookie();
            toast.success("Logged out successfully!");
            router.replace("/login");
        } catch (err: any) {
            toast.error("Logout failed");
        }
    };

    const navItems = [
        { name: "Applications", href: "/admin/applications" },
        { name: "Inquiries", href: "/admin/inquiries" },
        { name: "Security", href: "/admin/change-password" },
    ];

    return (
        <>
            <div aria-hidden className="h-20" />
            <nav
                className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white shadow-sm"
                style={{ top: "env(safe-area-inset-top)" }}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        {/* Logo */}
                        <Link href="/admin/dashboard" className="shrink-0 transition-opacity hover:opacity-80">
                            <Image
                                src="/images/logo.jpg"
                                alt="Phoenix logo"
                                width={112}
                                height={56}
                                className="h-12 w-auto object-contain"
                                priority
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-2">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`rounded-lg px-4 py-2 text-sm transition-colors ${isActive
                                                ? "bg-blue-700 text-white"
                                                : "text-gray-700 hover:bg-blue-700 hover:text-white"
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}

                            <button
                                onClick={handleLogout}
                                className="ml-4 rounded-lg bg-red-600 px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-md cursor-pointer"
                            >
                                Logout
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden rounded-lg p-2 text-gray-700 hover:bg-gray-100"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-100 bg-white shadow-lg">
                        <div className="space-y-1 px-4 py-4">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`block rounded-lg px-4 py-3 text-base font-semibold ${isActive
                                                ? "bg-blue-50 text-blue-700"
                                                : "text-gray-700 hover:bg-gray-50"
                                            }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                            <button
                                onClick={handleLogout}
                                className="block w-full text-left rounded-lg px-4 py-3 text-base font-bold text-red-600 hover:bg-red-50"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}