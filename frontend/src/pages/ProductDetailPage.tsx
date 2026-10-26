import {
  exploreReports,
  setUpBusiness,
  customizeBills,
  downloadTrial,
  heroMockup,
} from '../assets/images/index.ts';
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { PAGE_REGISTRY } from '../data/pageRegistry.ts';
import { Download, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import { DownloadModal } from '../components/DownloadModal.tsx';
import { RatingWidget } from '../components/RatingWidget.tsx';

interface ProductData {
  title: string;
  badge: string;
  heroDesc: string;
  heroImage: string;
  features: { title: string; desc: string }[];
  benefits: string[];
}

const PRODUCT_DETAILS_MAP: Record<string, ProductData> = {
  "/free/small-business-accounting-software": {
    title: "Accounting Software for Small Business",
    badge: "GST Accounting Module",
    heroDesc: "Automate your daily bookkeeping, ledgers, trial balance, balance sheet, and profit & loss statements. Zero accounting knowledge needed.",
    heroImage: exploreReports,
    features: [
      { title: "Double-Entry Bookkeeping", desc: "Maintains balanced debits and credits automatically behind every sale and purchase entry." },
      { title: "Automated Profit & Loss", desc: "View real-time gross and net profit reports filtered by date range or customer party." },
      { title: "Cash Flow & Bank Reconciliation", desc: "Track cash-in-hand and reconcile bank account transactions with zero discrepancies." },
      { title: "Direct Tally Data Export", desc: "Export your entire financial year's vouchers and ledgers directly into Tally format for your CA." },
    ],
    benefits: [
      "No prior accounting knowledge or certificate required",
      "Tracks customer payment dues with automated WhatsApp reminders",
      "Auto-generates GSTR-1, GSTR-2, and GSTR-3B tax reports",
      "Full offline support with automatic cloud backup",
    ],
  },
  "/free/inventory-management-software": {
    title: "Inventory Management Software",
    badge: "Live Stock Tracking",
    heroDesc: "Monitor stock quantities in real time, set automated low-stock reorder triggers, and track batches with expiration dates to eliminate dead stock.",
    heroImage: setUpBusiness,
    features: [
      { title: "Low Stock Automated Alerts", desc: "Receive immediate notifications on your PC dashboard when product stock levels fall below safe thresholds." },
      { title: "Batch & Expiry Date Management", desc: "Track medicine or perishable food batches with manufactured and expiry dates to avoid expired product losses." },
      { title: "Barcode Scanner Sync", desc: "Create, print, and scan item barcode stickers directly from the application with fast lookups." },
      { title: "Multi-Warehouse Management", desc: "Manage stock movements and inventory transfers between multiple godowns and retail counters." },
    ],
    benefits: [
      "Eliminates stock-outs and excess dead inventory holding costs",
      "Item-level profit margin calculations",
      "Bulk Excel import/export for thousands of SKUs in seconds",
      "Serial number and IMEI number tracking for electronics",
    ],
  },
  "/free/invoicing-software": {
    title: "Free Invoicing Software & Invoice Maker",
    badge: "Professional Invoicing",
    heroDesc: "Create and print GST and non-GST invoices in under 10 seconds. Select from 10+ professional invoice formats and share directly via WhatsApp.",
    heroImage: customizeBills,
    features: [
      { title: "Customizable Invoice Themes", desc: "Choose color themes, add your company logo, bank UPI QR code, signature, and payment terms." },
      { title: "WhatsApp & SMS Sharing", desc: "Send PDF invoices directly to your client's WhatsApp or phone with a clickable payment link." },
      { title: "Automated Tax Calculation", desc: "Automatically calculates CGST, SGST, IGST, and cess based on product HSN/SAC codes." },
      { title: "Recurring Invoices & Estimates", desc: "Convert quotations into tax invoices with a single click and schedule recurring billing." },
    ],
    benefits: [
      "Faster customer payment collections with UPI QR on bills",
      "Reduces manual billing paperwork and billing line wait times",
      "Supports thermal and standard laser A4/A5 printers",
      "Automatic sequential invoice numbering",
    ],
  },
  "/free/invoicing-software/e-invoicing": {
    title: "E-Invoicing Software with IRP Integration",
    badge: "Direct Govt Portal Integration",
    heroDesc: "Generate government-compliant E-Invoices with unique Invoice Reference Numbers (IRN) and signed QR codes in real time.",
    heroImage: customizeBills,
    features: [
      { title: "Instant IRN Generation", desc: "One-click connection to the official GST Invoice Registration Portal (IRP) without manual JSON upload." },
      { title: "Mandatory Signed QR Code", desc: "Automatically embeds valid government signed QR codes into your printable PDF invoices." },
      { title: "Auto-Populated E-Way Bills", desc: "Create corresponding E-Way Bills simultaneously with E-Invoices to expedite transportation." },
      { title: "Automated GSTR-1 Population", desc: "Eliminates duplicate entry; e-invoice details automatically flow into your monthly GSTR-1 returns." },
    ],
    benefits: [
      "100% compliant with government E-Invoicing mandates for B2B transactions",
      "Zero manual data entry on government portal",
      "Eliminates invoice reconciliation mismatches",
      "Automated cancellation and credit note handling",
    ],
  },
  "/free/pos-billing-software": {
    title: "POS Billing Software for Fast Counter Checkout",
    badge: "Retail Point of Sale",
    heroDesc: "Designed for busy supermarkets, kirana stores, and retail showrooms. Handles barcode guns, thermal receipt printers, and weighing scales with zero lag.",
    heroImage: downloadTrial,
    features: [
      { title: "Lightning Fast Barcode Checkout", desc: "Scan item barcodes continuously with automatic cart population and instant total calculation." },
      { title: "Thermal Receipt Printing", desc: "Supports 2-inch and 3-inch thermal printers with customizable receipt headers and promotional footers." },
      { title: "Split Payment Counter", desc: "Accept multiple payment modes on a single bill (e.g. part Cash, part UPI, part Store Credit)." },
      { title: "Multi-Counter Lane Sync", desc: "Run multiple billing counters simultaneously with real-time central inventory synchronization." },
    ],
    benefits: [
      "Reduces customer checkout wait times by 70%",
      "Touch-screen and keyboard shortcut support for rapid entry",
      "Tracks cashier shifts and counter cash drawer reconciliations",
      "Works uninterrupted during internet outages",
    ],
  },
  "/ocr-scanner-software": {
    title: "Smart OCR Scanner & Bill Digitizer",
    badge: "AI Bill Scanning",
    heroDesc: "Convert physical vendor paper bills and receipts into digital purchase entries automatically using intelligent AI OCR scanning.",
    heroImage: setUpBusiness,
    features: [
      { title: "Snap & Digitize", desc: "Take a photo of any printed purchase bill using your phone camera or upload a PDF document." },
      { title: "Automated Line Item Extraction", desc: "AI automatically detects item names, quantities, unit prices, tax percentages, and totals." },
      { title: "Vendor Ledger Auto-Update", desc: "Automatically updates accounts payable in your vendor ledger with zero typing needed." },
      { title: "Receipt Archival", desc: "Keeps a permanent digital copy attached to each purchase transaction for audit verification." },
    ],
    benefits: [
      "Saves hours of tedious manual data entry every week",
      "Eliminates typographical and price calculation mistakes",
      "Helps claim 100% accurate Input Tax Credit (ITC)",
      "Accessible right inside your desktop software and web portal",
    ],
  },
  "/free/billing-software-for-retail-shop": {
    title: "Billing Software for Retail Shops",
    badge: "Retail Operations",
    heroDesc: "Complete store management software tailored for Indian retail businesses. From barcode creation to customer loyalty points and fast counter checkout.",
    heroImage: heroMockup,
    features: [
      { title: "Item Barcode Printing", desc: "Print custom barcode labels with item name, rate, and MRP to stick on loose retail products." },
      { title: "Customer Credit Khata", desc: "Record customer credit balances (Udhar) and send automated payment reminder SMS messages." },
      { title: "Daily Sales & Profit Analysis", desc: "Know your daily cash in drawer, total sales volume, and gross profit with one touch." },
      { title: "Loyalty Points & Discounts", desc: "Reward repeat shoppers with loyalty points and configure festival discount promotions." },
    ],
    benefits: [
      "Customized for corner retail shops, boutiques, and marts",
      "Keeps track of daily cash in hand versus bank balance",
      "Quick item lookup by name, code, or barcode scan",
      "Generates professional printed receipts in seconds",
    ],
  },
  "/free/billing-software-for-retail-shop/pharmacy": {
    title: "Pharmacy & Medical Store Billing Software",
    badge: "Healthcare & Pharma",
    heroDesc: "Specialized software for chemists and medical shops. Complete batch tracking, drug expiry warnings, Schedule H register, and doctor-wise billing.",
    heroImage: setUpBusiness,
    features: [
      { title: "Batch & Expiry Date Alerts", desc: "Prevents dispensing expired medicines with automatic alerts at the billing counter." },
      { title: "Rack & Shelf Locator", desc: "Find any medicine instantly by checking its assigned rack and shelf number on the billing screen." },
      { title: "Schedule H & H1 Drug Records", desc: "Maintain regulatory compliant registers for restricted prescription medicines effortlessly." },
      { title: "Generic Substitute Search", desc: "Quickly look up alternative medicine brands containing the same salt composition." },
    ],
    benefits: [
      "100% compliance with FDA drug dispensing regulations",
      "Returns expired medicine stock to distributors with credit notes",
      "Doctor and patient prescription history tracking",
      "Speedy checkout for emergency and regular patients",
    ],
  },
  "/free/billing-software-for-retail-shop/grocery-store": {
    title: "Grocery & Kirana Store Billing Software",
    badge: "Grocery & Supermarket",
    heroDesc: "Speed up counter queues at your kirana or grocery store. Connect electronic weighing scales, manage loose grains, and track daily fast-moving consumer items.",
    heroImage: customizeBills,
    features: [
      { title: "Weighing Scale Integration", desc: "Weigh loose grains, vegetables, and pulses with weight auto-populating in the bill total." },
      { title: "Loose Item Pricing", desc: "Manage bulk sacks and convert into fractional gram quantities with accurate rate calculation." },
      { title: "Fast Moving Item Hotkeys", desc: "One-touch touchscreen buttons for milk, bread, eggs, and daily staples without scanning." },
      { title: "Instant Khata Ledger", desc: "Record neighborhood customer Udhar with instant WhatsApp payment receipts." },
    ],
    benefits: [
      "Reduces evening rush hour billing queues drastically",
      "Eliminates weight and pricing calculation mistakes",
      "Sends automated monthly balance reminders to customers",
      "Works completely offline during frequent power or network cuts",
    ],
  },
  "/free/restaurant-billing-software": {
    title: "Restaurant Billing & KOT Management Software",
    badge: "Food & Beverage",
    heroDesc: "Table management, Kitchen Order Tickets (KOT), split checks, digital QR menus, and parcel billing built for restaurants, cafes, and food courts.",
    heroImage: downloadTrial,
    features: [
      { title: "Kitchen Order Tickets (KOT)", desc: "Send orders directly to the kitchen printer or kitchen display screen instantly." },
      { title: "Table Floor Management", desc: "Live table occupancy status: see available, reserved, and billed dining tables at a glance." },
      { title: "Menu Modifiers & Add-ons", desc: "Handle special cooking instructions, item combos, and extra toppings easily." },
      { title: "Split & Parcel Bills", desc: "Split checks by seat or percentage, and manage takeaway parcels with separate GST rules." },
    ],
    benefits: [
      "Eliminates kitchen communication errors and food waste",
      "Speeds up table turnaround time during peak dining hours",
      "Generates item-wise consumption reports for raw kitchen stock",
      "Supports QR code ordering directly from dining tables",
    ],
  },
  "/free/billing-software-for-retail-shop/jewellery-shop": {
    title: "Jewellery Shop Billing & Karat Accounting",
    badge: "Precious Metals & Gems",
    heroDesc: "Precision gold, silver, and diamond jewellery accounting. Manage karat purity, making charges, gemstone weights, and old gold purchase exchanges.",
    heroImage: exploreReports,
    features: [
      { title: "Karat Purity & Hallmark Tracking", desc: "Calculate rates accurately for 24K, 22K, 18K, and 14K gold with official hallmark ID tags." },
      { title: "Making Charge & Wastage Calculation", desc: "Set making charges by percentage or fixed gram rate with automatic wastage addition." },
      { title: "Old Gold Exchange Vouchers", desc: "Deduct old jewellery exchange values cleanly with purity testing vouchers." },
      { title: "Item Tag Barcoding", desc: "Print micro jewellery barcode tags including gross weight, net weight, and stone weight." },
    ],
    benefits: [
      "Ensures transparent pricing and customer trust",
      "Auto-generates GST tax invoices with mandatory hallmark details",
      "Live daily gold and silver market rate updates across all items",
      "Complete diamond certificate and gemstone weight logs",
    ],
  },
  "/free/billing-software-for-retail-shop/cloth-shop": {
    title: "Garments & Cloth Shop Billing Software",
    badge: "Apparel & Fashion",
    heroDesc: "Manage clothing sizes (S, M, L, XL), colors, fabrics, and brands in a single matrix. Print apparel tags and manage seasonal discount sales.",
    heroImage: heroMockup,
    features: [
      { title: "Size & Color Matrix", desc: "Add one garment style and manage all size (S, M, L, XL) and color variations under one master item." },
      { title: "Barcode Hang-Tag Printing", desc: "Print durable barcode swing tags with style number, brand, size, and MRP." },
      { title: "Seasonal Discount Promotions", desc: "Run 'Buy 2 Get 1 Free' or flat percentage end-of-season sales campaigns automatically." },
      { title: "Alteration & Order Tracking", desc: "Track customer tailoring alteration statuses with automated pickup SMS alerts." },
    ],
    benefits: [
      "Prevents size mismatches and misplaced garment stock",
      "Speedy billing during festival and wedding shopping rushes",
      "Identifies best-selling brands and slow-moving fashion styles",
      "Manages customer exchange policies with original bill lookups",
    ],
  },
};

export const ProductDetailPage = () => {
  const location = useLocation();
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const currentPath = location.pathname;
  const pageMeta = PAGE_REGISTRY[currentPath];
  const productData = PRODUCT_DETAILS_MAP[currentPath] || {
    title: pageMeta?.title || "EveryKadai Business Software",
    badge: "Business Solution",
    heroDesc: pageMeta?.description || "Simplify your billing, accounting, and inventory with India's #1 small business software.",
    heroImage: heroMockup,
    features: [
      { title: "Instant Invoicing", desc: "Create professional GST bills in under 10 seconds." },
      { title: "Live Stock Tracking", desc: "Monitor stock quantities and set low-stock reorder triggers." },
      { title: "GST Reports", desc: "Generate automated GSTR-1, GSTR-3B audit reports." },
      { title: "Cloud Synchronization", desc: "Sync data securely across counters and multiple PCs." },
    ],
    benefits: [
      "100% GST compliant and trusted by over 1.5 Crore businesses",
      "Works without active internet connection",
      "Free 7-day trial with full feature access",
      "Dedicated 7-day customer support",
    ],
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb Strip */}
      <div className="bg-slate-50/80 border-b border-slate-200/80 py-3 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-1.5 flex-wrap">
          <Link to="/" className="hover:text-rose-600 transition">Home</Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <Link to="/sitemap" className="hover:text-rose-600 transition">Solutions</Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <span className="font-semibold text-slate-800 truncate">{productData.title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-rose-50/70 via-slate-50/40 to-white py-14 lg:py-20 border-b border-slate-200/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(225,29,72,0.08),rgba(255,255,255,0))] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-rose-700 text-xs font-semibold uppercase tracking-wider shadow-xs">
                <span className="h-2 w-2 rounded-full bg-rose-600 animate-pulse" />
                <span>{productData.badge}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {productData.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {productData.heroDesc}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  type="button"
                  onClick={() => setIsDownloadModalOpen(true)}
                  className="btn-primary w-full sm:w-auto px-8 py-3.5 text-base font-bold shadow-lg hover:shadow-xl transition cursor-pointer flex items-center justify-center gap-2"
                >
                  <Download className="h-5 w-5" />
                  <span>Download Free Trial</span>
                </button>
                <Link
                  to="/pricing"
                  className="btn-secondary w-full sm:w-auto px-6 py-3.5 text-slate-700 font-semibold text-sm transition text-center"
                >
                  View Pricing Plans
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 pt-2">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Free 7-Day Trial</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Works Offline & Online</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Trusted by 1.5 Cr+ Businesses</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200/90 bg-white p-3 shadow-xl">
                <img
                  src={productData.heroImage}
                  alt={productData.title}
                  className="w-full h-auto rounded-xl object-contain"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-3">
            <Zap className="h-3.5 w-3.5 text-rose-600" />
            <span>Workflow Automation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Key Features Built for Your Workflow
          </h2>
          <p className="text-sm text-slate-600 mt-2 max-w-xl mx-auto">
            Engineered to simplify day-to-day operations and maximize operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productData.features.map((feat, idx) => (
            <div key={idx} className="card-everykadai p-7 flex items-start gap-4 hover:border-rose-300 hover:shadow-lg transition-all group">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 border border-rose-100 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1.5">{feat.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Advantages Checklist */}
      <section className="py-16 lg:py-20 bg-slate-50/60 border-y border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Indian Businesses Choose EveryKadai
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Clear business advantages that deliver real return on investment from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {productData.benefits.map((b, idx) => (
              <div key={idx} className="card-everykadai p-5 flex items-start gap-3 bg-white hover:border-rose-200 transition-all">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">{b}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setIsDownloadModalOpen(true)}
              className="btn-primary px-10 py-4 text-base font-bold shadow-lg hover:shadow-xl cursor-pointer"
            >
              Start Your Free Trial Now
            </button>
          </div>
        </div>
      </section>

      <RatingWidget />

      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </div>
  );
};
