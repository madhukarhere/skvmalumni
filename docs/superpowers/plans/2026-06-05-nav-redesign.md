# Nav Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add grouped dropdown navigation with Community and Our School submenus, rename Donate → Give Back, and create 6 coming-soon placeholder pages.

**Architecture:** All pages share a single nav snippet updated consistently. CSS-only dropdowns on desktop (hover) and accordion on mobile (checkbox trick, matching existing hamburger pattern). No JavaScript required.

**Tech Stack:** Vanilla HTML5, CSS3 (custom properties already in style.css)

---

## File Map

| File | Action |
|---|---|
| `css/style.css` | Modify — add dropdown + accordion CSS |
| `index.html` | Modify — new nav, update footer links |
| `about.html` | Modify — new nav, update footer links |
| `contact.html` | Modify — new nav, update footer links |
| `donate.html` | Rename → `give-back.html`, update title/nav/footer |
| `alumni-network.html` | Create — coming soon |
| `events.html` | Create — coming soon |
| `mentorship.html` | Create — coming soon |
| `impact.html` | Create — coming soon |
| `gallery.html` | Create — coming soon |
| `resources.html` | Create — coming soon |

---

## Shared Nav Snippet (reference for all tasks)

Every page uses this nav. Copy it exactly, changing only the `active` class on the correct link.

```html
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

    <!-- Community dropdown -->
    <div class="navbar__dropdown">
      <input type="checkbox" id="dd-community" class="navbar__dd-toggle" hidden>
      <label for="dd-community" class="navbar__dd-label">Community <span class="navbar__caret">▾</span></label>
      <div class="navbar__dd-menu">
        <a href="alumni-network.html">Alumni Network</a>
        <a href="events.html">Events</a>
        <a href="mentorship.html">Mentorship</a>
      </div>
    </div>

    <!-- Our School dropdown -->
    <div class="navbar__dropdown">
      <input type="checkbox" id="dd-school" class="navbar__dd-toggle" hidden>
      <label for="dd-school" class="navbar__dd-label">Our School <span class="navbar__caret">▾</span></label>
      <div class="navbar__dd-menu">
        <a href="about.html">About Us</a>
        <a href="impact.html">Impact</a>
        <a href="gallery.html">Gallery</a>
      </div>
    </div>

    <a href="resources.html">Resources</a>
    <a href="contact.html">Contact</a>
    <a href="give-back.html" class="navbar__cta">Give Back</a>
  </div>
</nav>
```

**Active state rules:**
- `index.html` → add `class="active"` to the Home `<a>`
- `about.html`, `impact.html`, `gallery.html` → add `class="navbar__dd-label--active"` to the Our School `<label>`
- `alumni-network.html`, `events.html`, `mentorship.html` → add `class="navbar__dd-label--active"` to the Community `<label>`
- `resources.html` → add `class="active"` to the Resources `<a>`
- `contact.html` → add `class="active"` to the Contact `<a>`
- `give-back.html` → add `class="active"` to the Give Back `<a>` (keep `navbar__cta` class too)

---

## Shared Footer Snippet (reference for all tasks)

```html
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
      <a href="alumni-network.html">Alumni Network</a>
      <a href="events.html">Events</a>
      <a href="mentorship.html">Mentorship</a>
      <a href="impact.html">Impact</a>
      <a href="gallery.html">Gallery</a>
      <a href="resources.html">Resources</a>
      <a href="give-back.html">Give Back</a>
      <a href="contact.html">Contact</a>
    </div>
    <div class="footer__copy">© 2025 SriKrishna Vidya Mandir Alumni Association. All rights reserved.</div>
  </div>
</footer>
```

---

## Coming Soon Page Template (reference for Tasks 5–10)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PAGE_TITLE | SKVM Alumni Association</title>
  <meta name="description" content="PAGE_DESC">
  <link rel="stylesheet" href="assets/logo.png" rel="icon" type="image/png">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  NAV_SNIPPET

  <!-- Page Hero -->
  <section class="page-hero">
    <p class="page-hero__eyebrow">SKVM Alumni Association</p>
    <h1 class="page-hero__title">PAGE_TITLE</h1>
    <p class="page-hero__subtitle">PAGE_SUBTITLE</p>
  </section>

  <!-- Coming Soon -->
  <section class="section section--white" style="text-align:center; padding:80px 32px;">
    <div style="font-size:48px; margin-bottom:24px;">🚧</div>
    <h2 style="color:var(--blue-dark); margin-bottom:16px;">Coming Soon</h2>
    <p style="color:var(--text-muted); max-width:480px; margin:0 auto 32px; font-size:16px;">
      We're working on something special here. Check back soon — exciting things are coming for the SKVM alumni community.
    </p>
    <a href="index.html" class="btn btn--gold">Back to Home</a>
  </section>

  FOOTER_SNIPPET

</body>
</html>
```

---

## Task 1: Add Dropdown CSS to style.css

**Files:**
- Modify: `css/style.css` — after the `.navbar__cta:hover` block (around line 113)

- [ ] **Step 1: Open `css/style.css` and find the line `.navbar__cta:hover {`**

It ends around line 113. Insert the following block immediately after its closing `}`.

- [ ] **Step 2: Insert dropdown desktop CSS**

```css
/* ── Navbar Dropdowns (desktop) ── */
.navbar__dropdown {
  position: relative;
  display: flex;
  align-items: center;
}

.navbar__dd-toggle { display: none; }

.navbar__dd-label {
  font-family: var(--nav-font);
  font-size: 12px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.85);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.2s;
  user-select: none;
}

.navbar__dd-label:hover,
.navbar__dd-label--active {
  color: var(--gold);
}

.navbar__caret {
  font-size: 10px;
  transition: transform 0.2s;
}

.navbar__dd-menu {
  display: none;
  position: absolute;
  top: calc(100% + 16px);
  left: 50%;
  transform: translateX(-50%);
  background: var(--blue-dark);
  border: 1px solid rgba(200,168,75,0.25);
  border-radius: 6px;
  min-width: 160px;
  padding: 8px 0;
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  z-index: 200;
}

.navbar__dd-menu a {
  display: block;
  padding: 10px 20px;
  font-family: var(--nav-font);
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.85) !important;
  transition: background 0.15s, color 0.15s;
  white-space: nowrap;
}

.navbar__dd-menu a:hover {
  background: rgba(200,168,75,0.12);
  color: var(--gold) !important;
}

/* Show dropdown on hover (desktop) */
.navbar__dropdown:hover .navbar__dd-menu {
  display: block;
}

.navbar__dropdown:hover .navbar__caret {
  transform: rotate(180deg);
}
```

- [ ] **Step 3: Add mobile accordion CSS inside the existing `@media (max-width: 768px)` block**

Find the `@media (max-width: 768px)` block (around line 541). Add the following inside it, after the existing `.navbar__toggle:checked ~ .navbar__links a` rule:

```css
  /* Mobile dropdowns as accordion */
  .navbar__dropdown {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .navbar__dd-label {
    padding: 12px 0;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    width: 100%;
    justify-content: space-between;
  }

  .navbar__dd-menu {
    position: static;
    transform: none;
    background: transparent;
    border: none;
    box-shadow: none;
    padding: 0 0 0 16px;
    min-width: unset;
    width: 100%;
  }

  .navbar__dd-toggle:checked ~ .navbar__dd-menu {
    display: block;
  }

  .navbar__dd-toggle:checked ~ .navbar__dd-label .navbar__caret {
    transform: rotate(180deg);
  }

  .navbar__dd-menu a {
    padding: 10px 0;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    font-size: 11px;
  }

  .navbar__dropdown:hover .navbar__dd-menu {
    display: none;
  }

  .navbar__dd-toggle:checked ~ .navbar__dd-menu {
    display: block;
  }
```

- [ ] **Step 4: Commit**

```bash
git add css/style.css
git commit -m "feat: add dropdown and mobile accordion CSS for nav"
```

---

## Task 2: Update index.html

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Replace the entire `<nav class="navbar">` block**

Replace from `<nav class="navbar">` to `</nav>` with the Shared Nav Snippet above.
On the Home `<a>` tag, add `class="active"`:
```html
<a href="index.html" class="active">Home</a>
```

- [ ] **Step 2: Update the CTA banner link**

Find:
```html
<a href="donate.html" class="btn btn--gold">Support the School</a>
```
Replace with:
```html
<a href="give-back.html" class="btn btn--gold">Support the School</a>
```

- [ ] **Step 3: Replace the entire `<footer class="footer">` block**

Replace with the Shared Footer Snippet above.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: update index.html with new grouped nav and footer"
```

---

## Task 3: Update about.html

**Files:**
- Modify: `about.html`

- [ ] **Step 1: Replace the entire `<nav class="navbar">` block**

Replace with the Shared Nav Snippet. Add `class="navbar__dd-label--active"` to the Our School label:
```html
<label for="dd-school" class="navbar__dd-label navbar__dd-label--active">Our School <span class="navbar__caret">▾</span></label>
```

- [ ] **Step 2: Replace the entire `<footer class="footer">` block**

Replace with the Shared Footer Snippet.

- [ ] **Step 3: Commit**

```bash
git add about.html
git commit -m "feat: update about.html with new grouped nav and footer"
```

---

## Task 4: Rename donate.html → give-back.html

**Files:**
- Rename: `donate.html` → `give-back.html`

- [ ] **Step 1: Copy the file**

```bash
cp give-back.html give-back.html 2>/dev/null; cp donate.html give-back.html
```

Actually run:
```bash
cp /Users/madhukarmudunuru/work/RND/skvmalumni/donate.html /Users/madhukarmudunuru/work/RND/skvmalumni/give-back.html
```

- [ ] **Step 2: Update `<title>` in give-back.html**

Find:
```html
<title>Donate | SKVM Alumni Association</title>
```
Replace with:
```html
<title>Give Back | SKVM Alumni Association</title>
```

- [ ] **Step 3: Replace the `<nav>` block in give-back.html**

Replace with Shared Nav Snippet. The Give Back CTA link gets the active class too:
```html
<a href="give-back.html" class="navbar__cta active">Give Back</a>
```

- [ ] **Step 4: Replace the `<footer>` block in give-back.html**

Replace with Shared Footer Snippet.

- [ ] **Step 5: Update contact.html nav and footer**

Open `contact.html`. Replace `<nav>` with Shared Nav Snippet, adding `class="active"` to Contact:
```html
<a href="contact.html" class="active">Contact</a>
```
Replace `<footer>` with Shared Footer Snippet.

- [ ] **Step 6: Stage, delete old donate.html, commit**

```bash
git add give-back.html contact.html
git rm donate.html
git commit -m "feat: rename donate to give-back, update contact nav/footer"
```

---

## Task 5: Create alumni-network.html (Coming Soon)

**Files:**
- Create: `alumni-network.html`

- [ ] **Step 1: Create the file using the Coming Soon Template with these values**

- `PAGE_TITLE` → `Alumni Network`
- `PAGE_DESC` → `Connect with SKVM alumni worldwide. Coming soon.`
- `PAGE_SUBTITLE` → `Reconnect with fellow graduates from around the world`
- `NAV_SNIPPET` → Shared Nav Snippet with Community label active:
  ```html
  <label for="dd-community" class="navbar__dd-label navbar__dd-label--active">Community <span class="navbar__caret">▾</span></label>
  ```
- `FOOTER_SNIPPET` → Shared Footer Snippet

- [ ] **Step 2: Commit**

```bash
git add alumni-network.html
git commit -m "feat: add alumni-network.html coming soon page"
```

---

## Task 6: Create events.html (Coming Soon)

**Files:**
- Create: `events.html`

- [ ] **Step 1: Create the file using the Coming Soon Template with these values**

- `PAGE_TITLE` → `Events`
- `PAGE_DESC` → `Upcoming SKVM alumni events and reunions. Coming soon.`
- `PAGE_SUBTITLE` → `Reunions, meetups, and celebrations — stay tuned`
- `NAV_SNIPPET` → Shared Nav Snippet with Community label active (same as Task 5)
- `FOOTER_SNIPPET` → Shared Footer Snippet

- [ ] **Step 2: Commit**

```bash
git add events.html
git commit -m "feat: add events.html coming soon page"
```

---

## Task 7: Create mentorship.html (Coming Soon)

**Files:**
- Create: `mentorship.html`

- [ ] **Step 1: Create the file using the Coming Soon Template with these values**

- `PAGE_TITLE` → `Mentorship`
- `PAGE_DESC` → `SKVM alumni mentorship program. Coming soon.`
- `PAGE_SUBTITLE` → `Experienced alumni guiding the next generation of students`
- `NAV_SNIPPET` → Shared Nav Snippet with Community label active (same as Task 5)
- `FOOTER_SNIPPET` → Shared Footer Snippet

- [ ] **Step 2: Commit**

```bash
git add mentorship.html
git commit -m "feat: add mentorship.html coming soon page"
```

---

## Task 8: Create impact.html (Coming Soon)

**Files:**
- Create: `impact.html`

- [ ] **Step 1: Create the file using the Coming Soon Template with these values**

- `PAGE_TITLE` → `Impact`
- `PAGE_DESC` → `The impact of SKVM alumni contributions on students and the school.`
- `PAGE_SUBTITLE` → `Stories and data showing how alumni give back`
- `NAV_SNIPPET` → Shared Nav Snippet with Our School label active:
  ```html
  <label for="dd-school" class="navbar__dd-label navbar__dd-label--active">Our School <span class="navbar__caret">▾</span></label>
  ```
- `FOOTER_SNIPPET` → Shared Footer Snippet

- [ ] **Step 2: Commit**

```bash
git add impact.html
git commit -m "feat: add impact.html coming soon page"
```

---

## Task 9: Create gallery.html (Coming Soon)

**Files:**
- Create: `gallery.html`

- [ ] **Step 1: Create the file using the Coming Soon Template with these values**

- `PAGE_TITLE` → `Gallery`
- `PAGE_DESC` → `Photos and memories from SKVM alumni events and school history.`
- `PAGE_SUBTITLE` → `Cherished memories from our school and alumni community`
- `NAV_SNIPPET` → Shared Nav Snippet with Our School label active (same as Task 8)
- `FOOTER_SNIPPET` → Shared Footer Snippet

- [ ] **Step 2: Commit**

```bash
git add gallery.html
git commit -m "feat: add gallery.html coming soon page"
```

---

## Task 10: Create resources.html (Coming Soon)

**Files:**
- Create: `resources.html`

- [ ] **Step 1: Create the file using the Coming Soon Template with these values**

- `PAGE_TITLE` → `Resources`
- `PAGE_DESC` → `Useful resources for SKVM alumni. Coming soon.`
- `PAGE_SUBTITLE` → `Tools, links, and materials for our alumni community`
- `NAV_SNIPPET` → Shared Nav Snippet with Resources `<a>` active:
  ```html
  <a href="resources.html" class="active">Resources</a>
  ```
- `FOOTER_SNIPPET` → Shared Footer Snippet

- [ ] **Step 2: Commit**

```bash
git add resources.html
git commit -m "feat: add resources.html coming soon page"
```
