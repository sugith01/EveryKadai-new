# Responsive Behavior Specifications: Vyapar App

## 1. Breakpoints

| Breakpoint Name | Screen Width | Key Layout Adjustments |
|-----------------|--------------|------------------------|
| **Mobile (`sm` / `< 768px`)** | `< 768px` | Navbar collapses to hamburger menu; Hero stacks vertically with full-width preview; 1-column cards; padding reduces to 16px-20px; font sizes scale down (H1 becomes 32px, H2 becomes 26px); CTA buttons expand full width. |
| **Tablet (`md` / `768px - 991px`)** | `768px - 991px` | Mega-menu transitions to drawer or vertical accordion; 2-column feature grids; hero flex direction row with adjusted gap. |
| **Desktop (`lg` / `992px - 1199px`)** | `992px - 1199px` | Full horizontal navbar; 4-column mega menu; 3-column / 4-column feature grids; hero 2-column side-by-side layout. |
| **Large Desktop (`xl` / `>= 1200px`)** | `>= 1200px` | Maximum content width capped at 1240px with auto margins; spacious 60px-80px section padding; full visual effects. |

## 2. Component-Level Responsive Adjustments

- **Header:**
  - On mobile: "Download for Mobile" button is prioritized.
  - On desktop: "Download for Desktop" CTA and "Try mobile app" modal trigger are active.
- **Hero Mockup:**
  - Desktop: 560px × 482px aligned right.
  - Mobile: Full width with rounded container below the CTA.
- **Mega Menu:**
  - Desktop: 4-column floating modal anchored below "Solution".
  - Mobile: Integrated collapsible sub-menus within mobile drawer.
- **Setup Steps (1 to 4):**
  - Desktop: 4 columns across.
  - Mobile: 1 column vertical sequence.
- **Industry Solutions Grid:**
  - Desktop: 4 columns × 2 rows.
  - Tablet: 3 columns.
  - Mobile: 2 columns with touch-friendly spacing.
