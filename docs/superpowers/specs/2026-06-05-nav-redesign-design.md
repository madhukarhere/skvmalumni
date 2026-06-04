# Nav Redesign — Grouped Tabs with Dropdowns

## Summary

Expand the site navigation from 4 flat links to a grouped nav with 2 dropdown menus, replacing Donate with Give Back, and adding 7 new pages (with "Coming Soon" placeholders where content is not ready).

## Final Nav Structure

```
[Logo] | Home | Community ▾ | Our School ▾ | Resources | Give Back | Contact
```

### Dropdowns
| Top-level | Children |
|---|---|
| Community | Alumni Network, Events, Mentorship |
| Our School | About Us, Impact, Gallery |

- **Resources** — standalone link (new page, coming soon)
- **Give Back** — gold CTA button (replaces Donate)
- **Contact** — standalone link (existing page)
- **Home** — standalone link (existing page)

## Pages

| Page | File | Status |
|---|---|---|
| Home | index.html | existing |
| About Us | about.html | existing |
| Contact | contact.html | existing |
| Give Back | give-back.html | new (replaces donate.html) |
| Alumni Network | alumni-network.html | new — coming soon |
| Events | events.html | new — coming soon |
| Mentorship | mentorship.html | new — coming soon |
| Impact | impact.html | new — coming soon |
| Gallery | gallery.html | new — coming soon |
| Resources | resources.html | new — coming soon |

## Coming Soon Pages

Each new placeholder page uses the same header/footer as existing pages and shows a centered "Coming Soon" message with the page title. No unique content needed at this stage.

## Nav Behavior

- **Desktop**: Dropdown menus appear on hover over Community / Our School labels
- **Mobile**: Hamburger menu expands; dropdowns expand inline as accordion sections
- **Active state**: Current page link (or its parent dropdown) is highlighted

## CSS Changes

- Add dropdown styles to `css/style.css`: `.navbar__dropdown`, `.navbar__dropdown-menu`, hover/focus states
- Rename `.navbar__cta` link target from `donate.html` to `give-back.html`
- Accordion expand/collapse behavior for mobile (CSS-only using checkbox trick consistent with existing hamburger pattern)

## File Changes

1. Update nav in `index.html`, `about.html`, `contact.html`, `donate.html` (rename to `give-back.html`)
2. Create 6 new coming-soon HTML pages
3. Update `css/style.css` with dropdown styles
4. Update footer links across all pages
