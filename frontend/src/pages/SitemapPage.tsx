import { Link } from 'react-router-dom';
import { Layers, FileText, ChevronRight, Boxes, Store, BookOpen, Compass } from 'lucide-react';

export const SitemapPage = () => {
  const BILLING_SOFTWARE_LINKS = [
    { title: "Billing Software for Retail Shop", href: "/free/billing-software-for-retail-shop" },
    { title: "Billing Software for Pharmacy", href: "/free/billing-software-for-retail-shop/pharmacy" },
    { title: "Billing Software for Grocery Store", href: "/free/billing-software-for-retail-shop/grocery-store" },
    { title: "Billing Software for Restaurant", href: "/free/restaurant-billing-software" },
    { title: "Billing Software for Jewellery Shop", href: "/free/billing-software-for-retail-shop/jewellery-shop" },
    { title: "Billing Software for Cloth Shop", href: "/free/billing-software-for-retail-shop/cloth-shop" },
    { title: "Billing Software for Medical Shop", href: "/free/billing-software-for-retail-shop/pharmacy" },
    { title: "Billing Software for Supermarket", href: "/free/billing-software-for-retail-shop" },
    { title: "Billing Software for Electronics Shop", href: "/free/billing-software-for-retail-shop" },
    { title: "Billing Software for Electrical Shop", href: "/free/billing-software-for-retail-shop" },
    { title: "Billing Software for Optical Shop", href: "/free/billing-software-for-retail-shop" },
    { title: "Billing Software for Hardware Stores", href: "/free/billing-software-for-retail-shop" },
    { title: "Billing Software for Salon & Spa", href: "/free/billing-software-for-retail-shop" },
    { title: "Billing Software for Bakery Shop", href: "/free/billing-software-for-retail-shop" },
    { title: "Billing Software for Distributors", href: "/distributor/create" },
    { title: "Billing Software for Automobile Shop", href: "/free/billing-software-for-retail-shop" },
  ];

  const INVENTORY_LINKS = [
    { title: "Warehouse Inventory Management", href: "/free/inventory-management-software" },
    { title: "Spare Parts Inventory Software", href: "/free/inventory-management-software" },
    { title: "Barcode Inventory Management", href: "/free/inventory-management-software" },
    { title: "Medical Device Inventory", href: "/free/inventory-management-software" },
    { title: "Automotive Inventory Software", href: "/free/inventory-management-software" },
    { title: "Retail Inventory Management", href: "/free/inventory-management-software" },
    { title: "Clothing Inventory App", href: "/free/billing-software-for-retail-shop/cloth-shop" },
    { title: "Pharma Inventory & Expiry Tracking", href: "/free/billing-software-for-retail-shop/pharmacy" },
    { title: "Grocery & Kirana Inventory", href: "/free/billing-software-for-retail-shop/grocery-store" },
    { title: "Electronics Inventory App", href: "/free/inventory-management-software" },
  ];

  const ACCOUNTING_LINKS = [
    { title: "Accounting Software for Small Business", href: "/free/small-business-accounting-software" },
    { title: "Accounting for Freelancers & Consultants", href: "/free/small-business-accounting-software" },
    { title: "Accounting for Real Estate & Construction", href: "/free/small-business-accounting-software" },
    { title: "Cloud-Based Accounting Software", href: "/free/small-business-accounting-software" },
    { title: "Double-Entry Ledger Management", href: "/free/small-business-accounting-software" },
    { title: "Trial Balance & Balance Sheet Generator", href: "/free/small-business-accounting-software" },
    { title: "GST Audit & Tax Return Reports", href: "/free/small-business-accounting-software" },
    { title: "Cash Flow Statement & P&L", href: "/free/small-business-accounting-software" },
  ];

  const INVOICING_POS_LINKS = [
    { title: "Free Invoicing Software & Invoice Maker", href: "/free/invoicing-software" },
    { title: "E-Invoicing Software with IRP Integration", href: "/free/invoicing-software/e-invoicing" },
    { title: "POS Billing Software for Counter Billing", href: "/free/pos-billing-software" },
    { title: "Smart OCR Scanner & Bill Digitizer", href: "/ocr-scanner-software" },
    { title: "Thermal Printer Fast Checkout", href: "/gst-accounting-pc" },
    { title: "Delivery Challan & Order Tracking", href: "/free/invoicing-software" },
    { title: "Restaurant POS & KOT Billing", href: "/free/restaurant-billing-software" },
    { title: "Barcode Generator & Label Printing", href: "/free/pos-billing-software" },
  ];

  const RESOURCE_GUIDE_LINKS = [
    { title: "How to Set a Low Stock Alert in EveryKadai", href: "/guides" },
    { title: "How to Add Item Batches & Expiry Dates", href: "/guides" },
    { title: "How to Generate & Print Barcodes", href: "/guides" },
    { title: "How to Connect Thermal Receipt Printer", href: "/guides" },
    { title: "How to Create Tax/GST Invoices", href: "/guides" },
    { title: "How to Export EveryKadai Data to Tally", href: "/guides" },
    { title: "How to Setup Bank Details & UPI QR", href: "/guides" },
    { title: "Multi-Location Multi-Device Synchronization", href: "/guides" },
  ];

  const FORMAT_TEMPLATES = [
    { title: "GST Invoice Formats (Excel/Word/PDF)", href: "/free/invoicing-software" },
    { title: "Quotation & Estimate Formats", href: "/free/invoicing-software" },
    { title: "Balance Sheet & P&L Formats", href: "/free/small-business-accounting-software" },
    { title: "Cash Book & Ledger Formats", href: "/free/small-business-accounting-software" },
    { title: "Payment Receipt & Voucher Formats", href: "/free/invoicing-software" },
    { title: "Delivery Challan Formats", href: "/free/invoicing-software" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-rose-50/70 via-slate-50/40 to-white py-14 lg:py-20 border-b border-slate-200/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(225,29,72,0.08),rgba(255,255,255,0))] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-rose-700 text-xs font-semibold uppercase tracking-wider shadow-xs mb-3">
            <span>Site Directory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3">
            EveryKadai Business Softwares Directory
          </h1>
          <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
            Find all EveryKadai business applications, industry solutions, guides, and invoicing tools in one place.
          </p>
        </div>
      </section>

      {/* Main Directory Links Grid */}
      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {/* Card 1: Billing Softwares */}
          <div className="card-everykadai p-7 bg-white shadow-xs hover:shadow-lg hover:border-rose-300 transition-all">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 border border-rose-100">
                <FileText className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Billing Software</h2>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              {BILLING_SOFTWARE_LINKS.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="hover:text-rose-600 flex items-center justify-between group py-0.5">
                    <span className="truncate group-hover:translate-x-0.5 transition-transform">{link.title}</span>
                    <ChevronRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-rose-600 shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Inventory Management */}
          <div className="card-everykadai p-7 bg-white shadow-xs hover:shadow-lg hover:border-blue-300 transition-all">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-100">
                <Boxes className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Inventory Software</h2>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              {INVENTORY_LINKS.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="hover:text-rose-600 flex items-center justify-between group py-0.5">
                    <span className="truncate group-hover:translate-x-0.5 transition-transform">{link.title}</span>
                    <ChevronRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-rose-600 shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3: Accounting Software */}
          <div className="card-everykadai p-7 bg-white shadow-xs hover:shadow-lg hover:border-emerald-300 transition-all">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                <Layers className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Accounting Software</h2>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              {ACCOUNTING_LINKS.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="hover:text-rose-600 flex items-center justify-between group py-0.5">
                    <span className="truncate group-hover:translate-x-0.5 transition-transform">{link.title}</span>
                    <ChevronRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-rose-600 shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 4: Invoicing & POS */}
          <div className="card-everykadai p-7 bg-white shadow-xs hover:shadow-lg hover:border-purple-300 transition-all">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 border border-purple-100">
                <Store className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Invoicing & POS</h2>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              {INVOICING_POS_LINKS.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="hover:text-rose-600 flex items-center justify-between group py-0.5">
                    <span className="truncate group-hover:translate-x-0.5 transition-transform">{link.title}</span>
                    <ChevronRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-rose-600 shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 5: Product Guides */}
          <div className="card-everykadai p-7 bg-white shadow-xs hover:shadow-lg hover:border-amber-300 transition-all">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 border border-amber-100">
                <BookOpen className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Product Guides</h2>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              {RESOURCE_GUIDE_LINKS.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="hover:text-rose-600 flex items-center justify-between group py-0.5">
                    <span className="truncate group-hover:translate-x-0.5 transition-transform">{link.title}</span>
                    <ChevronRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-rose-600 shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 6: Free Formats & Templates */}
          <div className="card-everykadai p-7 bg-white shadow-xs hover:shadow-lg hover:border-rose-300 transition-all">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 border border-rose-100">
                <Compass className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Formats & Templates</h2>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              {FORMAT_TEMPLATES.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="hover:text-rose-600 flex items-center justify-between group py-0.5">
                    <span className="truncate group-hover:translate-x-0.5 transition-transform">{link.title}</span>
                    <ChevronRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-rose-600 shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
