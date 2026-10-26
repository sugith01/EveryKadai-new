import { useState } from 'react';
import { X, Download, CheckCircle, ShieldCheck, Loader2 } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal = ({ isOpen, onClose }: DownloadModalProps) => {
  const [phone, setPhone] = useState('');
  const [downloading, setDownloading] = useState(false);
  const [complete, setComplete] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleStartDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      setError('Please provide a valid 10-digit mobile number');
      return;
    }
    setError('');
    setDownloading(true);

    // Simulate download start sequence
    setTimeout(() => {
      setDownloading(false);
      setComplete(true);
      // Trigger actual official direct download file
      window.open('https://billing.vyaparapp.in/Vyapar-Install', '_blank');
    }, 1200);
  };

  const handleReset = () => {
    setDownloading(false);
    setComplete(false);
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-7 sm:p-8 shadow-2xl border border-slate-150 transition-all">
        <button
          onClick={handleReset}
          className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition cursor-pointer"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {complete ? (
          <div className="text-center py-4 space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle className="h-8 w-8 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                Your Download Has Started!
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                Check your browser's download manager. Run the installer file to initiate your 7-day free trial on Windows.
              </p>
            </div>
            <button
              onClick={handleReset}
              className="btn-primary w-full py-3 text-sm font-semibold mt-4"
            >
              Continue Exploring
            </button>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 mb-3 border border-rose-100 shadow-xs">
                <Download className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Download EveryKadai PC
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Enter your mobile number to get the installer link &amp; free trial activation key.
              </p>
            </div>

            <form onSubmit={handleStartDownload} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5 text-left">
                  Mobile Number
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-sm font-bold text-slate-500">
                    +91
                  </span>
                  <input
                    type="tel"
                    maxLength={10}
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value.replace(/\D/g, ''));
                      if (error) setError('');
                    }}
                    placeholder="Enter 10-digit number"
                    className="w-full rounded-xl border border-slate-200 py-3 pl-14 pr-4 text-sm font-semibold text-slate-900 focus:border-rose-500 focus:outline-hidden focus:ring-2 focus:ring-rose-100 transition bg-slate-50/50 focus:bg-white"
                  />
                </div>
                {error && <p className="text-xs text-rose-600 mt-1.5 text-left font-medium">{error}</p>}
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 pt-1 text-left">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>100% Virus-Free &amp; Verified. Trusted by 1.5 Cr+ Indian businesses.</span>
              </div>

              <button
                type="submit"
                disabled={downloading}
                className="btn-primary w-full py-3.5 text-sm font-bold shadow-md hover:shadow-lg disabled:opacity-70 mt-2"
              >
                {downloading ? (
                  <span className="inline-flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Preparing Installer...</span>
                  </span>
                ) : (
                  <span>Start Free Windows Download</span>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
