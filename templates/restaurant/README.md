# Modern Restaurant Website

A premium, responsive restaurant frontend developed for **Quick Solutions (Pvt) Ltd.** The application presents the restaurant's dining experience, menus, promotions, team, gallery, editorial content, reservations, catering, and online ordering through a consistent modern interface.

This repository contains the frontend implementation defined in the project proposal dated **30 July 2026**. Backend services, payment processing, authentication, databases, and operational management systems are intentionally outside the agreed scope.

## Project Information

| Item               | Details                                                                                       |
| ------------------ | --------------------------------------------------------------------------------------------- |
| Company            | Quick Solutions (Pvt) Ltd.                                                                    |
| Project            | Modern Restaurant Website                                                                     |
| Project Owner      | Ravindu Yasintha — Project Manager & Business Analyst                                         |
| Assigned Developer | Sahl Mohamed — Intern Software Engineer                                                       |
| Project Type       | Frontend web application                                                                      |
| Repository         | [Quick-Solutions-Pvt-Ltd/Restaurant-](https://github.com/Quick-Solutions-Pvt-Ltd/Restaurant-) |

## Project Objectives

- Deliver a polished restaurant-focused digital experience.
- Support desktop, tablet, and mobile layouts.
- Present food, promotions, facilities, team members, and editorial content clearly.
- Provide interactive ordering, reservation, gallery, review, and enquiry interfaces.
- Maintain a reusable component architecture suitable for future backend integration.
- Apply accessible markup, responsive images, motion preferences, and SEO metadata where applicable.

## Implemented Features

### Customer experience

- Cinematic home hero carousel with controls, progress indicators, and reduced-motion support.
- Restaurant introduction, featured dishes, food categories, daily specials, offers, chef introduction, reviews, gallery preview, reservation call-to-action, and contact information.
- Responsive navigation with mobile menu and a Journal dropdown linking to the Chef & Team page.
- Consistent typography, spacing, hover states, transitions, and keyboard focus states.

### Menu and online ordering

- Breakfast, lunch, dinner, dessert, and beverage filtering.
- Food cards containing images, descriptions, categories, and prices.
- Menu actions that direct customers to the online ordering interface.
- Working frontend cart state with quantity updates and order totals.
- Cart sidebar, order summary, customer details form, fulfilment options, and checkout preview.

### Reservations and enquiries

- Date, time, guest count, and interactive table selection.
- Customer details and special-request fields.
- Frontend confirmation state with form validation.
- Catering packages, event types, service details, and catering enquiry form.
- Contact form, restaurant information, Google Maps embed, and opening hours.

### Content and discovery

- About page with the restaurant story, vision, mission, facilities, achievements, and image-led content.
- Filterable food and interior gallery with an accessible lightbox.
- Offers page with promotional banners, discounts, combos, and seasonal offers.
- Chef and staff profiles with experience, specialties, and social links.
- Filterable blog listing and dynamic blog detail pages.
- Interactive customer-review slider with ratings and navigation controls.

## Application Routes

| Route          | Purpose                                     |
| -------------- | ------------------------------------------- |
| `/`            | Home and restaurant overview                |
| `/about`       | Story, values, facilities, and achievements |
| `/menu`        | Full restaurant menu and category filters   |
| `/order`       | Online ordering and cart interface          |
| `/checkout`    | Customer details and order review           |
| `/reservation` | Table reservation interface                 |
| `/gallery`     | Filterable gallery and lightbox             |
| `/offers`      | Promotions, combos, and seasonal offers     |
| `/team`        | Chef and restaurant team profiles           |
| `/catering`    | Catering services and enquiry interface     |
| `/blog`        | Journal listing and category filters        |
| `/blog/:slug`  | Individual journal article                  |
| `/contact`     | Contact form, location, and opening hours   |

## Technology Stack

- **React 19** — component-based interface development
- **TypeScript** — static typing and maintainable application contracts
- **TanStack Start and TanStack Router** — application runtime and file-based routing
- **Tailwind CSS 4** — responsive styling and design-system utilities
- **Vite 8** — development server and production bundling
- **Nitro** — server build output for Node-compatible hosting
- **ESLint and Prettier** — source-quality and formatting enforcement

## Project Structure

```text
Restaurant/
├── public/
│   └── images/                 # Restaurant, food, team, and gallery assets
├── src/
│   ├── components/
│   │   ├── about/              # About-page sections
│   │   ├── blog/               # Blog cards, data, listing, and details
│   │   ├── catering/           # Catering packages and enquiry UI
│   │   ├── contact/            # Contact details, form, and map
│   │   ├── gallery/            # Gallery filters and lightbox
│   │   ├── home/               # Home-page sections
│   │   ├── layout/             # Shared header and footer
│   │   ├── menu/               # Menu catalog and food cards
│   │   ├── offers/             # Promotion components
│   │   ├── order/              # Cart state, ordering, and checkout UI
│   │   ├── reservation/        # Reservation workflow
│   │   ├── reviews/            # Reusable review presentation
│   │   ├── team/               # Chef and staff profiles
│   │   └── ui/                 # Buttons, cards, fields, breadcrumbs, loading UI
│   ├── routes/                 # File-based application routes
│   ├── router.tsx              # Router configuration
│   └── styles.css              # Global theme, typography, and animations
├── eslint.config.js
├── prettier.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

## Local Development

### Prerequisites

- Node.js 20 or later
- npm 10 or later
- Git

### Installation

```bash
git clone https://github.com/Quick-Solutions-Pvt-Ltd/Restaurant-.git
cd Restaurant-
npm ci
```

### Start the development server

```bash
npm run dev
```

The application is served at `http://localhost:3000` by default.

## Available Commands

| Command                   | Description                                     |
| ------------------------- | ----------------------------------------------- |
| `npm run dev`             | Start the local Vite development server         |
| `npm run generate-routes` | Regenerate the TanStack route tree              |
| `npm run lint`            | Run ESLint across the project                   |
| `npm run check`           | Check formatting with Prettier                  |
| `npm run format`          | Format source files and apply safe ESLint fixes |
| `npm run build`           | Create the production client and server output  |
| `npm run preview`         | Preview the production application locally      |

## Quality Checks

Before creating a pull request or handing off a build, run:

```bash
npm run check
npm run lint
npm run build
```

The application includes:

- Semantic page landmarks and heading structure.
- Skip navigation links.
- Keyboard-operable menus, filters, sliders, tables, and lightbox controls.
- Accessible labels and live regions for interactive feedback.
- Reduced-motion handling for users who prefer limited animation.
- Responsive layouts across Tailwind breakpoints.
- Route-level titles and descriptions for primary pages.

Formal browser, device, Lighthouse, and accessibility testing should be completed and documented before production approval.

## Production Build and Deployment

Create the production build:

```bash
npm run build
```

Nitro generates the deployable application inside `.output/`. For a Node-compatible host, the generated server can be started with:

```bash
node .output/server/index.mjs
```

Hosting-specific environment configuration should be agreed with the deployment team. This frontend currently requires no application secrets or environment variables.

## Frontend-Only Scope

The following interfaces are demonstrations and do not transmit or permanently store customer information:

- Online order submission
- Payment processing
- Table reservation submission
- Contact enquiries
- Catering enquiries

The cart may retain browser-side state for the frontend experience, but it is not connected to restaurant inventory or order-management services.

The following capabilities are excluded from this repository:

- Backend services and API development
- Database integration
- Authentication and user accounts
- Admin dashboard
- Payment gateway integration
- Real-time ordering and reservation management

## Future Backend Integration

The frontend has been structured so future services can be introduced without redesigning the customer experience. Recommended integration points include:

- Menu and availability API
- Order creation and payment endpoints
- Reservation availability and confirmation endpoints
- Contact and catering enquiry endpoints
- Content-management integration for articles, offers, and team profiles
- Analytics, error monitoring, and consent management

## Source Control Guidelines

- Create a focused branch for each feature or fix.
- Keep commits small and descriptive.
- Run all quality checks before pushing.
- Do not commit `.output`, local configuration, credentials, or generated secrets.
- Request review before merging changes into the main branch.

## Ownership and Confidentiality

This project is proprietary work prepared for **Quick Solutions (Pvt) Ltd.** Source code, assets, documentation, and related project materials must be handled according to company policies and repository access controls.

© 2026 Quick Solutions (Pvt) Ltd. All rights reserved.
