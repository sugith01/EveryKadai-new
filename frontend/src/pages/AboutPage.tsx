import { Link } from 'react-router-dom';
import { Target, Heart, Users, MapPin, Building, ShieldCheck, ArrowRight, Award, Sparkles } from 'lucide-react';

export const AboutPage = () => {
  const MILESTONES = [
    { year: "2016", title: "Founded in Bengaluru", desc: "Started with a vision to digitize traditional Indian pen-and-paper ledger bookkeeping." },
    { year: "2018", title: "10 Lakh+ Businesses", desc: "Crossed 1 million app downloads, launching full GST invoicing & automated tax calculation." },
    { year: "2020", title: "Windows PC Software Launch", desc: "Introduced dedicated offline Windows desktop software for fast supermarket & retail counter billing." },
    { year: "2022", title: "Series B Investment", desc: "Backed by tier-1 global investors including WestBridge Capital and India Quotient to scale pan-India support." },
    { year: "2024", title: "Multi-Store & E-Invoice Integration", desc: "Direct government IRP portal synchronization and multi-location warehouse management." },
    { year: "2026", title: "1.5 Crore+ Indian MSMEs", desc: "The definitive market leader in Indian small business billing, accounting, and inventory management." },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-rose-50/70 via-slate-50/40 to-white py-16 lg:py-24 border-b border-slate-200/80 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(225,29,72,0.08),rgba(255,255,255,0))] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-rose-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-rose-500" />
            <span>Our Story & Mission</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Empowering <span className="bg-gradient-to-r from-rose-600 to-rose-700 bg-clip-text text-transparent">1.5 Crore+</span> Small Businesses Across India
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            EveryKadai was built on a single, powerful belief: Every Indian business owner deserves accounting and billing software that is simple, affordable, and requires zero technical training.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 lg:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-everykadai p-8 bg-gradient-to-br from-rose-50/40 via-white to-white border border-rose-100 hover:border-rose-200 transition-all">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100/80 text-rose-600 mb-5 shadow-xs">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Our Mission</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              To make business accounting effortless for every MSME in India. We eliminate manual calculation errors, save countless hours of bookkeeping paperwork, and help business owners grow their profits with real-time digital insights.
            </p>
          </div>

          <div className="card-everykadai p-8 bg-gradient-to-br from-blue-50/40 via-white to-white border border-blue-100 hover:border-blue-200 transition-all">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100/80 text-blue-600 mb-5 shadow-xs">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Our Core Values</h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Customer obsession drives every feature we design. We prioritize extreme software simplicity over bloated complexity, guarantee 100% data privacy and security, and provide supportive customer service 7 days a week.
            </p>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-16 lg:py-20 bg-slate-50/60 border-y border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-3">
              <Award className="h-3.5 w-3.5 text-rose-600" />
              <span>Decade of Excellence</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Journey of Innovation (2016 – 2026)
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-xl mx-auto">
              A decade of non-stop dedication to India's retail and MSME ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MILESTONES.map((item, idx) => (
              <div key={idx} className="card-everykadai p-7 bg-white hover:border-rose-300 hover:shadow-lg transition-all group">
                <span className="text-2xl font-black text-rose-600 block mb-2 font-heading tracking-tight group-hover:scale-105 transition-transform origin-left">
                  {item.year}
                </span>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Office Location */}
      <section className="py-16 lg:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-rose-600 mb-2">
              Corporate Headquarters
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
              EveryKadai Technologies Pvt. Ltd.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              Our team of 300+ engineers, product designers, customer support specialists, and tax experts works out of our technology center in Bengaluru, Karnataka.
            </p>
            <div className="space-y-3.5 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                <span>Outer Ring Road, Bellandur, Bengaluru, Karnataka 560103</span>
              </div>
              <div className="flex items-center gap-3">
                <Building className="h-5 w-5 text-rose-600 shrink-0" />
                <span>Registered with Ministry of Corporate Affairs, India</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-rose-600 shrink-0" />
                <span>ISO 27001 Certified for Information Security Management</span>
              </div>
            </div>
            <div className="pt-8">
              <Link
                to="/careers"
                className="btn-primary px-6 py-3 text-sm font-semibold inline-flex items-center gap-2 group"
              >
                <span>Join Our Growing Team</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="card-everykadai p-8 sm:p-10 bg-gradient-to-br from-slate-50 to-white border border-slate-200 text-center shadow-md">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 mx-auto mb-4 border border-rose-100 shadow-xs">
              <Users className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Want to Partner With Us?</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              Join thousands of chartered accountants, hardware distributors, and IT resellers who earn steady recurring commissions by recommending EveryKadai.
            </p>
            <Link
              to="/distributor/create"
              className="px-6 py-3 rounded-full bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition inline-flex items-center gap-2 shadow-sm"
            >
              <span>Become a Partner / Distributor</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
