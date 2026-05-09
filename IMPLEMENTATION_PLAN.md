# Assam Furniture House — Tier 4 (Boutique Premium)
> A 10-page editorial-light luxury furniture website with cart, wishlist, bilingual toggle, showroom scheduler, journal, and design studio.

**Folder:** `furniture web demo 4/`
**Tier:** Tier 4 — Boutique Premium
**Aesthetic:** Editorial Cream + Forest Green + Brushed Brass
**Identity:** Light luxury counterpoint to Tier 3's dark luxury

---

## 1. What this tier delivers over Tier 3

| Dimension | Tier 3 (Dark Luxury) | Tier 4 (Boutique Premium) |
|---|---|---|
| Pages | 5 | **10** |
| Palette | Charcoal + gold | Cream + forest + brass |
| Mood | Nightclub luxury | Magazine boutique |
| Languages | English only | **English ↔ Assamese** site-wide |
| Conversion | WhatsApp deep links | **Cart + Wishlist → WhatsApp checkout** |
| Showroom CTA | "Call us" | **Date/time scheduler → pre-filled WhatsApp** |
| Content | Static product pages | Static + **3-article Journal (SEO content)** |
| Polish | Glassmorphism | Loader, **custom cursor**, **page transitions** |
| Total LoC | ~2,771 | **~6,200** |

---

## 2. File structure (final)

```
furniture web demo 4/
├── index.html             ← Homepage (10 sections)
├── products.html          ← Catalogue with filter + sort + URL ?cat= support
├── product.html           ← Single product detail (?id=) with gallery
├── cart.html              ← Cart + Wishlist tabs + WhatsApp checkout
├── visit.html             ← 4-step showroom scheduler
├── studio.html            ← Design Studio (wood + finish + EMI)
├── journal.html           ← Article listing
├── journal-post.html      ← Single article template (?slug=)
├── about.html             ← Story + timeline + values + stats
├── contact.html           ← Info + hours + form + map
│
├── styles.css             ← Full design system (~1,640 lines)
├── i18n.js                ← EN/AS dictionary + DOM walker
├── script.js              ← Core: loader, nav, cursor, transitions, carousels, counters
├── cart.js                ← Cart + Wishlist state machine
├── products.js            ← 16-product catalogue + filter + cards
├── studio.js              ← Studio: wood/finish picker + sliders + EMI
└── journal-data.js        ← 3 articles + listing/post rendering
```

**Total: 10 HTML pages + 6 JS modules + 1 CSS file = 17 files.**

---

## 3. Design system

### Palette
```css
--bg-page:     #faf6ef;   /* warm ivory */
--bg-card:     #ffffff;
--bg-soft:     #f0e9dc;   /* cream tint */
--forest:      #1f3b2d;   /* deep forest primary */
--forest-deep: #122318;
--brass:       #b08d3f;   /* brushed brass accent */
--brass-light: #d4b06a;
--brass-deep:  #8a6d2c;
--ink:         #1a1a1a;
--muted:       #6b6358;
```

### Typography
- **Headings:** Cormorant Garamond — distinct from Tier 3's Playfair, more editorial-magazine
- **Body:** Inter — clean, modern, neutral

### Spacing scale
8px base, 4 → 128px (`--s-1` through `--s-10`)

### Components in `styles.css`
1. Tokens (palette, type, spacing, radii, transitions)
2. Reset + base
3. Buttons (primary, brass, outline, ghost, wa, sm/lg/block variants)
4. Page loader
5. Page transition overlay
6. Custom cursor (desktop only)
7. Header (topbar + sticky navbar + brand + nav-links + lang-toggle + cart pills + hamburger)
8. Hero (text + visual + chips + floating card + badge)
9. Category strip (6-card grid)
10. Product cards (image + badge + wishlist heart + price + EMI hint + actions)
11. EMI banner (forest-green background + mini-calc)
12. Visit teaser (image + 3 numbered points)
13. Story strip (image + meta stats)
14. Journal teaser cards
15. Testimonials carousel (auto + dots + swipe)
16. Stats (animated counters)
17. CTA banner (forest-green panel)
18. Footer (4-column + newsletter + socials)
19. Floating WhatsApp (pulse animation, 1.5s delayed entrance)
20. Toast (bottom-right, 2.2s auto-dismiss)
21. Reveal animations (fade + slide on intersect)
22. Page header (interior pages)
23. Products toolbar (filter chips + sort)
24. Product detail (gallery + thumbs + spec + tags)
25. Cart page (tabs + items + sticky summary)
26. Visit scheduler (date grid + slots + interest chips + summary)
27. Studio (wood/finish option grid + sliders + result panel)
28. Journal pages (list + article hero + body + footer)
29. About timeline + values
30. Contact (info rows + hours + form + map)
31. Lightbox / modal
32. Mobile fine-tune (≤600px)
33. Reduced-motion fallback

---

## 4. Headline features (engineering detail)

### A. Cart + Wishlist
- `cart.js`: `AfhCart` and `AfhWishlist` state machines
- Persists to `localStorage` keys `afh_cart_v1`, `afh_wishlist_v1`
- Cross-tab sync via `storage` event
- Cart pill in nav: live count + bump animation on add
- Cart page: tabbed UI (Cart / Wishlist), qty steppers, save-for-later, move-to-cart
- Sticky order summary panel with name/phone fields
- Checkout assembles a multi-line WhatsApp message:
  ```
  Hello Assam Furniture House,
  
  I would like to enquire about the following items:
  
  1. Maharaja Carved Bed (Bedroom) — qty 1 — ₹64,500
  2. Velvet Lounge Sofa (Living) — qty 1 — ₹48,500
  
  Subtotal: ₹1,13,000
  Delivery: Free (Nagaon district)
  Total: ₹1,13,000
  
  Name: ...
  Phone: ...
  
  Please confirm availability and EMI options. Thank you.
  ```

### B. Bilingual toggle (EN ↔ অসমীয়া)
- `i18n.js`: `I18N` dictionary with two top-level keys (`en`, `as`), nested by domain
- Translatable elements use `data-i18n="key.path"`
- Translatable placeholders use `data-i18n-placeholder`
- HTML content (with line breaks) uses `data-i18n-html`
- Walker re-runs on toggle; `<html lang>` updates for SEO
- Choice persisted to `localStorage.afh_lang`
- ~280 dictionary entries covering nav, hero, all sections, cart, visit, studio, about, contact, journal, footer

### C. Showroom Visit Scheduler
- 14-day rolling date picker (auto-disables Sundays)
- 8 fixed slots per day (10:30, 11:30, 12:30, 14:30, 15:30, 16:30, 17:30, 18:30)
- Multi-select interest chips (6 categories)
- Name + phone fields
- Live summary panel — "Confirm" disabled until all fields filled
- WhatsApp message formatted with date, time, interests, contact info
- Date labels re-localise when language toggles

### D. Journal (3 articles)
- `journal-data.js`: `ARTICLES` array with slug, tag, title, excerpt, cover, date, readTime, author, body
- Listing page renders cards with reveal animation
- Single post page: hero + cover + body + "next article" footer
- Body uses semantic HTML (`<h2>`, `<blockquote>`, `<ul>`, `<p>`)
- Articles included:
  1. **Teak vs Sheesham** — choosing wood for Assam's humidity (~6 min)
  2. **Wedding Furniture Buying Guide** for Kampur families (~8 min)
  3. **Caring for Solid Wood through the Monsoon** (~5 min)

### E. Polish layer
- **Page loader:** AFH monogram in brass + brand-coloured progress bar; min 600 ms; fades on `window.load`
- **Custom cursor:** desktop only (≥1024 px AND `pointer: fine`); small forest dot + outer brass ring; ring grows on hover-targets (links, buttons, chips, cards); auto-disabled on touch
- **Page transitions:** intercept same-origin link clicks, fade overlay → navigate → fade back; bypasses external, hash, mailto, tel, target=_blank, modifier-keys

### F. Carry-overs from Tier 3 (restyled)
- Mobile hamburger menu
- Floating WhatsApp button (cream/brass variant, pulse animation)
- IntersectionObserver scroll-fade reveal
- Animated counters
- Testimonials carousel (auto-rotate + dots + touch swipe + pause-on-hover)
- EMI calculator (3 sliders) — moved into Studio page
- Wood + finish picker (Studio)
- Google Maps embed (Contact)
- Today's-hours auto-highlight (Contact)
- Smooth anchor scroll
- Newsletter mailto/form

---

## 5. Product catalogue (16 products)

| # | Product | Category | Price | Featured |
|---|---|---|---|---|
| 1 | Maharaja Carved Bed | Bedroom | ₹64,500 | ✓ |
| 2 | Velvet Lounge Sofa | Living | ₹48,500 | ✓ |
| 3 | Banaras Dining Set (6) | Dining | ₹87,500 | ✓ |
| 4 | Brass-Inlay Coffee Table | Living | ₹18,500 | ✓ |
| 5 | Scholar's Study Desk | Study | ₹24,500 | ✓ |
| 6 | Library Bookshelf | Study | ₹32,500 | |
| 7 | Almirah Royal (3-door) | Wardrobe | ₹56,500 | ✓ |
| 8 | 4-door Sliding Wardrobe | Wardrobe | ₹78,000 | |
| 9 | Wedding Throne Pair | Wedding | ₹1,45,000 | ✓ |
| 10 | Bridal Vanity | Wedding | ₹38,500 | |
| 11 | Reading Armchair | Living | ₹22,500 | |
| 12 | Modular TV Unit | Living | ₹28,500 | |
| 13 | Carved Side Table | Bedroom | ₹9,800 | |
| 14 | Kid's Study Set | Study | ₹18,900 | |
| 15 | Round Dining Set (4) | Dining | ₹52,500 | |
| 16 | Mandap Set (3-piece) | Wedding | ₹1,85,000 | |

Each has: id, name, category + label, price, optional was-price, badge, rating, reviews, hero image, 2–4 gallery images, wood, finish, size, description.

---

## 6. WhatsApp integration map

| Trigger | Pre-filled message |
|---|---|
| Floating WA button | "Hello Assam Furniture House" |
| Product detail enquire | "I would like to enquire about: [name] ([size])" |
| Cart checkout | Multi-line order with all items + customer info |
| Visit confirm | Date, time, interests, name, phone |
| Studio "Send my plan" | Wood, finish, price, down, tenure, EMI |
| Contact form | Subject, name, phone, message |

All use `wa.me/919876543210` (placeholder — replace with real number on deployment).

---

## 7. Local-storage keys

| Key | Purpose | Shape |
|---|---|---|
| `afh_lang` | Selected language | `"en"` or `"as"` |
| `afh_cart_v1` | Cart items | `[{id, qty}]` |
| `afh_wishlist_v1` | Wishlist | `[id]` |

---

## 8. Build order (followed)

**Part 1 — Foundation (7 files)**
1. `styles.css` — design system
2. `i18n.js` — bilingual dictionary
3. `script.js` — core behaviours
4. `cart.js` — state machine
5. `products.js` — catalogue + filter
6. `index.html` — homepage
7. `products.html` — catalogue

**Part 2 — Cart + Interactive (5 files)**
8. `product.html` — single product
9. `cart.html` — cart + wishlist + checkout
10. `visit.html` — scheduler
11. `studio.js` — studio logic
12. `studio.html` — studio page

**Part 3 — Content + Polish (6 files)**
13. `about.html` — story + timeline + values
14. `contact.html` — info + form + map
15. `journal-data.js` — articles + render helpers
16. `journal.html` — listing
17. `journal-post.html` — single article
18. `IMPLEMENTATION_PLAN.md` — this file
19. `FURNITURE_WEBSITE_PRICING_REPORT.md` — Tier 4 row added

---

## 9. Pricing

- **One-Time Build:** ₹29,500
- **Yearly Maintenance:** ₹6,000
- **Total Year 1:** ₹35,500

Maintenance covers: 8 content updates/yr, product data changes, 1 free blog article addition/yr, Assamese translation tweaks, EMI rate updates, scheduler hours/holiday updates, cross-browser + mobile QA, WhatsApp number updates across all files, cart/wishlist key migrations on schema changes.

**Not included:** new pages, payment gateway integration, backend, domain/hosting fees, full redesigns, additional language support beyond EN/AS.

---

## 10. Known limitations / suggested upgrades for Tier 5

- Product images come from Unsplash CDN — replace with local `/images/` folder for production (improves trust + performance)
- Cart syncs across browser tabs but not across devices — would need a backend for that (Tier 5)
- Journal is 3 articles hard-coded in JS — Tier 5 could add a small CMS (e.g. Decap CMS on a static site)
- No payment gateway — orders flow through WhatsApp only. Tier 5 could add Razorpay
- No actual delivery tracking, order history, or user accounts
- Bilingual covers labels and short prose; long-form blog content is English-only (translation cost would push price beyond Tier 4 ceiling)
- No Gallery / Portfolio page — could be added as a custom add-on (₹3,500–₹5,000)
- No Open Graph image generation — metadata is set but no per-page social previews

---

*Implementation completed in 3 parts, ~6,200 lines of code, no frameworks.*
