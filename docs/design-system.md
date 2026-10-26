# Design System Specifications: Vyapar App (vyaparapp.in)

This document formalizes the visual and interaction design tokens reverse-engineered directly from the live Vyapar application (`https://vyaparapp.in/`).

---

## 1. Core Brand Colors

| Token Name | Computed Value | Hex Code | Usage |
|------------|----------------|----------|-------|
| `--color-primary` | `rgb(237, 26, 59)` | `#ed1a3b` | Primary brand red, main CTAs, active highlights, icons |
| `--color-primary-hover` | `rgb(208, 20, 50)` | `#d01432` | Button hover and active state |
| `--color-primary-light` | `rgb(255, 245, 245)` | `#fff5f5` | Soft red/pink container backgrounds, badges, modal banners |
| `--color-text-primary` | `rgb(17, 17, 17)` | `#111111` | Primary headings (H1, H2, H3), bold metrics |
| `--color-text-secondary` | `rgb(68, 68, 68)` | `#444444` | Body copy, hero subtext, feature descriptions |
| `--color-text-muted` | `rgb(157, 157, 157)` | `#9d9d9d` | Inactive nav links, breadcrumbs, secondary captions |
| `--color-background` | `rgb(255, 255, 255)` | `#ffffff` | Page canvas, card backgrounds |
| `--color-navbar-bg` | `rgba(128, 0, 128, 0.2)` | `#80008033` | Navbar background (0.2 / 20% purple tint) |
| `--color-surface-gray` | `rgb(248, 249, 250)` | `#f8f9fa` | Alternating section backgrounds, rating banner |
| `--color-border-card` | `rgb(229, 233, 240)` | `#e5e9f0` | 0.8px subtle border on cards, features, and containers |
| `--color-border-subtle` | `rgb(240, 242, 245)` | `#f0f2f5` | Dividers, tab bar borders |
| `--color-success` | `rgb(40, 167, 69)` | `#28a745` | Positive badges, review star ratings, WhatsApp badges |
| `--color-dark-navy` | `rgb(16, 24, 40)` | `#101828` | Footer headings, high-contrast dark accents |

---

## 2. Typography Hierarchy (Font Family: `Poppins, sans-serif`)

| Role / Element | Font Size | Weight | Line Height | Letter Spacing | Color |
|----------------|-----------|--------|-------------|----------------|-------|
| **Hero H1** | `50px` (Desktop) / `32px` (Mobile) | 700 (Bold) | `57.5px` (1.15) | `-0.5px` | `#111111` |
| **Section H2** | `38px` (Desktop) / `26px` (Mobile) | 800 (Extrabold) | `45.6px` (1.2) | `-0.2px` | `#111111` |
| **Subsection H3** | `22px` - `24px` | 600 (Semibold) | `30px` (1.3) | `normal` | `#111111` |
| **Card Heading H4** | `18px` - `20px` | 600 (Semibold) | `26px` (1.3) | `normal` | `#111111` |
| **Hero Subtext / Lead** | `16px` | 400 (Regular) | `26.4px` (1.65) | `normal` | `#444444` |
| **Body Regular** | `16px` | 400 (Regular) | `26.88px` (1.68) | `normal` | `#000000` / `#444444` |
| **Body Small / Captions** | `14px` | 400 / 500 | `20px` (1.42) | `normal` | `#666666` |
| **Trust Badge / Pill** | `14px` | 600 (Semibold) | `18px` | `normal` | `#ed1a3b` / `#111111` |
| **CTA Button (Large)** | `20px` | 700 (Bold) | `33.6px` | `normal` | `#ffffff` |
| **Nav Links** | `16px` | 400 / 500 | `20px` | `normal` | `#9d9d9d` (Hover: `#ed1a3b`) |

---

## 3. Spacing, Borders & Radius

- **Container Max Width**: `1240px` (with responsive padding `16px` to `24px`).
- **Hero Top Padding**: `50px` margin below navbar, `25px` bottom margin.
- **Section Vertical Padding**: `60px` to `80px` on desktop, `40px` on mobile.
- **Card Padding**: `20px` uniformly.
- **Button Border Radius**: `50px` (pill radius) for primary CTAs; `6px` to `8px` for secondary buttons.
- **Card Border Radius**: `12px` with `border: 0.8px solid #e5e9f0`.
- **Card Shadows**: Crisp flat style with subtle elevation `0 4px 12px rgba(0,0,0,0.04)` on hover.

---

## 4. UI Components & Elements

1. **Header / Navbar**:
   - Sticky top navigation with 0.2 percentage (20% opacity) purple background (`rgba(128, 0, 128, 0.2)` / `#80008033`) with backdrop blur.
   - Height: `78px` desktop.
   - Left brand logo: `170px` × `38px`.
   - "Try Mobile App" button with icon modal trigger.
   - "Solution" mega-menu dropdown with 4 columns:
     - Business Management Solutions
     - Industry Solution
     - Products
     - Resources
   - CTA: Pill button "Download for Desktop".

2. **Hero Section (`.vyh-hero`)**:
   - Left column: Trust pill badge, bold H1, descriptive lead text, large "Download Vyapar Now" pill CTA, ratings strip (Google Play 4.8, SourceForge 4.9, G2 4.4).
   - Right column: High-resolution application preview mockup (`560px` × `482px`).

3. **Feature Cards (`.vyh-feat`, `.vyh-journey`)**:
   - 12px rounded cards with 0.8px border `#e5e9f0`.
   - Numbered steps / feature badges.
   - High-fidelity product screenshot previews and icons.

4. **FAQ Accordion (`.vyh-faq`)**:
   - Interactive `<details>` or accordion items with question summary and expandable answers.
   - Clean divider lines and collapsible toggle state.

5. **Footer (`#footer-new`)**:
   - Multi-column directory: Our Products, Vyapar Softwares, Industry Solutions, Resources, Company, Contact/Address.
   - Mobile store download badges.
   - Social links (Facebook, Instagram, YouTube, LinkedIn, Twitter/X).
   - Copyright notice: `© 2026 Simply Vyapar Apps Pvt. Ltd.™`.
