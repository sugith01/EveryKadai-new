# Colors and Visual Effects Specifications: Vyapar App

## 1. Color Palette

### Primary & Brand Colors
- **Vyapar Crimson Red (`--color-primary`):** `#ed1a3b` (`rgb(237, 26, 59)`)
  - Hover state: `#d01432` (`rgb(208, 20, 50)`)
  - Active state: `#b80f2a`
  - Subtle tint background: `#fff5f5` (`rgb(255, 245, 245)`)
  - Border tint: `#ffd2d6`

### Neutral Grayscale
- **Pure White:** `#ffffff` (`rgb(255, 255, 255)`) - Primary backgrounds & cards
- **Off-White / Canvas:** `#f8f9fa` (`rgb(248, 249, 250)`) - Alternating section backgrounds
- **Light Gray Border:** `#e5e9f0` (`rgb(229, 233, 240)`) - Card and element borders
- **Muted Text Gray:** `#9d9d9d` (`rgb(157, 157, 157)`) - Inactive nav links, subtitles
- **Body Text Charcoal:** `#444444` (`rgb(68, 68, 68)`) - Body paragraphs
- **Deep Black / Heading:** `#111111` (`rgb(17, 17, 17)`) - H1, H2, H3 headings, bold elements

### Accents & Semantic States
- **Success Green:** `#28a745` (`rgb(40, 167, 69)`) - Ratings, verified checks
- **Star Gold / Yellow:** `#ffb800` - Review rating stars
- **Dark Navy / Slate:** `#101828` / `#1a202c` - Dark section accents & footer headers

---

## 2. Visual Effects & Elevators

### Card Shadows
- **Resting state:** `box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05)`
- **Hover state:** `box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)`

### Modal Backdrop
- **Backdrop:** `rgba(0, 0, 0, 0.5)` with optional subtle backdrop blur

### Border Radii
- **Full Pill Buttons:** `50px` / `9999px`
- **Cards & Banners:** `12px` / `16px`
- **Badges & Small Controls:** `6px` / `8px`
- **Input Fields:** `8px` - `20px` (pill variant in SMS modal)
