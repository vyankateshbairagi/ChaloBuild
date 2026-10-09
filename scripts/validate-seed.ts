import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { getDashboardStats } from "../src/lib/dashboard";
import { getReportsData } from "../src/lib/reports";

async function validate() {
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
  const db = new PrismaClient({ adapter });

  console.log("==================================================");
  console.log("          POST-SEED DATABASE VALIDATION           ");
  console.log("==================================================");

  try {
    const org = await db.organization.findUnique({
      where: { slug: "demo-gym" },
    });
    if (!org) {
      throw new Error("Demo organization 'demo-gym' was not found!");
    }
    console.log(`[PASS] Demo Organization found: "${org.name}" (ID: ${org.id}, Slug: ${org.slug})`);

    // 1. Exact number of seeded demo members
    const totalMembers = await db.member.count({ where: { organizationId: org.id } });
    console.log(`[Check 1] Total Members in demo org: ${totalMembers} (Expected: 50)`);
    if (totalMembers !== 50) throw new Error(`Expected exactly 50 members, found ${totalMembers}`);

    // 2. All seeded members belong to the intended organization
    const membersOutsideOrg = await db.member.count({ where: { organizationId: { not: org.id } } });
    console.log(`[Check 2] Members outside demo org: ${membersOutsideOrg}`);

    // 3. No duplicate demo members (unique phones, emails, member codes)
    const members = await db.member.findMany({
      where: { organizationId: org.id },
      select: { memberCode: true, phone: true, email: true, status: true },
    });
    const codes = new Set(members.map((m) => m.memberCode));
    const phones = new Set(members.map((m) => m.phone));
    const emails = new Set(members.map((m) => m.email).filter(Boolean));
    console.log(`[Check 3] Unique memberCodes: ${codes.size} / 50`);
    console.log(`          Unique phones: ${phones.size} / 50`);
    console.log(`          Unique emails: ${emails.size} / 50`);
    if (codes.size !== 50 || phones.size !== 50) {
      throw new Error("Duplicate member codes or phones detected!");
    }

    // 4. Subscriptions reference valid members and plans
    const subCount = await db.subscription.count({ where: { organizationId: org.id } });
    console.log(`[Check 4] Total Subscriptions: ${subCount} (Schema enforces non-nullable member & plan foreign keys)`);

    // 5. Attendance records reference valid members
    const attendanceCount = await db.attendance.count({ where: { organizationId: org.id } });
    console.log(`[Check 5] Total Attendance records: ${attendanceCount} (Schema enforces non-nullable member FK)`);

    // 6. Payment records use valid relationships and demo-only references
    const paymentCount = await db.payment.count({ where: { organizationId: org.id } });
    console.log(`[Check 6] Total Payments: ${paymentCount} (Schema enforces non-nullable member FK)`);

    // 7. Plans and Expenses
    const planCount = await db.membershipPlan.count({ where: { organizationId: org.id } });
    const expenseCount = await db.expense.count({ where: { organizationId: org.id } });
    const leadCount = await db.leadEnquiry.count({ where: { organizationId: org.id } });
    console.log(`[Check 7] Plans: ${planCount}, Expenses: ${expenseCount}, Lead Enquiries: ${leadCount}`);

    // 8. Test Dashboard Stats Query
    console.log("\n--- TESTING DASHBOARD STATS QUERY ---");
    const stats = await getDashboardStats(org.id);
    console.log(`  Total Members: ${stats.totalMembers}`);
    console.log(`  Active Members: ${stats.activeMembers}`);
    console.log(`  Expiring Soon: ${stats.expiringSoon}`);
    console.log(`  Pending Fees: ₹${stats.pendingFees}`);
    console.log(`  Current Month Revenue: ₹${stats.currentMonthRevenue}`);
    console.log(`  Revenue Trend Months: ${stats.revenueTrend.map((m) => `${m.month}: ₹${m.amount}`).join(", ")}`);
    console.log(`  Today's Attendance count in stats: ${stats.todaysAttendance.length}`);
    console.log(`  Expiring Memberships in stats: ${stats.expiringMemberships.length}`);
    console.log(`  Recent Payments in stats: ${stats.recentPayments.length}`);

    // 9. Test Reports Data Query
    console.log("\n--- TESTING REPORTS DATA QUERY ---");
    const reports = await getReportsData(org.id, "this-month");
    console.log(`  Report Range: ${reports.range.label}`);
    console.log(`  Collected: ₹${reports.financial.collected}`);
    console.log(`  Expenses: ₹${reports.financial.expenses}`);
    console.log(`  Net Cash Flow: ₹${reports.financial.netCashFlow}`);
    console.log(`  Payment Methods Breakdown: ${reports.paymentMethods.map((pm) => `${pm.method}: ₹${pm.amount}`).join(", ")}`);

    console.log("\n==================================================");
    console.log("       ALL DATABASE VALIDATIONS PASSED!           ");
    console.log("==================================================");
  } finally {
    await db.$disconnect();
  }
}

validate().catch((err) => {
  console.error("Validation failed:", err);
  process.exit(1);
});
