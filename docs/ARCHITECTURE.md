# ChaloBuild — Enterprise Production Architecture & Folder Structure

This document details the production directory layout, domain boundaries, and architectural patterns of the **ChaloBuild** platform.

---

## 1. Directory Tree & Module Responsibilities

```text
ChaloBuild/
├── .github/                     # CI/CD workflows and automated checks
├── docs/                        # Production architecture, deployment runbooks, and SOPs
│   ├── ARCHITECTURE.md          # Complete system blueprint (this file)
│   └── PRODUCTION_DEPLOYMENT.md # Cloud VPS, Vercel, Supabase, and SSL setup guide
├── prisma/                      # Database modeling & schema migrations
│   ├── schema.prisma            # 11 PostgreSQL relational models & enum definitions
│   └── migrations/              # Version-controlled SQL migration history
├── public/                      # Static assets, logos, gym zone imagery, and icons
│   ├── images/                  # High-resolution gym & training zone photography
│   └── ...
├── scripts/                     # Operational automation, seeding, and verification CLI scripts
│   ├── bootstrap-production.ts  # Cold-start database initialization
│   ├── onboard-client-gym.ts    # One-click client gym onboarding & tenant creation
│   └── validate-seed.ts         # Data integrity & relationship checker
├── src/                         # Application source code
│   ├── actions/                 # Next.js Server Actions (mutation layer)
│   │   ├── attendance.ts        # Member check-in, check-out, and live session updates
│   │   ├── auth.ts              # Login, registration, session teardown
│   │   ├── enquiry.ts           # VIP trial pass generation & WhatsApp lead capture
│   │   ├── expenses.ts          # Operational expenditure logging & categorization
│   │   ├── members.ts           # Member registration, profile edits, deactivation
│   │   ├── membership-plans.ts  # Tier configuration, pricing adjustments
│   │   ├── payments.ts          # Multi-method fee collection (UPI, Cash, Card) & receipts
│   │   ├── settings.ts          # Organization metadata, business hours, branding
│   │   └── subscriptions.ts     # Membership enrollments, renewals, and freeze handling
│   │
│   ├── app/                     # Next.js 15 App Router (Presentation & Routing)
│   │   ├── (auth)/              # Authentication sub-system (Login, Register)
│   │   ├── (dashboard)/         # Protected Staff Operations Cockpit
│   │   │   ├── attendance/      # Live floor occupancy & biometric scan history
│   │   │   ├── dashboard/       # Front-desk HUD, revenue bar charts, WhatsApp renewal alerts
│   │   │   ├── expenses/        # Categorized facility spend ledger
│   │   │   ├── members/         # Athlete roster, statuses, joining dates
│   │   │   ├── payments/        # Fee collection ledger, tax receipts, refund actions
│   │   │   ├── plans/           # Membership tier catalog
│   │   │   ├── reports/         # Executive analytics, revenue vs expenses, attendance velocity
│   │   │   ├── settings/        # Gym branch settings, business dates, timezone
│   │   │   └── subscriptions/   # Active, expiring, and paused membership management
│   │   │
│   │   ├── demo/                # Live Public Gym Demonstration Hub
│   │   │   └── ironcore/        # Dark-athletic showcase website with VIP trial booking
│   │   │       ├── about/       # Gym mission, facility standards, equipment inventory
│   │   │       ├── contact/     # Facility map, operating hours, trial pass generator
│   │   │       ├── gallery/     # Heavy lifting arena & functional turf photo mosaic
│   │   │       ├── pricing/     # Membership tiers, freeze policy, zero hidden fee promise
│   │   │       ├── programs/    # Hypertrophy, powerlifting, conditioning routines
│   │   │       └── trainers/    # CSCS & ACE certified coaching staff profiles
│   │   │
│   │   ├── gym/[slug]/          # Dynamic multi-tenant public gym website renderer
│   │   ├── error.tsx            # Global production error boundary with retry recovery
│   │   ├── globals.css          # Tailwind CSS v4 design tokens, custom dark gradients
│   │   ├── icon.png             # Production favicon & application icon
│   │   ├── layout.tsx           # Global HTML root shell & typography configuration
│   │   ├── loading.tsx          # Root suspense boundary with glowing loader
│   │   ├── not-found.tsx        # Branded obsidian 404 page with navigation shortcuts
│   │   ├── page.tsx             # ChaloBuild Studio agency homepage (commercial sales site)
│   │   ├── robots.ts            # Dynamic SEO robots.txt generator
│   │   └── sitemap.ts           # Dynamic XML sitemap generator
│   │
│   ├── components/              # Modular UI Component Library
│   │   ├── attendance/          # Front-desk check-in workspace & date selector
│   │   ├── expenses/            # Expense recording modal & category filter
│   │   ├── home/                # ChaloBuild Studio marketing sections (Hero, Showcase, Pricing)
│   │   ├── layout/              # App shells (dashboard-shell, sidebar-nav, nav-items)
│   │   ├── members/             # Member directory workspace & enrollment dialog
│   │   ├── membership-plans/    # Plan creation modal & tier editor
│   │   ├── payments/            # Fee recording modal, receipt modal, refund actions
│   │   ├── public/              # Reusable public gym components (Header, Footer, Hero, CTA)
│   │   ├── settings/            # Organization & branch configuration forms
│   │   ├── shared/              # Cross-cutting primitives (stat-card, status-badge)
│   │   ├── subscriptions/       # Subscription renewal workspace
│   │   └── ui/                  # Shadcn / Radix UI headless primitives
│   │
│   ├── config/                  # Static business & application configurations
│   │   ├── gym.ts               # Demo gym configuration (IronCore Athletics)
│   │   └── site.ts              # ChaloBuild Studio metadata, pricing packages, contact numbers
│   │
│   ├── lib/                     # Core Business Logic & Infrastructure
│   │   ├── attendance-cleanup.ts# Stale attendance auto-checkout cron logic
│   │   ├── attendance-time.ts   # Timezone-aware business date key calculations
│   │   ├── auth.ts              # Session validation & current user extraction
│   │   ├── dashboard/           # Aggregate query calculations for dashboard HUD
│   │   ├── db.ts                # PrismaClient singleton with connection pooling
│   │   ├── gym-config.ts        # Dynamic multi-tenant gym resolver
│   │   ├── permissions.ts       # Granular Role-Based Access Control (RBAC) rules
│   │   ├── reports/             # Financial trend & attendance analytics aggregations
│   │   ├── session.ts           # JWT sign, verify, and HTTP-only cookie serialization
│   │   ├── utils.ts             # Tailwind class merging (cn) & string helpers
│   │   └── validations/         # Zod schemas for all mutations and forms
│   │
│   ├── types/                   # Centralized TypeScript domain declarations
│   │   └── index.ts             # Roles, CurrentUser, NavItem, ActionResponse, PaymentMethod
│   │
│   └── proxy.ts                 # Next.js edge route protection & authentication gate
│
├── tests/                       # Automated testing suite
│   └── e2e/                     # Playwright end-to-end integration tests
├── .env.example                 # Documented environment variables template
├── components.json              # Shadcn UI configuration
├── next.config.ts               # Next.js compiler flags & image domain whitelist
├── package.json                 # Project dependencies & operational NPM scripts
├── playwright.config.ts         # Playwright test runner configuration
└── tsconfig.json                # Strict TypeScript compiler options & path aliases
```

---

## 2. Architectural Boundaries & Data Flow

### A. Commercial Agency Layer vs. Demo Showcase Layer
* **Agency Marketing Site (`src/app/page.tsx`)**: Promotes the **ChaloBuild Studio** model: one-time build, 100% code ownership, 48-hour delivery, zero monthly SaaS fees, direct WhatsApp contact (`+91 90750 97235`).
* **Interactive Live Demo (`src/app/demo/ironcore/*`)**: An actual, fully functional public gym website showcasing high-converting athletic dark aesthetics, VIP pass forms, and program directories.
* **Canonical Redirects**: Root-level legacy paths (`/pricing`, `/about`, `/contact`, `/programs`, etc.) automatically redirect with zero latency to `/demo/ironcore/*`, preventing broken links and eliminating duplicate code.

### B. Authenticated Operations Cockpit (`src/app/(dashboard)/*`)
* Protected by edge proxy middleware (`src/proxy.ts`) verifying signed JWT session cookies.
* Utilizes **React Server Components (RSC)** to fetch tenant-scoped data directly from PostgreSQL using Prisma without REST API overhead.
* Backed by **Server Actions** (`src/actions/*`) validated via **Zod** schemas (`src/lib/validations/*`) with granular RBAC checks (`can(user.role, "permission")`).

### C. Multi-Tenant Dynamic Rendering (`src/app/gym/[slug]`)
* Resolves arbitrary gym configurations by slug using `src/lib/gym-config.ts`.
* Allows ChaloBuild to deliver white-labeled websites to multiple client gyms using a single deployed codebase.

---

## 3. Technology Stack & Key Libraries

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | Next.js 15 (App Router) | Server-Side Rendering (SSR), Server Actions, Route Groups |
| **Language** | TypeScript (Strict) | End-to-end type safety across UI, actions, and database |
| **Database** | PostgreSQL | Relational ACID storage for financials, members, and attendance |
| **ORM** | Prisma ORM | Type-safe queries, relational schema migrations, connection pooling |
| **Styling** | Tailwind CSS v4 + Radix UI | Custom dark-glass athletic aesthetic, fluid responsive layouts |
| **Auth** | Custom JWT + HTTP-Only Cookies | Lightweight, self-hosted session management without 3rd-party auth fees |
| **Validation** | Zod | Runtime input validation on all Server Actions and client forms |
| **Testing** | Playwright | End-to-end browser regression testing across all critical flows |
