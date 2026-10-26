/**
 * ChaloBuild Platform Configuration
 * Central metadata, business model parameters, and contact channels for the ChaloBuild studio.
 */
export const siteConfig = {
  name: "ChaloBuild",
  legalName: "ChaloBuild Studio",
  tagline: "Turnkey Gym Websites & Member Management Operating Platforms",
  description:
    "Launch a custom-branded website and connected front-desk operations console for your fitness club in 48 hours. One-time build, 100% code ownership, zero monthly SaaS subscriptions.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://chalobuild.com",
  ogImage: "/images/og-chalobuild.png",

  contact: {
    phone: "+91 90750 97235",
    phoneDisplay: "+91 90750 97235",
    whatsappRaw: "919075097235",
    whatsappLink: "https://wa.me/919075097235",
    email: "build@chalobuild.com",
    city: "Pune & Mumbai",
    hours: "9:00 AM – 9:00 PM IST (Mon – Sat)",
  },

  businessModel: {
    type: "One-Time Turnkey Studio Build",
    turnaroundTime: "48 Hours Delivery",
    commissionFee: "0% Commission on Member Fees",
    monthlySaaS: "₹0 / month recurring software fees",
    codeOwnership: "100% Full Code & Database Ownership",
    hostingOptions: "Self-hosted on AWS, Vercel, or DigitalOcean",
  },

  packages: [
    {
      id: "starter",
      name: "Starter Launch",
      price: "14,999",
      period: "one-time payment",
      popular: false,
      tagline: "Ideal for boutique studios and independent trainers launching their first official digital footprint.",
      features: [
        "Custom-branded dark luxury public website",
        "Mobile-responsive athlete experience",
        "Lead capture & direct WhatsApp booking",
        "Basic front-desk member registration",
        "Domain & cloud hosting setup assistance",
        "Full source code ownership & handover",
      ],
    },
    {
      id: "pro",
      name: "Pro Gym Suite",
      price: "24,999",
      period: "one-time payment",
      popular: true,
      tagline: "Complete turnkey operating system with live front-desk management, check-in terminal, and financial ledger.",
      features: [
        "Everything in Starter Launch",
        "Full Staff Operations Console (/dashboard)",
        "1-Tap Biometric / Phone attendance check-ins",
        "Multi-method fee ledger (Cash, UPI, Card)",
        "Automated WhatsApp renewal reminders (1-click)",
        "Revenue, attendance, and expense analytics",
        "Role-Based Access Control (Owner & Staff)",
        "48-hour turnkey production launch",
      ],
    },
    {
      id: "enterprise",
      name: "Multi-Branch Enterprise",
      price: "44,999",
      period: "one-time payment",
      popular: false,
      tagline: "For commercial gym chains, franchisees, and high-volume fitness centers requiring custom workflows.",
      features: [
        "Everything in Pro Gym Suite",
        "Multi-location branch selector & routing",
        "Biometric hardware API integration setup",
        "Custom branded mobile web app (PWA)",
        "Custom staff permission hierarchies",
        "Dedicated engineer on WhatsApp for 90 days",
        "Automated daily database backups",
      ],
    },
  ],

  demoUrl: "/demo/ironcore",
  dashboardUrl: "/dashboard",
  loginUrl: "/login",
} as const;

export type SiteConfig = typeof siteConfig;
