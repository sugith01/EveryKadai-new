import { useState } from 'react';
import { Download, Laptop, CheckCircle2, WifiOff, Printer, Barcode, Cpu } from 'lucide-react';
import { DownloadModal } from '../components/DownloadModal.tsx';
import { desktopHero } from '../assets/images/index.ts';

export const DesktopPage = () => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const DESKTOP_FEATURES = [
    {
      icon: WifiOff,
      title: "100% Offline Capability",
      desc: "Never let internet outages stop store checkouts. Create bills, print invoices, and update stock offline. Data automatically syncs when connected.",
    },
    {
      icon: Printer,
      title: "Thermal Printer & Cash Drawer",
      desc: "Instant plug-and-play driver support for all 2-inch and 3-inch thermal printers (ESC/POS compatible) and automated cash drawers.",
    },
    {
      icon: Barcode,
      title: "High-Speed Barcode Billing",
      desc: "Scan barcodes using USB or wireless barcode readers with zero latency. Add custom barcodes and print barcode sticker labels.",
    },
    {
      icon: Cpu,
      title: "Ultra-Lightweight & Fast",
      desc: "Optimized native desktop application that boots up in under 2 seconds and runs smoothly even on older Windows PC configurations.",
    },
  ];

  const SYSTEM_REQUIREMENTS = [
    { label: "Operating System", value: "Windows 11, 10, 8.1, or 7 (32-bit & 64-bit)" },
    { label: "Memory (RAM)", value: "Minimum 2 GB RAM (4 GB recommended)" },
    { label: "Storage", value: "At least 500 MB free hard drive space" },
    { label: "Display Resolution", value: "1024 x 768 or higher display resolution" },
    { label: "Printers Supported", value: "Laser, Inkjet, Dot Matrix, Thermal (58mm & 80mm)" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-rose-50/60 via-slate-50/30 to-white py-16 lg:py-24 border-b border-slate-100">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-rose-700 text-xs font-bold uppercase tracking-wider shadow-2xs">
                <Laptop className="h-4 w-4 text-rose-600" />
                <span>Windows PC Edition</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Best GST Billing &amp; Accounting Software for PC
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Experience ultra-fast counter billing with keyboard shortcuts, barcode scanner integration, and offline reliability built for retail counters and wholesale distributors.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  type="button"
                  onClick={() => setIsDownloadModalOpen(true)}
                  className="btn-primary w-full sm:w-auto px-9 py-4 text-base font-bold shadow-xl hover:shadow-2xl transition cursor-pointer"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download for Windows PC
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 pt-2 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Version 2026.1 (Latest)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>100% Virus &amp; Malware Free</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Free 7-Day Trial</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200/90 bg-white p-2 shadow-2xl">
                {/* Window titlebar */}
                <div className="flex items-center justify-between px-3 py-1.5 bg-slate-50 border-b border-slate-100 rounded-t-xl mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">EveryKadai Desktop Window</span>
                  <div className="w-10" />
                </div>
                <img
                  src={desktopHero}
                  alt="EveryKadai PC Billing Software Interface"
                  className="w-full h-auto rounded-xl object-contain"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-16 lg:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Why Choose EveryKadai Desktop App?
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Engineered specifically for Indian retail shops, supermarkets, and wholesale businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DESKTOP_FEATURES.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className="card-everykadai p-7 sm:p-8 flex items-start gap-5 hover:border-rose-300 transition-all duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 shrink-0 border border-rose-100">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5">{feat.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16 lg:py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
              System Specifications &amp; Requirements
            </h2>
            <p className="text-sm text-slate-500">
              EveryKadai is designed to run seamlessly on virtually any modern or legacy Windows computer.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm divide-y divide-slate-100">
            {SYSTEM_REQUIREMENTS.map((req, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row justify-between py-4 px-6 text-sm">
                <span className="font-semibold text-slate-900">{req.label}</span>
                <span className="text-slate-600 mt-1 sm:mt-0 font-medium">{req.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setIsDownloadModalOpen(true)}
              className="btn-primary px-8 py-3.5 text-base font-bold shadow-md hover:shadow-lg inline-flex items-center gap-2 cursor-pointer"
            >
              <Download className="h-5 w-5" />
              Download Free Desktop Installer
            </button>
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
