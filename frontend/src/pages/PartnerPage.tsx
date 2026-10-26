import { useState } from 'react';
import { TrendingUp, Users, CheckCircle, Award, PhoneCall, Handshake, ShieldCheck } from 'lucide-react';

export const PartnerPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    state: '',
    firmName: '',
    businessType: 'IT Hardware Dealer',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const PARTNER_BENEFITS = [
    { icon: TrendingUp, title: "High Recurring Margins", desc: "Earn up to 40% commission margins on every new license sale and annual renewal." },
    { icon: Users, title: "Dedicated Relationship Manager", desc: "Get prioritized partner assistance, marketing collaterals, and leads in your region." },
    { icon: Award, title: "Official Certification", desc: "Become a Certified EveryKadai Implementation Partner recognized in your city." },
    { icon: PhoneCall, title: "Priority Support Queue", desc: "Dedicated partner technical escalation helpline open 7 days a week." },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-rose-50/70 via-slate-50/40 to-white py-16 lg:py-24 border-b border-slate-200/80 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(225,29,72,0.08),rgba(255,255,255,0))] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-rose-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Handshake className="h-3.5 w-3.5 text-rose-500" />
            <span>Distributor & Channel Program</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Partner With India's <span className="bg-gradient-to-r from-rose-600 to-rose-700 bg-clip-text text-transparent">#1 Billing Software</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Grow your business revenue by recommending EveryKadai to retail shops, wholesalers, and businesses in your local area.
          </p>
        </div>
      </section>

      {/* Main Content & Registration Form */}
      <section className="py-16 lg:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Benefits & Value Prop */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-2 block">
                Channel Growth
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                Why Become an EveryKadai Partner?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Join over 5,000 active distributors across India who generate consistent monthly income helping retailers digitize their businesses.
              </p>
            </div>

            <div className="space-y-4">
              {PARTNER_BENEFITS.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-rose-200 hover:bg-white hover:shadow-md transition-all">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 border border-rose-100 shrink-0 mt-0.5">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base mb-1">{benefit.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 flex items-center gap-3.5 text-xs text-emerald-800">
              <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0" />
              <span>Zero upfront security deposit. Direct bank payouts on the 1st of every month with full transparency.</span>
            </div>
          </div>

          {/* Right Column: Registration Form */}
          <div className="lg:col-span-6">
            <div className="card-everykadai p-8 sm:p-9 border border-slate-200/80 shadow-xl bg-white">
              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mx-auto">
                    <CheckCircle className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Application Submitted!</h3>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Our Regional Partner Team will review your application and call you within 24 hours to complete your distributor onboarding.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary px-8 py-3 text-sm font-semibold cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Partner Registration</h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Fill out this quick form to receive our official distributor commission kit.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Amit Kumar"
                          className="w-full rounded-xl border border-slate-300 py-2.5 px-3.5 text-sm focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                          placeholder="10 digit number"
                          className="w-full rounded-xl border border-slate-300 py-2.5 px-3.5 text-sm focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-hidden"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="amit@example.com"
                        className="w-full rounded-xl border border-slate-300 py-2.5 px-3.5 text-sm focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-hidden"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">City *</label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="e.g. Pune"
                          className="w-full rounded-xl border border-slate-300 py-2.5 px-3.5 text-sm focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">State *</label>
                        <input
                          type="text"
                          required
                          value={formData.state}
                          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                          placeholder="e.g. Maharashtra"
                          className="w-full rounded-xl border border-slate-300 py-2.5 px-3.5 text-sm focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-hidden"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Current Business Type</label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full rounded-xl border border-slate-300 py-2.5 px-3.5 text-sm focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-hidden bg-white text-slate-800"
                      >
                        <option value="IT Hardware Dealer">IT Hardware Dealer / Computer Shop</option>
                        <option value="Chartered Accountant (CA)">Chartered Accountant (CA) / Tax Practitioner</option>
                        <option value="Software Reseller">Software Reseller / ERP Consultant</option>
                        <option value="POS Hardware Vendor">POS & Thermal Printer Vendor</option>
                        <option value="Other">Other Business Consultant</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full py-3.5 text-base font-bold shadow-lg hover:shadow-xl mt-3 cursor-pointer"
                    >
                      Join EveryKadai Partner Network
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
