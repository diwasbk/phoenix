"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Eye, Pencil, Trash2, Search } from "lucide-react";
import { handleDeleteApplicationByID, handleGetAllApplication } from "@/app/lib/actions/application-actions";
import { toast } from "react-toastify";

const AVATAR_COLORS = [
  "bg-blue-100 text-blue-700",
  "bg-emerald-100 text-emerald-700",
  "bg-amber-100 text-amber-700",
  "bg-violet-100 text-violet-700",
  "bg-rose-100 text-rose-700",
];

const TEST_BADGE: Record<string, string> = {
  IELTS: "bg-blue-100 text-blue-700 border-blue-200 w-[75px] justify-center",
  SAT: "bg-amber-100 text-amber-700 border-amber-200 w-[75px] justify-center",
  "JLPT / NAT": "bg-violet-100 text-violet-700 border-violet-200 w-[75px] justify-center",
  Others: "bg-rose-100 text-rose-700 border-rose-200 uppercase w-[75px] justify-center"
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

export default function ApplicationTable() {
  const [applications, setapplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [applicationToDelete, setApplicationToDelete] = useState<string | null>(null);

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const res = await handleGetAllApplication();

        if (res.success) {
          setapplications(res.result);

        } else {
          throw new Error(res.message || "Failed to fetch applications!");
        };

      } catch (err: any) {
        toast.error(err.message || "Failed to fetch applications!");

      } finally {
        setLoading(false);
      };
    };

    fetchApplication();
  }, []);


  // filtering
  const filtered = (applications ?? []).filter((application) => {
    const q = query.toLowerCase();

    return (
      application.fullName.toLowerCase().includes(q) ||
      application.gender.toLowerCase().includes(q) ||
      application.email.toLowerCase().includes(q) ||
      application.preferredCountry.toLowerCase().includes(q) ||
      application.testPreparation.toLowerCase().includes(q)
    );
  });

  // Delete Application By ID
  const deleteApplicationByID = async (applicationId: string) => {
    try {
      const res = await handleDeleteApplicationByID(applicationId);

      if (res.success) {
        toast.success(res.message || "Application deleted successfully!");
        // Remove the deleted application from the list
        setapplications(applications.filter((app) => app._id !== applicationId));
        setConfirmDelete(false);
        setApplicationToDelete(null);

      } else {
        throw new Error(res.message || "Failed to delete application!");
      };

    } catch (err: any) {
      toast.error(err.message || "Failed to delete application!");
      setConfirmDelete(false);
      setApplicationToDelete(null);
    };
  };

  // Handle Delete Click
  const handleDeleteClick = (applicationId: string) => {
    setApplicationToDelete(applicationId);
    setConfirmDelete(true);
  };

  // Handle Confirm Delete
  const handleConfirmDelete = () => {
    if (applicationToDelete) {
      deleteApplicationByID(applicationToDelete);
    }
  };

  // Handle Cancel Delete
  const handleCancelDelete = () => {
    setConfirmDelete(false);
    setApplicationToDelete(null);
  };

  return (
    <div className="p-6 space-y-5">
      {/* Toolbar */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-2xl font-semibold text-gray-100">APPLICATIONS</h2>
          <p className="text-semibold text-gray-200 mt-0.5">
            {filtered.length} application{filtered.length !== 1 ? "s" : ""} found
          </p>
        </div>

        <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2 shadow-sm">
          <Search className="w-3.5 h-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search applications…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="text-sm text-slate-700 placeholder:text-slate-400 outline-none w-44 bg-transparent"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="px-5 py-3 text-[12px] font-sm text-slate-400 uppercase tracking-widest whitespace-nowrap">
                  application
                </th>
                <th className="px-5 py-3 text-[12px] font-sm text-slate-400 uppercase tracking-widest whitespace-nowrap">
                  Contact
                </th>
                <th className="px-5 py-3 text-[12px] font-sm text-slate-400 uppercase tracking-widest whitespace-nowrap">
                  Address
                </th>
                <th className="px-5 py-3 text-[12px] font-sm text-slate-400 uppercase tracking-widest whitespace-nowrap">
                  Preference
                </th>
                <th className="px-5 py-3 text-[12px] font-sm text-slate-400 uppercase tracking-widest whitespace-nowrap">
                  Test
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
              {filtered.map((application, idx) => (
                <tr
                  key={application._id}
                  className="hover:bg-slate-50/70 transition-colors duration-150"
                >
                  {/* application */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${AVATAR_COLORS[idx % AVATAR_COLORS.length]
                          }`}
                      >
                        {getInitials(application.fullName)}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-700">
                          {application.fullName.toUpperCase()}
                        </p>
                        <p className="text-[11px] text-slate-400 tracking-wide mt-0.5">
                          {application.gender}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Contact */}
                  <td className="px-5 py-4">
                    <p className="text-sm text-slate-700">{application.email}</p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {application.phoneNumber}
                    </p>
                  </td>

                  {/* Address */}
                  <td className="px-5 py-4">
                    <p className="text-sm text-slate-700">{application.address}</p>
                  </td>

                  {/* Preferred Country */}
                  <td className="px-5 py-4">
                    <span className="text-sm font-medium text-slate-700">
                      {application.preferredCountry}
                    </span>
                  </td>

                  {/* Test */}
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-full border ${TEST_BADGE[application.testPreparation] ||
                        "bg-slate-50 text-slate-600 border-slate-200"
                        }`}
                    >
                      {application.testPreparation}
                    </span>
                  </td>

                  {/* Date */}
                  <td className="px-5 py-4">
                    <span className="text-sm text-slate-500">
                      {formatDate(application.createdAt)}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/applications/${application._id}`}
                        className="w-10 h-10 flex items-center justify-center rounded-4xl border border-slate-200 text-gray-100 bg-blue-500 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors hover:cursor-pointer"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>

                      <Link
                        href={`/admin/applications/update/${application._id}`}
                        className="w-10 h-10 flex items-center justify-center rounded-4xl border border-slate-200 text-gray-100 bg-green-500 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-colors hover:cursor-pointer">
                        <Pencil className="w-4 h-4" />
                      </Link>

                      <button
                        onClick={() => { handleDeleteClick(application._id) }}
                        className="w-10 h-10 flex items-center justify-center rounded-4xl border border-slate-200 text-gray-100 bg-red-500 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-colors hover:cursor-pointer">
                        <Trash2 className="w-4 h-4" />
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
            <div className="p-3 bg-blue-50 border border-blue-300 text-sm font-semibold text-blue-500 mt-5 rounded-4xl"> Loading applications...</div>
          )}
        </div>

        <div className="max-w-3xl mx-auto">
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <Search className="w-10 h-10 text-slate-200 mx-auto" />
            <p className="text-slate-400 font-medium mt-4 text-sm">
              No applications match your search.
            </p>
          </div>
        )}
      </div>

      {/* Confirmation Dialog */}
      {confirmDelete && (
        <div className="fixed inset-0 bg-blue-800/22 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Delete Application
            </h3>
            <p className="text-slate-600 text-sm mb-6">
              Are you sure you want to delete this application? This action cannot be undone.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={handleCancelDelete}
                className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors hover:cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition-colors hover:cursor-pointer"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}