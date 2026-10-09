import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

async function inspect() {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) {
    console.error("ERROR: DATABASE_URL is not set.");
    process.exit(1);
  }

  // Safely parse DB host and database name without exposing credentials
  try {
    const parsed = new URL(dbUrl);
    console.log("=== DATABASE CONNECTION INFO (SAFE) ===");
    console.log(`Protocol: ${parsed.protocol}`);
    console.log(`Host: ${parsed.hostname}`);
    console.log(`Port: ${parsed.port || "(default)"}`);
    console.log(`Database Name: ${parsed.pathname.replace(/^\//, "")}`);
    console.log("========================================");
  } catch {
    console.log("DATABASE_URL is present (could not parse as standard URL)");
  }

  const adapter = new PrismaPg({ connectionString: dbUrl });
  const db = new PrismaClient({ adapter });

  try {
    const orgs = await db.organization.findMany({
      select: { id: true, name: true, slug: true, createdAt: true },
    });
    console.log(`Organizations found (${orgs.length}):`);
    for (const o of orgs) {
      console.log(`  - [${o.id}] "${o.name}" (slug: ${o.slug}) created: ${o.createdAt.toISOString()}`);
    }

    const users = await db.user.findMany({
      select: { id: true, name: true, email: true, role: true, organizationId: true },
    });
    console.log(`Users found (${users.length}):`);
    for (const u of users) {
      console.log(`  - [${u.id}] ${u.name} <${u.email}> (${u.role}) orgId: ${u.organizationId}`);
    }

    const memberCount = await db.member.count();
    const planCount = await db.membershipPlan.count();
    const subCount = await db.subscription.count();
    const paymentCount = await db.payment.count();
    const attendanceCount = await db.attendance.count();
    const expenseCount = await db.expense.count();

    console.log("Record Counts:");
    console.log(`  Members: ${memberCount}`);
    console.log(`  Plans: ${planCount}`);
    console.log(`  Subscriptions: ${subCount}`);
    console.log(`  Payments: ${paymentCount}`);
    console.log(`  Attendance: ${attendanceCount}`);
    console.log(`  Expenses: ${expenseCount}`);

    if (planCount > 0) {
      const plans = await db.membershipPlan.findMany({
        select: { id: true, name: true, price: true, durationInDays: true, organizationId: true },
      });
      console.log("Existing Plans:");
      for (const p of plans) {
        console.log(`  - [${p.id}] ${p.name}: ₹${p.price} (${p.durationInDays} days) orgId: ${p.organizationId}`);
      }
    }
  } catch (err) {
    console.error("Database connection/query error:", err);
  } finally {
    await db.$disconnect();
  }
}

inspect();
