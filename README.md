# Latin Canada

Cinematic production house — Next.js (App Router) + Tailwind CSS v4.

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  app/
    layout.js        Root layout — fonts (Playfair Display + Inter), metadata, film-grain overlay
    page.js           Assembles all homepage sections
    globals.css       Theme colors, fonts, film-grain CSS
  components/
    Navbar.js         Sticky nav + EN/ES toggle
    Hero.js            Cinematic hero with background video
    About.js            Mission / philosophy / approach / swallow-stamp symbolism
    FounderBio.js        Founder story + portrait + portfolio link
    ServicesGrid.js       17 services, each with an icon + EN/ES copy
    Work.js                 "Our Work" — real project showcase (Luis at Home, Jouska, Crying at the Dairy Queen)
    Gallery.js               Production stills grid (Jouska + Luis at Home)
    SocialLinks.js            Instagram / YouTube / Vimeo / LinkedIn
    ContactForm.js             Contact form + email/phone/location
    Footer.js
  lib/
    translations.js    EN/ES copy dictionary + `projects` data (single source of truth for all text)
    LanguageContext.js  React context powering the language toggle (persists to localStorage)
public/
  brand/               Logo assets
  images/
    work/
      luis-at-home/    Real stills from "Luis at Home: Chronicle of an Expat" (dir. Francisco Passuelo, prod. Latin Canada)
      jouska/           Real stills from "Jouska" (dir. Vanesa Paredes)
```

## Replacing Placeholder Media

### 1. Hero
- The hero is a white section built around the swallow mark (`public/brand/latincanada-mark.png`) — no background video or image. If you want to bring cinematic video back into the hero later, re-add a `<video>` element in `src/components/Hero.js` with a dark overlay treatment (it was intentionally removed when the hero switched to a white background)

### 2. Our Work — Crying at the Dairy Queen
- Still in post-production, no stills yet — `src/components/Work.js` renders a "Coming Soon" tile for it automatically (see `FEATURED_IMAGE` map — it has no entry, so the placeholder branch renders)
- Once a still exists: save it to `public/images/work/crying-at-dairy-queen/featured.jpg` and add `"crying-at-dairy-queen": "/images/work/crying-at-dairy-queen/featured.jpg"` to the `FEATURED_IMAGE` map in `Work.js`
- Project metadata (director, producer, year, etc.) lives in `src/lib/translations.js` under `projects` — edit there if credits change

### 3. Founder portrait
- `src/components/FounderBio.js` currently renders a styled placeholder block instead of an `<img>`
- Add your portrait to `public/images/founder-portrait.jpg`, then swap the placeholder `<div>` for a Next.js `<Image src="/images/founder-portrait.jpg" fill className="object-cover" alt="..." />`

### 4. Gallery images
- `src/components/Gallery.js` shows 8 real production stills from Jouska and Luis at Home (`TILES` array)
- To add more, or swap in Crying at the Dairy Queen stills once they exist, add files under `public/images/work/<project>/` and extend `TILES`

### 5. Portfolio link
- Currently set to `https://latin-canada-portfolio.com` in `src/lib/translations.js` (`founder.portfolioLabel` link target, in `FounderBio.js`) and in `Footer.js`
- Replace both occurrences once the real portfolio URL exists

### 6. Social links
- Update the `href` values in `src/components/SocialLinks.js` (`LINKS` array) to the real Instagram / YouTube / Vimeo / LinkedIn URLs

### 7. Contact details
- Email/phone shown in `ContactForm.js` are placeholders (`hello@latincanada.ca`, `+1 (604) 555-0182`) — update directly in that file
- The form's submit handler is a placeholder (simulated delay, no network call). Wire it to a real endpoint — e.g. an `/api/contact` route using Resend, SendGrid, or a service like Formspree — before launch

### 8. Logo
- `public/brand/latincanada-logo.png` is the original source file (white background)
- `public/brand/latincanada-mark.png` is a cropped, transparent-background version generated from it, used everywhere in the UI so it sits cleanly on the dark background
- If you get an updated logo file, regenerate the transparent mark to match

## Bilingual Content (EN / ES)

All copy lives in `src/lib/translations.js` as a single `{ en: {...}, es: {...} }` object. Edit copy there — every component reads from `useLanguage()` rather than hardcoding text, so EN/ES stay in sync automatically. Default language is English; the toggle in the navbar persists the visitor's choice to `localStorage`.

## Deploy

```bash
npm run build
```

Deploys cleanly to Vercel (`vercel deploy`) or any Node.js host that supports Next.js App Router.
