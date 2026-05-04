# Local SEO Analysis — mickael-lima.immo
**Date:** 2026-05-04  
**Business:** Mickaël Lima — Agent Immobilier Pays de Gex  

---

## Local SEO Score: 41/100

| Dimension | Weight | Score | Status |
|-----------|--------|-------|--------|
| GBP Signals | 25% | 10/25 | LOW |
| Reviews & Reputation | 20% | 10/20 | PARTIAL |
| Local On-Page SEO | 20% | 10/20 | PARTIAL |
| NAP Consistency & Citations | 15% | 3/15 | CRITICAL |
| Local Schema Markup | 10% | 6/10 | PARTIAL |
| Local Link & Authority Signals | 10% | 2/10 | LOW |

---

## Business Type
**Hybrid** — Physical address present in schema + visible service area mentions (20 communes listed in llms.txt, zone de couverture on site).

## Industry Vertical
**Real Estate** — `RealEstateAgent` + `LocalBusiness` schema, services (Estimation, Mandat Exclusif, Mandat Signature), agent bio with 7-year experience claim.

---

## 1. GBP Signals (10/25 — LOW)

| Signal | Status | Detail |
|--------|--------|--------|
| GBP embed / Maps iframe | MISSING | No Google Maps embed detected anywhere on site |
| Reviews widget | MISSING | No GBP reviews pulled onto site |
| Place ID / GBP reference | MISSING | No place ID detectable |
| Business hours on page | MISSING | No opening hours visible in HTML or schema |
| Primary category alignment | INFERRED | `RealEstateAgent` schema aligns with expected GBP category |
| GBP posts | UNKNOWN | Cannot determine from website |
| Photos / video evidence | PRESENT | Site has property photos, drone video references |
| Google Verified badge | UNKNOWN | Cannot determine |

**GBP Optimization Checklist:**
- [ ] Claim / fully optimize GBP listing with all photos (exterior, team, properties)
- [ ] Add opening hours to GBP AND to website (`openingHoursSpecification` in schema)
- [ ] Link GBP to a page OTHER than the homepage (Sterling Sky Diversity Update — linking homepage risks suppressing organic rankings)
- [ ] Activate GBP Q&A section (replaced by Ask Maps / Gemini AI in Dec 2025 — recreate Q&A as FAQ sections on website)
- [ ] Pursue **Google Verified badge** (replaced Screened/Guaranteed Oct 2025)
- [ ] Set up 4 secondary GBP categories (e.g. Real estate agency, Property management, Luxury real estate agent, Property consultant)
- [ ] Embed Google Map on contact page (lazy-loaded to avoid CWV impact)
- [ ] Claim **Apple Business Connect** (usage doubled to 27% — free, high-value)
- [ ] Claim **Bing Places** (powers ChatGPT, Copilot, Alexa — critical for AI visibility)

---

## 2. Reviews & Reputation (10/20 — PARTIAL)

| Signal | Status | Detail |
|--------|--------|--------|
| `aggregateRating` schema | PRESENT | ratingValue: 5, reviewCount: 25 |
| Rating displayed on page | INCONSISTENT | `ContactPage.tsx:151` shows "4.9/5" — contradicts schema |
| Review count displayed | INCONSISTENT | `ContactPage.tsx:153` shows "100+ Avis Clients" — contradicts schema |
| Reviews above 10 threshold | YES | 25 reviews (schema) |
| Stars ≥ 4.5 | YES | 5/5 (schema) |
| Review recency | UNKNOWN | No date indicators visible |
| Owner responses | UNKNOWN | Cannot determine from site |
| Multi-platform presence | NOT DETECTED | No links to Yelp, Trustpilot, or third-party review platforms |
| Review gating | NOT DETECTED | No pre-screening visible |

**Critical inconsistency:** The schema declares `ratingValue: 5 / reviewCount: 25`. The component at `ContactPage.tsx:151-153` displays `4.9/5` and `100+ Avis Clients`. These two data points must match — Google cross-references structured data with visible content. Schema values that differ from displayed content can trigger penalties.

**18-Day Rule:** Maintain minimum one new Google review every 18 days to avoid a local pack ranking cliff (Sterling Sky).

---

## 3. Local On-Page SEO (10/20 — PARTIAL)

| Signal | Status | Detail |
|--------|--------|--------|
| City in title tag | PARTIAL | "Pays de Gex" present, but no city name like "Divonne-les-Bains" |
| H1 with local intent | UNKNOWN | Rendered via React — not in raw HTML |
| NAP visible in footer | MISSING | Footer has no address, phone, or NAP |
| NAP visible on contact page | BROKEN | Address shown is OLD: "15 Avenue du Mont-Blanc" |
| Click-to-call (`tel:`) | PRESENT | `ContactPage.tsx` has `href="tel:+33769313502"` |
| Click-to-call on homepage | MISSING | Not detectable in raw HTML (CSR) |
| Dedicated service pages | PRESENT | `/estimation`, `/mandat-exclusif`, `/mandat-signature` |
| Google Map embedded | MISSING | No iframe detected |
| Contact form | PRESENT | Form detected on contact page |
| WhatsApp button | BROKEN | `href="#"` — non-functional |
| Internal linking hub-and-spoke | PARTIAL | Pages exist but not verifiable in raw HTML |
| Blog / local content | PRESENT | `/blog/1`, `/blog/2`, `/blog/3` — local content strategy |

**Missing from footer:** A NAP-consistent footer (Name + full address + phone + email) on EVERY page is a fundamental local SEO requirement. Currently the footer only has a newsletter signup and navigation links.

---

## 4. NAP Consistency & Citations (3/15 — CRITICAL)

### NAP Audit: Cross-Source Comparison

| Source | Name | Address | Phone |
|--------|------|---------|-------|
| JSON-LD schema (index.html) | Mickael Lima — L'Agence Immo | **328 Rue des Fontanettes**, 01220 Divonne-les-Bains | +33769313502 |
| public/llms.txt | Mickaël Lima | **328 Rue des Fontanettes**, 01220 Divonne-les-Bains | 07 69 31 35 02 |
| ContactPage.tsx (line 305) | — | **15 Avenue du Mont-Blanc**, 01220 Divonne-les-Bains | +33769313502 |
| HomeSections.tsx (line 439) | — | **15 Avenue du Mont-Blanc**, 01220 Divonne-les-Bains | — |
| Footer | — | **MISSING** | **MISSING** |

**CRITICAL:** Two component files display the wrong address (`15 Avenue du Mont-Blanc`). The schema and llms.txt were updated to `328 Rue des Fontanettes` but the visible HTML was not. Google cross-references schema vs visible content — a mismatch is a negative local ranking signal and can suppress the local pack listing.

**Files requiring immediate fix:**
- `components/ContactPage.tsx` — lines 305-306 (address), lines 151/153 (rating + review count)
- `components/HomeSections.tsx` — lines 439-440 (address)
- `components/Footer.tsx` — add complete NAP block

### Citation Presence

| Directory | Status |
|-----------|--------|
| Google Business Profile | Not verifiable from site (no embed/link) |
| Yelp | Not detectable |
| Pages Jaunes | Not detectable |
| Logic-immo / SeLoger | Not detectable |
| Bien'ici | Not detectable |
| Apple Business Connect | Not claimed (likely) |
| Bing Places | Not claimed (likely) |
| BBB equivalent (fr) | Not detectable |
| Facebook Business | Not linked from site |

**Industry-specific citations for real estate (France):**
Priority directories to claim: Pages Jaunes, Logic-immo, SeLoger, Bien'ici, LeBonCoin, MeilleursAgents, Facebook Business, LinkedIn company page.

---

## 5. Local Schema Markup (6/10 — PARTIAL)

**Schema detected:** Two JSON-LD blocks in `index.html`:
1. `["RealEstateAgent", "LocalBusiness"]` — correct industry subtype ✅
2. `FAQPage` — present (info priority for AI/LLM citation value; no Google rich result benefit for commercial sites since Aug 2023 restriction)

### Property Audit

| Property | Status | Detail |
|----------|--------|--------|
| `@type` | CORRECT | `RealEstateAgent` + `LocalBusiness` |
| `name` | PRESENT | "Mickael Lima — L'Agence Immo" |
| `address` with PostalAddress | PRESENT | "328 Rue des Fontanettes" (corrected) |
| `telephone` | PRESENT | "+33769313502" |
| `email` | PRESENT | "contact@mickael-lima.immo" |
| `url` | PRESENT | "https://mickael-lima.immo" |
| `geo` | PARTIAL | Only 4 decimal places (46.3578, 6.1425) — minimum 5 required |
| `openingHoursSpecification` | MISSING | Not present |
| `image` | MISSING | No image property |
| `aggregateRating` | PRESENT | ratingValue: 5, reviewCount: 25, bestRating: 5 |
| `priceRange` | PRESENT | "€€€" |
| `hasOfferCatalog` | PRESENT | 6 services listed |
| `areaServed` | PRESENT | 3 cities + 2 admin areas (could expand to all 20 communes) |
| `sameAs` | MISSING | No social profile URLs |

**Ready-to-use fixes:**

```json
"geo": {
  "@type": "GeoCoordinates",
  "latitude": 46.35780,
  "longitude": 6.14250
},
"openingHoursSpecification": [
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "09:00",
    "closes": "19:00"
  }
],
"image": "https://mickael-lima.immo/images/pool-cta-final.jpg",
"sameAs": [
  "https://www.facebook.com/[page]",
  "https://www.linkedin.com/in/[profile]",
  "https://www.instagram.com/[handle]"
]
```

**CSR schema limitation:** Because this is a React SPA (client-side rendered), JSON-LD in `index.html` is present in raw HTML for the homepage only. For route-specific pages (`/estimation`, `/blog/1`, etc.), React Helmet injects per-page schema after JS execution. Googlebot renders JavaScript, but structured data injected via JS may face delayed processing. Critical schema should be in server-rendered HTML.

**Employee inconsistency:** Schema `employee.description` says "7 ans d'expérience" but `llms.txt` says "10 ans d'expérience". Pick one and be consistent.

---

## 6. Local Link & Authority Signals (2/10 — LOW)

| Signal | Status |
|--------|--------|
| Chamber of Commerce mention | NOT DETECTED |
| BBB / equivalent (Chambre des Métiers) | NOT DETECTED |
| Local press / media mentions | NOT DETECTED |
| Community involvement / sponsorships | NOT DETECTED |
| "Best of" list placements | NOT DETECTED |
| Local backlinks visible from site | NONE |
| Partner page (`/partenaires`) | PRESENT — potential link-building hub |

The `/partenaires` page is an asset. If it showcases local notaries, banks, architects, or interior designers with reciprocal links, it contributes positively to local authority signals.

---

## AI Search Impact (Local Context)

- AI Overviews appear on up to 68% of local searches (Whitespark Q2 2025)
- ChatGPT converts at 15.9% vs Google organic at 1.76% (Seer Interactive) — AI visibility is critical
- ChatGPT does NOT access GBP directly — sources from Bing index, Yelp, Pages Jaunes, Facebook
- `llms.txt` is present ✅ — good for AI crawler discoverability
- **Bing Places is NOT claimed** (inferred) — this is the primary source ChatGPT/Copilot/Alexa use for local business data

Run `/seo geo https://mickael-lima.immo` for full AI search visibility analysis including citability scoring and brand mention audit.

---

## Top 10 Prioritized Actions

### CRITICAL — Fix Immediately

**1. Fix NAP inconsistency in React components**
`ContactPage.tsx:305` and `HomeSections.tsx:439` display `15 Avenue du Mont-Blanc` — the old address. Schema and llms.txt now show `328 Rue des Fontanettes`. Google's cross-referencing of schema vs visible content penalizes mismatches. This is the single most damaging local SEO issue on the site.

**2. Fix rating/review count displayed on page**
`ContactPage.tsx:151-153` shows `4.9/5` and `100+ Avis Clients`. Schema declares `ratingValue: 5` and `reviewCount: 25`. Either update the visible content to match the schema, or update the schema to match reality. Inconsistency = trust penalty.

**3. Add complete NAP to footer (every page)**
Footer currently has zero NAP. Add Name + full address (328 Rue des Fontanettes, 01220 Divonne-les-Bains) + phone (07 69 31 35 02) + email to the footer component. This is the #1 most-cited local on-page signal gap.

### HIGH — Fix Within 1 Week

**4. Fix WhatsApp button href**
`ContactPage.tsx:321` has `href="#"` — non-functional. Replace with `href="https://wa.me/33769313502"`. A broken CTA on the contact page directly costs leads.

**5. Claim and optimize Bing Places**
Bing Places powers ChatGPT, Copilot, and Alexa local recommendations. With ChatGPT converting at 15.9% vs Google's 1.76%, this is the highest ROI citation claim available. Free, takes 30 minutes.

**6. Claim Apple Business Connect**
Usage doubled to 27% of consumers in 2026. Free claim. High-authority signal.

**7. Expand `geo` coordinates to 5+ decimal places**
`index.html` schema: change `46.3578` → `46.35780` and `6.1425` → `6.14250`. Required minimum precision per confirmed local schema guidance.

### MEDIUM — Fix Within 1 Month

**8. Add `openingHoursSpecification` + `image` + `sameAs` to schema**
Missing recommended properties. Business hours visibility is local pack ranking factor #5 (Whitespark). Use the ready-to-use JSON above.

**9. Embed Google Map on contact page**
A geo-confirmed iframe reinforces physical location signal. Lazy-load it (`loading="lazy"`) to avoid CWV impact. Add to `ContactPage.tsx` near the address block.

**10. Submit to French real estate directories**
Priority: Pages Jaunes, MeilleursAgents, Logic-immo, SeLoger, Bien'ici, LeBonCoin. These are Tier 1 citations for real estate in France. 3 of the top 5 AI visibility factors are citation-related (Whitespark 2026).

---

## Limitations Disclaimer

This analysis could NOT assess:
- **Real-time local pack position** — requires geo-grid rank tracking tools (BrightLocal, LocalFalcon, DataForSEO)
- **GBP Insights data** — impressions, calls, direction requests from GBP dashboard
- **Actual GBP listing content** — categories, attributes, posts, photos count
- **Backlink profile / Domain Authority** — run `/seo backlinks https://mickael-lima.immo`
- **CrUX / Core Web Vitals field data** — PageSpeed API quota exceeded during technical audit
- **Review velocity and recency** — dates of existing 25 Google reviews unknown
- **Competitor local pack positions** — requires live SERP data

Paid tools that fill these gaps: BrightLocal (GBP + citation audit), LocalFalcon (geo-grid), DataForSEO (live local pack SERP), Moz Local (citation distribution).

---

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built by agricidaniel — Join the AI Marketing Hub community
🆓 Free  → https://www.skool.com/ai-marketing-hub
⚡ Pro   → https://www.skool.com/ai-marketing-hub-pro
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
