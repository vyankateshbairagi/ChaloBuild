import { MemberWorkspace } from "@/components/members/member-workspace";
import { Card, CardContent } from "@/components/ui/card";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";
import { can } from "@/lib/permissions";
import { redirect } from "next/navigation";

export default async function MembersPage() {
  const user = await getCurrentUser();
  if (!can(user.role, "members:view")) redirect("/dashboard");
  const [members, plans] = await Promise.all([db.member.findMany({
    where: { organizationId: user.organizationId },
    orderBy: { createdAt: "desc" },
    select: { id: true, name: true, phone: true, email: true, status: true, joiningDate: true, gender: true, dateOfBirth: true, address: true, emergencyContact: true },
  }), db.membershipPlan.findMany({ where: { organizationId: user.organizationId, isActive: true }, orderBy: { name: "asc" }, select: { id: true, name: true, price: true, durationInDays: true } })]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
            <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Roster &amp; Profiles</span>
          </div>
          <h1 className="mt-1 text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
            Athletes &amp; Members
          </h1>
          <p className="text-xs text-slate-400">
            Directory of registered gym members, membership statuses, and contact records.
          </p>
        </div>
      </div>
      <Card className="border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl shadow-xl overflow-hidden">
        <CardContent className="p-0">
          <MemberWorkspace
            members={members.map((member) => ({ ...member, joiningDate: member.joiningDate.toISOString(), dateOfBirth: member.dateOfBirth?.toISOString() ?? null }))}
            plans={plans.map((plan) => ({ ...plan, price: plan.price.toString() }))}
            canEdit={can(user.role, "members:update")}
            canDeactivate={can(user.role, "members:deactivate")}
            canCreate={can(user.role, "members:create")}
          />
        </CardContent>
      </Card>
    </div>
  );
}
