# Known Limitations and Constraints: Vyapar App Reverse Engineering

This document records technical limitations, third-party constraints, and authentication boundaries identified during the reverse engineering process.

---

## 1. Authentication and Restricted Services
- **OTP Verification & Active SIM:**
  - `https://vyaparapp.in/login` uses live OTP delivery via Indian telecommunication SMS gateways.
  - Reconstructed with faithful UI, phone number input, OTP simulation screen, and QR scan flow without bypassing real SMS gateways.
- **IRP E-Invoice Portal Sandbox:**
  - Live GSTIN and E-Way bill generation APIs require government-registered sandbox GST credentials. Reconstructed with real-world format previews, sample JSON payloads, and IRN mock representations.

## 2. External Ecosystem Domains
- Subdomains and separate SaaS properties (`taxone.vyapar.com`, `vyaparflyy.com`, `vyapartable.com`, `neodove.com`) are linked to their respective destinations with explanatory modal/tooltip previews so users understand the multi-product suite.

## 3. Dynamic Video Streaming
- Video walkthroughs on the reference site leverage YouTube iframe embeds and CDN-hosted MP4/WebP previews. Local implementation embeds the official YouTube player keys and responsive thumbnail previews without sound autoplay.

## 4. Third-Party CDN Fallbacks
- Public image and SVG assets hosted on `vyaparwebsiteimages.vypcdn.in` and `vyaparapp.in` are referenced directly with responsive fallback handling (SVG placeholders) in case network firewalls restrict direct CDN hotlinking.
