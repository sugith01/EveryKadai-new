# Interactions and Animations Specifications: Vyapar App

## 1. Key Interactions

### Navbar & Solution Mega-Menu
- **Solution Dropdown:**
  - Trigger: Hover or Click on "Solution" button.
  - Presentation: Full mega-menu dropdown presenting 4 columns:
    1. Business Management Solutions (Accounting, Inventory, Invoicing, E-Invoice, POS, OCR).
    2. Industry Solutions (Retail, Pharmacy, Grocery, Restaurant, Jewellery, Clothing/Apparel).
    3. Products (Vyapar TaxOne, Vyapar Flyy, Vyapar Table, NeoDove).
    4. Resources (Blogs, Use Cases, Guides, Success Stories, Videos).
  - Hover states: Column items show background highlight and icon micro-animation.
  - Dismissal: Outside click or moving mouse away.

### Try Mobile App Modal
- **Trigger:** Clicking "Try mobile app" in navbar.
- **Content:**
  - QR Code scanner preview (`Scan with your mobile camera`).
  - Explanatory copy: *"Monitor your business activity from anywhere in the world, sync mobile app with desktop app."*
  - Phone number input field + "Get the App" button.
  - Interactive validation and submission feedback.

### FAQ Accordions
- **Trigger:** Click on question header / summary.
- **Behavior:** Smooth expand/collapse transition with animated chevron indicator.
- **Default State:** First 5 FAQs visible with expand button for additional FAQs.

### Download CTAs & Form Modals
- **Trigger:** Clicking "Download for Desktop", "Download Vyapar Now", or "Try Free".
- **Behavior:** Triggers download flow / phone number prompt with validation.

### Pricing Calculator / Billing Period Toggle
- **Trigger:** Switching between Monthly / 1-Year / 3-Year billing plans on the pricing page.
- **Behavior:** Instant price recalculation, discount badge updates, and feature checkmarks.

---

## 2. Animations & Transitions

- **Transitions:** Standard CSS transition `all 0.2s cubic-bezier(0.4, 0, 0.2, 1)`.
- **Card Hover:** Subtle `translate-y-[-4px]` lift with shadow depth increase.
- **Modal Transitions:** Fade-in and scale-in from `0.98` to `1.0`.
- **Reduced Motion:** All transitions strictly respect `@media (prefers-reduced-motion: reduce)`.
