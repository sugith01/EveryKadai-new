import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const LoginPage = () => {
  const [activeTab, setActiveTab] = useState<'otp' | 'password'>('otp');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState(['', '', '', '', '', '']);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length === 10) {
      setOtpSent(true);
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handlePasswordLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  const handleOtpChange = (val: string, index: number) => {
    const updated = [...otpCode];
    updated[index] = val.slice(-1);
    setOtpCode(updated);

    // Auto-focus next input
    if (val && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  return (
    <div className="bg-gradient-to-b from-rose-50/50 via-slate-50 to-white min-h-[calc(100vh-72px)] flex items-center justify-center py-14 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="rounded-3xl p-8 sm:p-10 bg-white border border-slate-200/90 shadow-xl">
          {/* Header */}
          <div className="text-center mb-8">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2.5 mb-4 group cursor-pointer"
              aria-label="EveryKadai Home"
            >
              <div className="relative flex items-center justify-center h-10 w-10">
                <svg viewBox="0 0 36 36" fill="none" className="h-10 w-10 transition-transform duration-200 group-hover:scale-105">
                  <path d="M4 7L18 2L32 7L18 33L4 7Z" fill="#e11d48" />
                  <path d="M18 2L32 7L24 19L18 2Z" fill="#f59e0b" />
                  <path d="M11 15L18 33L24 19L11 15Z" fill="#be123c" />
                </svg>
              </div>
              <span className="text-[26px] font-extrabold tracking-tight text-rose-600">
                Every<span className="text-slate-900">Kadai</span>
              </span>
            </Link>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Sign In to Your Account
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1.5">
              Access your business books, reports, and sync across counters.
            </p>
          </div>

          {/* Login Tabs */}
          <div className="flex rounded-2xl bg-slate-100 p-1 mb-6 border border-slate-200/80">
            <button
              type="button"
              onClick={() => setActiveTab('otp')}
              className={`flex-1 py-2 text-xs font-bold rounded-xl transition cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === 'otp'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Phone className="h-3.5 w-3.5" />
              <span>Mobile OTP</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('password')}
              className={`flex-1 py-2 text-xs font-bold rounded-xl transition cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === 'password'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Email &amp; Password</span>
            </button>
          </div>

          {isLoggedIn ? (
            <div className="text-center py-6 space-y-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mx-auto">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Login Successful!</h3>
              <p className="text-xs text-slate-500">
                Welcome back to your EveryKadai dashboard. Syncing company files...
              </p>
              <Link
                to="/"
                className="btn-primary w-full py-3 text-sm font-semibold inline-block text-center shadow-md"
              >
                Go to Homepage
              </Link>
            </div>
          ) : activeTab === 'otp' ? (
            !otpSent ? (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                    Registered Mobile Number
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-sm font-bold text-slate-400">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                      placeholder="Enter 10-digit number"
                      className="w-full rounded-xl border border-slate-200 py-3 pl-14 pr-4 text-sm font-semibold text-slate-900 focus:border-rose-500 focus:outline-hidden focus:ring-2 focus:ring-rose-100 transition bg-slate-50/50 focus:bg-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={phone.length !== 10}
                  className="btn-primary w-full py-3.5 text-sm font-bold shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer"
                >
                  Get One-Time Password
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <div className="text-center mb-2">
                  <p className="text-xs text-slate-600">
                    Enter the 6-digit verification code sent to <strong className="text-slate-900">+91 {phone}</strong>
                  </p>
                  <button
                    type="button"
                    onClick={() => setOtpSent(false)}
                    className="text-xs text-rose-600 font-semibold hover:underline mt-1 cursor-pointer"
                  >
                    Change Mobile Number
                  </button>
                </div>

                {/* 6 Digit OTP Inputs */}
                <div className="flex justify-between gap-2 my-4">
                  {[0, 1, 2, 3, 4, 5].map((idx) => (
                    <input
                      key={idx}
                      id={`otp-${idx}`}
                      type="text"
                      maxLength={1}
                      value={otpCode[idx]}
                      onChange={(e) => handleOtpChange(e.target.value, idx)}
                      className="h-12 w-11 rounded-xl border border-slate-200 text-center font-bold text-lg text-slate-900 focus:border-rose-500 focus:outline-hidden focus:ring-2 focus:ring-rose-100 transition bg-slate-50/50 focus:bg-white"
                    />
                  ))}
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-3.5 text-sm font-bold shadow-md hover:shadow-lg cursor-pointer"
                >
                  Verify &amp; Sign In
                </button>
              </form>
            )
          ) : (
            <form onSubmit={handlePasswordLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Business Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@business.com"
                  className="w-full rounded-xl border border-slate-200 py-3 px-4 text-sm font-semibold text-slate-900 focus:border-rose-500 focus:outline-hidden focus:ring-2 focus:ring-rose-100 transition bg-slate-50/50 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Account Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-200 py-3 px-4 text-sm font-semibold text-slate-900 focus:border-rose-500 focus:outline-hidden focus:ring-2 focus:ring-rose-100 transition bg-slate-50/50 focus:bg-white"
                />
              </div>

              <button
                type="submit"
                disabled={!email || !password}
                className="btn-primary w-full py-3.5 text-sm font-bold shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer"
              >
                Sign In with Password
              </button>
            </form>
          )}

          {/* Security Notice */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>256-Bit Bank-Grade SSL Encryption</span>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-slate-500">
          New to EveryKadai?{' '}
          <Link to="/" className="text-rose-600 font-bold hover:underline">
            Start Free 7-Day Trial
          </Link>
        </div>
      </div>
    </div>
  );
};
