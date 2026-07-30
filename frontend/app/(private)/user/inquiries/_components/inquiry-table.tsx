"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Eye, Trash2, Search } from "lucide-react";
import { handleDeleteInquiryByID, handleGetAllInquiries, handleGetAllInquiriesByUserId } from "@/app/lib/actions/inquiry-actions";
import { toast } from "react-toastify";
import { getDecodedTokenFromCookie } from "@/app/lib/cookie";

const AVATAR_COLORS = [
    "bg-blue-100 text-blue-700",
    "bg-emerald-100 text-emerald-700",
    "bg-amber-100 text-amber-700",
    "bg-violet-100 text-violet-700",
    "bg-rose-100 text-rose-700",
];

const ACADEMIC_LEVEL_BADGE: Record<string, string> = {
    "+2 / High School": "bg-blue-100 text-blue-700 border-blue-200 w-[110px] justify-center",
    "Bachelor Completed": "bg-violet-100 text-violet-700 border-violet-200 w-[130px] justify-center",
    "Master Completed": "bg-emerald-100 text-emerald-700 border-emerald-200 w-[130px] justify-center",
    "Others": "bg-amber-100 text-amber-700 border-amber-200 w-[80px] justify-center",
};

function getInitials(name: string) {
    const parts = name.split(" ");
    return (parts[0][0] + (parts[1]?.[0] || "")).toUpperCase();
}

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
}

export default function InquiryTable() {
    const [inquiries, setInquiries] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("");
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [inquiryToDelete, setInquiryToDelete] = useState<string | null>(null);
    const [showMessage, setShowMessage] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState<any>(null);

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const [pagination, setPagination] = useState<any>(null);

    useEffect(() => {
        const fetchInquiries = async () => {
            try {
                const decoded = await getDecodedTokenFromCookie();

                const res = await handleGetAllInquiriesByUserId(decoded.id, currentPage);

                if (res.success) {
                    setInquiries(res.result);
                    setPagination(res.pagination || null);

                } else {
                    toast.error(res.message || "Failed to fetch inquiries!");
                };

            } catch (err: any) {
                toast.error(err.message || "Failed to fetch inquiries!");

            } finally {
                setLoading(false);
            };
        };

        fetchInquiries();
    }, [currentPage]);


    // filtering
    const filtered = (inquiries ?? []).filter((inquiry) => {
        const q = query.toLowerCase();

        return (
            inquiry.fullName.toLowerCase().includes(q) ||
            inquiry.email.toLowerCase().includes(q) ||
            inquiry.phoneNumber.toLowerCase().includes(q) ||
            inquiry.academicLevel.toLowerCase().includes(q) ||
            inquiry.destination.toLowerCase().includes(q)
        );
    });

    // Handle View Message
    const handleViewMessage = (inquiry: any) => {
        setSelectedMessage(inquiry);
        setShowMessage(true);
    };

    // Handle Close Message
    const handleCloseMessage = () => {
        setShowMessage(false);
        setSelectedMessage(null);
    };

    return (
        <div className="p-6 space-y-5">
            {/* Toolbar */}
            <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-100">INQUIRIES</h2>
                    <p className="text-semibold text-gray-200 mt-0.5">
                        {filtered.length} inquir{filtered.length !== 1 ? "ies" : "y"} found
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <Link
                        href="/user/inquiries/submit"
                        className="inline-flex items-center rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                    >
                        New Inquiry
                    </Link>

                    <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2 shadow-sm">
                        <Search className="w-3.5 h-3.5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search inquiries…"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="text-sm text-slate-700 placeholder:text-slate-400 outline-none w-44 bg-transparent"
                        />
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-100">
                                <th className="px-5 py-3 text-[12px] font-sm text-slate-400 uppercase tracking-widest whitespace-nowrap">
                                    Inquiry
                                </th>
                                <th className="px-5 py-3 text-[12px] font-sm text-slate-400 uppercase tracking-widest whitespace-nowrap">
                                    Contact
                                </th>
                                <th className="px-5 py-3 text-[12px] font-sm text-slate-400 uppercase tracking-widest whitespace-nowrap">
                                    Address
                                </th>
                                <th className="px-5 py-3 text-[12px] font-sm text-slate-400 uppercase tracking-widest whitespace-nowrap">
                                    Academic Level
                                </th>
                                <th className="px-5 py-3 text-[12px] font-sm text-slate-400 uppercase tracking-widest whitespace-nowrap">
                                    Destination
                                </th>
                                <th className="px-5 py-3 text-[12px] font-sm text-slate-400 uppercase tracking-widest whitespace-nowrap">
                                    Date
                                </th>
                                <th className="px-5 py-3 text-[12px] font-sm text-slate-400 uppercase tracking-widest whitespace-nowrap text-right">
                                    Perform Action
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-50">
                            {filtered.map((inquiry, idx) => (
                                <tr
                                    key={inquiry._id}
                                    className="hover:bg-slate-50/70 transition-colors duration-150"
                                >
                                    {/* Inquiry */}
                                    <td className="px-5 py-4">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${AVATAR_COLORS[idx % AVATAR_COLORS.length]
                                                    }`}
                                            >
                                                {getInitials(inquiry.fullName)}
                                            </div>

                                            <div>
                                                <p className="text-sm font-semibold text-slate-700">
                                                    {inquiry.fullName.toUpperCase()}
                                                </p>
                                                <p className="text-[11px] text-slate-400 tracking-wide mt-0.5">
                                                    Inquiry
                                                </p>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Contact */}
                                    <td className="px-5 py-4">
                                        <p className="text-sm text-slate-700">{inquiry.email}</p>
                                        <p className="text-xs text-slate-400 mt-0.5">
                                            {inquiry.phoneNumber}
                                        </p>
                                    </td>

                                    {/* Address */}
                                    <td className="px-5 py-4">
                                        <p className="text-sm text-slate-700">{inquiry.address}</p>
                                    </td>

                                    {/* Academic Level */}
                                    <td className="px-5 py-4">
                                        <span
                                            className={`inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-full border ${ACADEMIC_LEVEL_BADGE[inquiry.academicLevel] ||
                                                "bg-slate-50 text-slate-600 border-slate-200"
                                                }`}
                                        >
                                            {inquiry.academicLevel}
                                        </span>
                                    </td>

                                    {/* Destination */}
                                    <td className="px-5 py-4">
                                        <span className="text-sm font-medium text-slate-700">
                                            {inquiry.destination}
                                        </span>
                                    </td>

                                    {/* Date */}
                                    <td className="px-5 py-4">
                                        <span className="text-sm text-slate-500">
                                            {formatDate(inquiry.createdAt)}
                                        </span>
                                    </td>

                                    {/* Actions */}
                                    <td className="px-5 py-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => handleViewMessage(inquiry)}
                                                className="w-10 h-10 flex items-center justify-center rounded-4xl border border-slate-200 text-gray-100 bg-blue-500 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors hover:cursor-pointer"
                                            >
                                                <Eye className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="max-w-3xl mx-auto">
                    {/* Loading */}
                    {loading && (
                        <div className="p-3 bg-blue-50 border border-blue-300 text-sm font-semibold text-blue-500 mt-5 rounded-4xl"> Loading inquiries...</div>
                    )}
                </div>
                {/* Empty State */}
                {filtered.length === 0 && (
                    <div className="py-20 text-center">
                        <Search className="w-10 h-10 text-slate-200 mx-auto" />
                        <p className="text-slate-400 font-medium mt-4 text-sm">
                            No inquiries match your search.
                        </p>
                    </div>
                )}
            </div>

            {/* Message Modal */}
            {showMessage && selectedMessage && (
                <div className="fixed inset-0 bg-blue-800/22 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-4">
                        <h3 className="text-lg font-semibold text-slate-700 mb-4">
                            Inquiry Message
                        </h3>

                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">From</p>
                                    <p className="text-sm text-slate-700">{selectedMessage.fullName}</p>
                                </div>

                                <div>
                                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Email</p>
                                    <p className="text-sm text-slate-700">{selectedMessage.email}</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Message</p>
                                <p className="text-sm text-gray-100 bg-blue-500 p-3 rounded whitespace-pre-wrap">
                                    {selectedMessage.message}
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3 justify-end">
                            <button
                                onClick={handleCloseMessage}
                                className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors hover:cursor-pointer"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* PAGINATION */}
            {pagination && (
                <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                    <button
                        onClick={() => setCurrentPage(prev => prev - 1)}
                        disabled={!pagination.hasPreviousPage || loading}
                        className={`rounded-full border px-3 py-2 sm:px-4 text-xs sm:text-sm font-semibold transition-colors ${!pagination.hasPreviousPage || loading
                            ? "pointer-events-none border-blue-200 bg-white text-slate-400"
                            : "border-blue-200 bg-white text-blue-600 hover:bg-blue-50 cursor-pointer"
                            }`}
                    >
                        Previous
                    </button>
                    <span className="rounded-full bg-blue-500 px-3 py-2 sm:px-4 text-xs sm:text-sm font-semibold text-white">
                        {pagination.page} of {pagination.totalPages}
                    </span>
                    <button
                        onClick={() => setCurrentPage(prev => prev + 1)}
                        disabled={!pagination.hasNextPage || loading}
                        className={`rounded-full border px-3 py-2 sm:px-4 text-xs sm:text-sm font-semibold transition-colors ${!pagination.hasNextPage || loading
                            ? "pointer-events-none border-blue-200 bg-white text-slate-400"
                            : "border-blue-200 bg-white text-blue-600 hover:bg-emerald-50 cursor-pointer"
                            }`}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}