"use client";

const countryOptions = ['Japan', 'UK', 'Australia', 'Korea', 'USA'];
const languageOptions = ['English', 'Japanese', 'Korean', 'Other'];
const serviceOptions = [
    'Translation',
    'Documentation Guidance',
    'College/University Placement',
    'Visa Application / Interview Preparation',
    'Others',
];

const sourceOptions = ['Newspaper', 'Board', 'Friends', 'Radio', 'Websites', 'Relatives', 'TV', 'Facebook', 'Others'];

export default function ApplyForm() {
    return (
        <form className="space-y-8 p-5 sm:p-6">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Name *</span>
                    <input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100" required placeholder="Full name" />
                </label>
                <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Email *</span>
                    <input type="email" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100" required placeholder="you@example.com" />
                </label>
                <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Phone Number *</span>
                    <input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100" required placeholder="98XXXXXXXX" />
                </label>
                <div className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Gender *</span>
                    <div className="flex flex-wrap gap-3 text-sm text-slate-700">
                        <label className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                            <input type="radio" name="gender" value="Male" required className="h-4 w-4 border-slate-300 text-blue-700" />
                            <span>Male</span>
                        </label>
                        <label className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                            <input type="radio" name="gender" value="Female" className="h-4 w-4 border-slate-300 text-blue-700" />
                            <span>Female</span>
                        </label>
                        <label className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                            <input type="radio" name="gender" value="Others" className="h-4 w-4 border-slate-300 text-blue-700" />
                            <span>Others</span>
                        </label>
                    </div>
                </div>
                <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Date of Birth (D/M/Y) *</span>
                    <input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100" required placeholder="DD/MM/YYYY" />
                </label>
                <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Father’s Name *</span>
                    <input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100" required placeholder="Father's name" />
                </label>
                <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Mother’s Name *</span>
                    <input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100" required placeholder="Mother's name" />
                </label>
                <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Phone/Mobile *</span>
                    <input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100" required placeholder="Parent/guardian number" />
                </label>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Immediate responsible person</span>
                    <input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100" placeholder="Name of responsible person" />
                </label>
                <label className="space-y-2">
                    <span className="text-sm font-semibold text-slate-700">Phone/Mobile of this person</span>
                    <input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-100" placeholder="Contact number" />
                </label>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm sm:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Service Taken</p>
                <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <div>
                        <h3 className="text-base font-black text-slate-900">Foreign Languages</h3>
                        <div className="mt-3 space-y-3 text-sm text-slate-700">
                            {languageOptions.map((item) => (
                                <label key={item} className="flex items-center gap-3">
                                    <input type="radio" name="foreignLanguage" value={item} className="h-4 w-4 border-slate-300 text-blue-700" />
                                    <span>{item}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-base font-black text-slate-900">Test Preparation</h3>
                        <div className="mt-3 space-y-3 text-sm text-slate-700">
                            {['IELTS', 'SAT', 'JLPT/NAT', 'Others'].map((item) => (
                                <label key={item} className="flex items-center gap-3">
                                    <input type="radio" name="testPreparation" value={item} className="h-4 w-4 border-slate-300 text-blue-700" />
                                    <span>{item}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-base font-black text-slate-900">Other Services</h3>
                        <div className="mt-3 space-y-3 text-sm text-slate-700">
                            {serviceOptions.map((item) => (
                                <label key={item} className="flex items-center gap-3">
                                    <input type="radio" name="otherService" value={item} className="h-4 w-4 border-slate-300 text-blue-700" />
                                    <span>{item}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm sm:p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Preferred Country</p>
                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-700 sm:grid-cols-3">
                        {countryOptions.map((item) => (
                            <label key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                                <input type="radio" name="preferredCountry" value={item} className="h-4 w-4 border-slate-300 text-blue-700" />
                                <span>{item}</span>
                            </label>
                        ))}
                        <label className="col-span-2 flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 sm:col-span-1">
                            <input type="radio" name="preferredCountry" value="Others" className="h-4 w-4 border-slate-300 text-blue-700" />
                            <span>Others</span>
                        </label>
                    </div>
                </div>

                <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm sm:p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">How Did You Hear About Us?</p>
                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-700 sm:grid-cols-3">
                        {sourceOptions.map((item) => (
                            <label key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                                <input type="radio" name="referralSource" value={item} className="h-4 w-4 border-slate-300 text-blue-700" />
                                <span>{item}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-linear-to-br from-blue-50 to-white p-5 shadow-sm sm:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Rules and Regulations</p>
                <ol className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
                    <li>1. I will help the organization to provice best services and environment for my own success.</li>
                    <li>2. I will follow guidelines and lessons for the success of enrolled services.</li>
                    <li>3. I am fully aware that any violating nature and activities might lead to cancellation of the services.</li>
                    <li>4. I will maintain respect, harmony, and sincerity with all people in the organization during and after the rendered service period.</li>
                    <li>5. I will be liable for any damage done to the office assets and disparagement created to the organization reputation.</li>
                    <li>6. I am agreed to submit all the required documents for my further processing.</li>
                    <li>7. I will be responsible for everything if the submitted documents found unlawful and illicit.</li>
                    <li>8. The fees once paid will not be refunded for any reason to the client. However, the amount will only be refunded if the institution could not deliver the schedule services.</li>
                </ol>

                <div className="mt-6 space-y-4">
                    <label className="flex items-start gap-3 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
                        <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-700" />
                        <span className="text-sm leading-7 text-slate-600">
                            I hereby, abide by all the rules and regulations of the organization.
                        </span>
                    </label>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <button type="submit" className="inline-flex items-center justify-center rounded-full bg-blue-700 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800">
                            Submit Admission Form
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}