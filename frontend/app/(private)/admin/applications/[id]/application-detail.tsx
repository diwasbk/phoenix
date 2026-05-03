"use client";
import { handleGetApplicationByID } from "@/app/lib/actions/application-actions";
import { Search } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ApplicationDetail({ applicationId }: { applicationId: string }) {

    const [applicationDetail, setApplicationDetail] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [err, setError] = useState("");

    useEffect(() => {
        const fetchDetails = async () => {
            setError("");

            try {
                const res = await handleGetApplicationByID(applicationId);

                if (res.success) {
                    setApplicationDetail(res.result);
                } else {
                    throw new Error(res.message || "Failed to fetch application!")
                };

            } catch (err: any) {
                setError(err.message || "Failed to fetch application!");

            } finally {
                setLoading(false);
            };
        };

        fetchDetails();
    }, []);



    if (applicationDetail) {
        return (
            <>
                <style>{`
                @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&family=Lato:wght@300;400;700&display=swap');

                * { box-sizing: border-box; }

                .form-font { font-family: 'Lato', sans-serif; }

                @page {
                    size: A4 portrait;
                    margin: 0;
                }

                @media print {
                    html, body {
                        margin: 0;
                        padding: 0;
                        background: white !important;
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }

                    .screen-bg {
                        background: white !important;
                        padding: 0 !important;
                        min-height: unset !important;
                        display: block !important;
                    }

                    .a4-card {
                        box-shadow: none !important;
                        max-width: 100% !important;
                        width: 100% !important;
                        border-radius: 0 !important;
                        border: none !important;
                        /* Scale the whole card to fit A4 width exactly */
                        zoom: 0.88;
                    }

                    .back-button {
                        display: none !important;
                    }
                }
            `}</style>

                {!applicationDetail && (
                    < div className="py-20 text-center">
                        <Search className="w-10 h-10 text-slate-200 mx-auto" />
                        <p className="text-red-500 font-bold mt-4 text-sm">
                            Application not found!
                        </p>
                    </div >)}

                <div className="screen-bg form-font min-h-screen bg-linear-to-br from-blue-950 via-blue-900 to-blue-800 py-10 px-4 flex justify-center relative">
                    <div className="a4-card w-full max-w-195 bg-white rounded-sm overflow-hidden">
                        {/* TOP ACCENT BAR */}
                        <div className="h-1.25 bg-linear-to-r from-[#1a3a5c] via-[#2e6da4] to-[#c0392b]" />

                        <div className="px-10 py-5">

                            {/* HEADER */}
                            <div className="flex items-center justify-between border-b-2 border-slate-800 pb-4 mb-4">
                                <div className="shrink-0 mr-6">
                                    <Image
                                        src="/images/logo.jpg"
                                        alt="Institute Logo"
                                        width={160}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex-1 text-center">
                                    <h1 className="text-2xl font-extrabold tracking-wide uppercase text-slate-900">
                                        Student Enrollment Form
                                    </h1>
                                    <p className="text-[0.625rem] font-bold tracking-[0.12em] uppercase text-red-600 mt-1">
                                        Approved by Government of Nepal &nbsp;·&nbsp; Ministry of Education
                                    </p>
                                </div>
                            </div>

                            {/* PERSONAL INFO + PHOTO */}
                            <div className="grid grid-cols-[1fr_auto] gap-8">
                                <div>
                                    <SectionTitle>Personal Information</SectionTitle>
                                    <div className="grid grid-cols-2 gap-x-8">
                                        <Field label="Full Name" value={applicationDetail.fullName} />
                                        <Field label="Email Address" value={applicationDetail.email} />
                                        <Field label="Phone Number" value={applicationDetail.phoneNumber} />
                                        <Field label="Gender" value={applicationDetail.gender} />
                                        <Field label="Date of Birth" value={applicationDetail.dob} />
                                        <Field label="Age" value={applicationDetail.age} />
                                        <Field label="Permanent Address" value={applicationDetail.address} />
                                        <Field label="Preferred Country" value={applicationDetail.preferredCountry} />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="w-25 h-31 border border-slate-300 flex flex-col items-center justify-center bg-slate-50 rounded-sm">
                                        <svg className="w-8 h-8 text-slate-300 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        <span className="text-[10px] text-slate-400 tracking-wide">PHOTO</span>
                                    </div>
                                    <p className="text-[9px] text-slate-400 mt-1.5 tracking-wider uppercase">Passport Size</p>
                                </div>
                            </div>

                            {/* FAMILY INFO */}
                            <div className="mt-4 border border-slate-200 rounded-sm px-5 py-3 bg-slate-50/50">
                                <SectionTitle>Family & Guardian Information</SectionTitle>
                                <div className="grid grid-cols-2 gap-x-8">
                                    <Field label="Father's Name" value={applicationDetail.fatherName} />
                                    <Field label="Mother's Name" value={applicationDetail.motherName} />
                                    <Field label="Parent Phone" value={applicationDetail.parentPhone} />
                                    <Field label="Responsible Person" value={applicationDetail.responsiblePerson} />
                                    <Field label="Responsible Phone" value={applicationDetail.responsiblePhone} />
                                </div>
                            </div>

                            {/* SERVICE INFO */}
                            <div className="mt-3 border border-slate-200 rounded-sm px-5 py-3 bg-slate-50/50">
                                <SectionTitle>Service Enrollment</SectionTitle>
                                <div className="grid grid-cols-2 gap-x-8">
                                    <Field label="Foreign Language" value={applicationDetail.foreignLanguage} />
                                    <Field label="Test Preparation" value={applicationDetail.testPreparation} />
                                    <Field label="Other Service" value={applicationDetail.otherService} />
                                    <Field label="Referral Source" value={applicationDetail.referralSource} />
                                </div>
                            </div>

                            {/* RULES & AGREEMENT */}
                            <div className="mt-3 border border-slate-800 rounded-sm px-5 py-3">
                                <SectionTitle dark>Terms & Agreement</SectionTitle>
                                <ol className="mt-2 space-y-1 text-[0.6875rem] leading-normal text-slate-600 list-decimal pl-5">
                                    <li>I will help the organization to provide best services and environment for my own success.</li>
                                    <li>I will follow guidelines and lessons for the success of enrolled services.</li>
                                    <li>I am fully aware that any violating nature and activities might lead to cancellation of the services.</li>
                                    <li>I will maintain respect, harmony, and sincerity with all people in the organization during and after the rendered service period.</li>
                                    <li>I will be liable for any damage done to the office assets and disparagement created to the organization reputation.</li>
                                    <li>I am agreed to submit all the required documents for my further processing.</li>
                                    <li>I will be responsible for everything if the submitted documents found unlawful and illicit.</li>
                                    <li>The fees once paid will not be refunded for any reason. However, the amount will be refunded only if the institution could not deliver the scheduled services.</li>
                                </ol>

                                <div className="mt-2 flex items-center gap-2">
                                    <input type="checkbox" checked={false} readOnly className="w-3.5 h-3.5 border-slate-400 rounded-sm" />
                                    <span className="text-[0.6875rem] font-semibold text-slate-700">
                                        I have read and agree to all the above terms and conditions.
                                    </span>
                                </div>

                                {/* SIGNATURES */}
                                <div className="grid grid-cols-3 gap-4 mt-4">
                                    <SigBox label="(LEFT THUMB)" />
                                    <SigBox label="(RIGHT THUMB)" />
                                    <div className="flex flex-col justify-end">
                                        <div className="h-20 border-b-2 border-dotted border-slate-400" />
                                        <p className="text-center text-[0.625rem] font-bold tracking-[0.12em] uppercase text-slate-500 mt-1.5">
                                            Applicant Signature
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* FOR OFFICE USE ONLY */}
                            <div className="mt-3 border-2 border-slate-400 rounded-lg overflow-hidden">
                                <div className="bg-slate-100 border-b border-slate-300 px-4 py-1.5 text-center">
                                    <span className="text-[0.625rem] font-bold tracking-[0.15em] uppercase text-slate-700">
                                        For Office Use Only
                                    </span>
                                </div>
                                <div className="px-4 py-2 space-y-2">
                                    <div className="flex items-end gap-2">
                                        <span className="text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-slate-600 whitespace-nowrap">Admission Officer:</span>
                                        <div className="flex-1 border-b border-dotted border-slate-400" />
                                        <span className="text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-slate-600 whitespace-nowrap ml-4">Signature / Stamp:</span>
                                        <div className="w-36 border-b border-dotted border-slate-400" />
                                    </div>
                                    <div className="flex items-end gap-2">
                                        <span className="text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-slate-600 whitespace-nowrap">Received Amount:</span>
                                        <div className="w-24 border-b border-dotted border-slate-400" />
                                        <span className="text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-slate-600 whitespace-nowrap ml-4">Due Amount:</span>
                                        <div className="w-24 border-b border-dotted border-slate-400" />
                                    </div>
                                    <div className="flex items-end gap-2">
                                        <span className="text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-slate-600 whitespace-nowrap">Remarks:</span>
                                        <div className="flex-1 border-b border-dotted border-slate-400" />
                                    </div>
                                </div>
                            </div>

                            {/* FOOTER */}
                            <div className="mt-3 flex justify-between text-[0.5625rem] text-slate-400 border-t border-slate-100 pt-3">
                                <span>ID: <span className="font-mono">{applicationDetail._id}</span></span>
                                <span>Created At: <span className="font-mono">{applicationDetail.createdAt}</span></span>
                                <span>Updated At: <span className="font-mono">{applicationDetail.updatedAt}</span></span>
                                <span>
                                    Issued: {new Date(applicationDetail.createdAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
                                </span>
                            </div>

                        </div>

                        {/* BOTTOM ACCENT BAR */}
                        <div className="h-1 bg-linear-to-r from-[#1a3a5c] via-[#2e6da4] to-[#c0392b]" />
                    </div>
                </div>
            </>
        );
    };
};

/* ─────────── HELPERS ─────────── */
function SectionTitle({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
    return (
        <div className={`flex items-center gap-3 mb-2 pb-1.5 border-b ${dark ? "border-slate-700" : "border-slate-200"}`}>
            <span className={`text-[0.625rem] font-bold tracking-[0.18em] uppercase ${dark ? "text-slate-800" : "text-slate-500"}`}>
                {children}
            </span>
        </div>
    );
}

function Field({ label, value }: { label: string; value: any }) {
    return (
        <div className="py-1.5 border-b border-dashed border-slate-200 last:border-0">
            <p className="text-[0.625rem] font-bold tracking-[0.12em] uppercase text-slate-400 mb-0.5">{label}</p>
            <p className="text-[0.75rem] font-medium text-slate-800">{String(value) || "—"}</p>
        </div>
    );
}

function SigBox({ label }: { label: string }) {
    return (
        <div className="border border-slate-200 rounded-sm p-2 flex flex-col items-center">
            <div className="h-13 w-full border border-dashed border-slate-300 bg-slate-50/60 rounded-sm" />
            <p className="text-[0.625rem] font-bold tracking-[0.12em] uppercase text-slate-400 mt-1.5">{label}</p>
        </div>
    );
}