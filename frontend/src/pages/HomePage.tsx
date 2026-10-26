import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  MapPin,
  ChevronDown,
  ChevronUp,
  Zap,
  Play,
  Globe,
  Plus,
  Minus,
  Download,
  Star,
  CheckCircle2,
} from 'lucide-react';
import {
  HERO_DATA,
  TRUST_STRIP_ITEMS,
  LOCAL_SMB_DATA,
  JOURNEY_STEPS,
  MULTI_DEVICE_DATA,
  SUCCESS_STORIES_DATA,
  FEATURES_BENEFITS_DATA,
  BILLING_SOLUTION_DATA,
  QUICK_SETUP_DATA,
  VIDEO_SHOWCASE_DATA,
  BUSINESS_DIFFERENCE_DATA,
  SMART_BUSINESS_DATA,
  MULTI_LANGUAGE_DATA,
  MEDIA_PUBLICATIONS_DATA,
  INDUSTRIES_SERVE_DATA,
  WHO_CAN_USE_DATA,
  HOMEPAGE_FAQS,
} from '../data/homeData.ts';
import type { FeatureBenefitItem } from '../data/homeData.ts';
import { RatingWidget } from '../components/RatingWidget.tsx';
import { DownloadModal } from '../components/DownloadModal.tsx';
import { VideoModal } from '../components/VideoModal.tsx';

const FeatureCard = ({ item }: { item: FeatureBenefitItem }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 cursor-default border ${
        isHovered
          ? 'bg-rose-50/40 border-rose-300 shadow-[0_10px_25px_-5px_rgba(225,29,72,0.12)] -translate-y-1'
          : 'bg-white border-slate-200/90 shadow-xs'
      }`}
    >
      <div>
        <div className="flex items-center gap-3.5 mb-3">
          <div className="w-12 h-12 rounded-xl bg-slate-100/80 overflow-hidden shrink-0 flex items-center justify-center p-1.5 transition-colors">
            <img
              src={isHovered ? item.hoverIcon : item.icon}
              alt={item.title}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
          <h3 className="text-[17px] sm:text-[18px] font-bold text-slate-900 leading-[1.3]">
            {item.title}
          </h3>
        </div>

        <p className="text-[13.5px] text-slate-600 leading-[1.65]">
          {item.textBefore}
          {item.linkText && item.linkUrl && (
            <Link
              to={item.linkUrl}
              className="underline underline-offset-[3px] font-semibold text-rose-600 hover:text-rose-700 transition-colors"
            >
              {item.linkText}
            </Link>
          )}
          {item.textAfter}
        </p>
      </div>
    </div>
  );
};

export const HomePage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isFaqExpanded, setIsFaqExpanded] = useState(false);
  const [activeBillingIndex, setActiveBillingIndex] = useState(0);
  const [activeSetupStep, setActiveSetupStep] = useState(3);
  const [isVideoShowcasePlaying, setIsVideoShowcasePlaying] = useState(false);
  const [activeSmartIndex, setActiveSmartIndex] = useState(2);
  const [activeLanguage, setActiveLanguage] = useState('hi');
  const [activeIndustryIndex, setActiveIndustryIndex] = useState(1);
  const [isWhoExpanded, setIsWhoExpanded] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState({
    url: SUCCESS_STORIES_DATA.items.video1.videoUrl,
    title: SUCCESS_STORIES_DATA.items.video1.title,
  });

  const isDirectVideoFile = (url: string) => /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(url);
  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    if (url.includes('youtube.com/embed/')) {
      return url.includes('autoplay') ? url : `${url}${url.includes('?') ? '&' : '?'}autoplay=1&rel=0`;
    }
    const watchMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]+)/);
    if (watchMatch) {
      return `https://www.youtube.com/embed/${watchMatch[1]}?autoplay=1&rel=0`;
    }
    return url;
  };

  const handleOpenVideo = (videoUrl: string, title: string) => {
    setActiveVideo({ url: videoUrl, title });
    setIsVideoModalOpen(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION (.vyh-hero) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-rose-50/60 via-slate-50/30 to-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-100">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badge Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-rose-200/80 text-rose-700 text-xs sm:text-sm font-semibold shadow-xs">
                <ShieldCheck className="h-4 w-4 text-rose-600" />
                <span>{HERO_DATA.trustBadge}</span>
              </div>

              {/* Main Heading H1 */}
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Best GST Billing Software for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-700">
                  Small Businesses
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                {HERO_DATA.subtext}
              </p>

              {/* Action Buttons Row */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  type="button"
                  onClick={() => setIsDownloadModalOpen(true)}
                  className="btn-primary w-full sm:w-auto px-8 py-3.5 text-base font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <Download className="h-5 w-5" />
                  <span>{HERO_DATA.ctaText}</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleOpenVideo(SUCCESS_STORIES_DATA.items.video1.videoUrl, "EveryKadai Product Demo")}
                  className="btn-secondary w-full sm:w-auto px-6 py-3.5 text-sm sm:text-base font-semibold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Play className="h-4 w-4 text-rose-600 fill-rose-600" />
                  <span>Watch 2-Min Demo</span>
                </button>
              </div>

              {/* Trust Bullets */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs text-slate-500 font-medium pt-1">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  Free 7-Day Trial
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  No Credit Card Required
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  Instant 3-Min Setup
                </span>
              </div>

              {/* Ratings Strip */}
              <div className="pt-4 border-t border-slate-200/70 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8">
                <div className="flex items-center gap-2.5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-slate-900 leading-none">4.8 / 5.0</p>
                    <p className="text-[11px] text-slate-500 leading-none mt-0.5">Google Play (3.5L+ Reviews)</p>
                  </div>
                </div>
                <div className="hidden sm:block h-7 w-px bg-slate-200" />
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-bold text-slate-900">4.9 ★</span>
                  <span className="text-[11px] text-slate-500">SourceForge Top Rated</span>
                </div>
                <div className="hidden sm:block h-7 w-px bg-slate-200" />
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-bold text-slate-900">4.4 ★</span>
                  <span className="text-[11px] text-slate-500">G2 High Performer 2026</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image / Mockup Column with App Chrome */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[540px] lg:max-w-none">
                {/* Decorative Ambient Glow */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-rose-500/15 to-amber-500/15 rounded-3xl blur-xl opacity-75 pointer-events-none" />

                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/90 bg-white p-2">
                  {/* Sleek Window Control Bar */}
                  <div className="flex items-center justify-between px-3 py-1.5 bg-slate-50 border-b border-slate-100 rounded-t-xl mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 tracking-wide">EveryKadai Business Suite v2026.1</span>
                    <div className="w-10" />
                  </div>

                  <img
                    src={HERO_DATA.heroMockup}
                    alt="EveryKadai GST Billing Software for Small Business"
                    className="w-full h-auto object-cover rounded-xl"
                    width="560"
                    height="482"
                    loading="eager"
                  />

                  {/* Floating Highlight Tag 1 */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl rounded-2xl p-3 sm:p-3.5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-600">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Daily Activity</p>
                      <p className="text-xs sm:text-sm font-extrabold text-slate-900">5,00,000+ Bills Generated</p>
                    </div>
                  </div>

                  {/* Floating Highlight Tag 2 */}
                  <div className="absolute top-12 right-6 hidden sm:flex bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl rounded-2xl p-2.5 items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-800">100% Offline Capable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP (.vyh-strip) */}
      <section className="bg-slate-50/80 py-10 sm:py-12 border-b border-slate-200/80">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 items-start">
            {TRUST_STRIP_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center group cursor-default"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-3 sm:mb-3.5 transition-transform duration-200 group-hover:-translate-y-1">
                  <img
                    src={item.icon}
                    alt={item.alt}
                    className="w-full h-full object-contain drop-shadow-[0_4px_10px_rgba(225,29,72,0.15)]"
                    loading="lazy"
                  />
                </div>
                <p className="text-[14px] sm:text-[15px] font-semibold text-slate-800 leading-snug max-w-[170px] text-center">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 3. NATIONWIDE LOCAL REACH (.vyh-local) */}
      <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-5">
              {/* Nationwide Coverage Pill Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-rose-200/80 bg-rose-50 text-rose-700 text-xs font-bold tracking-wide">
                <MapPin className="h-3.5 w-3.5 text-rose-600" />
                <span>{LOCAL_SMB_DATA.badge}</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold text-slate-900 leading-[1.2] tracking-tight">
                {LOCAL_SMB_DATA.heading}
              </h2>

              {/* Description Subtext */}
              <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 leading-[1.7]">
                {LOCAL_SMB_DATA.subtext}
              </p>

              {/* 2x2 Stats Cards Grid */}
              <div className="grid grid-cols-2 gap-3.5 sm:gap-4 pt-2">
                {LOCAL_SMB_DATA.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-center transition-all duration-200 hover:-translate-y-1 hover:border-rose-300 hover:shadow-[0_10px_25px_-5px_rgba(225,29,72,0.12)] cursor-default"
                  >
                    <p className="text-[28px] sm:text-[34px] font-extrabold text-rose-600 leading-tight mb-1">
                      {stat.value}
                    </p>
                    <p className="text-[13px] sm:text-[14px] font-medium text-slate-600 leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Map Visual Column */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <img
                src={LOCAL_SMB_DATA.mapImage}
                alt="Supporting Local Small & Medium Businesses Across Every Corner of India"
                className="w-full max-w-[580px] h-auto object-contain drop-shadow-sm"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. BUSINESS JOURNEY (.vyh-journey) */}
      <section className="py-14 sm:py-20 lg:py-24 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold text-slate-900 mb-3 leading-tight tracking-tight">
              Your Business Journey, Simpler & Safer
            </h2>
            <p className="text-[15px] sm:text-[16px] text-slate-600 max-w-[620px] mx-auto leading-relaxed">
              EveryKadai billing software for your business supports you from the moment you open your shop until you close for the day.
            </p>
          </div>

          {/* Cards & Connectors */}
          <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row items-stretch gap-4 sm:gap-5 lg:gap-3">
            {JOURNEY_STEPS.map((step, idx) => (
              <div key={idx} className="contents">
                {/* Step Card */}
                <div
                  className="flex-1 min-w-0 bg-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between border border-slate-200/90 hover:border-rose-400 hover:shadow-[0_15px_35px_-8px_rgba(225,29,72,0.12)] hover:-translate-y-1.5 transition-all duration-300 relative group cursor-default"
                >
                  {/* Watermark Step Number */}
                  <span className="absolute top-4 right-5 text-[40px] font-black text-slate-100 select-none leading-none pointer-events-none">
                    {step.step}
                  </span>

                  <div>
                    {/* Icon Swap Container */}
                    <div className="relative w-[52px] h-[52px] mb-4 flex-shrink-0">
                      <img
                        src={step.defaultIcon}
                        alt={step.title}
                        className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
                      />
                      <img
                        src={step.hoverIcon}
                        alt={step.title}
                        className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                      />
                    </div>

                    {/* Time & Activity */}
                    <span className="text-[11px] font-bold text-[#ed1a3b] uppercase tracking-wider mb-2 block">
                      {step.time}
                    </span>

                    {/* Title */}
                    <h3 className="text-[18px] sm:text-[19px] font-extrabold text-[#111111] leading-snug mb-2.5">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[13.5px] text-[#555555] leading-[1.65] mb-5">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom Tag */}
                  <div>
                    <hr className="border-t border-[#f0f0f0] mb-3" />
                    <span className="text-[13px] font-bold text-[#ed1a3b] block">
                      {step.tag}
                    </span>
                  </div>
                </div>

                {/* Arrow Connector (between cards on desktop) */}
                {idx < JOURNEY_STEPS.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center self-center text-[#f3a9b4] text-[36px] font-light px-0.5 select-none shrink-0 pointer-events-none">
                    ›
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MULTI-DEVICE EXPERIENCE (.vyh-multi) */}
      <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-extrabold text-slate-900 leading-[1.18] tracking-tight">
                The Real Multi-Device<br />Experience
              </h2>

              <p className="text-[15px] sm:text-[16px] text-slate-600 leading-[1.7]">
                {MULTI_DEVICE_DATA.subtext}
              </p>

              {/* 2 Stat Cards */}
              <div className="flex flex-row gap-4 sm:gap-5 pt-2">
                {MULTI_DEVICE_DATA.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="flex-1 bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 flex flex-col justify-center transition-all duration-200 hover:-translate-y-1 hover:border-rose-300 hover:shadow-[0_10px_25px_-5px_rgba(225,29,72,0.12)] cursor-default shadow-xs"
                  >
                    <p className="text-[30px] sm:text-[34px] font-extrabold text-rose-600 leading-tight mb-1">
                      {stat.value}
                    </p>
                    <p className="text-[13px] sm:text-[14px] font-medium text-slate-600 leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="lg:col-span-7 flex items-center justify-center lg:justify-end">
              <img
                src={MULTI_DEVICE_DATA.image}
                alt="The Real Multi-Device Experience"
                className="w-full max-w-[620px] h-auto object-contain drop-shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. CUSTOMER SUCCESS STORIES & BUSINESS IMPACT (.vyh-why) */}
      <section className="py-14 sm:py-20 lg:py-24 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold text-slate-900 mb-2.5 leading-tight tracking-tight">
              {SUCCESS_STORIES_DATA.heading}
            </h2>
            <p className="text-[15px] sm:text-[16px] text-slate-600 leading-normal max-w-[640px] mx-auto">
              {SUCCESS_STORIES_DATA.subtext}
            </p>
          </div>

          {/* 3-Column / 2-Row Success Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.35fr_1fr] gap-4 sm:gap-5">
            {/* Row 1, Col 1: 80% Time Saved Stat Card */}
            <div className="bg-rose-50/70 border border-rose-100 rounded-2xl p-7 sm:p-8 flex flex-col justify-center gap-2">
              <p className="text-[48px] sm:text-[54px] font-black text-rose-600 leading-none tracking-tight">
                {SUCCESS_STORIES_DATA.items.stat1.value}
              </p>
              <h4 className="text-[17px] sm:text-[18px] font-bold text-slate-900 leading-tight">
                {SUCCESS_STORIES_DATA.items.stat1.title}
              </h4>
              <p className="text-[11px] sm:text-[11.5px] font-bold text-rose-600 uppercase tracking-wider">
                {SUCCESS_STORIES_DATA.items.stat1.tag}
              </p>
            </div>

            {/* Row 1, Col 2: Video Card 1 (Ali) */}
            <div
              onClick={() =>
                handleOpenVideo(
                  SUCCESS_STORIES_DATA.items.video1.videoUrl,
                  SUCCESS_STORIES_DATA.items.video1.title
                )
              }
              className="relative rounded-2xl overflow-hidden min-h-[220px] sm:min-h-[245px] group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80"
            >
              <img
                src={SUCCESS_STORIES_DATA.items.video1.thumbnail}
                alt={SUCCESS_STORIES_DATA.items.video1.title}
                className="w-full h-full object-cover min-h-[220px] sm:min-h-[245px] transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-xs border-2 border-white flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-rose-600">
                  <Play className="h-6 w-6 fill-white text-white ml-0.5" />
                </div>
              </div>
              {/* Bottom Gradient Label */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent pt-8 pb-4 px-5 text-white text-[13.5px] font-semibold tracking-wide">
                {SUCCESS_STORIES_DATA.items.video1.label}
              </div>
            </div>

            {/* Row 1, Col 3: Testimonial Card 1 (Ali) */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3.5 mb-4">
                <img
                  src={SUCCESS_STORIES_DATA.items.testimonial1.avatar}
                  alt={SUCCESS_STORIES_DATA.items.testimonial1.name}
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover shrink-0 ring-2 ring-slate-100"
                  loading="lazy"
                />
                <p className="text-[13.5px] sm:text-[14px] text-slate-700 leading-[1.6] italic">
                  "{SUCCESS_STORIES_DATA.items.testimonial1.quote}"
                </p>
              </div>
              <div>
                <p className="font-bold text-slate-900 text-[14px] mb-0.5">
                  {SUCCESS_STORIES_DATA.items.testimonial1.name}
                </p>
                <Link
                  to={SUCCESS_STORIES_DATA.items.testimonial1.link}
                  className="text-[13px] font-semibold text-rose-600 hover:text-rose-700 transition-colors inline-block"
                >
                  {SUCCESS_STORIES_DATA.items.testimonial1.role}
                </Link>
              </div>
            </div>

            {/* Row 2, Col 1: Testimonial Card 2 (Kumar) */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3.5 mb-4">
                <img
                  src={SUCCESS_STORIES_DATA.items.testimonial2.avatar}
                  alt={SUCCESS_STORIES_DATA.items.testimonial2.name}
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover shrink-0 ring-2 ring-slate-100"
                  loading="lazy"
                />
                <p className="text-[13.5px] sm:text-[14px] text-slate-700 leading-[1.6] italic">
                  "{SUCCESS_STORIES_DATA.items.testimonial2.quote}"
                </p>
              </div>
              <div>
                <p className="font-bold text-slate-900 text-[14px] mb-0.5">
                  {SUCCESS_STORIES_DATA.items.testimonial2.name}
                </p>
                <Link
                  to={SUCCESS_STORIES_DATA.items.testimonial2.link}
                  className="text-[13px] font-semibold text-rose-600 hover:text-rose-700 transition-colors inline-block"
                >
                  {SUCCESS_STORIES_DATA.items.testimonial2.role}
                </Link>
              </div>
            </div>

            {/* Row 2, Col 2: Video Card 2 (Kumar) */}
            <div
              onClick={() =>
                handleOpenVideo(
                  SUCCESS_STORIES_DATA.items.video2.videoUrl,
                  SUCCESS_STORIES_DATA.items.video2.title
                )
              }
              className="relative rounded-2xl overflow-hidden min-h-[220px] sm:min-h-[245px] group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80"
            >
              <img
                src={SUCCESS_STORIES_DATA.items.video2.thumbnail}
                alt={SUCCESS_STORIES_DATA.items.video2.title}
                className="w-full h-full object-cover min-h-[220px] sm:min-h-[245px] transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-xs border-2 border-white flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-rose-600">
                  <Play className="h-6 w-6 fill-white text-white ml-0.5" />
                </div>
              </div>
              {/* Bottom Gradient Label */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent pt-8 pb-4 px-5 text-white text-[13.5px] font-semibold tracking-wide">
                {SUCCESS_STORIES_DATA.items.video2.label}
              </div>
            </div>

            {/* Row 2, Col 3: 100% Accuracy Stat Card */}
            <div className="bg-amber-50/70 border border-amber-100 rounded-2xl p-7 sm:p-8 flex flex-col justify-center gap-2">
              <p className="text-[48px] sm:text-[54px] font-black text-amber-600 leading-none tracking-tight">
                {SUCCESS_STORIES_DATA.items.stat2.value}
              </p>
              <h4 className="text-[17px] sm:text-[18px] font-bold text-slate-900 leading-tight">
                {SUCCESS_STORIES_DATA.items.stat2.title}
              </h4>
              <p className="text-[11px] sm:text-[11.5px] font-bold text-amber-600 uppercase tracking-wider">
                {SUCCESS_STORIES_DATA.items.stat2.tag}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. COMPREHENSIVE FEATURES GRID (.vyh-feat) */}
      <section className="py-14 sm:py-20 lg:py-24 bg-slate-50/60 border-b border-slate-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge & Heading */}
          <div className="text-center mb-10 sm:mb-12">
            <div className="mb-3">
              <span className="inline-block border border-rose-200/80 bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-2xs">
                {FEATURES_BENEFITS_DATA.badge}
              </span>
            </div>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold text-slate-900 leading-[1.22] tracking-tight max-w-[850px] mx-auto">
              {FEATURES_BENEFITS_DATA.heading}
            </h2>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {FEATURES_BENEFITS_DATA.items.map((feat) => (
              <FeatureCard key={feat.id} item={feat} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. COMPLETE BILLING SOLUTION (.vyh-billing) */}
      <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold text-slate-900 leading-tight tracking-tight mb-3">
              {BILLING_SOLUTION_DATA.heading}
            </h2>
            <p className="text-[15px] sm:text-[16px] text-slate-600 leading-normal max-w-[640px] mx-auto">
              {BILLING_SOLUTION_DATA.subtext}
            </p>
          </div>

          {/* 2-Column Body: Left Visual Mockup, Right 4 Feature Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-12 items-center">
            {/* Left Column: Interactive Visual Preview Mockup */}
            <div className="relative rounded-3xl bg-slate-50 border border-slate-200/90 p-3 sm:p-4 shadow-xl aspect-square max-w-[560px] mx-auto w-full flex items-center justify-center overflow-hidden">
              {BILLING_SOLUTION_DATA.pillars.map((pillar, idx) => (
                <img
                  key={pillar.id}
                  src={pillar.mockupImage}
                  alt={pillar.title}
                  className={`absolute inset-0 w-full h-full object-contain p-3 sm:p-4 rounded-2xl transition-all duration-300 ease-out ${
                    activeBillingIndex === idx
                      ? 'opacity-100 scale-100 z-10'
                      : 'opacity-0 scale-95 z-0 pointer-events-none'
                  }`}
                  loading="lazy"
                />
              ))}
            </div>

            {/* Right Column: 2x2 Grid of Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {BILLING_SOLUTION_DATA.pillars.map((pillar, idx) => {
                const isActive = activeBillingIndex === idx;
                return (
                  <div
                    key={pillar.id}
                    onMouseEnter={() => setActiveBillingIndex(idx)}
                    onClick={() => setActiveBillingIndex(idx)}
                    className={`rounded-2xl p-5 sm:p-5.5 flex flex-col justify-between transition-all duration-200 cursor-pointer border ${
                      isActive
                        ? 'border-rose-400 bg-rose-50/30 shadow-[0_10px_25px_-5px_rgba(225,29,72,0.12)] -translate-y-1'
                        : 'border-slate-200/90 bg-white hover:border-rose-300 hover:-translate-y-0.5 hover:shadow-sm'
                    }`}
                  >
                    <div>
                      <div
                        className={`w-11 h-11 rounded-xl ${pillar.iconBg} flex items-center justify-center mb-3`}
                      >
                        <img
                          src={pillar.icon}
                          alt={pillar.title}
                          className="w-8 h-8 object-contain"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="text-[17px] sm:text-[18px] font-bold text-slate-900 leading-[1.3] mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-[13px] sm:text-[13.5px] text-slate-600 leading-[1.6] mb-4">
                        {pillar.description}
                      </p>
                    </div>

                    <div>
                      <Link
                        to={pillar.linkUrl}
                        className="text-[13.5px] font-bold text-rose-600 inline-flex items-center gap-1 hover:text-rose-700 hover:underline"
                      >
                        <span>{pillar.linkText}</span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 9. HOW TO SET UP QUICKLY (.vyh-setup) */}
      <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold text-slate-900 leading-tight tracking-tight mb-3">
              {QUICK_SETUP_DATA.heading}
            </h2>
            <p className="text-[15px] sm:text-[16px] text-slate-600 leading-normal max-w-[640px] mx-auto">
              {QUICK_SETUP_DATA.subtext}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Steps Column */}
            <div className="flex flex-col gap-3.5 sm:gap-4">
              {QUICK_SETUP_DATA.steps.map((step, idx) => {
                const isActive = activeSetupStep === idx;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveSetupStep(idx)}
                    onClick={() => setActiveSetupStep(idx)}
                    className={`bg-white rounded-2xl p-5 flex items-start gap-4 transition-all duration-200 cursor-pointer border ${
                      isActive
                        ? 'border-rose-500 shadow-[0_10px_25px_-5px_rgba(225,29,72,0.12)] -translate-y-0.5'
                        : 'border-slate-200/90 hover:border-rose-300 hover:shadow-xs'
                    }`}
                  >
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 text-white font-extrabold flex items-center justify-center text-sm shrink-0 leading-none shadow-xs">
                      {step.number}
                    </div>
                    <div className="flex-1 min-w-0 pt-0.5">
                      <h3 className="text-[16px] font-bold text-slate-900 leading-snug mb-1">
                        {step.title}
                      </h3>
                      <p className="text-[13px] sm:text-[13.5px] text-slate-600 leading-[1.55]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Visual Column (Red Container with App Mockup) */}
            <div className="bg-gradient-to-br from-rose-600 to-rose-700 rounded-3xl p-5 sm:p-7 lg:p-8 flex items-center justify-center shadow-2xl relative overflow-hidden aspect-[1.18/1] max-w-[540px] mx-auto w-full border border-rose-500">
              {QUICK_SETUP_DATA.steps.map((step, idx) => (
                <img
                  key={idx}
                  src={step.image}
                  alt={step.title}
                  className={`absolute inset-4 sm:inset-6 w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] h-[calc(100%-2rem)] sm:h-[calc(100%-3rem)] object-contain rounded-2xl transition-all duration-300 ease-out ${
                    activeSetupStep === idx
                      ? 'opacity-100 scale-100 z-10'
                      : 'opacity-0 scale-95 z-0 pointer-events-none'
                  }`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. VIDEO SHOWCASE SECTION (.lp-video) */}
      <section className="py-14 sm:py-20 lg:py-24 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="mb-3">
              <span className="inline-block bg-rose-50 border border-rose-200/80 text-rose-700 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-2xs">
                {VIDEO_SHOWCASE_DATA.badge}
              </span>
            </div>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold text-slate-900 leading-tight tracking-tight mb-3">
              {VIDEO_SHOWCASE_DATA.heading}
            </h2>
            <p className="text-[15px] sm:text-[16px] text-slate-600 leading-normal max-w-[640px] mx-auto">
              {VIDEO_SHOWCASE_DATA.subtext}
            </p>
          </div>

          {/* Video Container */}
          <div className="max-w-[920px] mx-auto">
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-900 bg-slate-950 group">
              {isVideoShowcasePlaying ? (
                isDirectVideoFile(VIDEO_SHOWCASE_DATA.videoUrl) ? (
                  <video
                    src={VIDEO_SHOWCASE_DATA.videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <iframe
                    src={getEmbedUrl(VIDEO_SHOWCASE_DATA.videoUrl)}
                    title={VIDEO_SHOWCASE_DATA.videoTitle}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )
              ) : (
                <div
                  onClick={() => setIsVideoShowcasePlaying(true)}
                  className="relative w-full h-full cursor-pointer overflow-hidden"
                >
                  <img
                    src={VIDEO_SHOWCASE_DATA.thumbnail}
                    alt={VIDEO_SHOWCASE_DATA.videoTitle}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Central Glowing Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-[0_0_35px_rgba(225,29,72,0.6)] transition-all duration-300 group-hover:scale-110 group-hover:bg-rose-700">
                      <Play className="h-8 w-8 sm:h-9 sm:w-9 fill-white text-white ml-1" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 11. HOW EVERYKADAI IS MAKING A DIFFERENCE (.vyh-diff) */}
      <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gradient Wrapper with 24px border radius */}
          <div className="bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 p-3 sm:p-3.5 rounded-3xl shadow-xl">
            <div className="bg-white rounded-2xl p-7 sm:p-12 lg:p-14">
              {/* Header */}
              <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
                <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-extrabold text-slate-900 leading-tight tracking-tight mb-3">
                  {BUSINESS_DIFFERENCE_DATA.heading}
                </h2>
                <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 leading-relaxed max-w-2xl mx-auto">
                  {BUSINESS_DIFFERENCE_DATA.subtext}
                </p>
              </div>

              {/* Stats Row */}
              <div className="flex flex-col md:flex-row items-center justify-evenly gap-8 md:gap-4">
                {BUSINESS_DIFFERENCE_DATA.stats.map((stat, idx) => (
                  <div key={idx} className="contents">
                    {idx > 0 && (
                      <div className="hidden md:block w-px h-20 bg-slate-200 shrink-0 self-center" />
                    )}
                    <div className="flex flex-col items-center text-center flex-1">
                      <img
                        src={stat.icon}
                        alt=""
                        className="w-11 h-11 object-contain mb-3"
                        loading="lazy"
                      />
                      <p className="text-[36px] sm:text-[44px] lg:text-[48px] font-black text-rose-600 leading-none tracking-tight mb-2">
                        {stat.value}
                      </p>
                      <p className="text-[14px] sm:text-[15px] font-semibold text-slate-700">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. BUSINESS GROWTH FEATURES (.vyh-smart) */}
      <section className="py-14 sm:py-20 lg:py-24 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="mb-3">
              <span className="inline-block border border-rose-200/80 bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-2xs">
                {SMART_BUSINESS_DATA.badge}
              </span>
            </div>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold text-slate-900 leading-tight tracking-tight mb-3">
              {SMART_BUSINESS_DATA.heading}
            </h2>
          </div>

          {/* 3 Interactive Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10">
            {SMART_BUSINESS_DATA.cards.map((card, idx) => {
              const isActive = activeSmartIndex === idx;
              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setActiveSmartIndex(idx)}
                  onClick={() => setActiveSmartIndex(idx)}
                  className={`bg-white rounded-2xl p-5 sm:p-6 flex flex-col gap-2 transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? 'border-rose-500 shadow-[0_10px_25px_-5px_rgba(225,29,72,0.12)] -translate-y-1'
                      : 'border-slate-200/90 hover:border-rose-300 hover:shadow-xs'
                  }`}
                >
                  <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">
                    {card.tag}
                  </span>
                  <h3 className="text-[17px] sm:text-[18px] font-bold text-slate-900 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-[13.5px] text-slate-600 leading-[1.65]">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Large Device Mockup Container Below */}
          <div className="max-w-[1020px] mx-auto w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-8 border-slate-900 bg-slate-950 aspect-[16/9.5]">
              {SMART_BUSINESS_DATA.cards.map((card, idx) => (
                <img
                  key={card.id}
                  src={card.image}
                  alt={card.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ${
                    activeSmartIndex === idx
                      ? 'opacity-100 scale-100 z-10'
                      : 'opacity-0 scale-98 z-0 pointer-events-none'
                  }`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 13. MULTI-LANGUAGE SUPPORT SECTION (.vyh-lang) */}
      <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div>
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 border border-rose-200/80 bg-rose-50 text-rose-700 text-xs font-bold px-4 py-1.5 rounded-full shadow-2xs">
                  <Globe className="w-4 h-4 text-rose-600" />
                  {MULTI_LANGUAGE_DATA.badge}
                </span>
              </div>

              <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold text-slate-900 leading-[1.22] tracking-tight mb-4">
                {MULTI_LANGUAGE_DATA.heading}
              </h2>

              <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 leading-[1.7] mb-7 max-w-[540px]">
                {MULTI_LANGUAGE_DATA.description}
              </p>

              {/* Language Chips */}
              <div className="flex flex-wrap gap-2.5 max-w-[500px]">
                {MULTI_LANGUAGE_DATA.languages.map((lang) => {
                  const isActive = activeLanguage === lang.code;
                  return (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => setActiveLanguage(lang.code)}
                      className={`px-4.5 py-2 rounded-full text-[13.5px] font-semibold transition-all duration-150 cursor-pointer border ${
                        isActive
                          ? 'border-rose-500 text-rose-600 bg-rose-50 shadow-xs scale-105'
                          : 'border-slate-200 text-slate-700 bg-white hover:border-rose-300 hover:text-rose-600'
                      }`}
                    >
                      {lang.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Card Column */}
            <div className="max-w-[560px] mx-auto w-full">
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
                <img
                  src={MULTI_LANGUAGE_DATA.image}
                  alt={MULTI_LANGUAGE_DATA.imageAlt}
                  className="w-full h-auto object-cover block"
                  loading="lazy"
                />
                <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 text-center text-[13px] leading-snug">
                  <span className="font-bold text-rose-600">
                    {MULTI_LANGUAGE_DATA.footerBadge}{' '}
                  </span>
                  <span className="font-medium text-slate-600">
                    {MULTI_LANGUAGE_DATA.footerText}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FEATURED IN / MEDIA RECOGNITION SECTION (.vyh-pub) */}
      <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[24px] sm:text-[30px] font-extrabold text-slate-900 text-center mb-8 sm:mb-10 tracking-tight">
            {MEDIA_PUBLICATIONS_DATA.heading}
          </h2>

          <div className="flex items-center justify-center gap-8 sm:gap-12 lg:gap-16 flex-wrap max-w-5xl mx-auto px-4">
            {MEDIA_PUBLICATIONS_DATA.publications.map((pub, idx) => (
              <a
                key={idx}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                title={pub.name}
                className="opacity-75 hover:opacity-100 hover:scale-105 transition-all duration-200 inline-block p-1"
              >
                <img
                  src={pub.logo}
                  alt={pub.name}
                  className="h-7 sm:h-8.5 w-auto object-contain max-w-[145px]"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 15. INDUSTRIES WE SERVE SECTION (.vyh-ind) */}
      <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Banner with Dynamic Background Image */}
          <div className="relative rounded-3xl overflow-hidden bg-slate-100/70 border border-slate-200/80 mb-8 lg:mb-10 min-h-[360px] sm:min-h-[400px] flex items-center shadow-sm">
            {/* Background Images for Each Industry */}
            {INDUSTRIES_SERVE_DATA.pillars.map((pillar, idx) => (
              <img
                key={pillar.id}
                src={pillar.heroImage}
                alt={pillar.title}
                className={`absolute inset-0 w-full h-full object-cover object-right transition-opacity duration-500 ease-out ${
                  activeIndustryIndex === idx ? 'opacity-100 z-0' : 'opacity-0 z-0 pointer-events-none'
                }`}
                loading="lazy"
              />
            ))}
            {/* Gradient Overlay for Left Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 sm:via-white/85 to-transparent z-10 w-full lg:w-[65%]" />

            {/* Left Content */}
            <div className="relative z-20 max-w-[540px] p-6 sm:p-10 lg:p-12">
              <div className="mb-3.5">
                <span className="inline-block bg-rose-600 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-xs">
                  {INDUSTRIES_SERVE_DATA.badge}
                </span>
              </div>
              <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold text-slate-900 leading-[1.2] tracking-tight mb-3">
                {INDUSTRIES_SERVE_DATA.heading}
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 leading-[1.65]">
                {INDUSTRIES_SERVE_DATA.subtext}
              </p>
            </div>
          </div>

          {/* 3 Pillar Cards */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-4 sm:p-6 lg:p-7 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {INDUSTRIES_SERVE_DATA.pillars.map((pillar, idx) => {
              const isActive = activeIndustryIndex === idx;
              return (
                <div
                  key={pillar.id}
                  onMouseEnter={() => setActiveIndustryIndex(idx)}
                  onClick={() => setActiveIndustryIndex(idx)}
                  className={`rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? 'border-rose-400 bg-rose-50/20 shadow-md -translate-y-1'
                      : 'border-slate-100 hover:border-rose-200 hover:bg-slate-50/50 hover:-translate-y-0.5'
                  }`}
                >
                  <div>
                    {/* Header: Icon + Title */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <img
                        src={pillar.icon}
                        alt={pillar.title}
                        className="w-12 h-12 rounded-xl object-contain shrink-0"
                        loading="lazy"
                      />
                      <h3 className="text-[18px] sm:text-[19px] font-bold text-slate-900 leading-tight">
                        {pillar.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-[13.5px] sm:text-[14px] text-slate-600 leading-[1.65] mb-6">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div>
                    <Link
                      to={pillar.linkUrl}
                      className="inline-block w-full py-2.5 px-5 rounded-full font-bold text-sm text-white text-center shadow-md btn-primary"
                    >
                      {pillar.buttonText}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 16. INDUSTRIES WE SERVE GRID / WHO CAN USE SECTION (.vyh-who) */}
      <section className="py-14 sm:py-20 lg:py-24 bg-slate-50/60 border-b border-slate-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold text-slate-900 leading-tight tracking-tight mb-3">
              {WHO_CAN_USE_DATA.heading}
            </h2>
            <p className="text-[14.5px] sm:text-[16px] text-slate-600 leading-normal max-w-[640px] mx-auto">
              {WHO_CAN_USE_DATA.subtext}
            </p>
          </div>

          {/* 4-Column Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4.5 sm:gap-5">
            {WHO_CAN_USE_DATA.items.slice(0, isWhoExpanded ? 12 : 8).map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-2xl p-5.5 sm:p-6 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-10 h-10 object-contain mb-3"
                    loading="lazy"
                  />
                  {/* Title */}
                  <h3 className="text-[17.5px] sm:text-[18.5px] font-bold text-slate-900 leading-snug mb-2">
                    {card.title}
                  </h3>
                  {/* Description with underlined link */}
                  <p className="text-[13px] sm:text-[13.5px] text-slate-600 leading-[1.6]">
                    {card.textBefore}
                    <Link
                      to={card.linkUrl}
                      className="text-slate-900 font-semibold underline underline-offset-2 hover:text-rose-600 transition-colors"
                    >
                      {card.linkText}
                    </Link>
                    {card.textAfter}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View More / View Less Toggle Button */}
          <div className="mt-8 sm:mt-10 text-center">
            <button
              type="button"
              onClick={() => setIsWhoExpanded(!isWhoExpanded)}
              className="btn-secondary px-7 py-2.5 rounded-full text-sm font-bold shadow-xs transition-all cursor-pointer hover:border-rose-400 hover:text-rose-600 gap-2"
            >
              <span>{isWhoExpanded ? 'View Less Industries' : 'View More Industries'}</span>
              {isWhoExpanded ? (
                <ChevronUp className="w-4 h-4 ml-1.5" />
              ) : (
                <ChevronDown className="w-4 h-4 ml-1.5" />
              )}
            </button>
          </div>
        </div>
      </section>

      {/* 17. FAQ ACCORDION (.vyh-faq) */}
      <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-100">
        <div className="max-w-[920px] mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-[30px] sm:text-[38px] lg:text-[42px] font-extrabold text-slate-900 leading-tight tracking-tight mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Find quick answers to common questions regarding EveryKadai’s billing software, GST compliance, and small business billing solutions.
            </p>
          </div>

          {/* FAQ Item List */}
          <div className="space-y-3 sm:space-y-3.5">
            {HOMEPAGE_FAQS.slice(0, isFaqExpanded ? HOMEPAGE_FAQS.length : 5).map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border bg-white transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-rose-300 shadow-md ring-1 ring-rose-100'
                      : 'border-slate-200/90 hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="flex w-full items-center justify-between px-6 py-4.5 sm:px-7 sm:py-5 text-left cursor-pointer transition-colors"
                  >
                    <h3 className="text-[15.5px] sm:text-[16.5px] font-bold text-slate-900 pr-4 leading-snug">
                      {faq.question}
                    </h3>
                    <div className="text-slate-400 shrink-0 transition-transform">
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-rose-600 stroke-[2]" />
                      ) : (
                        <Plus className="w-5 h-5 stroke-[1.8]" />
                      )}
                    </div>
                  </button>
                  {isOpen && (
                    <div
                      className="px-6 pb-5 sm:px-7 sm:pb-6 text-[14px] sm:text-[14.5px] text-slate-600 leading-[1.65] border-t border-slate-100 pt-3.5 [&_a]:text-rose-600 [&_a]:font-semibold [&_a]:underline"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* View More FAQs Button */}
          <div className="mt-8 sm:mt-11 text-center">
            <button
              type="button"
              onClick={() => setIsFaqExpanded(!isFaqExpanded)}
              className="inline-flex items-center justify-center border border-rose-300 bg-rose-50 text-rose-700 hover:bg-rose-100 font-bold text-sm sm:text-base px-8 sm:px-9 py-2.5 sm:py-3 rounded-full transition-all duration-200 cursor-pointer shadow-xs"
            >
              {isFaqExpanded ? 'View Less FAQs' : 'View More FAQs'}
            </button>
          </div>
        </div>
      </section>

      {/* 18. STAR RATING FEEDBACK WIDGET */}
      <RatingWidget />

      {/* Modals */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={activeVideo.url}
        title={activeVideo.title}
      />
    </div>
  );
};
