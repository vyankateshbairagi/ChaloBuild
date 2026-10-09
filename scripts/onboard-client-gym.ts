import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

/**
 * ChaloBuild Client Gym Onboarding Script
 * -------------------------------------------------------------
 * Usage:
 * npx tsx scripts/onboard-client-gym.ts "Apex Athletic Club" "apex-fitness" "owner@apexfit.in" "Vikram Malhotra" "+91 98200 12345" "Mumbai" "secretpass123"
 */

const args = process.argv.slice(2);
const orgName = args[0] || "Apex Athletic Club";
const orgSlug = (args[1] || "apex-fitness").toLowerCase().trim();
const ownerEmail = (args[2] || "owner@apexfit.in").toLowerCase().trim();
const ownerName = args[3] || "Vikram Malhotra";
const phone = args[4] || "+91 98200 12345";
const city = args[5] || "Mumbai";
const password = args[6] || "ApexGym@2026";

async function main() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is required to onboard a client gym.");
  }

  const db = new PrismaClient({
    adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
  });

  try {
    console.log(`Starting ChaloBuild Onboarding for: "${orgName}" (${orgSlug})...`);

    const passwordHash = await bcrypt.hash(password, 10);

    const organization = await db.organization.upsert({
      where: { slug: orgSlug },
      update: {
        name: orgName,
        phone,
        email: ownerEmail,
        address: `${city}, Maharashtra`,
      },
      create: {
        name: orgName,
        slug: orgSlug,
        phone,
        email: ownerEmail,
        address: `${city}, Maharashtra`,
        currency: "INR",
        timezone: "Asia/Kolkata",
      },
    });

    // Create or update Owner account
    await db.user.upsert({
      where: {
        organizationId_email: {
          organizationId: organization.id,
          email: ownerEmail,
        },
      },
      update: {
        name: ownerName,
        passwordHash,
        role: "OWNER",
        isActive: true,
      },
      create: {
        organizationId: organization.id,
        email: ownerEmail,
        name: ownerName,
        passwordHash,
        role: "OWNER",
        isActive: true,
      },
    });

    // Create default membership plans for this gym
    const existingPlans = await db.membershipPlan.findMany({
      where: { organizationId: organization.id },
    });

    if (existingPlans.length === 0) {
      await db.membershipPlan.createMany({
        data: [
          {
            organizationId: organization.id,
            name: "Monthly Strength Pass",
            durationInDays: 30,
            price: 1200,
            description: "Full access to strength floor and lockers for 30 days.",
            isActive: true,
          },
          {
            organizationId: organization.id,
            name: "Quarterly Pro Membership",
            durationInDays: 90,
            price: 3200,
            description: "3 months access with complimentary assessment.",
            isActive: true,
          },
          {
            organizationId: organization.id,
            name: "Annual Elite Membership",
            durationInDays: 365,
            price: 11000,
            description: "Full year VIP membership with freeze privileges.",
            isActive: true,
          },
        ],
      });
    }

    // Upsert WebsiteConfig for this gym
    await db.websiteConfig.upsert({
      where: { organizationId: organization.id },
      update: {
        gymName: orgName,
        slug: orgSlug,
        phoneFormatted: phone,
        phoneRaw: phone.replace(/\D/g, ""),
        whatsappRaw: phone.replace(/\D/g, ""),
        city,
        email: ownerEmail,
        isPublished: true,
        showPoweredBy: true,
      },
      create: {
        organizationId: organization.id,
        slug: orgSlug,
        gymName: orgName,
        tagline: "High Performance Fitness & Strength",
        brandColor: "#2563EB",
        heroHeadline: "BUILD YOUR STRONGEST PHYSIQUE",
        heroSubheadline: `Premier athletic fitness and conditioning facility in ${city}.`,
        heroDescription: "Equipped with commercial-grade strength machines, Olympic platforms, and certified personal trainers.",
        phoneFormatted: phone,
        phoneRaw: phone.replace(/\D/g, ""),
        whatsappRaw: phone.replace(/\D/g, ""),
        whatsappMessage: `Hi ${orgName}! I saw your website and would like to claim my free 1-day guest pass.`,
        email: ownerEmail,
        address: `Premier Sports Complex, Sector 4, ${city}`,
        city,
        state: "Maharashtra",
        pincode: "400001",
        isPublished: true,
        showPoweredBy: true,
      },
    });

    console.log("---------------------------------------------------------");
    console.log("Client Gym Onboarded Successfully!");
    console.log(`Organization Name: ${orgName}`);
    console.log(`Public Website:    https://chalobuild.in/gym/${orgSlug}`);
    console.log(`Owner Login:       ${ownerEmail}`);
    console.log(`Initial Password:  ${password}`);
    console.log(`Dashboard URL:     https://chalobuild.in/login`);
    console.log("---------------------------------------------------------");
  } finally {
    await db.$disconnect();
  }
}

main().catch((err) => {
  console.error("Onboarding failed:", err);
  process.exit(1);
});
