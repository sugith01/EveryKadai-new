import {
  iconAccounting,
  iconInventory,
  iconInvoicing,
  iconEInvoice,
  iconPOS,
  iconOCR,
  iconRetail,
  iconPharma,
  iconGrocery,
  iconRestaurant,
  iconJewellery,
  iconClothing,
  iconTaxone,
  iconFlyy,
  iconTable,
  iconNeodove,
  iconBlogs,
  iconUseCase,
  iconGuides,
  iconTestimonial,
  iconPlatformVideo,
} from '../assets/images/index.ts';

export interface MegaMenuItem {
  title: string;
  href: string;
  icon: string;
  isExternal?: boolean;
}

export interface MegaMenuColumn {
  header: string;
  items: MegaMenuItem[];
}

export interface NavLinkItem {
  label: string;
  href: string;
  isSpecial?: boolean;
}

export const MEGA_MENU_COLUMNS: MegaMenuColumn[] = [
  {
    header: "Business Management Solutions",
    items: [
      {
        title: "Accounting",
        href: "/free/small-business-accounting-software",
        icon: iconAccounting,
      },
      {
        title: "Inventory",
        href: "/free/inventory-management-software",
        icon: iconInventory,
      },
      {
        title: "Invoicing",
        href: "/free/invoicing-software",
        icon: iconInvoicing,
      },
      {
        title: "E-Invoice",
        href: "/free/invoicing-software/e-invoicing",
        icon: iconEInvoice,
      },
      {
        title: "POS",
        href: "/free/pos-billing-software",
        icon: iconPOS,
      },
      {
        title: "OCR",
        href: "/ocr-scanner-software",
        icon: iconOCR,
      },
    ],
  },
  {
    header: "Industry Solution",
    items: [
      {
        title: "Retail",
        href: "/free/billing-software-for-retail-shop",
        icon: iconRetail,
      },
      {
        title: "Pharmacy",
        href: "/free/billing-software-for-retail-shop/pharmacy",
        icon: iconPharma,
      },
      {
        title: "Grocery",
        href: "/free/billing-software-for-retail-shop/grocery-store",
        icon: iconGrocery,
      },
      {
        title: "Restaurant",
        href: "/free/restaurant-billing-software",
        icon: iconRestaurant,
      },
      {
        title: "Jewellery",
        href: "/free/billing-software-for-retail-shop/jewellery-shop",
        icon: iconJewellery,
      },
      {
        title: "Clothing/Apparel",
        href: "/free/billing-software-for-retail-shop/cloth-shop",
        icon: iconClothing,
      },
    ],
  },
  {
    header: "Products",
    items: [
      {
        title: "EveryKadai TaxOne",
        href: "https://taxone.vyapar.com/",
        icon: iconTaxone,
        isExternal: true,
      },
      {
        title: "EveryKadai Flyy",
        href: "https://vyaparflyy.com/",
        icon: iconFlyy,
        isExternal: true,
      },
      {
        title: "EveryKadai Table",
        href: "https://vyapartable.com/",
        icon: iconTable,
        isExternal: true,
      },
      {
        title: "NeoDove",
        href: "https://neodove.com/",
        icon: iconNeodove,
        isExternal: true,
      },
    ],
  },
  {
    header: "Resources",
    items: [
      {
        title: "Blogs",
        href: "/blog",
        icon: iconBlogs,
      },
      {
        title: "Use Cases",
        href: "/use-cases",
        icon: iconUseCase,
      },
      {
        title: "Guides",
        href: "/guides",
        icon: iconGuides,
      },
      {
        title: "Success Stories",
        href: "/success-stories",
        icon: iconTestimonial,
      },
      {
        title: "Videos",
        href: "/videos",
        icon: iconPlatformVideo,
      },
    ],
  },
];

export const PRIMARY_NAV_LINKS: NavLinkItem[] = [
  { label: "Pricing", href: "/pricing" },
  { label: "About Us", href: "/about-us" },
  { label: "Desktop", href: "/gst-accounting-pc" },
  { label: "Careers", href: "/careers" },
  { label: "Partner with us", href: "/distributor/create" },
  { label: "Login", href: "/login" },
];

export const FOOTER_COLUMNS = [
  {
    title: "Our Products",
    links: [
      { label: "EveryKadai Desktop Software", href: "/" },
      { label: "EveryKadai TaxOne", href: "https://taxone.vyapar.com/", isExternal: true },
      { label: "EveryKadai Table", href: "https://vyapartable.com/", isExternal: true },
      { label: "EveryKadai Flyy", href: "https://vyaparflyy.com/", isExternal: true },
      { label: "NeoDove (Telecalling CRM)", href: "https://neodove.com/", isExternal: true },
      { label: "EveryKadai Thermal Printer", href: "/gst-accounting-pc" },
    ],
  },
  {
    title: "EveryKadai Softwares",
    links: [
      { label: "Billing Software", href: "/" },
      { label: "Accounting Software", href: "/free/small-business-accounting-software" },
      { label: "Inventory Software", href: "/free/inventory-management-software" },
      { label: "Invoicing Software", href: "/free/invoicing-software" },
      { label: "POS Billing Software", href: "/free/pos-billing-software" },
      { label: "More Business Softwares", href: "/sitemap" },
    ],
  },
  {
    title: "Industry Solutions",
    links: [
      { label: "Retail Shop", href: "/free/billing-software-for-retail-shop" },
      { label: "Pharmacy Store", href: "/free/billing-software-for-retail-shop/pharmacy" },
      { label: "Grocery & Kirana", href: "/free/billing-software-for-retail-shop/grocery-store" },
      { label: "Restaurant", href: "/free/restaurant-billing-software" },
      { label: "Jewellery Shop", href: "/free/billing-software-for-retail-shop/jewellery-shop" },
      { label: "Clothing / Apparel", href: "/free/billing-software-for-retail-shop/cloth-shop" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Product Videos", href: "/videos" },
      { label: "Use Cases", href: "/use-cases" },
      { label: "Product Guides", href: "/guides" },
      { label: "Success Stories", href: "/success-stories" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Partner with EveryKadai", href: "/distributor/create" },
      { label: "Career", href: "/careers" },
      { label: "Login", href: "/login" },
      { label: "Desktop App", href: "/gst-accounting-pc" },
    ],
  },
];
