# MediCare Plus — Hospital / Clinic Management Website (Frontend)

Frontend build for the **Quick Solutions (Pvt) Ltd.** proposal *“Hospital / Clinic Management
Website”* (30 July 2026).
Project owner: Ravindu Yasintha (PM & BA) · Developer: Jayashan Nawarathna (Intern Software Engineer).

Frontend only — every form is wired for validation and state, but nothing is submitted anywhere.
The code is structured so a backend/API can be dropped in without touching the UI layer.

---

## 1. Requirements

- **Node.js 18 or newer** (18, 20 and 22 all work) — check with `node -v`
- npm (ships with Node)

## 2. Running the project

```bash
cd medicare-plus
npm install      # once
npm run dev      # http://localhost:5173
```

Other scripts:

```bash
npm run build     # production bundle into dist/
npm run preview   # serve the production build locally
npm run lint      # ESLint over the whole project
npm run assets    # download the real photo set into public/assets/images
```

## 3. Images and video

All media is declared **once** in `src/lib/media.js`, so replacing it with the real hospital's
photography is a single-file edit.

There are two modes, controlled by `.env`:

| `VITE_LOCAL_ASSETS` | Where images come from |
| --- | --- |
| `false` *(default)* | Streamed from the image CDN — real hospital photography, correctly sized per breakpoint. Needs an internet connection. |
| `true` | Served from `public/assets/images/` — works completely offline. |

The repository already ships an offline set in `public/assets/images/` (72 branded images plus
`hero-loop.mp4`), so nothing is ever broken. To pull the full-resolution photographs into that same
folder:

```bash
npm run assets
echo "VITE_LOCAL_ASSETS=true" > .env
npm run dev
```

Video lives in `public/assets/media/hospital-tour.mp4` (used by the Gallery page tour player).
Vector brand assets and background patterns are in `src/assets/`.

Every photograph is rendered through `SmartImage`, which gives lazy loading, a fixed aspect ratio
(no layout shift), a shimmer skeleton while loading and an on-brand illustrated fallback if a source
ever fails — so a bad connection never produces a broken-looking page.

## 4. Technology

| Layer | Choice |
| --- | --- |
| Framework | React 18 + Vite 5 |
| Routing | React Router 6 (every route code-split with `React.lazy`) |
| Styling | Tailwind CSS 3 with a custom clinical design system |
| Icons | One hand-drawn inline SVG set (`src/components/ui/Icon.jsx`) — no icon package |
| Fonts | Bricolage Grotesque (display), Plus Jakarta Sans (body), IBM Plex Mono (data) |
| Tooling | ESLint, PostCSS, Autoprefixer |

Design language: deep clinical blue + mint, generous white space, and a recurring ECG trace used as
the section divider, page-header edge and loading animation.

## 5. Project structure

```
medicare-plus/
├─ public/
│  ├─ favicon.svg
│  └─ assets/
│     ├─ images/        72 images + hero-loop.mp4 (offline set)
│     └─ media/         hospital-tour.mp4
├─ scripts/
│  └─ download-assets.mjs
└─ src/
   ├─ assets/           brand SVGs + background patterns
   ├─ components/
   │  ├─ layout/        Navbar, MobileMenu, Footer, Layout
   │  ├─ sections/      Hero, EmergencyBanner, AboutPreview, DepartmentsGrid,
   │  │                 FeaturedDoctors, ServicesStrip, HealthPackagesSection,
   │  │                 AppointmentCTA, LatestNews, TestimonialSlider, ContactInfoSection
   │  ├─ cards/         DepartmentCard, DoctorCard, ServiceCard, PackageCard, BlogCard
   │  └─ ui/            Button, Badge, Field (Input/Select/Textarea/Radio/Checkbox),
   │                    Modal, Lightbox, Accordion, Breadcrumbs, PageHeader,
   │                    SectionHeading, PulseDivider, Rating, Counter, Reveal,
   │                    Loader (PageLoader/Spinner/SkeletonCard), SmartImage, ScrollToTop
   ├─ data/             site, departments, doctors, services, packages,
   │                    gallery, news, testimonials, faqs, about
   ├─ lib/              media registry, formatting helpers, usePageMeta
   ├─ pages/            17 route components
   ├─ App.jsx           routing table
   ├─ main.jsx          entry point
   └─ index.css         design tokens, base styles, component classes
```

## 6. Pages

| # | Page | Route |
| --- | --- | --- |
| 01 | Home | `/` |
| 02 | About Us | `/about` |
| 03 | Departments | `/departments` |
| — | Department detail | `/departments/:slug` |
| 04 | Doctors | `/doctors` |
| — | Doctor profile | `/doctors/:slug` |
| 05 | Appointment booking (UI only) | `/appointment` |
| 06 | Medical Services | `/services` |
| — | Service detail | `/services/:slug` |
| 07 | Health Packages | `/health-packages` |
| 08 | Gallery | `/gallery` |
| 09 | News & Health Articles | `/news` |
| — | Article detail | `/news/:slug` |
| 10 | Testimonials | `/testimonials` |
| 11 | FAQ | `/faq` |
| 12 | Contact | `/contact` |
| — | 404 | any unmatched route |

## 7. Requirement coverage

**Functional** — responsive across mobile/tablet/desktop, modern healthcare UI, scroll and hover
animations (all respecting `prefers-reduced-motion`), full client-side form validation, interactive
components (wizard, sliders, accordion, lightbox, filters, search, modals), image optimisation
(lazy + responsive `srcset` + aspect-ratio boxes), SEO-friendly semantic HTML with per-route meta
tags and `Hospital` structured data, cross-browser compatible output via Autoprefixer, and a clean
component architecture with no duplicated markup.

**UI/UX** — modern medical theme, professional colour scheme, keyboard-navigable menus, skip link,
focus-visible rings, ARIA labelling on every interactive control, consistent typography scale, and
code-split routes for fast loading.

**Appointment booking** is a five-step wizard: department → doctor → date & time → patient
information → summary → confirmation screen with a booking reference. Slots are generated from each
doctor's published clinic hours, so a doctor who only sits on Monday, Wednesday and Friday cannot be
booked on a Tuesday. No backend call is made anywhere.

## 8. Notes for backend integration

- `src/data/*.js` are the only data sources — swap each export for a fetch/React Query hook and the
  UI needs no changes.
- Form submit handlers are isolated at the bottom of their page files (`ContactForm`,
  `NewsletterForm`, `ReviewModal`, and `confirm()` in `Appointment.jsx`); replace the simulated
  timeout with the real API call.
- `src/lib/media.js` is the single place image URLs are resolved.

© Quick Solutions (Pvt) Ltd. — demonstration frontend, no real patient data.
