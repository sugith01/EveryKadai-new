import {
  desktopDemo,
  heroMockup,
  customizeBills,
  exploreReports,
} from '../assets/images/index.ts';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Play, Search, ArrowRight } from 'lucide-react';
import { VideoModal } from '../components/VideoModal.tsx';

interface ResourceItem {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  meta: string;
  link?: string;
  image?: string;
}

interface ResourceCategoryConfig {
  badge: string;
  title: string;
  desc: string;
  categories: string[];
  items: ResourceItem[];
}

export const ResourceIndexPage = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

  const path = location.pathname;

  // Determine resource type
  let resourceType: 'blog' | 'guides' | 'use-cases' | 'success-stories' | 'videos' = 'blog';
  if (path.includes('guides')) resourceType = 'guides';
  else if (path.includes('use-cases')) resourceType = 'use-cases';
  else if (path.includes('success-stories')) resourceType = 'success-stories';
  else if (path.includes('videos')) resourceType = 'videos';

  const RESOURCE_CONFIG: Record<string, ResourceCategoryConfig> = {
    blog: {
      badge: "EveryKadai Knowledge Hub",
      title: "Business Blog - Tax, Growth & MSME Insights",
      desc: "Stay updated on the latest GST regulations, inventory strategies, and business growth advice for small businesses.",
      categories: ['All', 'GST & Taxation', 'Business Growth', 'Accounting', 'Invoicing'],
      items: [
        { id: '1', title: 'Top 7 Changes in GST Rates & E-Invoicing Rules in 2026', category: 'GST & Taxation', excerpt: 'Complete breakdown of recent government circulars affecting retail and wholesale invoicing.', meta: '5 min read' },
        { id: '2', title: 'How to Prevent Dead Inventory and Optimize Cash Flow', category: 'Business Growth', excerpt: 'Practical techniques for managing stock holding costs and reorder thresholds.', meta: '4 min read' },
        { id: '3', title: 'Double Entry Accounting Simplified for Retail Shop Owners', category: 'Accounting', excerpt: 'Everything you need to know about ledgers, trial balance, and debit/credit balances without formal CA training.', meta: '6 min read' },
        { id: '4', title: 'How WhatsApp Invoicing Boosts Payment Collections by 40%', category: 'Invoicing', excerpt: 'How integrating instant UPI QR codes in WhatsApp invoices expedites client payment turnaround.', meta: '3 min read' },
        { id: '5', title: 'Complete Guide to Input Tax Credit (ITC) Reversal Rules', category: 'GST & Taxation', excerpt: 'Avoid compliance penalties by claiming correct ITC through automated EveryKadai reconciliation.', meta: '7 min read' },
        { id: '6', title: 'The Ultimate Checklist for Starting a Supermarket in India', category: 'Business Growth', excerpt: 'Hardware selection, barcode setup, POS lanes, and inventory planning from day one.', meta: '8 min read' },
      ],
    },
    guides: {
      badge: "Product Tutorials",
      title: "EveryKadai Step-by-Step Product Guides",
      desc: "Learn how to configure advanced features, connect barcode guns, and print customized invoices effortlessly.",
      categories: ['All', 'Setup', 'Billing', 'Inventory', 'Hardware'],
      items: [
        { id: '1', title: 'How to Set Low Stock Alerts and Minimum Reorder Levels', category: 'Inventory', excerpt: 'Step-by-step instructions to prevent stock-outs on fast-moving consumer items.', meta: 'Step-by-step guide' },
        { id: '2', title: 'How to Add Item Batches and Expiry Dates in EveryKadai', category: 'Inventory', excerpt: 'Configure batch tracking for medicines, packaged food, and perishable supplies.', meta: 'Step-by-step guide' },
        { id: '3', title: 'How to Connect a Thermal Receipt Printer with EveryKadai PC', category: 'Hardware', excerpt: 'Driver installation and ESC/POS configuration for 2-inch and 3-inch thermal printers.', meta: 'Hardware Guide' },
        { id: '4', title: 'How to Generate Barcode Stickers and Print Item Labels', category: 'Hardware', excerpt: 'Design and print custom barcode hang-tags and labels directly from EveryKadai.', meta: 'Hardware Guide' },
        { id: '5', title: 'How to Export EveryKadai Transaction Data into Tally', category: 'Billing', excerpt: 'Generate direct XML files compatible with Tally ERP 9 and Tally Prime for your auditor.', meta: 'Accounting Guide' },
        { id: '6', title: 'How to Enable Multi-Counter Cloud Sync on Windows PC', category: 'Setup', excerpt: 'Link multiple cash counters to your main store server for real-time live business monitoring.', meta: 'Setup Guide' },
      ],
    },
    'use-cases': {
      badge: "Real-World Workflows",
      title: "EveryKadai Use Cases for Every Business Need",
      desc: "Explore 26+ proven workflows showing how different retail and wholesale departments save hours with EveryKadai.",
      categories: ['All', 'Retail', 'Wholesale', 'Service', 'Compliance'],
      items: [
        { id: '1', title: 'Offline Billing During Power Cuts & Internet Outages', category: 'Retail', excerpt: 'Keep counter queues moving without disruption; data syncs seamlessly when back online.', meta: 'Workflow Blueprint' },
        { id: '2', title: 'Barcode-Based Checkout for 1,000+ Daily Store Customers', category: 'Retail', excerpt: 'High-speed counter scanning that eliminates manual price lookup and typing mistakes.', meta: 'Workflow Blueprint' },
        { id: '3', title: 'Automated Payment Reminders via WhatsApp and SMS', category: 'Wholesale', excerpt: 'Recover unpaid customer debts (Udhar Khata) 3x faster with polite automated reminders.', meta: 'Workflow Blueprint' },
        { id: '4', title: 'Multi-Location Godown & Warehouse Stock Transfer', category: 'Wholesale', excerpt: 'Track internal delivery challans and inventory movements across multiple branch outlets.', meta: 'Workflow Blueprint' },
        { id: '5', title: 'Direct E-Invoicing & E-Way Bill Generation for B2B Goods', category: 'Compliance', excerpt: 'Create government-compliant IRN invoices and transport waybills in a single click.', meta: 'Workflow Blueprint' },
        { id: '6', title: 'Estimates to Final Invoice One-Click Conversion', category: 'Service', excerpt: 'Send professional quotes to clients and convert approved estimates directly into tax bills.', meta: 'Workflow Blueprint' },
      ],
    },
    'success-stories': {
      badge: "Real Customer Stories",
      title: "How 1.5 Crore+ Indian Businesses Scale with EveryKadai",
      desc: "Read first-hand accounts from shop owners, distributors, and business founders across India.",
      categories: ['All', 'Retail', 'Distribution', 'Manufacturing'],
      items: [
        { id: '1', title: 'How Ankit Kumar Digitized His Gift & Novelty Shop in Patna', category: 'Retail', excerpt: 'Switched from manual registers to barcode billing, reducing evening customer wait times by 60%.', meta: 'Retail Story' },
        { id: '2', title: 'KJV Technologies Scaled Across 2 Wholesale Branches with Cloud Sync', category: 'Distribution', excerpt: 'Managed 5,000+ computer hardware SKUs across two warehouse locations with live inventory.', meta: 'Distributor Story' },
        { id: '3', title: 'Shree Krishna Pharmacy Eliminated Expired Stock Loss by 95%', category: 'Retail', excerpt: 'Batch and expiry alert system helped return near-expiry medicines to distributors on time.', meta: 'Pharmacy Story' },
        { id: '4', title: 'Apex Garments Handled Festival Rush Billing with Size-Color Matrix', category: 'Retail', excerpt: 'Billed over 800 customers daily during Diwali season with barcode tags and custom offers.', meta: 'Apparel Story' },
      ],
    },
    videos: {
      badge: "Video Demonstrations",
      title: "Product Demos & Feature Walkthrough Videos",
      desc: "Watch hands-on video tutorials showing you how to set up, bill, and manage inventory with EveryKadai.",
      categories: ['All', 'Product Tours', 'Tutorials', 'Accounting'],
      items: [
        { id: '1', title: 'Complete 10-Minute EveryKadai Software Product Tour', category: 'Product Tours', excerpt: 'Full walkthrough of creating bills, adding items, configuring tax, and generating balance sheets.', meta: '10 mins', image: desktopDemo },
        { id: '2', title: 'How to Create Your First GST Invoice in 60 Seconds', category: 'Tutorials', excerpt: 'Watch how fast and intuitive billing is with auto-calculated CGST, SGST, and HSN codes.', meta: '2 mins', image: heroMockup },
        { id: '3', title: 'Setting Up POS Barcode Billing & Thermal Printer', category: 'Tutorials', excerpt: 'Hardware tutorial connecting USB barcode scanners and 3-inch thermal receipt printers.', meta: '5 mins', image: customizeBills },
        { id: '4', title: 'Generating GSTR-1 and Exporting to Tally', category: 'Accounting', excerpt: 'Learn how to generate monthly tax reports and send audit files directly to your accountant.', meta: '4 mins', image: exploreReports },
      ],
    },
  };

  const currentConfig = RESOURCE_CONFIG[resourceType];

  const filteredItems = currentConfig.items.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-rose-50/70 via-slate-50/40 to-white py-14 lg:py-20 border-b border-slate-200/80">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(225,29,72,0.08),rgba(255,255,255,0))] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-rose-700 text-xs font-semibold uppercase tracking-wider shadow-xs mb-3">
            <span>{currentConfig.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 mb-3">
            {currentConfig.title}
          </h1>
          <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
            {currentConfig.desc}
          </p>

          {/* Search Bar + Categories */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute inset-y-0 left-0 pl-3.5 flex items-center h-full w-4 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search articles or topics..."
                className="w-full rounded-full border border-slate-300 py-2.5 pl-10 pr-4 text-sm focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 focus:outline-hidden bg-white shadow-xs"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {currentConfig.categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-rose-600 text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resource Cards Grid */}
      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="card-everykadai p-6 flex flex-col justify-between hover:border-rose-300 hover:shadow-xl transition-all group bg-white"
            >
              <div>
                {/* Optional Image for Video / Card */}
                {resourceType === 'videos' && item.image && (
                  <div
                    onClick={() => setSelectedVideo({ url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: item.title })}
                    className="relative rounded-xl overflow-hidden mb-4 bg-slate-950 aspect-video flex items-center justify-center cursor-pointer group-hover:opacity-95 transition"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-600 text-white shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="h-5 w-5 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {item.meta}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-rose-600 transition mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {item.excerpt}
                </p>
              </div>

              {resourceType === 'videos' ? (
                <button
                  type="button"
                  onClick={() => setSelectedVideo({ url: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: item.title })}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:underline cursor-pointer"
                >
                  <Play className="h-3.5 w-3.5 fill-current" />
                  <span>Watch Video Tutorial</span>
                </button>
              ) : (
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 group-hover:underline">
                  <span>Read Article</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 text-slate-500">
            <p className="text-base font-semibold">No results found for "{searchTerm}"</p>
            <p className="text-xs mt-1">Try searching for other keywords or change the category filter.</p>
          </div>
        )}
      </section>

      {/* Video Modal Player */}
      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoUrl={selectedVideo.url}
          title={selectedVideo.title}
        />
      )}
    </div>
  );
};
