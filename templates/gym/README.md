# IronCore Fitness — Modern Gym & Fitness Website

A modern, fully responsive frontend for a premium fitness gym, built for
**Quick Solutions (Pvt) Ltd.** per the *Modern Gym & Fitness Website — Frontend
Development Proposal* (30 July 2026).

> Frontend only. No backend, database, authentication, or payment integration —
> all forms are UI-level with client-side validation, as scoped in the proposal.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Language | TypeScript 5 |
| Build tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Routing | React Router 6 |
| Icons | lucide-react |
| Fonts | Oswald (headings) + Inter (body) via Google Fonts |
| Linting | ESLint 9 + typescript-eslint |

---

## Prerequisites

- **Node.js 18 or higher** (`node -v` to check)
- **npm 9+** (ships with Node)

---

## Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Type-check and build for production
npm run build

# 4. Preview the production build locally
npm run preview

# 5. Lint
npm run lint
```

---

## Project Structure

```
src/
├── components/     Reusable UI components
│   ├── Navbar.tsx            Desktop + mobile navigation
│   ├── Footer.tsx            Footer with links and socials
│   ├── Layout.tsx            Shell: navbar + breadcrumbs + outlet + footer
│   ├── Breadcrumbs.tsx       Auto-generated breadcrumb trail
│   ├── HeroSlider.tsx        Home hero slider
│   ├── PageHeader.tsx        Inner-page hero
│   ├── Button.tsx            Button with loading state
│   ├── FormField.tsx         Text / textarea / select fields with errors
│   ├── Modal.tsx             Accessible modal
│   ├── Loader.tsx            Spinner, page loader, skeletons
│   ├── MembershipCard.tsx    Membership plan card
│   ├── TrainerCard.tsx       Trainer profile card
│   ├── ProgramCard.tsx       Workout program card
│   ├── BlogCard.tsx          Blog listing card
│   ├── TestimonialCard.tsx   Single review card
│   ├── TestimonialSlider.tsx Reviews slider
│   ├── GalleryGrid.tsx       Image grid + lightbox
│   ├── FacilitiesPreview.tsx Facilities overview block
│   ├── ContactStrip.tsx      Home contact section
│   ├── CTASection.tsx        Reusable call-to-action band
│   └── Reveal.tsx            Scroll-reveal animation wrapper
├── pages/          One file per route (14 pages + 404)
├── hooks/          useCountUp, useScrollReveal
├── lib/
│   ├── data.ts     All site content (plans, programs, trainers, blog, etc.)
│   └── validation.ts  Client-side form validation rules
├── index.css       Tailwind layers + design tokens
└── App.tsx         Route definitions
```

---

## Pages (proposal scope)

| # | Page | Route |
|---|---|---|
| 01 | Home | `/` |
| 02 | About Us | `/about` |
| 03 | Membership Plans | `/membership` |
| 04 | Workout Programs | `/programs` |
| 05 | Trainers | `/trainers` |
| 06 | Facilities | `/facilities` |
| 07 | Transformation Gallery | `/gallery` |
| 08 | Class Schedule | `/schedule` |
| 09 | Membership Registration UI | `/register` |
| 10 | Personal Training | `/personal-training` |
| 11 | Nutrition & Diet | `/nutrition` |
| 12 | Blog | `/blog` and `/blog/:slug` |
| 13 | Testimonials | `/testimonials` |
| 14 | Contact | `/contact` |
| — | Not Found | `*` |

---

## Editing Content

All copy, pricing, trainers, programs, schedule, blog posts and images live in
`src/lib/data.ts`. Change a value there and it updates everywhere it is used —
no component edits required.

Images are currently referenced as remote URLs in the `images` object at the top
of `src/lib/data.ts`. To use client-supplied photography instead, drop the files
into `public/assets/` and change each URL to `/assets/your-file.jpg`.

The before/after photos in the `transformations` array are placeholders and
should be replaced with the client's real member photos before launch.

---

## Notes

- Google Maps is embedded via an iframe on the Contact page — update the `src`
  query to the client's real address.
- All forms (contact, registration, personal training booking) validate on the
  client and simulate submission. Wire them to real endpoints when the backend
  is available.
- Responsive breakpoints follow Tailwind defaults: `sm` 640px, `md` 768px,
  `lg` 1024px, `xl` 1280px.

---

**Company:** Quick Solutions (Pvt) Ltd.
**Project Owner (PM & BA):** Ravindu Yasintha
**Assigned Developer:** Jayashan Nawarathna (Intern Software Engineer)
