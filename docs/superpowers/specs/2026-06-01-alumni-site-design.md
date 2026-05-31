# SKVM Alumni Association — Static Site Design Spec

**Date:** 2026-06-01  
**Project:** SriKrishna Vidya Mandir Alumni Association Website  
**Approach:** Pure HTML/CSS multi-page static site (no frameworks, no build step)

---

## Overview

A 4-page static brochure site for the Sri T.V.S. Rao SriKrishna Vidya Mandir Alumni Association. Deployable to GitHub Pages or any static host. Zero dependencies — plain HTML files with embedded or linked CSS.

---

## File Structure

```
/
├── index.html          # Home page
├── about.html          # About Us
├── donate.html         # Donation page
├── contact.html        # Contact Us
├── css/
│   └── style.css       # Shared stylesheet
├── assets/
│   └── logo.png        # Circular SKVM Alumni badge (provided by user)
└── CNAME               # existing
```

---

## Design System

### Colors
| Token | Hex | Usage |
|---|---|---|
| Blue Dark | `#1a237e` | Navbar, hero background, footer |
| Blue Mid | `#0d47a1` | Hero gradient, page headers |
| Gold | `#c8a84b` | Headings, borders, CTA buttons, accents |
| Parchment | `#f5e6c8` | Content section backgrounds, cards |
| Brown Text | `#3e2723` | Body copy |
| White | `#ffffff` | Card backgrounds, form fields |

### Typography
- **Nav links:** `'Trebuchet MS', sans-serif` — uppercase, `letter-spacing: 1.5px`, 13px
- **Logo text:** `'Trebuchet MS', sans-serif` — uppercase, `letter-spacing: 2px`
- **Headings (h1, h2):** `Georgia, serif` — bold
- **Body copy:** `Georgia, serif` — 14–15px, line-height 1.7
- **Labels / section titles:** `'Trebuchet MS', sans-serif` — uppercase, 10px, `letter-spacing: 3px`

### Decorative Motifs
- Mandala-style concentric circles in corners (CSS `border-radius: 50%`, `border: 1px solid rgba(200,168,75,0.15)`) — hero and page headers
- Gold top-border on parchment cards (`border-top: 3px solid #c8a84b`)
- Gold horizontal rule separating major sections

---

## Shared Components

### Navbar
- Background: `#1a237e`
- Left: logo image (40×40px, circular, gold border) + "SRIKRISHNA VIDYA MANDIR / ALUMNI ASSOCIATION" in Trebuchet
- Right: Home | About Us | Contact | **Donate** (gold pill button)
- Active page link highlighted in gold
- Responsive: hamburger menu on mobile (CSS-only toggle)

### Footer
- Background: `#1a237e`, gold top border
- Left: association name + address
- Right: copyright line
- Links: Home, About, Donate, Contact

---

## Pages

### 1. Home (`index.html`)

**Hero section**
- Full-width blue gradient background (`#0d47a1` → `#1a237e`)
- Mandala corner decorations
- Centered logo (80×80px), school name, "ALUMNI ASSOCIATION" subtitle
- Tagline: *"Reconnect. Rejoice. Rejuvenate."*
- Location: Dwaraka Nagar · Visakhapatnam · Andhra Pradesh
- Body copy: welcoming paragraph about the alumni community
- Two CTAs: **Join the Association** (gold filled) + **Our Story** (gold outline → links to about.html)

**Stats bar**
- Parchment background, gold top/bottom borders
- 4 stats: Est. 1975 | 5000+ Alumni | 50+ Years | 20+ Countries

**Feature cards (3-column)**
- Parchment background, gold top border
- Community 🤝 | Scholarships 🎓 | Legacy 🏫
- Short description per card

---

### 2. About Us (`about.html`)

**Page hero** — blue gradient, "OUR STORY" label, page title

**School Overview section** (parchment background)
- 2-column: text paragraph (left) + 4 info cards (right)
- Info cards: Established 1975 | Affiliation: CBSE | Management: Bharteeya Vidya Kendram | Location: Dwaraka Nagar, Vizag
- Text: *"Sri T.V.S. Rao Sri Krishna Vidya Mandir in Dwaraka Nagar, Visakhapatnam, was established in 1975. Affiliated with the CBSE, the co-educational institution is managed by Bharteeya Vidya Kendram and focuses on holistic, value-based education."*

**Educational Philosophy section** (white background)
- Intro: *"The institution is rooted in holistic student development, combining traditional values with modern facilities."*
- 4 philosophy cards (2×2 grid, parchment, gold top border):
  1. **Pancha Padi Siksha** — holistic all-round development
  2. **Shishu Vatika** — child-centered activity-based learning
  3. **Value-Based Education (Sadacharam)** — moral curriculum LKG to 10th
  4. **Atal Tinkering Lab** — STEM innovation facility

---

### 3. Donation (`donate.html`)

**Page hero** — blue gradient, "GIVE BACK" label, "Support Your Alma Mater"

**Donation tiers section** (parchment background)
- Intro copy: *"Your contribution helps fund scholarships, school infrastructure, and community programmes."*
- 3 donation tier cards:
  - ₹500 — Books for a student
  - ₹2,500 — Scholarship support (highlighted in navy/gold)
  - ₹10,000 — Infrastructure fund
- **Donate Now** CTA (gold button) — links to a bank transfer info or Google Form (placeholder `#` until filled)

**Impact section** (white background)
- 3 impact statements with icons: Student sponsored | Classroom upgraded | Events funded

---

### 4. Contact Us (`contact.html`)

**Page hero** — blue gradient, "GET IN TOUCH" label

**Content section** (parchment, 2-column)
- Left: contact form (Name, Email, Message, Send button) — plain HTML form, `action` left as `#` (user to wire up Formspree or similar)
- Right: address block
  - SriKrishna Vidya Mandir
  - Dwaraka Nagar, Visakhapatnam, Andhra Pradesh 530016, India
  - Email: alumni@skvmalumni.org (placeholder)
  - Phone: +91 891 XXX XXXX (placeholder)

---

## Responsive Behaviour

- Desktop (≥768px): multi-column layouts as designed
- Mobile (<768px): all grids collapse to single column, hamburger nav via CSS checkbox toggle, stats bar wraps to 2×2

---

## Assets

- `assets/logo.png` — the circular SKVM Alumni badge provided by user (blue gradient circle with Krishna motif, gold border, "SRIKRISHNA VIDYA MANDIR ALUMNI" text)
- No external fonts (system fonts only: Georgia, Trebuchet MS)
- No JavaScript required (CSS-only mobile nav)

---

## Out of Scope

- Backend / form submission handling (contact form posts to `#` — user wires up Formspree/EmailJS separately)
- Online payment gateway (donate button links to placeholder)
- CMS or dynamic content
- Member login / alumni directory
