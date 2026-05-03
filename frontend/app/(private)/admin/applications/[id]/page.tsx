"use client";
import Link from "next/link";
import AdminNavbar from "../../_components/admin-navbar";
import { useParams, useRouter } from "next/navigation";
import ApplicationDetail from "./application-detail";
import { ArrowBigLeft, Pencil } from "lucide-react";

export default function Page() {
    const params = useParams();
    const applicationId = params?.id as string;

    const router = useRouter();

    return (
        <main>
            <style>{`
                @media print {
                    .no-print { display: none !important; }
                }
            `}</style>

            <div className="no-print">
                <AdminNavbar />
            </div>

            <div className="relative">
                <button
                    onClick={() => router.back()}
                    className="no-print fixed top-24 left-4 z-40 p-2.5 w-10 h-10 rounded-4xl border border-blue-800 text-gray-100  bg-blue-500 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors hover:cursor-pointer"
                    title="Go back"
                >
                    <ArrowBigLeft className="w-4 h-4" />
                </button>
                <Link
                    href={`/admin/applications/update/${applicationId}`}
                    className="no-print fixed top-24 right-4 z-40 p-3 w-10 h-10 rounded-4xl border border-blue-800 text-gray-100 bg-green-500 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-colors hover:cursor-pointer"
                    title="Edit application"
                >
                    <Pencil className="w-4 h-4" />
                </Link>
                <ApplicationDetail applicationId={applicationId} />
            </div>
        </main>
    );
}