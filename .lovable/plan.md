# Dr. Arden Neurology Website — Build Plan

A premium medical website for "Dr. Arden" (neurology), rebuilt on **Vite + React + TypeScript + Tailwind + React Router v6**, with 13 routes, feature-based architecture, and all the interactive sections from the reference design.

## Stack migration

Current project is TanStack Start. I will:
- Remove TanStack Router / TanStack Start wiring (`src/router.tsx`, `src/routes/`, `routeTree.gen.ts`, `src/start.ts`, `src/server.ts`, `vite.config.ts` tanstack plugin).
- Add `react-router-dom`, `react-helmet-async`, `framer-motion`, `embla-carousel-react`, `react-hook-form`, `zod`, `@hookform/resolvers`, `lucide-react`, `react-countup`.
- Keep Tailwind v4 setup and shadcn/ui components (already installed).
- New entry: `index.html` + `src/main.tsx` + `src/App.tsx` with `<BrowserRouter>` and `<HelmetProvider>`.

## Architecture (feature-based)

```
src/
  app/                 # App shell, router, providers
    App.tsx
    router.tsx
  features/
    navbar/            # Sticky glass navbar with scroll morph
    hero/
    about/             # Animated stat counters
    services/          # Sticky-stack cards
    case-studies/      # Hover accordion + image crossfade
    testimonials/      # Embla autoplay carousel
    book-appointment/  # RHF + Zod form
    articles/          # Hover-expand image cards
    faq/               # Tabs + accordion
    footer/
  pages/               # Route-level pages composing features
    Home.tsx
    About.tsx
    Services.tsx  ServiceDetails.tsx
    CaseStudies.tsx  CaseStudyDetails.tsx
    Articles.tsx  ArticleDetails.tsx
    BookAppointment.tsx
    Contact.tsx
    PrivacyPolicy.tsx
    TermsConditions.tsx
    NotFound.tsx
  components/ui/       # existing shadcn
  data/                # static content: services, articles, case studies, faqs
  lib/
  hooks/
public/images/
  home/ about/ services/ case-studies/ articles/ contact/ shared/
```

All images live in `public/images/<page>/` — left empty for now (placeholders rendered as soft gray blocks with subtle texture). You can drop real files into those folders later with matching filenames.

## Routes (React Router v6)

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/services` | Services list |
| `/services/:slug` | Service Details |
| `/case-studies` | Case Studies list |
| `/case-studies/:slug` | Case Study Details |
| `/articles` | Articles list |
| `/articles/:slug` | Article Details |
| `/book-appointment` | Book Appointment |
| `/contact` | Contact |
| `/privacy-policy` | Privacy Policy |
| `/terms-conditions` | Terms & Conditions |
| `*` | 404 |

Every page uses `<Helmet>` with unique title, description, og:title, og:description.

## Sections (per your spec)

- **Navbar** — fixed glass pill; logo + center links only over hero. After hero leaves viewport, name slides in from left, "Book Appointment" slides in from right, container expands width — Framer Motion with `useScroll` + spring easing. Reverses on scroll back. Mobile/tablet: left logo+title, right hamburger.
- **Hero** — large rounded green container with subtle brain/neural background SVG, glass badge "Dr. Arden Max", 74px headline, social-proof avatars + 5★ + "500+ Happy Customers", right-side intro + CTA. Fade-up entrance, floating background motion, parallax doctor image.
- **About** — left "About Me" label + right large headline; off-white container with 3 stat cards (15K+, 12+, 500+) using `react-countup` triggered on `whileInView`, hover lift; right feature card slides in from right.
- **Services** — 5 sticky-stacked cards via Framer Motion `useScroll`/`useTransform` with `position: sticky` + z-index ladder; identical card dimensions; tablet keeps desktop layout.
- **Case Studies (home section)** — dark bg; left featured image, right accordion (01–04); hover expands one card, crossfade image swap; "View Details" → `/case-studies/:slug`.
- **Testimonials** — Embla infinite loop, 4s autoplay, avatar nav syncs active slide, click resets timer; "Book Appointment" buttons route to `/book-appointment`; pause on hover (desktop).
- **Book Appointment** — image left + form right; RHF + Zod validation; animated dropdown for Preferred Time; submit shows loading → success toast (sonner). Form data logged client-side only (no backend wired — can add Lovable Cloud later if you want real submissions).
- **Articles** — center large featured card; cards 1 & 3 compact, on hover image grows to full background with dark overlay and text turns white via Framer Motion layout animations; click → `/articles/:slug`.
- **FAQ** — 4 tabs (General, Conditions, Appointments, Treatment), sliding pill indicator, accordion (one open at a time, first auto-open per tab).
- **Footer** — dark with brand-green hover underline grow, mailto/tel links, newsletter form, glass info cards, giant "Dr. Arden" wordmark.

## Detail pages

- **Service Details** — hero title, large image, overview/symptoms/causes/evaluation/treatment/expectations, right sidebar "More services", prev/next arrows.
- **Case Study Details** — title, summary, image, overview/situation/assessment/outcome, right sidebar with Patient Background + testimonial, "Book Appointment" CTA, "More case studies" grid.
- **Article Details** — hero image with overlapping title card, long-form content, "Related Articles" grid.
- **Contact** — title, booking form (reuses Book Appointment form), 3 info cards, "What to expect"/"What to bring" cards, FAQ section.
- **Privacy / Terms** — centered title + content card with numbered sections.
- **404** — minimal centered message + "Go home" link.

## Technical notes

- SEO via `react-helmet-async` on each page.
- All animations via Framer Motion (no GSAP needed).
- Static content (services list, articles, case studies, FAQ) lives in `src/data/*.ts` as typed arrays — easy to edit later.
- No backend; form submits are simulated with a toast. Hook up Lovable Cloud later for real email/storage.

After approval I'll execute this in one pass: rip out TanStack, install deps, scaffold the architecture, build all features and pages.
