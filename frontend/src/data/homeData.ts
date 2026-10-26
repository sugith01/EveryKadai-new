import { heroMockup } from '../assets/images/index.ts';

export interface SetupStep {
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface IndustryItem {
  title: string;
  slug: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const HERO_DATA = {
  trustBadge: "Trusted by 1.5 Cr+ Indian Businesses",
  heading: "Best GST Billing Software for Small Businesses",
  subtext: "Easy GST billing, manage tax compliance, track payments, control inventory, and simplify accounting with EveryKadai billing software for small businesses. Start your free trial today.",
  ctaText: "Download EveryKadai Now",
  ctaLink: "https://billing.vyaparapp.in/Vyapar-Install",
  heroMockup,
};

export interface TrustStripItem {
  icon: string;
  label: string;
  alt: string;
}

export const TRUST_STRIP_ITEMS: TrustStripItem[] = [
  {
    icon: "/images/vyh-ic-gst-ready-billing.webp",
    label: "GST-Ready Billing",
    alt: "GST-Ready Billing",
  },
  {
    icon: "/images/vyh-ic-secure-ssl-data-protection.webp",
    label: "Secure SSL Data Protection",
    alt: "Secure SSL Data Protection",
  },
  {
    icon: "/images/vyh-ic-trusted-by-icai-professionals.webp",
    label: "Trusted by Business Owners",
    alt: "Trusted by Business Owners",
  },
  {
    icon: "/images/vyh-ic-used-by-top-retail-and-manufacturing-brands.webp",
    label: "Used by Top Indian Business Brands",
    alt: "Used by Top Indian Business Brands",
  },
];

export const LOCAL_SMB_DATA = {
  badge: "Nationwide Coverage",
  heading: "Supporting Local Small & Medium Businesses Across Every Corner of India",
  subtext: "From neighbourhood shop owners to growing manufacturers, EveryKadai GST billing software is built for every Indian small business. Local language support, cloud & offline-first reliability, and solutions designed around how SME owners actually do business.",
  stats: [
    { value: "SMB", label: "Focused Since 2016" },
    { value: "1 Cr+", label: "App Downloads" },
    { value: "7-Day", label: "Customer Support" },
    { value: "9+", label: "Indian Languages" },
  ],
  mapImage: "/images/Billing-Software-in-India-1.webp",
};

export interface JourneyStep {
  step: string;
  time: string;
  title: string;
  description: string;
  tag: string;
  defaultIcon: string;
  hoverIcon: string;
}

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    step: "01",
    time: "08:00 AM · ON THE MOVE",
    title: "Start Anywhere",
    description: "Check stock on EveryKadai billing app while travelling. Reach your shop, and your billing system is synced.",
    tag: "Multi Device Control",
    defaultIcon: "/images/Start-Anywhere.webp",
    hoverIcon: "/images/vyh-fill-start-anywhere.webp",
  },
  {
    step: "02",
    time: "11:00 AM · BUSY HOURS",
    title: "Role Based Access",
    description: "Your sales staff creates bills on their own logins. You stay relaxed knowing you've given them role-based access.",
    tag: "Multi-User Control",
    defaultIcon: "/images/vyh-ic-role-based-access.webp",
    hoverIcon: "/images/vyh-fill-role-based-access.webp",
  },
  {
    step: "03",
    time: "04:00 PM · NET DOWN",
    title: "Work Without Internet",
    description: "Internet down? No problem. Your offline billing keeps the customer queue moving. Data syncs automatically when connected.",
    tag: "Always-On Billing",
    defaultIcon: "/images/vyh-ic-work-without-internet.webp",
    hoverIcon: "/images/vyh-fill-work-without-internet.webp",
  },
  {
    step: "04",
    time: "09:00 PM · CLOSING TIME",
    title: "Data Synced & Secured",
    description: "As you close your day, your data is already secured in Google Drive. Your hard work is protected by automatic cloud backups.",
    tag: "Cloud Auto-Backup",
    defaultIcon: "/images/vyh-ic-data-synced-and-secured.webp",
    hoverIcon: "/images/vyh-fill-data-synced-and-secured.webp",
  },
];

export const MULTI_DEVICE_DATA = {
  heading: "The Real Multi-Device Experience",
  subtext: "EveryKadai’s cloud sync gives you the freedom to manage and monitor your business from both mobile and desktop billing software, while you are at a supplier’s warehouse or even on a holiday.",
  stats: [
    { value: "99.9%", label: "Uptime Reliable" },
    { value: "Instant", label: "Cloud Sync" },
  ],
  image: "/images/Multi-Device-feature-of-EveryKadai-1024x605.webp",
};

export const SUCCESS_STORIES_DATA = {
  heading: "Why Businesses Choose EveryKadai Billing Software?",
  subtext: "Watch how Indian small business owners simplify GST billing, save time, and grow their profits.",
  // You can easily replace the videoUrl below with your own video URL (YouTube, Vimeo, or local/hosted .mp4 video file)!
  items: {
    stat1: {
      value: "80%",
      title: "Time Saved",
      tag: "MANUAL WORK REDUCED",
      theme: "red" as const,
    },
    video1: {
      id: "ali",
      title: "Ali - Gift Shop Owner Testimonial",
      label: "Watch success story · Ali",
      thumbnail: "/images/story-ali-video-thumb.webp",
      videoUrl: "https://www.youtube.com/embed/B0tPPAYQ8CI", // Replace with your own video URL or MP4 path!
    },
    testimonial1: {
      avatar: "/images/story-ali-avatar.webp",
      quote: "“Switched to EveryKadai. Now able to manage GST billing, barcode billing, and more in one place.”",
      name: "Ali",
      role: "Gift Shop Owner – Read story",
      link: "/use-cases",
    },
    testimonial2: {
      avatar: "/images/story-kumar-avatar.webp",
      quote: "“Using EveryKadai for 3 years to manage GST billing, item tracking across 2 branches.”",
      name: "Kumar",
      role: "KJV Technologies – Read story",
      link: "/use-cases",
    },
    video2: {
      id: "kumar",
      title: "Kumar - KJV Technologies Testimonial",
      label: "Watch success story · Kumar",
      thumbnail: "/images/story-kumar-video-thumb.webp",
      videoUrl: "https://www.youtube.com/embed/tjLHG-sKYqA", // Replace with your own video URL or MP4 path!
    },
    stat2: {
      value: "100%",
      title: "Accuracy",
      tag: "GST CALCULATIONS",
      theme: "amber" as const,
    },
  },
};

export interface BillingSolutionPillar {
  id: string;
  key: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  icon: string;
  mockupImage: string;
  cardBg: string;
  cardBorder: string;
  cardHoverBorder: string;
  iconBg: string;
  linkColor: string;
}

export const BILLING_SOLUTION_DATA = {
  heading: "Complete Billing Solution for Better Business Management",
  subtext: "Everything you expect from the best billing software, integrated into one seamless platform.",
  pillars: [
    {
      id: "gst-billing",
      key: "gst",
      title: "Accurate GST Billing & Invoicing",
      description: "Create error-free GST invoices and generate e-invoices quickly with built-in compliance and automated tax calculations.",
      linkText: "Explore E-invoice Software →",
      linkUrl: "/free/invoicing-software/e-invoicing",
      icon: "/images/billing-ic-gst.webp",
      mockupImage: "/images/billing-mockup-gst.webp",
      cardBg: "bg-[#FFF8F8]",
      cardBorder: "border-[#f5c4c2]",
      cardHoverBorder: "border-[#ed1a3b]",
      iconBg: "bg-[#FFF0F0]",
      linkColor: "text-[#ed1a3b]",
    },
    {
      id: "smart-inventory",
      key: "inventory",
      title: "Smart Inventory Management",
      description: "Track stock levels in real time and manage items efficiently with inventory features built into EveryKadai software.",
      linkText: "Explore Inventory Software →",
      linkUrl: "/free/inventory-management-software",
      icon: "/images/billing-ic-inventory.webp",
      mockupImage: "/images/billing-mockup-inventory.webp",
      cardBg: "bg-[#F0FDF9]",
      cardBorder: "border-[#a7f3d0]",
      cardHoverBorder: "border-[#059669]",
      iconBg: "bg-[#EAF8F0]",
      linkColor: "text-[#059669]",
    },
    {
      id: "pos-billing",
      key: "pos",
      title: "EveryKadai POS Billing",
      description: "Speed up counter sales with fast, reliable POS billing for quick checkout and a better customer experience.",
      linkText: "Explore POS Software →",
      linkUrl: "/free/pos-billing-software",
      icon: "/images/billing-ic-pos.webp",
      mockupImage: "/images/billing-mockup-pos.webp",
      cardBg: "bg-[#FFFBEB]",
      cardBorder: "border-[#fde68a]",
      cardHoverBorder: "border-[#D97706]",
      iconBg: "bg-[#FFF8E6]",
      linkColor: "text-[#D97706]",
    },
    {
      id: "professional-reports",
      key: "reports",
      title: "Professional Reports",
      description: "Get complete business insights with powerful business reports that simplify accounting and financial tracking.",
      linkText: "Explore Accounting Software →",
      linkUrl: "/free/small-business-accounting-software",
      icon: "/images/billing-ic-reports.webp",
      mockupImage: "/images/billing-mockup-reports.webp",
      cardBg: "bg-[#EFF6FF]",
      cardBorder: "border-[#bfdbfe]",
      cardHoverBorder: "border-[#2563EB]",
      iconBg: "bg-[#EDF5FF]",
      linkColor: "text-[#2563EB]",
    },
  ] as BillingSolutionPillar[],
};

export const QUICK_SETUP_DATA = {
  heading: "How to Set Up EveryKadai Billing Software Quickly?",
  subtext: "Start billing with 4 simple steps using our user-friendly, simple and fast billing software for small businesses.",
  steps: [
    {
      number: "1",
      title: "Download and Explore Free Trial",
      description: "Try EveryKadai software for free and explore its premium features.",
      image: "/images/setup-step-1.webp",
    },
    {
      number: "2",
      title: "Set Up Business & Add Items",
      description: "Enter business details and add products or services with prices and GST.",
      image: "/images/setup-step-2.webp",
    },
    {
      number: "3",
      title: "Customize & Create Bills",
      description: "Select invoice format, add details, and start generating bills.",
      image: "/images/setup-step-3.webp",
    },
    {
      number: "4",
      title: "Explore Reports",
      description: "View sales, stock, and profit reports to track performance.",
      image: "/images/setup-step-4.webp",
    },
  ],
};

export const SETUP_STEPS: SetupStep[] = QUICK_SETUP_DATA.steps;

export const VIDEO_SHOWCASE_DATA = {
  badge: "🚀 Start Billing in Minutes",
  heading: "Create GST and Non-GST Bills for Your Business",
  subtext: "Watch how EveryKadai helps businesses to create GST and Non-GST bills easily as per their requirement in minutes.",
  thumbnail: "/images/video-demo-thumb.webp",
  // You can easily replace the videoUrl below with your own YouTube link, Vimeo link, or local / hosted .mp4 video file path!
  videoUrl: "https://www.youtube.com/embed/RiftBAAJ7NA?autoplay=1",
  videoTitle: "Create GST and Non-GST Bills for Your Business",
};

export const BUSINESS_DIFFERENCE_DATA = {
  heading: "How is EveryKadai GST Billing Software Making a Difference?",
  subtext: "See how upgrading from manual processes to our digital billing software in India accelerates operational efficiency across businesses of all sizes.",
  stats: [
    {
      icon: "/images/diff-invoices.webp",
      value: "538,848+",
      label: "Bills Created Today*",
    },
    {
      icon: "/images/diff-returns.webp",
      value: "11,715+",
      label: "GST Returns Prepared*",
    },
    {
      icon: "/images/diff-businesses.webp",
      value: "1.5 Cr+",
      label: "Businesses Using EveryKadai",
    },
  ],
};

export const SMART_BUSINESS_DATA = {
  badge: "High-Tech Innovation",
  heading: "Smart GST Billing Software for Growing Businesses",
  cards: [
    {
      id: "sell-online",
      tag: "Sell Online",
      title: "Sell Your Products Online Easily",
      description: "Create your own online store & share the store link with customers and start selling online instantly.",
      image: "/images/smart-sell-online.webp",
    },
    {
      id: "whatsapp-marketing",
      tag: "WhatsApp Marketing",
      title: "Connect with Customers Directly",
      description: "EveryKadai helps you do WhatsApp marketing in a simple way — share bills, order updates, offers and promotional messages in just a few clicks.",
      image: "/images/smart-whatsapp.webp",
    },
    {
      id: "smart-ads",
      tag: "Smart Ads",
      title: "Promote Your Business Easily",
      description: "EveryKadai Smart Ads promote your business to the right audience without marketing skills — create simple ads for your products and offers on WhatsApp.",
      image: "/images/smart-ads.webp",
    },
  ],
};

export interface LanguageItem {
  code: string;
  name: string;
}

export const MULTI_LANGUAGE_DATA = {
  badge: "9+ Language Support",
  heading: "Multi-Language Support Across India",
  description: "Whether you are in a Metro city (Delhi, Mumbai, Bengaluru, Hyderabad, Chennai), a small town, or a rural area, our free billing software customer support is available in your native language. Download the app and get a free product demo from the support team in a language you speak.",
  languages: [
    { code: "hi", name: "हिंदी" },
    { code: "en", name: "English" },
    { code: "ta", name: "தமிழ்" },
    { code: "te", name: "తెలుగు" },
    { code: "mr", name: "मराठी" },
    { code: "gu", name: "ગુજરાતી" },
    { code: "bn", name: "বাংলা" },
    { code: "kn", name: "ಕನ್ನಡ" },
  ] as LanguageItem[],
  image: "/images/Multi-Language-Support-Across-India-1.webp",
  imageAlt: "EveryKadai billing software multi-language support across India",
  footerBadge: "Priority Support · 9+ Languages.",
  footerText: "Empowering millions of MSMEs to digitize their operations without language barriers.",
};

export interface PublicationItem {
  name: string;
  logo: string;
  url: string;
}

export const MEDIA_PUBLICATIONS_DATA = {
  heading: "EveryKadai Covered in Top Publications",
  publications: [
    {
      name: "Yahoo! Finance",
      logo: "/images/vyh-ic-yahoo-finance.webp",
      url: "https://finance.yahoo.com/news/vyapar-app-launches-game-changing-155100154.html",
    },
    {
      name: "India Today",
      logo: "/images/vyh-ic-india-today.webp",
      url: "https://www.indiatoday.in/impact-feature/story/vyapar-app-launches-v-pos-a-game-changing-point-of-sale-software-for-indian-businesses-2478788-2023-12-21",
    },
    {
      name: "Good Returns",
      logo: "/images/vyh-ic-good-returns.webp",
      url: "https://www.goodreturns.in/partner-content/how-vyapar-is-building-one-of-indias-biggest-business-management-ecosystems-1484489.html",
    },
    {
      name: "The Tribune",
      logo: "/images/vyh-ic-the-tribune.webp",
      url: "https://www.tribuneindia.com/news/business/why-indias-msmes-are-the-biggest-beneficiaries-of-the-automation-wave/",
    },
    {
      name: "Business Standard",
      logo: "/images/vyh-ic-business-standards.webp",
      url: "https://www.business-standard.com/content/specials/vyapar-revolutionizes-retail-with-v-pos-the-ultimate-point-of-sale-solution-123102500912_1.html",
    },
    {
      name: "Business Today",
      logo: "/images/vyh-ic-business-today.webp",
      url: "https://www.businesstoday.in/impact-feature/story/vyapar-app-receives-rave-reviews-for-exceptional-customer-support-and-feature-rich-software-413047-2024-01-12",
    },
  ] as PublicationItem[],
};

export interface IndustryPillarItem {
  id: string;
  title: string;
  icon: string;
  heroImage: string;
  description: string;
  buttonText: string;
  linkUrl: string;
}

export const INDUSTRIES_SERVE_DATA = {
  badge: "For Every Business Type",
  heading: "One Billing Software Across Industries",
  subtext: "Built for everyday Indian businesses that need simple billing and better control over daily operations.",
  pillars: [
    {
      id: "retailers",
      title: "Retailers",
      icon: "/images/vyh-ic-retailers-icon.webp",
      heroImage: "/images/vyh-img-retailers-scaled.webp",
      description: "Manage daily sales by creating GST and Non-GST bills and track inventory with the best billing software built for all local shops and stores in India",
      buttonText: "Retail Billing Software",
      linkUrl: "/free/billing-software-for-retail-shop",
    },
    {
      id: "wholesalers",
      title: "Wholesalers & Distributors",
      icon: "/images/vyh-ic-wholesalers-icon.webp",
      heroImage: "/images/vyh-img-wholesalers-scaled.webp",
      description: "Manage bulk orders, inventory, payments, and deliveries with ease while keeping your business operations organized and under control.",
      buttonText: "Distributor Billing Software",
      linkUrl: "/free/billing-software-for-retail-shop/distributors",
    },
    {
      id: "manufacturers",
      title: "Manufacturers",
      icon: "/images/vyh-ic-manufacturers-icon.webp",
      heroImage: "/images/vyh-img-manufacturers-scaled.webp",
      description: "Streamline production, monitor raw material consumption, and maintain better control over inventory and costs all from a single application for small and medium manufacturers.",
      buttonText: "Manufacturing Software",
      linkUrl: "/manufacturing",
    },
  ] as IndustryPillarItem[],
};

export interface WhoCanUseItem {
  id: string;
  title: string;
  icon: string;
  textBefore: string;
  linkText: string;
  linkUrl: string;
  textAfter: string;
}

export const WHO_CAN_USE_DATA = {
  heading: "Who Can Use EveryKadai GST Billing Software?",
  subtext: "EveryKadai is a complete billing software for small businesses across multiple industries in India.",
  items: [
    {
      id: "grocery-store",
      title: "Grocery Store",
      icon: "/images/vyh-ic-grocery-store.webp",
      textBefore: "With EveryKadai ",
      linkText: "grocery billing software",
      linkUrl: "/free/billing-software-for-retail-shop/grocery-store",
      textAfter: ", manage daily sales, fast billing, and track stocks designed for kirana stores.",
    },
    {
      id: "supermarket",
      title: "Supermarket",
      icon: "/images/vyh-ic-supermarket.webp",
      textBefore: "Handle high-volume billing, barcode scanning, and inventory easily using ",
      linkText: "supermarket billing software",
      linkUrl: "/free/billing-software-for-retail-shop/supermarket",
      textAfter: " built for fast checkout and stock control.",
    },
    {
      id: "jewellery-store",
      title: "Jewellery Store",
      icon: "/images/vyh-ic-jewellery-store.webp",
      textBefore: "Simplify gold and silver billing with accurate pricing, GST bills, and stock tracking using ",
      linkText: "jewellery software",
      linkUrl: "/free/billing-software-for-retail-shop/jewellery-shop",
      textAfter: " by EveryKadai.",
    },
    {
      id: "cloth-shop",
      title: "Cloth Shop",
      icon: "/images/vyh-ic-cloth-shop.webp",
      textBefore: "Manage size, colour, and variant billing with ease using ",
      linkText: "garment billing software",
      linkUrl: "/free/billing-software-for-retail-shop/cloth-shop",
      textAfter: " for clothing stores and boutiques.",
    },
    {
      id: "electric-and-electronics",
      title: "Electric & Electronics",
      icon: "/images/vyh-ic-electric-and-electronics.webp",
      textBefore: "Track products, warranties, and GST billing efficiently in your electric and appliance shops using EveryKadai ",
      linkText: "billing software for electrical shops",
      linkUrl: "/free/billing-software-for-retail-shop/electrical",
      textAfter: " and appliance shops.",
    },
    {
      id: "restaurant",
      title: "Restaurant",
      icon: "/images/vyh-ic-restaurant.webp",
      textBefore: "Speed up order billing, manage menu items, and track sales using ",
      linkText: "restaurant billing software",
      linkUrl: "/free/restaurant-billing-software",
      textAfter: " built for food businesses.",
    },
    {
      id: "pharmacy",
      title: "Pharmacy",
      icon: "/images/vyh-ic-pharmacy.webp",
      textBefore: "Manage medicine billing, expiry dates, and GST reports with ",
      linkText: "pharmacy software",
      linkUrl: "/free/billing-software-for-retail-shop/pharmacy",
      textAfter: " designed for chemists and medical stores.",
    },
    {
      id: "hospitals",
      title: "Hospitals",
      icon: "/images/vyh-ic-hospitals.webp",
      textBefore: "Handle patient billing, service charges, and reports efficiently with ",
      linkText: "hospital billing software",
      linkUrl: "/free/billing-software-for-retail-shop/hospital",
      textAfter: " for clinics and healthcare centers.",
    },
    {
      id: "hotel",
      title: "Hotel",
      icon: "/images/vyh-ic-hotel.webp",
      textBefore: "Manage room billing, customer records, and payments easily using ",
      linkText: "hotel management software",
      linkUrl: "/free/billing-software-for-retail-shop/hotel",
      textAfter: " designed for hospitality businesses.",
    },
    {
      id: "salon-and-spa",
      title: "Salon & Spa",
      icon: "/images/vyh-ic-salon-and-spa.webp",
      textBefore: "Track services, appointments, and billing with a ",
      linkText: "salon billing software",
      linkUrl: "/free/billing-software-for-retail-shop/salon",
      textAfter: " tailored for beauty, spa, and wellness businesses.",
    },
    {
      id: "transportation",
      title: "Transportation",
      icon: "/images/vyh-ic-transportation.webp",
      textBefore: "Manage trip billing, expenses, and payments using ",
      linkText: "transport billing software",
      linkUrl: "/free/billing-software-for-retail-shop/transport",
      textAfter: " built for transportation businesses.",
    },
    {
      id: "mobile-shop",
      title: "Mobile Shop",
      icon: "/images/Mobile-Shop-Business.webp",
      textBefore: "Create professional bills, track payments, and manage stocks easily with simple ",
      linkText: "mobile shop billing software",
      linkUrl: "/free/billing-software-for-retail-shop/mobile-shop",
      textAfter: " for mobile stores.",
    },
  ] as WhoCanUseItem[],
};

export interface FeatureBenefitItem {
  id: string;
  title: string;
  icon: string;
  hoverIcon: string;
  textBefore: string;
  linkText?: string;
  linkUrl?: string;
  textAfter?: string;
}

export const FEATURES_BENEFITS_DATA = {
  badge: "Built for India",
  heading: "Why EveryKadai is the Best Billing Software for Small Businesses",
  items: [
    {
      id: "payment-options",
      title: "Multiple Payment Options",
      icon: "/images/feat-payment-base.webp",
      hoverIcon: "/images/feat-payment-fill.webp",
      textBefore: "Accept cash, UPI, card, or bank transfer and record all payments properly in bills. The ",
      linkText: "multipayment feature",
      linkUrl: "/use-cases",
      textAfter: " of our GST billing software ensures smooth transaction tracking by automatically updating records for every sale.",
    },
    {
      id: "discount-tax",
      title: "Discount & Tax Handling",
      icon: "/images/feat-discount-base.webp",
      hoverIcon: "/images/feat-discount-fill.webp",
      textBefore: "Apply ",
      linkText: "item-level or overall discounts",
      linkUrl: "/pricing",
      textAfter: " and multiple tax rates within a single bill. This feature simplifies GST calculations and discounts, ensuring accurate bills in your daily billing process.",
    },
    {
      id: "einvoice-eway",
      title: "E-invoice & E-way Bill Creation",
      icon: "/images/feat-einvoice-base.webp",
      hoverIcon: "/images/feat-einvoice-fill.webp",
      textBefore: "Generate GST-compliant e-invoices and ",
      linkText: "create e-way bills",
      linkUrl: "/free/invoicing-software",
      textAfter: " instantly from a billing platform while ensuring faster, error-free invoicing and shipment tracking for your business.",
    },
    {
      id: "automated-numbering",
      title: "Automated Bill Numbering",
      icon: "/images/feat-billnumbering-base.webp",
      hoverIcon: "/images/feat-billnumbering-fill.webp",
      textBefore: "Automatically organizes bills with unique numbers and status updates, helping businesses maintain proper records and simplify GST filing and audits.",
    },
    {
      id: "whatsapp-billing",
      title: "WhatsApp Billing & Reminders",
      icon: "/images/feat-whatsapp-base.webp",
      hoverIcon: "/images/feat-whatsapp-fill.webp",
      textBefore: "Send bills and ",
      linkText: "payment reminders on WhatsApp",
      linkUrl: "/use-cases",
      textAfter: " directly to customers through our app. This allows instant sharing of bills and reminders, and helps businesses collect payments faster.",
    },
    {
      id: "barcode-scanner",
      title: "Barcode Generator & Scanner",
      icon: "/images/feat-barcode-base.webp",
      hoverIcon: "/images/feat-barcode-fill.webp",
      textBefore: "Businesses can quickly add products to bills, reducing manual effort and improving billing speed using our ",
      linkText: "barcode generator and scanner",
      linkUrl: "/free/pos-billing-software",
      textAfter: " feature.",
    },
    {
      id: "mrp-billing",
      title: "MRP-Based Billing",
      icon: "/images/feat-mrp-base.webp",
      hoverIcon: "/images/feat-mrp-fill.webp",
      textBefore: "Automatically calculate tax based on MRP to generate accurate bills, with taxes pre-included in prices, ensuring compliance and faster checkout using the MRP billing option.",
    },
    {
      id: "estimates-quotations",
      title: "Estimates & Quotations",
      icon: "/images/feat-estimates-base.webp",
      hoverIcon: "/images/feat-estimates-fill.webp",
      textBefore: "Easy conversion of estimates into invoices, helping businesses save time and maintain a smooth sales-to-billing workflow without re-entering details.",
    },
    {
      id: "customizable-formats",
      title: "Customisable Bill Formats",
      icon: "/images/feat-formats-base.webp",
      hoverIcon: "/images/feat-formats-fill.webp",
      textBefore: "",
      linkText: "Invoice software",
      linkUrl: "/free/invoicing-software",
      textAfter: " allows you to explore and choose from various bill formats and add your shop name, logo, and details to create branded invoices that match your customer and business requirements.",
    },
    {
      id: "hardware-integrations",
      title: "Hardware Integrations",
      icon: "/images/feat-hardware-base.webp",
      hoverIcon: "/images/feat-hardware-fill.webp",
      textBefore: "Integration of EDC, Weighing Scale & ",
      linkText: "thermal Printers",
      linkUrl: "/free/pos-billing-software",
      textAfter: " to improve billing accuracy and speed, making EveryKadai practical for high-volume businesses.",
    },
    {
      id: "profit-tracking",
      title: "Bill-wise Profit Tracking",
      icon: "/images/feat-profit-base.webp",
      hoverIcon: "/images/feat-profit-fill.webp",
      textBefore: "Provides profit insights for each bill, helping businesses understand margins better and make smarter pricing decisions for improved profitability.",
    },
    {
      id: "delivery-challan",
      title: "Delivery Challan & Order Tracking",
      icon: "/images/feat-challan-base.webp",
      hoverIcon: "/images/feat-challan-fill.webp",
      textBefore: "Manages orders from start to finish for businesses by creating delivery challans and tracking orders efficiently, ensuring proper documentation and smooth movement of goods.",
    },
    {
      id: "ocr-scan",
      title: "OCR Scan to Bill",
      icon: "/images/feat-ocr-base.webp",
      hoverIcon: "/images/feat-ocr-fill.webp",
      textBefore: "Users can scan and convert purchase bills into digital entries instantly using ",
      linkText: "OCR scanner feature",
      linkUrl: "/ocr-scanner-software",
      textAfter: ", which saves time and reduces manual data entry errors.",
    },
    {
      id: "salesman-tracking",
      title: "Salesman Tracking",
      icon: "/images/feat-salesman-base.webp",
      hoverIcon: "/images/feat-salesman-fill.webp",
      textBefore: "EveryKadai billing app includes a GPS-based ",
      linkText: "salesman tracking feature",
      linkUrl: "/use-cases",
      textAfter: " to monitor field staff activity, helping businesses manage on-ground sales operations and improve team productivity.",
    },
    {
      id: "tally-transfer",
      title: "Tally Data Transfer",
      icon: "/images/feat-tally-base.webp",
      hoverIcon: "/images/feat-tally-fill.webp",
      textBefore: "Import and export Tally data easily with EveryKadai GST billing software, which allows seamless data transfer from Tally, helping businesses switch to EveryKadai without losing records and manage accounting alongside billing.",
    },
  ] as FeatureBenefitItem[],
};

export const CORE_FEATURES = FEATURES_BENEFITS_DATA.items;

export const INDUSTRIES_GRID: IndustryItem[] = [
  {
    title: "Grocery & Kirana Store",
    slug: "/free/billing-software-for-retail-shop/grocery-store",
    image: "/images/vyh-ic-grocery-store.webp",
  },
  {
    title: "Supermarket & Marts",
    slug: "/free/billing-software-for-retail-shop/supermarket",
    image: "/images/vyh-ic-supermarket.webp",
  },
  {
    title: "Jewellery Showroom",
    slug: "/free/billing-software-for-retail-shop/jewellery-shop",
    image: "/images/vyh-ic-jewellery-store.webp",
  },
  {
    title: "Garments & Cloth Shop",
    slug: "/free/billing-software-for-retail-shop/cloth-shop",
    image: "/images/vyh-ic-cloth-shop.webp",
  },
  {
    title: "Electrical & Electronics",
    slug: "/free/billing-software-for-retail-shop/electrical",
    image: "/images/vyh-ic-electric-and-electronics.webp",
  },
  {
    title: "Restaurant & Cafe",
    slug: "/free/restaurant-billing-software",
    image: "/images/vyh-ic-restaurant.webp",
  },
  {
    title: "Pharmacy & Medical Shop",
    slug: "/free/billing-software-for-retail-shop/pharmacy",
    image: "/images/vyh-ic-pharmacy.webp",
  },
  {
    title: "Hospitals & Clinics",
    slug: "/free/billing-software-for-retail-shop/hospital",
    image: "/images/vyh-ic-hospitals.webp",
  },
];

export const HOMEPAGE_FAQS: FAQItem[] = [
  {
    question: "What is billing software?",
    answer: "Billing software like EveryKadai is a digital tool that helps businesses create bills and invoices, track payments, manage inventory, calculate taxes, and automate daily billing and accounting operations from one platform. It simplifies GST and non-GST billing for businesses.",
  },
  {
    question: "What is GST billing software?",
    answer: "GST billing software like EveryKadai helps businesses create GST compliant invoices, calculate taxes automatically, track payments, and manage billing operations efficiently while simplifying GST compliance and accounting.",
  },
  {
    question: "Who can use EveryKadai billing software?",
    answer: "EveryKadai billing software is designed for small business owners and growing businesses that need a simple way to create invoices, manage accounts, track inventory and payments, and monitor business performance. It helps businesses manage their everyday operations from one place.",
  },
  {
    question: "What are the benefits of using EveryKadai billing software?",
    answer: "Using EveryKadai billing software helps businesses create invoices faster, manage GST billing, payment tracking, inventory tracking, reduce manual errors, and improve cash flow. It also helps businesses save time, manage customers better, and increase sales with efficient billing and accounting management.",
  },
  {
    question: "Is EveryKadai billing software easy to use?",
    answer: "Yes, EveryKadai billing software is easy to use and helps businesses manage GST billing, invoices, inventory, and accounting with a simple interface designed for business owners and small businesses.",
  },
  {
    question: "Why choose EveryKadai for your business billing process?",
    answer: "EveryKadai app offers user friendly GST-compliant billing process with inventory management, automated payment reminders, multi-device access on Android, iOS, Windows, Mac, and along with offline and cloud support.",
  },
  {
    question: "Can I securely manage my billing and business data with EveryKadai?",
    answer: "Yes, EveryKadai helps businesses securely manage billing, accounting, inventory, and customer data on cloud with reliable backup, secure access controls, and safe business management features for uninterrupted operations.",
  },
  {
    question: "Can EveryKadai billing software manage inventory and payments together?",
    answer: "Yes, EveryKadai billing software helps businesses manage inventory and payments together by tracking stock levels, automated low stock alerts, recording payment status, monitoring dues, and sending automated payment reminders while managing billing and accounting operations from one platform.",
  },
  {
    question: "Is EveryKadai billing software free to use?",
    answer: "Yes, EveryKadai billing app is free to use on mobile lifetime and on system offers a free trial. Businesses can manage GST billing, invoicing, inventory, payments, and accounting from one platform.",
  },
  {
    question: "Does this billing software work on Android and iOS?",
    answer: "Yes, EveryKadai billing software supports Android, iOS, Windows, and Mac with a cloud sync feature, allowing businesses to manage GST billing, invoicing, inventory, payments, barcode generation and accounting seamlessly from mobile devices.",
  },
  {
    question: "Is EveryKadai billing software suitable for small businesses?",
    answer: "EveryKadai billing software is designed for small businesses in India to simplify GST billing, invoicing, inventory management, payment tracking, generating barcodes, e-way bills, and accounting with an easy-to-use and affordable solution for business owners.",
  },
  {
    question: "Can I create and share GST bills with customers using EveryKadai?",
    answer: "Yes, EveryKadai GST billing software lets you create GST-compliant bill in seconds with auto tax calculation. You can easily share them via WhatsApp, SMS, or PDF. It helps you bill faster, reduce errors, and get paid quickly.",
  },
  {
    question: "Can I track bill payments and dues in EveryKadai?",
    answer: "Yes, EveryKadai helps you track all bill payments, including multi-currency transactions, and pending dues in real time. You can see who has paid, who owes you, and send automated reminders easily. It keeps your cash flow clear and helps you collect all the payments faster without any confusion.",
  },
  {
    question: "How do I get started with free billing on EveryKadai?",
    answer: "Get started by downloading EveryKadai from the Play Store, App Store, or the official website. Install the app on your device and start billing instantly. No credit card or setup fees required-just sign up and begin free billing for your business in seconds.",
  },
  {
    question: "How does this billing software simplify GST compliance?",
    answer: "EveryKadai GST billing software simplifies GST compliance by auto-calculating GST on every bill or invoice, auto applying correct tax rates, and generating GST-ready reports. No accounting expertise is required. It reduces manual errors, saves time, and keeps you compliant easily.",
  },
  {
    question: "Can I use this billing software both offline and online?",
    answer: "Yes, EveryKadai is a cloud billing software that works both offline and online. You can create bills without internet, and data is saved locally and syncs to EveryKadai servers when online. This ensures uninterrupted billing, no data loss, and smooth operations for small businesses anytime.",
  },
  {
    question: "Which billing software is best for small businesses?",
    answer: "EveryKadai is one of the best billing software for small businesses in India. It offers GST billing, invoicing, inventory, payments, and reports in one app. Easy, affordable, and built for SMEs to save time and manage billing efficiently.",
  },
  {
    question: "Is EveryKadai the Best Billing App for MSMEs?",
    answer: "EveryKadai cloud billing app is one of the best for MSMEs in India. It offers ready-to-use billing templates to create GST bills quickly, track payments, manage inventory, and share invoices instantly. It is built for small businesses to save time, reduce effort, and grow faster.",
  },
  {
    question: "Does EveryKadai support multiple payment options?",
    answer: "Yes, EveryKadai billing software for small businesses supports multiple payment options including UPI, cash, bank transfer, and cards. You can record payments against invoices, track dues in real time, and simplify collections – helping small businesses get paid faster without any delay.",
  },
];
