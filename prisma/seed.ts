import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

if (process.env.NODE_ENV === "production") {
  throw new Error(
    "Demo seed is disabled in production. Create production accounts using the approved onboarding procedure."
  );
}

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
const db = new PrismaClient({ adapter });

// Demo credentials for local testing only — change these (or delete the
// demo org entirely) before using this against a real gym's data.
const DEMO_OWNER_EMAIL = "owner@demogym.test";
const DEMO_STAFF_EMAIL = "staff@demogym.test";
const DEMO_PASSWORD = "password123";

async function main() {
  const passwordHash = await bcrypt.hash(DEMO_PASSWORD, 10);

  const organization = await db.organization.upsert({
    where: { slug: "demo-gym" },
    update: {},
    create: {
      name: "Demo Gym",
      slug: "demo-gym",
      phone: "9999999999",
      email: "hello@demogym.test",
    },
  });

  await db.user.upsert({
    where: {
      organizationId_email: {
        organizationId: organization.id,
        email: DEMO_OWNER_EMAIL,
      },
    },
    update: {},
    create: {
      organizationId: organization.id,
      name: "Demo Owner",
      email: DEMO_OWNER_EMAIL,
      passwordHash,
      role: "OWNER",
    },
  });

  await db.user.upsert({
    where: {
      organizationId_email: {
        organizationId: organization.id,
        email: DEMO_STAFF_EMAIL,
      },
    },
    update: {},
    create: {
      organizationId: organization.id,
      name: "Demo Staff",
      email: DEMO_STAFF_EMAIL,
      passwordHash,
      role: "STAFF",
    },
  });

  await db.websiteConfig.upsert({
    where: { organizationId: organization.id },
    update: {
      gymName: "IronCore Fitness",
      slug: "demo-gym",
      isPublished: true,
    },
    create: {
      organizationId: organization.id,
      slug: "demo-gym",
      gymName: "IronCore Fitness",
      tagline: "Train Strong. Live Strong.",
      brandColor: "#2563EB",
      heroHeadline: "BUILD YOUR STRONGEST SELF",
      heroSubheadline: "Train smarter. Get stronger. A fitness club built for measurable results.",
      phoneFormatted: "+91 98765 43210",
      phoneRaw: "+919876543210",
      whatsappRaw: "919876543210",
      email: "hello@demogym.test",
      city: "Pune",
      isPublished: true,
      showPoweredBy: true,
    },
  });

  console.log("Seeded demo organization, website config, and users:");
  console.log(`  Owner: ${DEMO_OWNER_EMAIL} / ${DEMO_PASSWORD}`);
  console.log(`  Staff: ${DEMO_STAFF_EMAIL} / ${DEMO_PASSWORD}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await db.$disconnect();
  });
