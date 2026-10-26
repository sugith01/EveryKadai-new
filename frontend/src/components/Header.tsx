import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Download, Globe } from 'lucide-react';
import { SolutionMegaMenu } from './SolutionMegaMenu.tsx';
import { DownloadModal } from './DownloadModal.tsx';
import { MEGA_MENU_COLUMNS } from '../data/navigationData.ts';

export const Header = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [prevPath, setPrevPath] = useState(location.pathname);

  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
  }

  const languages = ['EN', 'HI', 'GU', 'PA', 'KN', 'TA', 'TE', 'ML'];

  const handleLogoClick = () => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileSolutionsOpen(false);
    setIsLangDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigation items matching reference layout
  const NAV_LINKS = [
    { label: 'Pricing', href: '/pricing' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Desktop', href: '/gst-accounting-pc' },
    { label: 'Careers', href: '/careers' },
    { label: 'Partner with us', href: '/distributor/create' },
    { label: 'Login', href: '/login' },
  ];

  return (
    <>
      {/* Sticky Main Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_3px_0_rgba(15,23,42,0.03)] transition-all duration-200">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-[72px] items-center justify-between">
            {/* Left: Brand Logo */}
            <Link
              to="/"
              onClick={handleLogoClick}
              className="flex items-center gap-2.5 shrink-0 group cursor-pointer"
              aria-label="EveryKadai Home"
            >
              <div className="relative flex items-center justify-center h-9 w-9">
                <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9 transition-transform duration-200 group-hover:scale-105">
                  <path d="M4 7L18 2L32 7L18 33L4 7Z" fill="#e11d48" />
                  <path d="M18 2L32 7L24 19L18 2Z" fill="#f59e0b" />
                  <path d="M11 15L18 33L24 19L11 15Z" fill="#be123c" />
                </svg>
              </div>
              <span className="text-[23px] sm:text-[25px] font-extrabold tracking-tight text-[#e11d48]">
                Every<span className="text-slate-900">Kadai</span>
              </span>
            </Link>

            {/* Middle: Desktop Navigation Items */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[15px]" ref={menuRef}>
              {/* Solution (Mega Menu Trigger) */}
              <div
                className="py-4 relative"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
              >
                <button
                  type="button"
                  onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                  className={`inline-flex items-center gap-1.5 transition-colors cursor-pointer font-semibold ${
                    isMegaMenuOpen ? 'text-rose-600' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isMegaMenuOpen ? 'rotate-180 text-rose-600' : 'text-slate-400'
                    }`}
                  />
                </button>
              </div>

              {/* Primary Nav Links */}
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onMouseEnter={() => setIsMegaMenuOpen(false)}
                    className={`relative py-2 font-semibold transition-colors ${
                      isActive
                        ? 'text-rose-600 font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-rose-600 after:rounded-full'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Language Selector */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-slate-200 text-xs font-semibold text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition cursor-pointer"
                  aria-label="Select Language"
                >
                  <Globe className="h-3.5 w-3.5 text-slate-500" />
                  <span>{selectedLanguage}</span>
                  <ChevronDown className={`h-3 w-3 text-slate-400 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isLangDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-32 rounded-xl bg-white p-1.5 shadow-xl border border-slate-100 z-50">
                    <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Languages
                    </div>
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => {
                          setSelectedLanguage(lang);
                          setIsLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 text-xs rounded-lg transition cursor-pointer ${
                          selectedLanguage === lang
                            ? 'bg-rose-50 text-rose-600 font-bold'
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Right: Primary Action Button (Desktop) & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsDownloadModalOpen(true)}
                className="hidden sm:inline-flex btn-primary px-4.5 py-2 text-xs sm:text-sm font-semibold tracking-wide"
              >
                <Download className="w-4 h-4 mr-1.5" />
                <span>Download Free</span>
              </button>

              {/* Mobile Hamburger Button */}
              <div className="flex lg:hidden items-center">
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                  aria-label="Toggle navigation"
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Solution Mega Menu Dropdown */}
        <SolutionMegaMenu
          isOpen={isMegaMenuOpen}
          onClose={() => setIsMegaMenuOpen(false)}
          onMouseEnter={() => setIsMegaMenuOpen(true)}
          onMouseLeave={() => setIsMegaMenuOpen(false)}
        />

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-5 pt-3 pb-6 max-h-[85vh] overflow-y-auto shadow-xl">
            <div className="space-y-1">
              {/* Solutions Accordion */}
              <div className="border-b border-slate-100 pb-2">
                <button
                  type="button"
                  onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                  className="flex w-full items-center justify-between py-3 text-sm font-semibold text-slate-800"
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`h-4 w-4 text-slate-400 transition-transform ${
                      isMobileSolutionsOpen ? 'rotate-180 text-rose-600' : ''
                    }`}
                  />
                </button>

                {isMobileSolutionsOpen && (
                  <div className="pb-3 pl-2 space-y-4 pt-1">
                    {MEGA_MENU_COLUMNS.map((col, idx) => (
                      <div key={idx} className="space-y-1.5">
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                          {col.header}
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {col.items.map((item, itemIdx) => (
                            <Link
                              key={itemIdx}
                              to={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="text-xs font-medium text-slate-700 hover:text-rose-600 py-1 truncate block transition-colors"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Standard Nav Links */}
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-3 text-sm font-semibold border-b border-slate-100 transition ${
                      isActive ? 'text-rose-600' : 'text-slate-700 hover:text-rose-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Mobile CTA */}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsDownloadModalOpen(true);
                  }}
                  className="btn-primary w-full py-3 text-sm font-semibold"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download EveryKadai App
                </button>
              </div>

              {/* Language Selector Mobile */}
              <div className="pt-4 flex items-center justify-between text-xs text-slate-600 border-t border-slate-100">
                <span className="font-medium">Language:</span>
                <div className="flex gap-1.5">
                  {languages.slice(0, 4).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setSelectedLanguage(lang)}
                      className={`px-2.5 py-1 rounded text-xs transition font-semibold cursor-pointer ${
                        selectedLanguage === lang
                          ? 'bg-rose-50 text-rose-600'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Modals */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </>
  );
};
