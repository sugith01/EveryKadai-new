import { useState } from 'react';
import { MapPin, Clock, CheckCircle, X, Sparkles, Coffee, HeartHandshake, TrendingUp, Briefcase, ArrowRight } from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  dept: string;
  location: string;
  type: string;
  experience: string;
}

export const CareersPage = () => {
  const [selectedDept, setSelectedDept] = useState('All');
  const [applyingJob, setApplyingJob] = useState<JobPosition | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');

  const JOBS: JobPosition[] = [
    { id: '1', title: 'Senior Frontend Engineer (React/TypeScript)', dept: 'Engineering', location: 'Bengaluru (On-site)', type: 'Full-time', experience: '4-7 Years' },
    { id: '2', title: 'Backend Software Architect (Node.js/Go)', dept: 'Engineering', location: 'Bengaluru (Hybrid)', type: 'Full-time', experience: '6+ Years' },
    { id: '3', title: 'Senior Product Manager - GST Compliance', dept: 'Product', location: 'Bengaluru (On-site)', type: 'Full-time', experience: '3-6 Years' },
    { id: '4', title: 'Senior UI/UX Product Designer', dept: 'Design', location: 'Bengaluru (On-site)', type: 'Full-time', experience: '3-5 Years' },
    { id: '5', title: 'Enterprise Channel Sales Manager', dept: 'Sales', location: 'Mumbai / Delhi', type: 'Full-time', experience: '4-8 Years' },
    { id: '6', title: 'Customer Success Team Lead', dept: 'Customer Support', location: 'Bengaluru (On-site)', type: 'Full-time', experience: '2-4 Years' },
  ];

  const PERKS = [
    { icon: TrendingUp, title: "High-Growth Scaling", desc: "Build systems that handle over 5 Lakh daily invoices for 1.5 Crore businesses." },
    { icon: Coffee, title: "Vibrant Work Culture", desc: "Collaborative, open environment with flexible hours and team celebrations." },
    { icon: HeartHandshake, title: "Health & Wellness", desc: "Comprehensive health insurance for you and your family, plus mental wellness support." },
    { icon: Sparkles, title: "Learning & Up-skilling", desc: "Generous conference allowances, certifications, and technical book stipends." },
  ];

  const filteredJobs = selectedDept === 'All' ? JOBS : JOBS.filter(j => j.dept === selectedDept);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const closeApplyModal = () => {
    setApplyingJob(null);
    setFormSubmitted(false);
    setApplicantName('');
    setApplicantEmail('');
    setApplicantPhone('');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-rose-50/70 via-slate-50/40 to-white py-16 lg:py-24 border-b border-slate-200/80 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(225,29,72,0.08),rgba(255,255,255,0))] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-rose-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Briefcase className="h-3.5 w-3.5 text-rose-500" />
            <span>We Are Hiring Top Talent</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Build the Future of <span className="bg-gradient-to-r from-rose-600 to-rose-700 bg-clip-text text-transparent">Indian Commerce</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Join our mission to digitize millions of Indian businesses. Work with passionate engineers and leaders solving deep real-world problems.
          </p>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="py-16 lg:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-3">
            <Sparkles className="h-3.5 w-3.5 text-rose-600" />
            <span>Culture & Growth</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Life at EveryKadai
          </h2>
          <p className="text-sm text-slate-600 mt-2 max-w-lg mx-auto">
            We empower our teammates with autonomy, ownership, and comprehensive benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PERKS.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div key={idx} className="card-everykadai p-6 text-center hover:border-rose-300 hover:shadow-lg transition-all group">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 mx-auto mb-4 border border-rose-100 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-1">{perk.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{perk.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 lg:py-20 bg-slate-50/60 border-y border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Current Openings
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Explore open roles across technology, product, design, and sales teams.
              </p>
            </div>

            {/* Department Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {['All', 'Engineering', 'Product', 'Design', 'Sales', 'Customer Support'].map((dept) => (
                <button
                  key={dept}
                  type="button"
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer ${
                    selectedDept === dept
                      ? 'bg-rose-600 text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job List */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="card-everykadai p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-rose-300 hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">
                      {job.dept}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs text-slate-500 font-medium">{job.experience}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mt-2">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-slate-400" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-slate-400" />
                      {job.type}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setApplyingJob(job)}
                  className="btn-primary px-5 py-2.5 text-xs font-bold shrink-0 self-end sm:self-center cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {applyingJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="relative w-full max-w-lg rounded-2xl bg-white p-7 shadow-2xl border border-slate-200">
            <button
              onClick={closeApplyModal}
              className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
            >
              <X className="h-5 w-5" />
            </button>

            {formSubmitted ? (
              <div className="text-center py-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mx-auto mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Application Received!</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Thank you, <strong>{applicantName}</strong>. Our recruitment team will review your application for <strong>{applyingJob.title}</strong> and reach out shortly.
                </p>
                <button
                  onClick={closeApplyModal}
                  className="btn-primary w-full py-2.5 text-sm font-semibold"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  Apply for {applyingJob.title}
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  {applyingJob.dept} • {applyingJob.location}
                </p>

                <form onSubmit={handleApplySubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full rounded-xl border border-slate-300 py-2.5 px-3.5 text-sm focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="rahul@example.com"
                      className="w-full rounded-xl border border-slate-300 py-2.5 px-3.5 text-sm focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-slate-300 py-2.5 px-3.5 text-sm focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">LinkedIn Profile or Resume Link</label>
                    <input
                      type="url"
                      required
                      placeholder="https://linkedin.com/in/username"
                      className="w-full rounded-xl border border-slate-300 py-2.5 px-3.5 text-sm focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-hidden"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-3 text-sm font-bold shadow-md hover:shadow-lg mt-2 cursor-pointer"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
