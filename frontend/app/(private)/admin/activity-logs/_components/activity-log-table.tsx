"use client";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { handleGetActivityLogs } from "@/app/lib/actions/activity-log-actions";
import { toast } from "react-toastify";

const METHOD_BADGE: Record<string, string> = {
    GET: "bg-blue-100 text-blue-700 border-blue-200",
    POST: "bg-emerald-100 text-emerald-700 border-emerald-200",
    PUT: "bg-amber-100 text-amber-700 border-amber-200",
    PATCH: "bg-violet-100 text-violet-700 border-violet-200",
    DELETE: "bg-rose-100 text-rose-700 border-rose-200",
};

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
    });
};

export default function ActivityLogTable() {
    const [activityLogs, setActivityLogs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("");

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const [pagination, setPagination] = useState<any>(null);

    useEffect(() => {
        const fetchActivityLogs = async () => {
            setLoading(true);

            try {
                const res = await handleGetActivityLogs(currentPage);

                if (res.success) {
                    setActivityLogs(res.result || []);
                    setPagination(res.pagination || null);

                } else {
                    throw new Error(res.message || "Failed to fetch activity logs!");
                };

            } catch (err: any) {
                toast.error(err.message || "Failed to fetch activity logs!");

            } finally {
                setLoading(false);
            };
        };

        fetchActivityLogs();
    }, [currentPage]);

    const filtered = (activityLogs ?? []).filter((log) => {
        const q = query.toLowerCase();

        return (
            (log.actorEmail || "").toLowerCase().includes(q) ||
            (log.actorRole || "").toLowerCase().includes(q) ||
            log.action.toLowerCase().includes(q) ||
            log.route.toLowerCase().includes(q) ||
            log.method.toLowerCase().includes(q) ||
            String(log.statusCode).includes(q) ||
            (log.ipAddress || "").toLowerCase().includes(q)
        );
    });

    function getClient(userAgent?: string) {
        if (!userAgent) return "Unknown";

        if (userAgent.includes("PostmanRuntime")) return "Postman";
        if (userAgent.includes("curl")) return "cURL";
        if (userAgent.includes("Insomnia")) return "Insomnia";
        if (userAgent.includes("Thunder Client")) return "Thunder Client";

        if (userAgent.includes("Edg/")) return "Microsoft Edge";
        if (userAgent.includes("Chrome/")) return "Google Chrome";
        if (userAgent.includes("Firefox/")) return "Mozilla Firefox";
        if (userAgent.includes("Safari/") && !userAgent.includes("Chrome"))
            return "Safari";

        return "Unknown Client";
    };

    return (
        <div className="p-6 space-y-5">
            <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-100">ACTIVITY LOGS</h2>
                    <p className="text-semibold text-gray-200 mt-0.5">
                        {pagination?.total} log{pagination?.total !== 1 ? "s" : ""} recorded
                    </p>
                </div>

                <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2 shadow-sm">
                    <Search className="w-3.5 h-3.5 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search logs…"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="text-sm text-slate-700 placeholder:text-slate-400 outline-none w-44 bg-transparent"
                    />
                </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-100">
                                <th className="px-5 py-3 text-[12px] font-sm text-slate-400 uppercase tracking-widest whitespace-nowrap">
                                    Actor
                                </th>
                                <th className="px-5 py-3 text-[12px] font-sm text-slate-400 uppercase tracking-widest whitespace-nowrap">
                                    Action
                                </th>
                                <th className="px-5 py-3 text-[12px] font-sm text-slate-400 uppercase tracking-widest whitespace-nowrap">
                                    Method
                                </th>
                                <th className="px-5 py-3 text-[12px] font-sm text-slate-400 uppercase tracking-widest whitespace-nowrap">
                                    Status
                                </th>
                                <th className="px-5 py-3 text-[12px] font-sm text-slate-400 uppercase tracking-widest whitespace-nowrap">
                                    Duration
                                </th>
                                <th className="px-5 py-3 text-[12px] font-sm text-slate-400 uppercase tracking-widest whitespace-nowrap">
                                    Date
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-50">
                            {filtered.map((log) => (
                                <tr
                                    key={log._id}
                                    className="hover:bg-slate-50/70 transition-colors duration-150"
                                >
                                    <td className="px-5 py-4">
                                        <p className="text-[12px] font-semibold text-slate-700">
                                            {log.actorEmail || "Anonymous User"}
                                        </p>

                                        <p className="text-[11px] text-slate-400 mt-0.5 uppercase">
                                            {log.actorRole || "Not Authenticated"}
                                        </p>

                                        <p className="text-[11px] text-slate-400 mt-1">
                                            {getClient(log.userAgent)}
                                        </p>
                                    </td>

                                    <td className="px-5 py-4">
                                        <p
                                            className="max-w-75 truncate text-sm text-slate-700 font-medium"
                                            title={log.route}
                                        >
                                            {log.route}
                                        </p>

                                        <p className="text-xs text-slate-400 mt-0.5">
                                            {log.ipAddress || "Unknown IP"}
                                        </p>
                                    </td>

                                    <td className="px-5 py-4">
                                        <span className={`inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-full border ${METHOD_BADGE[log.method] || "bg-slate-50 text-slate-600 border-slate-200"}`}>
                                            {log.method}
                                        </span>
                                    </td>

                                    <td className="px-5 py-4">
                                        <span className={`inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-full border ${log.success ? "bg-emerald-100 text-emerald-700 border-emerald-200" : "bg-rose-100 text-rose-700 border-rose-200"}`}>
                                            {log.statusCode}
                                        </span>
                                    </td>

                                    <td className="px-5 py-4">
                                        <span className="text-sm text-slate-500">
                                            {log.durationMs ?? 0} ms
                                        </span>
                                    </td>

                                    <td className="px-5 py-4">
                                        <span className="text-sm text-slate-500">
                                            {formatDate(log.createdAt)}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="max-w-3xl mx-auto">
                    {loading && (
                        <div className="p-3 bg-blue-50 border border-blue-300 text-sm font-semibold text-blue-500 mt-5 rounded-4xl">
                            Loading activity logs...
                        </div>
                    )}
                </div>

                {filtered.length === 0 && (
                    <div className="py-20 text-center">
                        <Search className="w-10 h-10 text-slate-200 mx-auto" />
                        <p className="text-slate-400 font-medium mt-4 text-sm">
                            No activity logs match your search.
                        </p>
                    </div>
                )}
            </div>

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