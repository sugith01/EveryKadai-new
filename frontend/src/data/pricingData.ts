export interface PlanFeatureItem {
  name: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  monthlyEquivalent: number;
  popular?: boolean;
  badge?: string;
  durationLabel: string;
  buttonText: string;
  features: PlanFeatureItem[];
  extraFeatures: PlanFeatureItem[];
}

export const BASE_SILVER_FEATURES: PlanFeatureItem[] = [
  { name: "Sync data across devices", included: true },
  { name: "Create multiple companies (3 companies)", included: true },
  { name: "Generate E-way Bills (10 per month)", included: true },
  { name: "Remove advertisement on invoices", included: true },
  { name: "Set multiple pricing for items", included: true },
  { name: "Update Items in bulk", included: true },
  { name: "Export data to Tally", included: false },
  { name: "Restore deleted transactions (2 transactions)", included: true },
  { name: "Combine multiple orders/challans into one sale", included: false },
  { name: "Accounting Module", included: false },
  { name: "Partywise Profit and Loss Report", included: false },
  { name: "WhatsApp Connect", included: false },
];

export const BASE_GOLD_FEATURES: PlanFeatureItem[] = [
  { name: "Sync data across devices", included: true },
  { name: "Create multiple companies (5 companies)", included: true },
  { name: "Generate E-way Bills (unlimited)", included: true },
  { name: "Remove advertisement on invoices", included: true },
  { name: "Set multiple pricing for items", included: true },
  { name: "Update Items in bulk", included: true },
  { name: "Export data to Tally", included: true },
  { name: "Restore deleted transactions (unlimited)", included: true },
  { name: "Combine multiple orders/challans into one sale", included: true },
  { name: "Accounting Module", included: true },
  { name: "Partywise Profit and Loss Report", included: true },
  { name: "WhatsApp Connect", included: true },
];

export const EXTRA_SILVER_FEATURES: PlanFeatureItem[] = [
  { name: "Multi-Counter Real-Time Sync", included: false },
  { name: "Govt E-Invoice IRN & QR Generation", included: false },
  { name: "POS Barcode & Thermal Printing", included: true },
  { name: "Customer Credit Ledger (Udhar Khata)", included: true },
  { name: "Multi-User Access & Role Permissions", included: false },
  { name: "Auto Cloud & Google Drive Backup", included: true },
  { name: "Custom Bill Templates & Themes", included: true },
  { name: "Purchase Order & Quotation Management", included: true },
  { name: "Expense Tracking & Categorization", included: true },
  { name: "Inventory Low Stock Alerts", included: true },
  { name: "Item Batch & Expiry Date Tracking", included: false },
  { name: "Serial Number Tracking", included: false },
  { name: "Multi-Currency Invoice Support", included: false },
  { name: "Payment Gateway Integration & UPI QR", included: true },
  { name: "Automated Payment Reminders", included: false },
  { name: "GST Filing Reports (GSTR-1, GSTR-2, GSTR-3B)", included: true },
];

export const EXTRA_GOLD_FEATURES: PlanFeatureItem[] = [
  { name: "Multi-Counter Real-Time Sync", included: true },
  { name: "Govt E-Invoice IRN & QR Generation", included: true },
  { name: "POS Barcode & Thermal Printing", included: true },
  { name: "Customer Credit Ledger (Udhar Khata)", included: true },
  { name: "Multi-User Access & Role Permissions", included: true },
  { name: "Auto Cloud & Google Drive Backup", included: true },
  { name: "Custom Bill Templates & Themes", included: true },
  { name: "Purchase Order & Quotation Management", included: true },
  { name: "Expense Tracking & Categorization", included: true },
  { name: "Inventory Low Stock Alerts", included: true },
  { name: "Item Batch & Expiry Date Tracking", included: true },
  { name: "Serial Number Tracking", included: true },
  { name: "Multi-Currency Invoice Support", included: true },
  { name: "Payment Gateway Integration & UPI QR", included: true },
  { name: "Automated Payment Reminders", included: true },
  { name: "GST Filing Reports (GSTR-1, GSTR-2, GSTR-3B)", included: true },
];

export const PRICING_PLANS: Record<string, PricingPlan[]> = {
  "1year": [
    {
      id: "silver-1y",
      name: "Silver",
      originalPrice: 7499,
      discountedPrice: 4399,
      monthlyEquivalent: 366.58,
      durationLabel: "1 Year",
      buttonText: "Get EveryKadai Silver",
      features: BASE_SILVER_FEATURES,
      extraFeatures: EXTRA_SILVER_FEATURES,
    },
    {
      id: "gold-1y",
      name: "Gold",
      originalPrice: 9099,
      discountedPrice: 4799,
      monthlyEquivalent: 399.92,
      popular: true,
      badge: "Most Popular",
      durationLabel: "1 Year",
      buttonText: "Get EveryKadai Gold",
      features: BASE_GOLD_FEATURES,
      extraFeatures: EXTRA_GOLD_FEATURES,
    },
  ],
  "3year": [
    {
      id: "silver-3y",
      name: "Silver",
      originalPrice: 19999,
      discountedPrice: 9999,
      monthlyEquivalent: 277.75,
      durationLabel: "3 Years",
      buttonText: "Get EveryKadai Silver",
      features: BASE_SILVER_FEATURES,
      extraFeatures: EXTRA_SILVER_FEATURES,
    },
    {
      id: "gold-3y",
      name: "Gold",
      originalPrice: 24999,
      discountedPrice: 11999,
      monthlyEquivalent: 333.30,
      popular: true,
      badge: "Most Popular",
      durationLabel: "3 Years",
      buttonText: "Get EveryKadai Gold",
      features: BASE_GOLD_FEATURES,
      extraFeatures: EXTRA_GOLD_FEATURES,
    },
  ],
};

// Aliases for backward compatibility
PRICING_PLANS["desktop-mobile-1year"] = PRICING_PLANS["1year"];
PRICING_PLANS["desktop-mobile-3year"] = PRICING_PLANS["3year"];
PRICING_PLANS["desktop-1year"] = PRICING_PLANS["1year"];
PRICING_PLANS["desktop-3year"] = PRICING_PLANS["3year"];
