import { Card, CardContent } from "@/components/ui/card";
import { PlanWorkspace } from "@/components/membership-plans/plan-workspace";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";
import { can } from "@/lib/permissions";
import { redirect } from "next/navigation";

export default async function PlansPage() {
  const user = await getCurrentUser();
  if (!can(user.role, "plans:view")) redirect("/dashboard");
  const plans = await db.membershipPlan.findMany({
    where: { organizationId: user.organizationId },
    orderBy: { createdAt: "desc" },
    select: { id: true, name: true, description: true, price: true, durationInDays: true, isActive: true, createdAt: true, updatedAt: true },
  });

  return (
    <div className="space-y-6">
      <div>
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
          <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>Tier Catalog</span>
        </div>
        <h1 className="mt-1 text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
          Membership Plans &amp; Tiers
        </h1>
        <p className="text-xs text-slate-400">
          Configure membership packages, pricing tiers, and validity cycles.
        </p>
      </div>
      <Card className="border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl shadow-xl overflow-hidden">
        <CardContent className="p-0">
          <PlanWorkspace
            plans={plans.map((plan) => ({ ...plan, price: plan.price.toString(), createdAt: plan.createdAt.toISOString(), updatedAt: plan.updatedAt.toISOString() }))}
            canCreate={can(user.role, "plans:create")}
            canEdit={can(user.role, "plans:update")}
            canDeactivate={can(user.role, "plans:deactivate")}
          />
        </CardContent>
      </Card>
    </div>
  );
}
