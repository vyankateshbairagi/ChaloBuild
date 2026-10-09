# ChaloBuild Gym Platform — Production Deployment & Client Onboarding Guide

This guide documents the production deployment architecture, domain setup for `chalobuild.in`, and the developer-controlled client onboarding process for new gym clients using the **ChaloBuild 2-in-1 Platform** (Public Gym Website + GymFlow Management Dashboard).

---

## 1. Architecture Overview

- **Core Framework**: Next.js 16 (App Router), React 19, TypeScript.
- **Styling**: Tailwind CSS v4 with unified **Premium White Theme** design tokens.
- **Database & ORM**: Neon Serverless PostgreSQL with Prisma 7.
- **Authentication**: Stateless, encrypted JWT sessions via `jose` and `bcryptjs` password hashing.
- **Multi-Tenant Routing**:
  - `/` — ChaloBuild Corporate Homepage (B2B SaaS product offering).
  - `/demo/ironcore` — Interactive live demo for prospective gym clients.
  - `/gym/[slug]` — Tenant-specific public gym website resolved from `website_configs` in PostgreSQL.
  - `/dashboard/*` — Role-based (OWNER, STAFF) gym management platform with strict tenant isolation.
  - `/login` — Secure staff/owner authentication portal.

---

## 2. Environment Variables Reference

Configure these environment variables in your deployment platform (e.g., Vercel / Railway / AWS):

| Variable | Description | Required In |
| :--- | :--- | :--- |
| `DATABASE_URL` | Pooled connection string to Neon PostgreSQL | Development, Production |
| `SESSION_SECRET` | 64-character random hex string for JWT signing | Development, Production |
| `NEXT_PUBLIC_APP_URL` | Canonical root domain (`https://chalobuild.in`) | Production |
| `NEXT_PUBLIC_DEFAULT_GYM_SLUG`| Optional fallback slug for single-tenant domains (e.g. `ironcore`) | Optional |
| `NODE_ENV` | `production` | Production |

### Generating a Secure Session Secret
Run this in PowerShell or bash:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

## 3. Database Migration & Deployment

### Apply Committed Migrations
To safely apply database migrations to the production database without data loss:
```bash
npx prisma migrate deploy
```

> **CRITICAL RULE**: Never run `npx prisma migrate reset` or `npx prisma db push` on a production database.

---

## 4. Onboarding a New Gym Client

ChaloBuild uses a developer-controlled, automated onboarding workflow via `scripts/onboard-client-gym.ts`.

### Step 1: Prepare Client Metadata
Collect from the gym owner:
- Gym Name (e.g., "Apex Athletic Club")
- Desired Slug (e.g., `apex-fitness`)
- Owner Name & Email
- Tagline & Training Philosophy
- Contact Phone & WhatsApp number
- Street Address & City
- Membership Plans (monthly, quarterly, annual pricing)
- Services / Programs Offered
- Trainers & Gallery photo URLs

### Step 2: Run the Onboarding Script
Run the automated script against the configured database:
```bash
npx tsx scripts/onboard-client-gym.ts
```

This script:
1. Creates an isolated `Organization` record.
2. Creates an `OWNER` user account with a secure temporary password.
3. Provisions the gym's public membership plans in the `membership_plans` table.
4. Generates a fully populated, published `WebsiteConfig` entry linking programs, trainers, gallery images, amenities, and contact details.

### Step 3: Verify the New Gym Website & Dashboard
1. Visit `https://chalobuild.in/gym/[slug]` (or client subdomain).
2. Check that:
   - Gym name, logo, and brand color match.
   - Programs, pricing, and trainers render correctly.
   - WhatsApp CTA buttons open with the gym's specific phone number.
   - "Powered by ChaloBuild" links back to `https://chalobuild.in`.
3. Log in at `https://chalobuild.in/login` with the newly generated owner credentials to confirm dashboard access.

---

## 5. Domain & Subdomain Configuration (Vercel)

### Root Domain (`chalobuild.in`)
1. In Vercel Project Settings > Domains, add:
   - `chalobuild.in` (Primary)
   - `www.chalobuild.in` (Redirects to `chalobuild.in`)
2. In your DNS provider (e.g., Cloudflare, Namecheap, GoDaddy), create:
   - `A` record: `@` -> `76.76.21.21` (or Vercel CNAME `cname.vercel-dns.com`)
   - `CNAME` record: `www` -> `cname.vercel-dns.com`

### Client Custom Subdomains or Wildcard Domains
For client-specific subdomains (e.g., `apex.chalobuild.in`):
1. Add `*.chalobuild.in` as a wildcard domain in Vercel.
2. In Next.js middleware, resolve the subdomain into the corresponding gym slug query, transparently rewriting to `/gym/[slug]`.

---

## 6. Pre-Launch Verification Checklist

- [ ] `npm run lint` passes with 0 errors.
- [ ] `npx tsc --noEmit` passes with 0 type errors.
- [ ] `npm run build` generates all static and dynamic routes cleanly.
- [ ] Inquiries submitted through `/gym/[slug]` persist to the `lead_enquiries` database table.
- [ ] Dashboard routes (`/dashboard`, `/members`, `/attendance`, `/plans`, `/subscriptions`, `/payments`, `/expenses`, `/reports`, `/settings`) enforce strict organization ID isolation.
- [ ] Session cookie is marked `HttpOnly; Secure; SameSite=Lax`.
- [ ] Production logs do not output passwords, tokens, or raw secrets.
