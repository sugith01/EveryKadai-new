import { Link } from 'react-router-dom';
import {
  Globe,
  MapPin,
  Phone,
  Mail,
  Calculator,
  FileText,
  FileSpreadsheet,
  ClipboardList,
  Receipt,
  QrCode,
  Barcode,
  ScanLine,
  Scan,
  Palette,
  BookOpen,
  CreditCard,
  BarChart3,
  FileCode,
  Truck,
  Briefcase,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
} from 'lucide-react';
import { LiveChatWidget } from './LiveChatWidget.tsx';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const PRODUCTS_LINKS = [
    { label: 'EveryKadai Desktop Software', href: '/gst-accounting-pc' },
    { label: 'EveryKadai TaxOne', href: 'https://taxone.vyapar.com/', isExternal: true },
    { label: 'EveryKadai Table', href: 'https://vyapartable.com/', isExternal: true },
    { label: 'EveryKadai Flyy', href: 'https://vyaparflyy.com/', isExternal: true },
    { label: 'NeoDove (Telecalling CRM)', href: 'https://neodove.com/', isExternal: true },
    { label: 'EveryKadai Thermal Printer', href: '/gst-accounting-pc' },
  ];

  const SOFTWARES_LINKS = [
    { label: 'Billing Software', href: '/' },
    { label: 'Accounting Software', href: '/free/small-business-accounting-software' },
    { label: 'Inventory Software', href: '/free/inventory-management-software' },
    { label: 'Invoicing Software', href: '/free/invoicing-software' },
    { label: 'POS Billing Software', href: '/free/pos-billing-software' },
    { label: 'Business Management Software', href: '/free/small-business-accounting-software' },
    { label: 'More Business Softwares', href: '/sitemap' },
  ];

  const SOLUTIONS_LINKS = [
    { label: 'Retail', href: '/free/billing-software-for-retail-shop' },
    { label: 'Distributor', href: '/distributor/create' },
    { label: 'Grocery', href: '/free/billing-software-for-retail-shop/grocery-store' },
    { label: 'Jewellery', href: '/free/billing-software-for-retail-shop/jewellery-shop' },
    { label: 'Pharmacy', href: '/free/billing-software-for-retail-shop/pharmacy' },
    { label: 'Restaurant', href: '/free/restaurant-billing-software' },
    { label: 'Clothing/Apparel', href: '/free/billing-software-for-retail-shop/cloth-shop' },
  ];

  const RESOURCES_LINKS = [
    { label: 'Blog', href: '/blog' },
    { label: 'Videos', href: '/videos' },
    { label: 'Usecases', href: '/use-cases' },
    { label: 'Guides', href: '/guides' },
    { label: 'Customer Success Stories', href: '/success-stories' },
    { label: 'MSME Schemes', href: '/sitemap' },
  ];

  const COMPANY_LINKS = [
    { label: 'About Us', href: '/about-us' },
    { label: 'Partner with EveryKadai', href: '/distributor/create' },
    { label: 'Career', href: '/careers' },
    { label: 'Contact Us', href: '/about-us' },
    { label: 'Desktop Software', href: '/gst-accounting-pc' },
    { label: 'Terms & Condition', href: '/sitemap' },
    { label: 'Privacy Policy', href: '/sitemap' },
  ];

  const TOOLS_LIST = [
    { label: 'GST Calculator', icon: Calculator, href: '/free/small-business-accounting-software' },
    { label: 'Invoice Generator', icon: FileText, href: '/free/invoicing-software' },
    { label: 'Quotation Maker', icon: ClipboardList, href: '/free/invoicing-software' },
    { label: 'Proforma Invoice Generator', icon: FileSpreadsheet, href: '/free/invoicing-software' },
    { label: 'Purchase Order Generator', icon: FileText, href: '/free/inventory-management-software' },
    { label: 'Receipt Maker', icon: Receipt, href: '/free/pos-billing-software' },
    { label: 'QR Code Generator', icon: QrCode, href: '/free/invoicing-software/e-invoicing' },
    { label: 'Online Barcode Generator', icon: Barcode, href: '/free/pos-billing-software' },
    { label: 'QR code scanner from Image', icon: ScanLine, href: '/ocr-scanner-software' },
    { label: 'Online Barcode Scanner', icon: Scan, href: '/free/pos-billing-software' },
    { label: 'Logo Maker', icon: Palette, href: '/free/invoicing-software' },
  ];

  const FORMATS_LIST = [
    { label: 'Invoice Formats', icon: FileText, href: '/free/invoicing-software' },
    { label: 'Quotation Format', icon: ClipboardList, href: '/free/invoicing-software' },
    { label: 'Balance Sheet Formats', icon: FileSpreadsheet, href: '/free/small-business-accounting-software' },
    { label: 'BillBook Formats', icon: BookOpen, href: '/free/invoicing-software' },
    { label: 'Receipt Formats', icon: Receipt, href: '/free/pos-billing-software' },
    { label: 'Credit Note Formats', icon: CreditCard, href: '/free/invoicing-software' },
    { label: 'Debit Note Formats', icon: CreditCard, href: '/free/invoicing-software' },
    { label: 'Sales Report Format', icon: BarChart3, href: '/free/small-business-accounting-software' },
    { label: 'Estimate Format', icon: FileCode, href: '/free/invoicing-software' },
    { label: 'Delivery Challan Format', icon: Truck, href: '/free/inventory-management-software' },
    { label: 'Work Order Format', icon: Briefcase, href: '/free/small-business-accounting-software' },
    { label: 'Income statement', icon: TrendingUp, href: '/free/small-business-accounting-software' },
  ];

  return (
    <>
      <footer className="bg-slate-950 text-slate-300 pt-14 pb-8 border-t border-slate-850 font-sans text-sm antialiased">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Header Row: Logo + Tagline & Social Links */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
            {/* Left: Brand Logo & Tagline */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <Link
                to="/"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2.5 group cursor-pointer shrink-0"
                aria-label="EveryKadai Home"
              >
                <div className="relative flex items-center justify-center h-9 w-9">
                  <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9 transition-transform duration-200 group-hover:scale-105">
                    <path d="M4 7L18 2L32 7L18 33L4 7Z" fill="#e11d48" />
                    <path d="M18 2L32 7L24 19L18 2Z" fill="#f59e0b" />
                    <path d="M11 15L18 33L24 19L11 15Z" fill="#be123c" />
                  </svg>
                </div>
                <span className="text-[25px] font-extrabold tracking-tight text-rose-500">
                  Every<span className="text-white">Kadai</span>
                </span>
              </Link>
              <div className="hidden sm:block h-7 w-px bg-slate-800 my-auto" />
              <p className="text-xs sm:text-sm text-slate-400 max-w-md my-auto leading-relaxed">
                India's #1 GST Billing, Accounting &amp; Inventory Software for MSMEs and retailers.
              </p>
            </div>

            {/* Right: Social Media Buttons */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.facebook.com/vyaparsoftware"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-9 w-9 rounded-xl bg-slate-900 hover:bg-rose-600 flex items-center justify-center text-slate-400 hover:text-white transition-all border border-slate-800 hover:border-rose-500 shadow-xs"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/vyaparapp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-9 w-9 rounded-xl bg-slate-900 hover:bg-rose-600 flex items-center justify-center text-slate-400 hover:text-white transition-all border border-slate-800 hover:border-rose-500 shadow-xs"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCPyg1bziA6iTfjjX-IwGlhQ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="h-9 w-9 rounded-xl bg-slate-900 hover:bg-rose-600 flex items-center justify-center text-slate-400 hover:text-white transition-all border border-slate-800 hover:border-rose-500 shadow-xs"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/vyapar-tech-solutions/mycompany/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-9 w-9 rounded-xl bg-slate-900 hover:bg-rose-600 flex items-center justify-center text-slate-400 hover:text-white transition-all border border-slate-800 hover:border-rose-500 shadow-xs"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/vyaparapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="h-9 w-9 rounded-xl bg-slate-900 hover:bg-rose-600 flex items-center justify-center text-slate-400 hover:text-white transition-all border border-slate-800 hover:border-rose-500 shadow-xs"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Row 1: 4 Cards (Products, Softwares, Solutions, Resources) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* 1. OUR PRODUCTS */}
            <div className="bg-slate-900/70 rounded-2xl p-6 border border-slate-800/80 shadow-md hover:border-slate-700/80 transition-colors">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4">
                Our Products
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {PRODUCTS_LINKS.map((link, idx) => (
                  <li key={idx}>
                    {link.isExternal ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white flex items-center gap-1.5 transition-colors"
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="h-3 w-3 opacity-50" />
                      </a>
                    ) : (
                      <Link to={link.href} onClick={scrollToTop} className="hover:text-white transition-colors block">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. EVERYKADAI SOFTWARES */}
            <div className="bg-slate-900/70 rounded-2xl p-6 border border-slate-800/80 shadow-md hover:border-slate-700/80 transition-colors">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4">
                EveryKadai Softwares
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {SOFTWARES_LINKS.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.href} onClick={scrollToTop} className="hover:text-white transition-colors block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. INDUSTRY SOLUTIONS */}
            <div className="bg-slate-900/70 rounded-2xl p-6 border border-slate-800/80 shadow-md hover:border-slate-700/80 transition-colors">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4">
                Industry Solutions
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {SOLUTIONS_LINKS.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.href} onClick={scrollToTop} className="hover:text-white transition-colors block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. RESOURCES */}
            <div className="bg-slate-900/70 rounded-2xl p-6 border border-slate-800/80 shadow-md hover:border-slate-700/80 transition-colors">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4">
                Resources
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {RESOURCES_LINKS.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.href} onClick={scrollToTop} className="hover:text-white transition-colors block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Row 2: 4 Cards (Company, Address, Phone, Email) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* 1. COMPANY */}
            <div className="bg-slate-900/70 rounded-2xl p-6 border border-slate-800/80 shadow-md hover:border-slate-700/80 transition-colors">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Globe className="h-4 w-4 text-rose-500" />
                <span>Company</span>
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {COMPANY_LINKS.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.href} onClick={scrollToTop} className="hover:text-white transition-colors block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. ADDRESS */}
            <div className="bg-slate-900/70 rounded-2xl p-6 border border-slate-800/80 shadow-md hover:border-slate-700/80 transition-colors">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-rose-500" />
                <span>Address</span>
              </h3>
              <div className="text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <p className="font-semibold text-white">GGR Towers -3 18/2B</p>
                <p>Ambilipura, Village, Varthur hobli</p>
                <p>Bengaluru, Karnataka 560103</p>
              </div>
            </div>

            {/* 3. PHONE */}
            <div className="bg-slate-900/70 rounded-2xl p-6 border border-slate-800/80 shadow-md hover:border-slate-700/80 transition-colors">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Phone className="h-4 w-4 text-rose-500" />
                <span>Phone Support</span>
              </h3>
              <div className="text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-slate-400" />
                  <a href="tel:+916364444752" className="hover:text-white transition-colors">+91-6364-444-752</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-slate-400" />
                  <a href="tel:+919333911911" className="hover:text-white transition-colors">+91-9333-911-911</a>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <MessageCircle className="h-3.5 w-3.5" />
                  <a href="https://wa.me/916366827420" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold">
                    +91-6366-827-420 (WhatsApp)
                  </a>
                </div>
                <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
                  <p>09:00 AM – 09:00 PM (Mon – Sat)</p>
                  <p>10:00 AM – 07:00 PM (Sunday)</p>
                </div>
              </div>
            </div>

            {/* 4. EMAIL */}
            <div className="bg-slate-900/70 rounded-2xl p-6 border border-slate-800/80 shadow-md hover:border-slate-700/80 transition-colors">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Mail className="h-4 w-4 text-rose-500" />
                <span>Email Support</span>
              </h3>
              <div className="text-xs space-y-2">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Direct Help Desk</p>
                <a
                  href="mailto:help@everykadai.in"
                  className="text-white hover:text-rose-400 transition-colors font-medium block"
                >
                  help@everykadai.in
                </a>
                <p className="text-[11px] text-slate-400 pt-2">
                  Average response time under 15 minutes during operating hours.
                </p>
              </div>
            </div>
          </div>

          {/* Section: EVERYKADAI TOOLS */}
          <div className="pt-4">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4">
              Free EveryKadai Business Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {TOOLS_LIST.map((tool, idx) => {
                const IconComponent = tool.icon;
                return (
                  <Link
                    key={idx}
                    to={tool.href}
                    onClick={scrollToTop}
                    className="bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-rose-500/40 rounded-xl px-4 py-3 flex items-center gap-3 text-xs text-slate-300 hover:text-white transition-all group shadow-xs"
                  >
                    <IconComponent className="h-4 w-4 text-slate-400 group-hover:text-rose-400 transition-colors shrink-0" />
                    <span className="truncate">{tool.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Section: EVERYKADAI FORMATS */}
          <div className="pt-2">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4">
              Free Document Formats &amp; Templates
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {FORMATS_LIST.map((fmt, idx) => {
                const IconComponent = fmt.icon;
                return (
                  <Link
                    key={idx}
                    to={fmt.href}
                    onClick={scrollToTop}
                    className="bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-rose-500/40 rounded-xl px-4 py-3 flex items-center gap-3 text-xs text-slate-300 hover:text-white transition-all group shadow-xs"
                  >
                    <IconComponent className="h-4 w-4 text-slate-400 group-hover:text-rose-400 transition-colors shrink-0" />
                    <span className="truncate">{fmt.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Registration & Copyright Line */}
          <div className="pt-8 border-t border-slate-850 text-center text-[11px] sm:text-xs text-slate-400 space-y-1">
            <p>
              GST Registration : <strong className="text-slate-300 font-semibold">29AAZCS9478E1Z7</strong> &nbsp;|&nbsp; Udyam Registration : <strong className="text-slate-300 font-semibold">UDYAM-KR-03-0219719</strong> &nbsp;|&nbsp; Copyright &copy; 2026 EveryKadai Technologies Pvt. Ltd.&trade;
            </p>
          </div>

        </div>
      </footer>

      {/* Bottom Trust & Security Bar */}
      <div className="bg-slate-900 border-t border-slate-800 py-3.5 px-4 text-slate-300 text-xs font-semibold">
        <div className="max-w-[1360px] mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm">🇮🇳</span>
            <span className="text-slate-200 font-semibold">Proudly Made in India for Indian MSMEs</span>
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span className="text-emerald-400 font-bold uppercase tracking-wider text-[11px]">256-Bit SSL</span>
            <span className="text-slate-400 font-normal text-[11px]">Bank-Grade Data Encryption</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-rose-400" />
            <span className="text-slate-200 font-semibold">Trusted by 1.5 Crore+ Small Businesses</span>
          </div>
        </div>
      </div>

      {/* Floating Live Chat Support Widget & Button */}
      <LiveChatWidget />
    </>
  );
};
