import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

/**
 * Safe Demo Data Cleanup Script
 * -------------------------------------------------------------
 * Safely removes ONLY demo data scoped to the demo organization ("demo-gym")
 * or demo member codes ("DEMO-1001" to "DEMO-1050").
 * Will NEVER touch or affect real customer/tenant organizations.
 */
async function clearDemoData() {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) {
    throw new Error("DATABASE_URL is not set.");
  }

  const adapter = new PrismaPg({ connectionString: dbUrl });
  const db = new PrismaClient({ adapter });

  console.log("==================================================");
  console.log("         SAFE DEMO DATA CLEANUP OPERATION         ");
  console.log("==================================================");

  try {
    const demoOrg = await db.organization.findUnique({
      where: { slug: "demo-gym" },
      select: { id: true, name: true, slug: true },
    });

    if (!demoOrg) {
      console.log("No demo organization found with slug 'demo-gym'. Nothing to clean.");
      return;
    }

    console.log(`Found target demo organization: "${demoOrg.name}" (${demoOrg.id})`);

    // Clean only demo-gym scoped records
    const attendanceDeleted = await db.attendance.deleteMany({
      where: { organizationId: demoOrg.id },
    });
    console.log(`  - Deleted ${attendanceDeleted.count} demo attendance records.`);

    const paymentsDeleted = await db.payment.deleteMany({
      where: { organizationId: demoOrg.id },
    });
    console.log(`  - Deleted ${paymentsDeleted.count} demo payments.`);

    const subsDeleted = await db.subscription.deleteMany({
      where: { organizationId: demoOrg.id },
    });
    console.log(`  - Deleted ${subsDeleted.count} demo subscriptions.`);

    const membersDeleted = await db.member.deleteMany({
      where: { organizationId: demoOrg.id },
    });
    console.log(`  - Deleted ${membersDeleted.count} demo members.`);

    const plansDeleted = await db.membershipPlan.deleteMany({
      where: { organizationId: demoOrg.id },
    });
    console.log(`  - Deleted ${plansDeleted.count} demo plans.`);

    const expensesDeleted = await db.expense.deleteMany({
      where: { organizationId: demoOrg.id },
    });
    console.log(`  - Deleted ${expensesDeleted.count} demo expenses.`);

    const leadsDeleted = await db.leadEnquiry.deleteMany({
      where: { organizationId: demoOrg.id },
    });
    console.log(`  - Deleted ${leadsDeleted.count} demo lead enquiries.`);

    console.log("Demo records safely removed without affecting any other organization.");
  } finally {
    await db.$disconnect();
  }
}

if (require.main === module) {
  clearDemoData().catch((err) => {
    console.error("Cleanup error:", err);
    process.exit(1);
  });
}
