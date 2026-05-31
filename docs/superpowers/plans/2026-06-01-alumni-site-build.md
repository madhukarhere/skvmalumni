# SKVM Alumni Association Static Site — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 4-page static HTML/CSS alumni association website for SriKrishna Vidya Mandir, deployable to GitHub Pages.

**Architecture:** Pure multi-page HTML with a single shared `css/style.css`. No JavaScript (CSS-only mobile nav). No build step — open any `.html` file directly in a browser to verify.

**Tech Stack:** HTML5, CSS3 (Grid, Flexbox, custom properties), system fonts (Georgia, Trebuchet MS), GitHub Pages hosting.

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `assets/logo.png` | Create | SKVM Alumni circular badge logo |
| `css/style.css` | Create | All shared styles: reset, design tokens, navbar, footer, hero, cards, forms, responsive |
| `index.html` | Create | Home page: hero, stats bar, feature cards |
| `about.html` | Create | About Us: school overview, philosophy cards |
| `donate.html` | Create | Donation: tier cards, impact section |
| `contact.html` | Create | Contact: form + address block |

---

## Task 1: Project scaffold and logo asset

**Files:**
- Create: `assets/logo.png`
- Create: `css/style.css` (empty placeholder)
- Create: `.gitignore` (add `.superpowers/`)

- [ ] **Step 1: Create directories**

```bash
mkdir -p assets css
```

- [ ] **Step 2: Save the logo**

The user provided the circular SKVM Alumni badge image in the conversation. Save it to `assets/logo.png`. This is the blue-gradient circular badge with Krishna motif, gold border, and "SRIKRISHNA VIDYA MANDIR ALUMNI" text.

If the image file is not yet on disk, ask the user to drag-and-drop or save the logo image to `assets/logo.png` before proceeding.

- [ ] **Step 3: Create empty stylesheet**

Create `css/style.css` with a single comment so the file exists:

```css
/* SKVM Alumni Association — Shared Stylesheet */
```

- [ ] **Step 4: Add .gitignore entry**

If `.gitignore` doesn't exist, create it. Ensure `.superpowers/` is listed:

```
.superpowers/
```

- [ ] **Step 5: Commit scaffold**

```bash
git add assets/logo.png css/style.css .gitignore
git commit -m "chore: scaffold project structure and add logo asset"
```

---

## Task 2: Shared CSS stylesheet

**Files:**
- Modify: `css/style.css`

- [ ] **Step 1: Write the full stylesheet**

Replace `css/style.css` with the complete styles below:

```css
/* SKVM Alumni Association — Shared Stylesheet */

/* ── Reset & Base ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { font-size: 16px; scroll-behavior: smooth; }

body {
  font-family: Georgia, 'Times New Roman', serif;
  color: #3e2723;
  background: #fff;
  line-height: 1.7;
}

img { max-width: 100%; display: block; }
a { text-decoration: none; color: inherit; }
ul { list-style: none; }

/* ── Design Tokens ── */
:root {
  --blue-dark:  #1a237e;
  --blue-mid:   #0d47a1;
  --gold:       #c8a84b;
  --parchment:  #f5e6c8;
  --brown:      #3e2723;
  --brown-mid:  #5d4037;
  --white:      #ffffff;
  --nav-font:   'Trebuchet MS', Arial, sans-serif;
}

/* ── Navbar ── */
.navbar {
  background: var(--blue-dark);
  padding: 0 32px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.navbar__brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.navbar__logo {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 2px solid var(--gold);
  object-fit: cover;
}

.navbar__title {
  display: flex;
  flex-direction: column;
}

.navbar__title-main {
  font-family: var(--nav-font);
  font-weight: 800;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold);
}

.navbar__title-sub {
  font-family: var(--nav-font);
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.6);
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: 28px;
}

.navbar__links a {
  font-family: var(--nav-font);
  font-size: 12px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.85);
  transition: color 0.2s;
}

.navbar__links a:hover,
.navbar__links a.active {
  color: var(--gold);
}

.navbar__cta {
  background: var(--gold);
  color: var(--blue-dark) !important;
  padding: 7px 20px;
  border-radius: 4px;
  font-weight: 700 !important;
}

.navbar__cta:hover {
  background: #d4b05a;
  color: var(--blue-dark) !important;
}

/* CSS-only hamburger */
.navbar__toggle { display: none; }
.navbar__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}
.navbar__hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--gold);
  border-radius: 2px;
  transition: all 0.3s;
}

/* ── Page Hero ── */
.hero {
  background: linear-gradient(160deg, var(--blue-mid) 0%, var(--blue-dark) 100%);
  padding: 72px 32px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

/* Mandala corner decorations */
.hero::before,
.hero::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(200,168,75,0.15);
}
.hero::before {
  width: 300px; height: 300px;
  top: -80px; left: -80px;
}
.hero::after {
  width: 300px; height: 300px;
  bottom: -80px; right: -80px;
}

.hero__logo {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  border: 3px solid var(--gold);
  margin: 0 auto 20px;
  object-fit: cover;
}

.hero__eyebrow {
  font-family: var(--nav-font);
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 10px;
}

.hero__title {
  font-size: clamp(22px, 4vw, 34px);
  font-weight: 900;
  color: #fff;
  letter-spacing: 1px;
  margin-bottom: 6px;
}

.hero__subtitle {
  font-family: var(--nav-font);
  font-size: 15px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 20px;
}

.hero__body {
  color: rgba(255,255,255,0.82);
  font-size: 15px;
  max-width: 520px;
  margin: 0 auto 24px;
  line-height: 1.75;
}

.hero__tagline {
  font-style: italic;
  color: var(--gold);
  font-size: 16px;
  margin-bottom: 28px;
}

.hero__actions {
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
}

/* Page sub-hero (inner pages) */
.page-hero {
  background: linear-gradient(90deg, var(--blue-mid) 0%, var(--blue-dark) 100%);
  padding: 48px 32px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.page-hero::before {
  content: '';
  position: absolute;
  width: 200px; height: 200px;
  border-radius: 50%;
  border: 1px solid rgba(200,168,75,0.12);
  top: -60px; right: -60px;
}
.page-hero__eyebrow {
  font-family: var(--nav-font);
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 10px;
}
.page-hero__title {
  font-size: 28px;
  font-weight: 900;
  color: #fff;
}
.page-hero__subtitle {
  color: rgba(255,255,255,0.7);
  font-size: 14px;
  margin-top: 8px;
}

/* ── Buttons ── */
.btn {
  display: inline-block;
  font-family: var(--nav-font);
  font-size: 12px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 11px 28px;
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s, background 0.2s;
}
.btn--gold {
  background: var(--gold);
  color: var(--blue-dark);
  border: 2px solid var(--gold);
}
.btn--gold:hover { background: #d4b05a; border-color: #d4b05a; }
.btn--outline {
  background: transparent;
  color: var(--gold);
  border: 2px solid rgba(200,168,75,0.6);
}
.btn--outline:hover { border-color: var(--gold); }
.btn--navy {
  background: var(--blue-dark);
  color: var(--gold);
  border: 2px solid var(--blue-dark);
}

/* ── Gold Divider ── */
.gold-divider {
  border: none;
  border-top: 3px solid var(--gold);
  margin: 0;
}

/* ── Stats Bar ── */
.stats-bar {
  background: var(--parchment);
  border-top: 3px solid var(--gold);
  border-bottom: 3px solid var(--gold);
  padding: 24px 32px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  flex-wrap: wrap;
  gap: 16px;
}
.stats-bar__item {}
.stats-bar__number {
  font-size: 28px;
  font-weight: 800;
  color: var(--blue-dark);
  font-family: Georgia, serif;
}
.stats-bar__label {
  font-family: var(--nav-font);
  font-size: 10px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--brown-mid);
  margin-top: 4px;
}

/* ── Section wrapper ── */
.section {
  padding: 56px 32px;
}
.section--parchment { background: var(--parchment); }
.section--white { background: var(--white); }
.section--navy { background: var(--blue-dark); }

.section__eyebrow {
  font-family: var(--nav-font);
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 12px;
}
.section__title {
  font-size: 22px;
  font-weight: 800;
  color: var(--blue-dark);
  margin-bottom: 16px;
}
.section__intro {
  color: var(--brown);
  font-size: 15px;
  max-width: 640px;
  margin-bottom: 32px;
  line-height: 1.75;
}

/* ── Cards ── */
.cards-grid {
  display: grid;
  gap: 20px;
}
.cards-grid--3 { grid-template-columns: repeat(3, 1fr); }
.cards-grid--2 { grid-template-columns: repeat(2, 1fr); }
.cards-grid--4 { grid-template-columns: repeat(4, 1fr); }

.card {
  background: var(--parchment);
  border-top: 3px solid var(--gold);
  border-radius: 4px;
  padding: 24px;
}
.card--white { background: var(--white); }
.card--navy  { background: var(--blue-dark); }

.card__icon { font-size: 32px; margin-bottom: 12px; }
.card__title {
  font-size: 15px;
  font-weight: 700;
  color: var(--blue-dark);
  margin-bottom: 8px;
}
.card--navy .card__title { color: var(--gold); }
.card__body {
  font-size: 13px;
  line-height: 1.65;
  color: var(--brown-mid);
}
.card--navy .card__body { color: rgba(255,255,255,0.8); }

/* Info card (small stat card) */
.info-card {
  background: var(--white);
  border-left: 3px solid var(--gold);
  padding: 14px 16px;
  border-radius: 2px;
}
.info-card__label {
  font-family: var(--nav-font);
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 6px;
}
.info-card__value {
  font-size: 15px;
  font-weight: 700;
  color: var(--blue-dark);
}

/* ── Two-col layout ── */
.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}
.four-mini {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

/* ── Donation tiers ── */
.tier-card {
  border: 2px solid var(--gold);
  border-radius: 6px;
  padding: 28px 20px;
  text-align: center;
  background: var(--white);
}
.tier-card--featured {
  background: var(--blue-dark);
}
.tier-card__amount {
  font-size: 28px;
  font-weight: 800;
  color: var(--blue-dark);
  font-family: Georgia, serif;
}
.tier-card--featured .tier-card__amount { color: var(--gold); }
.tier-card__desc {
  font-size: 13px;
  color: var(--brown-mid);
  margin-top: 6px;
}
.tier-card--featured .tier-card__desc { color: rgba(255,255,255,0.75); }
.tier-card__badge {
  display: inline-block;
  background: var(--gold);
  color: var(--blue-dark);
  font-family: var(--nav-font);
  font-size: 9px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 20px;
  font-weight: 700;
  margin-bottom: 12px;
}

/* ── Contact Form ── */
.form { display: flex; flex-direction: column; gap: 14px; }
.form__group { display: flex; flex-direction: column; gap: 6px; }
.form__label {
  font-family: var(--nav-font);
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold);
}
.form__input,
.form__textarea {
  background: var(--white);
  border: 1.5px solid var(--gold);
  border-radius: 4px;
  padding: 10px 14px;
  font-family: Georgia, serif;
  font-size: 14px;
  color: var(--brown);
  outline: none;
  transition: border-color 0.2s;
}
.form__input:focus,
.form__textarea:focus { border-color: var(--blue-dark); }
.form__textarea { height: 120px; resize: vertical; }

/* ── Address block ── */
.address-block {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.address-block__item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  font-size: 14px;
  color: var(--brown);
  line-height: 1.6;
}
.address-block__icon {
  font-size: 18px;
  flex-shrink: 0;
  margin-top: 1px;
}

/* ── Footer ── */
.footer {
  background: var(--blue-dark);
  border-top: 3px solid var(--gold);
  padding: 32px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  flex-wrap: wrap;
}
.footer__brand-name {
  font-family: var(--nav-font);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 6px;
}
.footer__address {
  color: rgba(255,255,255,0.55);
  font-size: 12px;
  line-height: 1.8;
}
.footer__links {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.footer__links a {
  font-family: var(--nav-font);
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.6);
  transition: color 0.2s;
}
.footer__links a:hover { color: var(--gold); }
.footer__copy {
  color: rgba(255,255,255,0.35);
  font-size: 11px;
  margin-top: 8px;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .navbar { padding: 0 20px; }

  .navbar__links { display: none; flex-direction: column; gap: 0; }
  .navbar__hamburger { display: flex; }
  .navbar__toggle:checked ~ .navbar__links {
    display: flex;
    position: absolute;
    top: 64px; left: 0; right: 0;
    background: var(--blue-dark);
    padding: 16px 20px;
    gap: 0;
  }
  .navbar__toggle:checked ~ .navbar__links a {
    padding: 12px 0;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    display: block;
  }

  .hero { padding: 48px 20px; }
  .page-hero { padding: 36px 20px; }
  .section { padding: 40px 20px; }

  .cards-grid--3,
  .cards-grid--2,
  .cards-grid--4 { grid-template-columns: 1fr; }

  .two-col { grid-template-columns: 1fr; gap: 28px; }
  .four-mini { grid-template-columns: 1fr 1fr; }

  .stats-bar { gap: 24px; }
  .stats-bar__item { min-width: 100px; }

  .footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
}
```

- [ ] **Step 2: Verify file saved correctly**

```bash
wc -l css/style.css
```
Expected: roughly 300+ lines

- [ ] **Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: add shared CSS stylesheet with design system"
```

---

## Task 3: Home page (`index.html`)

**Files:**
- Create: `index.html`

- [ ] **Step 1: Create `index.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SKVM Alumni Association | SriKrishna Vidya Mandir</title>
  <meta name="description" content="Official alumni association of Sri T.V.S. Rao SriKrishna Vidya Mandir, Visakhapatnam. Reconnect. Rejoice. Rejuvenate.">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- Navbar -->
  <nav class="navbar">
    <div class="navbar__brand">
      <img src="assets/logo.png" alt="SKVM Alumni Logo" class="navbar__logo">
      <div class="navbar__title">
        <span class="navbar__title-main">Srikrishna Vidya Mandir</span>
        <span class="navbar__title-sub">Alumni Association</span>
      </div>
    </div>
    <input type="checkbox" id="nav-toggle" class="navbar__toggle" hidden>
    <label for="nav-toggle" class="navbar__hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </label>
    <div class="navbar__links">
      <a href="index.html" class="active">Home</a>
      <a href="about.html">About Us</a>
      <a href="contact.html">Contact</a>
      <a href="donate.html" class="navbar__cta">Donate</a>
    </div>
  </nav>

  <!-- Hero -->
  <section class="hero">
    <img src="assets/logo.png" alt="SKVM Alumni" class="hero__logo">
    <p class="hero__eyebrow">Dwaraka Nagar · Visakhapatnam · Andhra Pradesh</p>
    <h1 class="hero__title">Srikrishna Vidya Mandir</h1>
    <p class="hero__subtitle">Alumni Association</p>
    <p class="hero__body">
      A community of proud graduates united by shared memories, timeless values, and a deep love for our alma mater.
      Together, we honour the past, celebrate the present, and invest in the future of every student who walks these halls.
    </p>
    <p class="hero__tagline">"Reconnect. Rejoice. Rejuvenate."</p>
    <div class="hero__actions">
      <a href="about.html" class="btn btn--gold">Join the Association</a>
      <a href="about.html" class="btn btn--outline">Our Story</a>
    </div>
  </section>

  <!-- Stats Bar -->
  <div class="stats-bar">
    <div class="stats-bar__item">
      <div class="stats-bar__number">1975</div>
      <div class="stats-bar__label">Established</div>
    </div>
    <div class="stats-bar__item">
      <div class="stats-bar__number">5000+</div>
      <div class="stats-bar__label">Alumni Worldwide</div>
    </div>
    <div class="stats-bar__item">
      <div class="stats-bar__number">50+</div>
      <div class="stats-bar__label">Years of Excellence</div>
    </div>
    <div class="stats-bar__item">
      <div class="stats-bar__number">20+</div>
      <div class="stats-bar__label">Countries Represented</div>
    </div>
  </div>

  <!-- Feature Cards -->
  <section class="section section--white">
    <p class="section__eyebrow" style="text-align:center;">What We Do</p>
    <h2 class="section__title" style="text-align:center; max-width:none;">Building Bonds That Last a Lifetime</h2>
    <div class="cards-grid cards-grid--3" style="max-width:960px; margin:0 auto;">
      <div class="card" style="text-align:center;">
        <div class="card__icon">🤝</div>
        <h3 class="card__title">Community</h3>
        <p class="card__body">Connect with fellow alumni across India and around the world. Share milestones, opportunities, and the spirit of SKVM wherever life takes you.</p>
      </div>
      <div class="card" style="text-align:center;">
        <div class="card__icon">🎓</div>
        <h3 class="card__title">Scholarships</h3>
        <p class="card__body">Support deserving students through alumni-funded scholarships. Give back the gift of education that once shaped your own journey.</p>
      </div>
      <div class="card" style="text-align:center;">
        <div class="card__icon">🏫</div>
        <h3 class="card__title">Legacy</h3>
        <p class="card__body">Help preserve and enrich the legacy of our beloved school. From infrastructure to cultural events, every contribution strengthens our roots.</p>
      </div>
    </div>
  </section>

  <!-- Call to Action Banner -->
  <section class="section section--navy" style="text-align:center;">
    <p class="hero__eyebrow" style="margin-bottom:12px;">Make a Difference</p>
    <h2 style="color:#fff; font-size:24px; margin-bottom:16px;">Ready to Give Back?</h2>
    <p style="color:rgba(255,255,255,0.75); max-width:480px; margin:0 auto 28px; font-size:15px;">
      Your support — big or small — helps fund scholarships, upgrade classrooms, and keep the spirit of SKVM alive for the next generation.
    </p>
    <a href="donate.html" class="btn btn--gold">Support the School</a>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div>
      <div class="footer__brand-name">SKVM Alumni Association</div>
      <div class="footer__address">
        SriKrishna Vidya Mandir, Dwaraka Nagar<br>
        Visakhapatnam, Andhra Pradesh 530016, India
      </div>
    </div>
    <div>
      <div class="footer__links">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="donate.html">Donate</a>
        <a href="contact.html">Contact</a>
      </div>
      <div class="footer__copy">© 2025 SriKrishna Vidya Mandir Alumni Association. All rights reserved.</div>
    </div>
  </footer>

</body>
</html>
```

- [ ] **Step 2: Verify in browser**

Open `index.html` in a browser. Check:
- Navbar shows logo, school name, gold Donate button
- Hero shows logo image, title, tagline, two CTAs
- Stats bar shows 4 stats on parchment background
- Three feature cards visible
- Navy CTA banner at bottom
- Footer visible

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add home page"
```

---

## Task 4: About Us page (`about.html`)

**Files:**
- Create: `about.html`

- [ ] **Step 1: Create `about.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About Us | SKVM Alumni Association</title>
  <meta name="description" content="Learn about Sri T.V.S. Rao SriKrishna Vidya Mandir — its history, educational philosophy, and the alumni association's mission.">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- Navbar -->
  <nav class="navbar">
    <div class="navbar__brand">
      <img src="assets/logo.png" alt="SKVM Alumni Logo" class="navbar__logo">
      <div class="navbar__title">
        <span class="navbar__title-main">Srikrishna Vidya Mandir</span>
        <span class="navbar__title-sub">Alumni Association</span>
      </div>
    </div>
    <input type="checkbox" id="nav-toggle" class="navbar__toggle" hidden>
    <label for="nav-toggle" class="navbar__hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </label>
    <div class="navbar__links">
      <a href="index.html">Home</a>
      <a href="about.html" class="active">About Us</a>
      <a href="contact.html">Contact</a>
      <a href="donate.html" class="navbar__cta">Donate</a>
    </div>
  </nav>

  <!-- Page Hero -->
  <section class="page-hero">
    <p class="page-hero__eyebrow">Our Story</p>
    <h1 class="page-hero__title">About the Alumni Association</h1>
    <p class="page-hero__subtitle">Honouring a legacy of excellence since 1975</p>
  </section>

  <!-- School Overview -->
  <section class="section section--parchment">
    <p class="section__eyebrow">🏫 School Overview</p>
    <div class="two-col">
      <div>
        <h2 class="section__title">Sri T.V.S. Rao SriKrishna Vidya Mandir</h2>
        <p class="section__intro">
          Sri T.V.S. Rao Sri Krishna Vidya Mandir in Dwaraka Nagar, Visakhapatnam, was established in 1975.
          Affiliated with the CBSE, the co-educational institution is managed by <strong>Bharteeya Vidya Kendram</strong>
          and focuses on holistic, value-based education.
        </p>
        <p style="color: var(--brown); font-size:14px; line-height:1.75;">
          For over five decades, SKVM has been a beacon of quality education in Visakhapatnam, nurturing thousands
          of students who have gone on to excel in every field — from medicine and engineering to arts, business,
          and public service — across India and the world.
        </p>
      </div>
      <div class="four-mini">
        <div class="info-card">
          <div class="info-card__label">Established</div>
          <div class="info-card__value">1975</div>
        </div>
        <div class="info-card">
          <div class="info-card__label">Affiliation</div>
          <div class="info-card__value">CBSE</div>
        </div>
        <div class="info-card">
          <div class="info-card__label">Management</div>
          <div class="info-card__value">Bharteeya Vidya Kendram</div>
        </div>
        <div class="info-card">
          <div class="info-card__label">Location</div>
          <div class="info-card__value">Dwaraka Nagar, Vizag</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Educational Philosophy -->
  <section class="section section--white">
    <p class="section__eyebrow">✨ Educational Philosophy &amp; Heritage</p>
    <h2 class="section__title">Rooted in Values. Built for the Future.</h2>
    <p class="section__intro">
      The institution is rooted in holistic student development, combining traditional values with modern facilities.
      These four pillars define the SKVM educational experience.
    </p>
    <div class="cards-grid cards-grid--2">
      <div class="card">
        <h3 class="card__title">Pancha Padi Siksha</h3>
        <p class="card__body">
          A five-step educational framework that focuses on the holistic and all-round development of the child —
          nurturing mind, body, character, creativity, and spirit in equal measure.
        </p>
      </div>
      <div class="card">
        <h3 class="card__title">Shishu Vatika</h3>
        <p class="card__body">
          A child-centered, activity-based learning system that makes early education engaging, meaningful, and joyful.
          Learning happens through exploration, not rote memorisation.
        </p>
      </div>
      <div class="card">
        <h3 class="card__title">Value-Based Education (Sadacharam)</h3>
        <p class="card__body">
          A moral and traditional learning curriculum seamlessly integrated from LKG to 10th grade, building
          strong character, empathy, and ethical grounding alongside academic achievement.
        </p>
      </div>
      <div class="card">
        <h3 class="card__title">Atal Tinkering Lab</h3>
        <p class="card__body">
          The campus is equipped with an ATAL Lab to promote science, technology, engineering, and mathematics.
          Students become tomorrow's innovators through hands-on problem-solving and design thinking.
        </p>
      </div>
    </div>
  </section>

  <!-- Alumni Mission -->
  <section class="section section--navy" style="text-align:center;">
    <p class="hero__eyebrow" style="margin-bottom:12px;">Our Mission</p>
    <h2 style="color:#fff; font-size:24px; max-width:640px; margin:0 auto 16px;">
      Fostering Lifelong Bonds Among Graduates
    </h2>
    <p style="color:rgba(255,255,255,0.75); max-width:520px; margin:0 auto 28px; font-size:15px; line-height:1.75;">
      To connect alumni across generations, support the school's growth, and create opportunities for graduates
      to give back to the community that shaped them.
    </p>
    <a href="donate.html" class="btn btn--gold">Support the School</a>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div>
      <div class="footer__brand-name">SKVM Alumni Association</div>
      <div class="footer__address">
        SriKrishna Vidya Mandir, Dwaraka Nagar<br>
        Visakhapatnam, Andhra Pradesh 530016, India
      </div>
    </div>
    <div>
      <div class="footer__links">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="donate.html">Donate</a>
        <a href="contact.html">Contact</a>
      </div>
      <div class="footer__copy">© 2025 SriKrishna Vidya Mandir Alumni Association. All rights reserved.</div>
    </div>
  </footer>

</body>
</html>
```

- [ ] **Step 2: Verify in browser**

Open `about.html`. Check:
- "About Us" nav link is highlighted gold
- School overview shows 2-col layout with 4 info cards
- 4 philosophy cards in 2×2 grid on white background
- Navy mission banner at bottom

- [ ] **Step 3: Commit**

```bash
git add about.html
git commit -m "feat: add about us page"
```

---

## Task 5: Donation page (`donate.html`)

**Files:**
- Create: `donate.html`

- [ ] **Step 1: Create `donate.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Donate | SKVM Alumni Association</title>
  <meta name="description" content="Support SriKrishna Vidya Mandir through the alumni association. Fund scholarships, infrastructure, and student welfare.">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- Navbar -->
  <nav class="navbar">
    <div class="navbar__brand">
      <img src="assets/logo.png" alt="SKVM Alumni Logo" class="navbar__logo">
      <div class="navbar__title">
        <span class="navbar__title-main">Srikrishna Vidya Mandir</span>
        <span class="navbar__title-sub">Alumni Association</span>
      </div>
    </div>
    <input type="checkbox" id="nav-toggle" class="navbar__toggle" hidden>
    <label for="nav-toggle" class="navbar__hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </label>
    <div class="navbar__links">
      <a href="index.html">Home</a>
      <a href="about.html">About Us</a>
      <a href="contact.html">Contact</a>
      <a href="donate.html" class="navbar__cta active">Donate</a>
    </div>
  </nav>

  <!-- Page Hero -->
  <section class="page-hero">
    <p class="page-hero__eyebrow">Give Back</p>
    <h1 class="page-hero__title">Support Your Alma Mater</h1>
    <p class="page-hero__subtitle">Every contribution helps shape the next generation of SKVM graduates</p>
  </section>

  <!-- Donation Tiers -->
  <section class="section section--parchment">
    <p class="section__eyebrow" style="text-align:center;">Choose Your Impact</p>
    <h2 class="section__title" style="text-align:center; max-width:none;">Make a Meaningful Contribution</h2>
    <p style="color:var(--brown); text-align:center; font-size:15px; max-width:560px; margin:0 auto 36px; line-height:1.75;">
      Your contribution helps fund scholarships, school infrastructure, and community programmes
      that directly benefit students and staff at SKVM.
    </p>
    <div class="cards-grid cards-grid--3" style="max-width:800px; margin:0 auto 36px;">
      <div class="tier-card">
        <div class="tier-card__amount">₹500</div>
        <div class="tier-card__desc">Provides books and stationery for one student for an entire academic year.</div>
      </div>
      <div class="tier-card tier-card--featured">
        <div class="tier-card__badge">Most Popular</div>
        <div class="tier-card__amount">₹2,500</div>
        <div class="tier-card__desc">Contributes to a student's scholarship fund, easing the financial burden on deserving families.</div>
      </div>
      <div class="tier-card">
        <div class="tier-card__amount">₹10,000</div>
        <div class="tier-card__desc">Goes directly to the school's infrastructure fund — classrooms, labs, and learning facilities.</div>
      </div>
    </div>
    <div style="text-align:center;">
      <a href="#" class="btn btn--gold" style="font-size:14px; padding:14px 40px;">Donate Now</a>
      <p style="color:var(--brown-mid); font-size:12px; margin-top:12px;">
        Bank transfer details and UPI information will be shared upon request.<br>
        Contact us at <a href="contact.html" style="color:var(--blue-dark); text-decoration:underline;">alumni@skvmalumni.org</a>
      </p>
    </div>
  </section>

  <!-- Impact Section -->
  <section class="section section--white">
    <p class="section__eyebrow" style="text-align:center;">Your Impact</p>
    <h2 class="section__title" style="text-align:center; max-width:none;">Where Your Donation Goes</h2>
    <div class="cards-grid cards-grid--3" style="max-width:960px; margin:0 auto;">
      <div class="card" style="text-align:center;">
        <div class="card__icon">📚</div>
        <h3 class="card__title">Student Scholarships</h3>
        <p class="card__body">Ensuring that financial hardship never stands between a bright student and a quality education at SKVM.</p>
      </div>
      <div class="card" style="text-align:center;">
        <div class="card__icon">🏗️</div>
        <h3 class="card__title">School Infrastructure</h3>
        <p class="card__body">Upgrading classrooms, libraries, science labs, and sports facilities to provide the best learning environment.</p>
      </div>
      <div class="card" style="text-align:center;">
        <div class="card__icon">🎉</div>
        <h3 class="card__title">Events & Activities</h3>
        <p class="card__body">Funding cultural events, alumni meets, teacher felicitations, and extracurricular programmes that make school life memorable.</p>
      </div>
    </div>
  </section>

  <!-- Transparency Note -->
  <section class="section section--parchment" style="text-align:center; padding:40px 32px;">
    <p class="section__eyebrow">Transparency</p>
    <p style="color:var(--brown); font-size:15px; max-width:560px; margin:0 auto; line-height:1.75;">
      All donations are managed by the SKVM Alumni Association committee and accounted for in our annual report,
      shared with all members. We are committed to full transparency in how funds are utilised.
    </p>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div>
      <div class="footer__brand-name">SKVM Alumni Association</div>
      <div class="footer__address">
        SriKrishna Vidya Mandir, Dwaraka Nagar<br>
        Visakhapatnam, Andhra Pradesh 530016, India
      </div>
    </div>
    <div>
      <div class="footer__links">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="donate.html">Donate</a>
        <a href="contact.html">Contact</a>
      </div>
      <div class="footer__copy">© 2025 SriKrishna Vidya Mandir Alumni Association. All rights reserved.</div>
    </div>
  </footer>

</body>
</html>
```

- [ ] **Step 2: Verify in browser**

Open `donate.html`. Check:
- Donate nav CTA is highlighted
- 3 tier cards: plain / featured navy / plain
- "Most Popular" badge on middle card
- Donate Now button present
- 3 impact cards on white background

- [ ] **Step 3: Commit**

```bash
git add donate.html
git commit -m "feat: add donation page"
```

---

## Task 6: Contact Us page (`contact.html`)

**Files:**
- Create: `contact.html`

- [ ] **Step 1: Create `contact.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Us | SKVM Alumni Association</title>
  <meta name="description" content="Get in touch with the SriKrishna Vidya Mandir Alumni Association. We'd love to hear from you.">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- Navbar -->
  <nav class="navbar">
    <div class="navbar__brand">
      <img src="assets/logo.png" alt="SKVM Alumni Logo" class="navbar__logo">
      <div class="navbar__title">
        <span class="navbar__title-main">Srikrishna Vidya Mandir</span>
        <span class="navbar__title-sub">Alumni Association</span>
      </div>
    </div>
    <input type="checkbox" id="nav-toggle" class="navbar__toggle" hidden>
    <label for="nav-toggle" class="navbar__hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </label>
    <div class="navbar__links">
      <a href="index.html">Home</a>
      <a href="about.html">About Us</a>
      <a href="contact.html" class="active">Contact</a>
      <a href="donate.html" class="navbar__cta">Donate</a>
    </div>
  </nav>

  <!-- Page Hero -->
  <section class="page-hero">
    <p class="page-hero__eyebrow">Get in Touch</p>
    <h1 class="page-hero__title">Contact Us</h1>
    <p class="page-hero__subtitle">We'd love to hear from alumni, well-wishers, and prospective supporters</p>
  </section>

  <!-- Contact Form + Address -->
  <section class="section section--parchment">
    <div class="two-col">

      <!-- Form -->
      <div>
        <p class="section__eyebrow">Send a Message</p>
        <h2 class="section__title">Reach Out</h2>
        <form class="form" action="#" method="POST">
          <div class="form__group">
            <label class="form__label" for="name">Your Name</label>
            <input class="form__input" type="text" id="name" name="name" placeholder="e.g. Ravi Kumar" required>
          </div>
          <div class="form__group">
            <label class="form__label" for="email">Email Address</label>
            <input class="form__input" type="email" id="email" name="email" placeholder="you@example.com" required>
          </div>
          <div class="form__group">
            <label class="form__label" for="batch">Batch Year (optional)</label>
            <input class="form__input" type="text" id="batch" name="batch" placeholder="e.g. 1998">
          </div>
          <div class="form__group">
            <label class="form__label" for="message">Your Message</label>
            <textarea class="form__textarea" id="message" name="message" placeholder="Tell us about yourself or your enquiry..." required></textarea>
          </div>
          <button type="submit" class="btn btn--navy" style="align-self:flex-start;">Send Message</button>
        </form>
      </div>

      <!-- Address -->
      <div>
        <p class="section__eyebrow">Find Us</p>
        <h2 class="section__title">School Address</h2>
        <div class="address-block" style="margin-bottom:32px;">
          <div class="address-block__item">
            <span class="address-block__icon">🏫</span>
            <span>Sri T.V.S. Rao SriKrishna Vidya Mandir</span>
          </div>
          <div class="address-block__item">
            <span class="address-block__icon">📍</span>
            <span>Dwaraka Nagar, Visakhapatnam<br>Andhra Pradesh 530016, India</span>
          </div>
          <div class="address-block__item">
            <span class="address-block__icon">📧</span>
            <a href="mailto:alumni@skvmalumni.org" style="color:var(--blue-dark);">alumni@skvmalumni.org</a>
          </div>
          <div class="address-block__item">
            <span class="address-block__icon">📞</span>
            <span>+91 891 XXX XXXX</span>
          </div>
        </div>

        <!-- Map placeholder -->
        <div style="background:var(--white); border:2px solid var(--gold); border-radius:4px; height:180px; display:flex; align-items:center; justify-content:center; flex-direction:column; gap:8px;">
          <span style="font-size:32px;">🗺️</span>
          <span style="font-family:var(--nav-font); font-size:10px; letter-spacing:2px; text-transform:uppercase; color:var(--brown-mid);">Map coming soon</span>
        </div>
      </div>

    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div>
      <div class="footer__brand-name">SKVM Alumni Association</div>
      <div class="footer__address">
        SriKrishna Vidya Mandir, Dwaraka Nagar<br>
        Visakhapatnam, Andhra Pradesh 530016, India
      </div>
    </div>
    <div>
      <div class="footer__links">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="donate.html">Donate</a>
        <a href="contact.html">Contact</a>
      </div>
      <div class="footer__copy">© 2025 SriKrishna Vidya Mandir Alumni Association. All rights reserved.</div>
    </div>
  </footer>

</body>
</html>
```

- [ ] **Step 2: Verify in browser**

Open `contact.html`. Check:
- "Contact" nav link is highlighted gold
- 2-column layout: form on left, address on right
- Form has Name, Email, Batch Year, Message fields + Send button
- Address block shows school info with emoji icons
- Map placeholder box visible

- [ ] **Step 3: Commit**

```bash
git add contact.html
git commit -m "feat: add contact us page"
```

---

## Task 7: Final polish and cross-page check

**Files:**
- Review: all 4 HTML pages + `css/style.css`

- [ ] **Step 1: Check all nav links work**

Open each page and click every nav link. Verify:
- All 4 pages load correctly
- The active page link is gold on each page
- The Donate CTA button works from every page
- Footer links work from every page

- [ ] **Step 2: Check responsive layout on mobile**

In Chrome DevTools (F12 → toggle device toolbar), set width to 375px. Verify on each page:
- Hamburger icon appears (3 gold lines)
- Clicking hamburger shows/hides the nav links
- Hero text is readable, not clipped
- Stats bar wraps to 2×2
- Cards stack to single column
- Two-column layouts (About, Contact) stack vertically
- Donate tier cards stack to single column

- [ ] **Step 3: Logo fallback check**

If `assets/logo.png` is missing, the navbar and hero will show broken image icons. Verify the logo file exists:

```bash
ls -lh assets/logo.png
```

If missing, the user must save the provided logo image to `assets/logo.png`.

- [ ] **Step 4: Add `.gitignore` if missing and verify CNAME untouched**

```bash
cat CNAME
```

Expected: the existing domain (e.g., `skvmalumni.in` or similar). Do not modify it.

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "feat: complete SKVM alumni association static site

4-page static site: Home, About Us, Donation, Contact Us.
Theme: deep blue + gold + parchment. Responsive CSS-only nav."
```

- [ ] **Step 6: Verify GitHub Pages deployment**

If the repo is configured for GitHub Pages (Settings → Pages → source: main branch / root), push and visit the live URL:

```bash
git push origin main
```

Then open `https://<your-github-pages-domain>/` in a browser and do a final smoke-check of all 4 pages.
