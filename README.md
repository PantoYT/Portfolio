# Portfolio — Wojciech Hałasa

Personal portfolio and landing page for freelance web development services targeting local businesses in Tomaszów Lubelski and surrounding area.

**Live:** https://me.panto-dev.com

## Purpose

This site serves two audiences:

1. **Local business owners** — explains why they need a website, what they get, and how to contact me
2. **Developers / recruiters** — shows actual projects and tech stack

## Sections

| Section | Purpose |
|---|---|
| Hero | Value proposition + primary CTA |
| Why you need a website | Psychological purchase triggers (80% stat, credibility, 24h availability) |
| Offer | Pricing table — one-time fees, no subscriptions |
| Projects | Relax Skarpety (featured) + TubeYou, Fiszki, bots |
| Why not WordPress | Honest comparison, handles the main objection |
| How it works | 4-step process, "pay after approval" closing argument |
| Tech stack | Languages, tools, frameworks |
| Contact | Centered form with file attachment support (EmailJS) |

## Tech

- Pure HTML / CSS / JavaScript — no frameworks, no build step
- Fonts: **DM Mono + DM Sans** (Google Fonts)
- Email: **EmailJS** (`service_m78ovho` / `template_gflu8pw`)
- Icons: inline SVG (no external icon libraries)
- Dark mode: CSS variables + `data-theme` attribute, persisted via `localStorage`

## File Structure

```
portfolio/
└── index.html      ← everything in one file
```

No local assets required. All fonts are loaded from Google Fonts CDN.

## Deployment

Works on any static host. Recommended: **GitHub Pages** (free).

1. Push `index.html` to a repo
2. Enable GitHub Pages in repo settings → source: `main` branch, `/ (root)`
3. Done

## Notes

- EmailJS keys are public (client-side only) — this is expected behavior for EmailJS
- File attachments in the contact form are handled by EmailJS templates
- Dark mode is default; light mode available via toggle button in nav
