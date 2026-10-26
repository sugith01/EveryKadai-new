import { useState, useRef, useEffect } from 'react';
import { PRICING_PLANS } from '../data/pricingData.ts';
import { ChevronDown, Shield, Award, Headphones, CheckCircle2, XCircle, Sparkles, Laptop } from 'lucide-react';
import { DownloadModal } from '../components/DownloadModal.tsx';

export const PricingPage = () => {
  const [durationTab, setDurationTab] = useState<'1year' | '3year'>('1year');
  const [isDeviceDropdownOpen, setIsDeviceDropdownOpen] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState<'Desktop'>('Desktop');
  const [isExpandedSilver, setIsExpandedSilver] = useState(false);
  const [isExpandedGold, setIsExpandedGold] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [showComparisonTable, setShowComparisonTable] = useState(false);

  const deviceDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        deviceDropdownRef.current &&
        !deviceDropdownRef.current.contains(event.target as Node)
      ) {
        setIsDeviceDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentPlans = PRICING_PLANS[durationTab] || PRICING_PLANS['1year'];
  const silverPlan = currentPlans.find((p) => p.name.toLowerCase() === 'silver') || currentPlans[0];
  const goldPlan = currentPlans.find((p) => p.name.toLowerCase() === 'gold') || currentPlans[1];

  const handleToggleComparison = () => {
    if (!showComparisonTable) {
      setShowComparisonTable(true);
      setTimeout(() => {
        const el = document.getElementById('comparison-matrix');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      setShowComparisonTable(false);
    }
  };

  const FEATURE_COMPARISON_MATRIX = [
    { feature: 'Multi-Counter Real-Time Sync', silver: 'Up to 2 Counters', gold: 'Unlimited Counters' },
    { feature: 'Company Profiles Supported', silver: '3 Companies', gold: '5 Companies' },
    { feature: 'Govt E-Way Bills Generation', silver: '10 per Month', gold: 'Unlimited' },
    { feature: 'Govt E-Invoice IRN & QR Generation', silver: 'Optional Add-on', gold: 'Included' },
    { feature: 'Remove Advertisement on Invoices', silver: 'Yes', gold: 'Yes' },
    { feature: 'Set Multiple Pricing for Items', silver: 'Yes', gold: 'Yes' },
    { feature: 'Bulk Item & Price Updates', silver: 'Yes', gold: 'Yes' },
    { feature: 'Export Data to Tally', silver: 'No', gold: 'Yes' },
    { feature: 'Restore Deleted Transactions', silver: '2 Transactions', gold: 'Unlimited' },
    { feature: 'Combine Multiple Orders / Challans', silver: 'No', gold: 'Yes' },
    { feature: 'Accounting Module & Ledgers', silver: 'No', gold: 'Yes' },
    { feature: 'Partywise Profit and Loss Report', silver: 'No', gold: 'Yes' },
    { feature: 'WhatsApp Connect Sharing', silver: 'No', gold: 'Yes' },
    { feature: 'POS Barcode & Thermal Printing', silver: 'Yes', gold: 'Yes' },
    { feature: 'Customer Credit Ledger (Udhar Khata)', silver: 'Yes', gold: 'Yes' },
    { feature: 'Dedicated VIP Support', silver: 'Standard Support', gold: 'Priority 7-Day Support' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-rose-50/60 via-slate-50/30 to-white pt-14 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-100 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-rose-700 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-rose-600" />
            <span>Fair &amp; Transparent Plans</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Simple, Affordable Pricing for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-700">
              Growing Businesses
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Choose the plan that fits your counter setup. Every plan includes full GST invoicing, automated inventory tracking, and 7-day customer support.
          </p>

          {/* Toggle Control Bar */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
            {/* Device Selector */}
            <div className="relative" ref={deviceDropdownRef}>
              <button
                type="button"
                onClick={() => setIsDeviceDropdownOpen(!isDeviceDropdownOpen)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold hover:border-slate-300 transition shadow-2xs cursor-pointer"
                aria-label="Select device"
              >
                <Laptop className="w-4 h-4 text-slate-500" />
                <span>{selectedDevice} Edition</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 stroke-[2.5]" />
              </button>

              {isDeviceDropdownOpen && (
                <div className="absolute left-0 mt-2 w-40 rounded-xl bg-white shadow-xl border border-slate-100 py-1.5 z-30">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedDevice('Desktop');
                      setIsDeviceDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm font-semibold bg-rose-50 text-rose-600 cursor-pointer"
                  >
                    Desktop Edition
                  </button>
                </div>
              )}
            </div>

            {/* Duration Selector Tabs */}
            <div className="inline-flex rounded-full bg-slate-100 p-1 border border-slate-200/80">
              <button
                type="button"
                onClick={() => setDurationTab('1year')}
                className={`px-5 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  durationTab === '1year'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                1 Year Plan
              </button>
              <button
                type="button"
                onClick={() => setDurationTab('3year')}
                className={`px-5 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer inline-flex items-center gap-2 ${
                  durationTab === '3year'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>3 Years Plan</span>
                <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-full ${
                  durationTab === '3year' ? 'bg-white text-rose-600' : 'bg-emerald-100 text-emerald-700'
                }`}>
                  Save 25%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Pricing Cards Container */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              
              {/* SILVER CARD */}
              <div className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-9 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300">
                <div>
                  {/* Card Header: Icon + Title */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                        <span className="text-xs font-black text-slate-600">Ag</span>
                      </div>
                      <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">{silverPlan.name} Plan</h3>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                      Starter
                    </span>
                  </div>

                  {/* Pricing Details */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg text-slate-400 line-through font-normal">
                        ₹{silverPlan.originalPrice}
                      </span>
                      <span className="text-4xl font-extrabold text-slate-900">
                        ₹{silverPlan.discountedPrice}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        / {durationTab === '1year' ? 'year' : '3 years'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      Equivalent to <strong className="text-slate-700">₹{silverPlan.monthlyEquivalent.toFixed(2)}</strong> per month
                    </p>
                  </div>

                  {/* CTA Button */}
                  <button
                    type="button"
                    onClick={() => setIsDownloadModalOpen(true)}
                    className="btn-secondary w-full py-3 px-4 text-sm font-bold shadow-xs hover:border-rose-400 hover:text-rose-600"
                  >
                    {silverPlan.buttonText}
                  </button>

                  {/* Divider */}
                  <div className="border-t border-slate-100 my-6" />

                  {/* Feature Checklist */}
                  <div className="space-y-3.5 mb-4">
                    {silverPlan.features.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13.5px] leading-relaxed">
                        {item.included ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                        )}
                        <span className={item.included ? 'text-slate-700 font-medium' : 'text-slate-400'}>
                          {item.name}
                        </span>
                      </div>
                    ))}

                    {/* Expandable Extra Features */}
                    {isExpandedSilver &&
                      silverPlan.extraFeatures.map((item, idx) => (
                        <div
                          key={`extra-${idx}`}
                          className="flex items-start gap-2.5 text-xs sm:text-[13.5px] leading-relaxed animate-in fade-in"
                        >
                          {item.included ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          ) : (
                            <XCircle className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                          )}
                          <span className={item.included ? 'text-slate-700 font-medium' : 'text-slate-400'}>
                            {item.name}
                          </span>
                        </div>
                      ))}
                  </div>

                  {/* Toggle More Features Link */}
                  <button
                    type="button"
                    onClick={() => setIsExpandedSilver(!isExpandedSilver)}
                    className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 mt-3 mb-2 cursor-pointer transition"
                  >
                    <span>{isExpandedSilver ? 'Show Less Features' : '+ View 16 More Features'}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isExpandedSilver ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* GOLD CARD (Recommended) */}
              <div className="relative rounded-3xl border-2 border-rose-500 bg-white flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Most Popular Attached Pill */}
                <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-rose-600 to-rose-700 text-white text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                  ★ Most Popular &amp; Best Value
                </div>

                <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-b from-rose-50/40 via-white to-white flex-1 flex flex-col justify-between">
                  <div>
                    {/* Card Header: Icon + Title */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center shrink-0">
                          <span className="text-xs font-black text-amber-700">Au</span>
                        </div>
                        <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">{goldPlan.name} Plan</h3>
                      </div>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-rose-100 text-rose-700">
                        Full Suite
                      </span>
                    </div>

                    {/* Pricing Details */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg text-slate-400 line-through font-normal">
                          ₹{goldPlan.originalPrice}
                        </span>
                        <span className="text-4xl font-extrabold text-slate-900">
                          ₹{goldPlan.discountedPrice}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          / {durationTab === '1year' ? 'year' : '3 years'}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 font-medium mt-1">
                        Equivalent to <strong className="text-slate-700">₹{goldPlan.monthlyEquivalent.toFixed(2)}</strong> per month
                      </p>
                    </div>

                    {/* CTA Button */}
                    <button
                      type="button"
                      onClick={() => setIsDownloadModalOpen(true)}
                      className="btn-primary w-full py-3.5 px-4 text-sm font-bold shadow-md hover:shadow-lg"
                    >
                      {goldPlan.buttonText}
                    </button>

                    {/* Divider */}
                    <div className="border-t border-slate-100 my-6" />

                    {/* Feature Checklist */}
                    <div className="space-y-3.5 mb-4">
                      {goldPlan.features.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13.5px] leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-slate-800 font-medium">{item.name}</span>
                        </div>
                      ))}

                      {/* Expandable Extra Features */}
                      {isExpandedGold &&
                        goldPlan.extraFeatures.map((item, idx) => (
                          <div
                            key={`extra-gold-${idx}`}
                            className="flex items-start gap-2.5 text-xs sm:text-[13.5px] leading-relaxed animate-in fade-in"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="text-slate-800 font-medium">{item.name}</span>
                          </div>
                        ))}
                    </div>

                    {/* Toggle More Features Link */}
                    <button
                      type="button"
                      onClick={() => setIsExpandedGold(!isExpandedGold)}
                      className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 mt-3 mb-2 cursor-pointer transition"
                    >
                      <span>{isExpandedGold ? 'Show Less Features' : '+ View 16 More Features'}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isExpandedGold ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Compare All Features Floating Button */}
            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={handleToggleComparison}
                className="btn-secondary px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-xs cursor-pointer hover:border-rose-400 hover:text-rose-600 inline-flex items-center gap-2"
              >
                <span>{showComparisonTable ? 'Hide Comparison Table' : 'Compare All 16+ Features Side-by-Side'}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    showComparisonTable ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      {showComparisonTable && (
        <section id="comparison-matrix" className="py-16 bg-slate-50 border-t border-b border-slate-200 transition-all duration-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Detailed Feature Comparison Matrix
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Compare capabilities side-by-side to choose the right plan for your business.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                      <th className="py-4 px-6">Feature Name</th>
                      <th className="py-4 px-6 text-center">Silver Plan</th>
                      <th className="py-4 px-6 text-center text-rose-600">Gold Plan (Recommended)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {FEATURE_COMPARISON_MATRIX.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/70 transition">
                        <td className="py-3.5 px-6 font-semibold text-slate-800">{row.feature}</td>
                        <td className="py-3.5 px-6 text-center text-slate-600">{row.silver}</td>
                        <td className="py-3.5 px-6 text-center font-bold text-slate-900">{row.gold}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-center mt-6">
              <button
                type="button"
                onClick={() => setShowComparisonTable(false)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition cursor-pointer underline"
              >
                Hide Comparison Table ↑
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Trust & Guarantee Badges */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center p-6 rounded-2xl bg-slate-50/60 border border-slate-200/80">
            <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-3">
              <Shield className="h-6 w-6" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">100% Secure Payments</h4>
            <p className="text-xs text-slate-500 mt-1">256-bit encrypted bank gateway transactions</p>
          </div>

          <div className="flex flex-col items-center p-6 rounded-2xl bg-slate-50/60 border border-slate-200/80">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
              <Award className="h-6 w-6" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">7-Day Free Trial</h4>
            <p className="text-xs text-slate-500 mt-1">Explore all premium capabilities with zero risk</p>
          </div>

          <div className="flex flex-col items-center p-6 rounded-2xl bg-slate-50/60 border border-slate-200/80">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <Headphones className="h-6 w-6" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">7-Day Live Support</h4>
            <p className="text-xs text-slate-500 mt-1">Dedicated phone, email &amp; WhatsApp specialists</p>
          </div>
        </div>
      </section>

      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </div>
  );
};
