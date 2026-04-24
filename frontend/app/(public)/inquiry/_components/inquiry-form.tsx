"use client";

const destinations = ['Japan', 'UK', 'Australia', 'Korea', 'USA'];

export default function InquiryForm() {
    return (
        <form className="mt-6 space-y-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Full Name *</span>
                    <input
                        name="name"
                        required
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                        placeholder="Enter your full name"
                    />
                </label>
                <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Email Address *</span>
                    <input
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                        placeholder="you@example.com"
                    />
                </label>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Phone Number *</span>
                    <input
                        name="phone"
                        required
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                        placeholder="9800000000"
                    />
                </label>
                <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Address *</span>
                    <input
                        name="address"
                        required
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                        placeholder="Enter your address"
                    />
                </label>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Academic Level *</span>
                    <select
                        name="academicLevel"
                        required
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                        defaultValue=""
                    >
                        <option value="" disabled>Select your level</option>
                        <option>+2 / High School</option>
                        <option>Bachelor Completed</option>
                        <option>Master Completed</option>
                        <option>Other</option>
                    </select>
                </label>
                <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Preferred Destination *</span>
                    <select
                        name="destination"
                        required
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                        defaultValue=""
                    >
                        <option value="" disabled>Select a destination</option>
                        {destinations.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                </label>
            </div>

            <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">Your Message</span>
                <textarea
                    name="message"
                    rows={5}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    placeholder="Tell us about your goals, budget, or questions..."
                />
            </label>
            <label className="flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50/50 p-4">
                <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-700" />
                <span className="text-sm leading-7 text-slate-600">
                    I agree to be contacted by Butwal Phoenix Education Hub regarding my inquiry.
                </span>
            </label>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-blue-700 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800"
                >
                    Submit Inquiry
                </button>
            </div>
        </form>
    );
}