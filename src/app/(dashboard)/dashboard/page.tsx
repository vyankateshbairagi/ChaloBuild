import {
  AlarmClock,
  ArrowRight,
  CalendarCheck,
  CreditCard,
  IndianRupee,
  TrendingUp,
  UserCheck,
  Users,
  Wallet,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Search,
} from "lucide-react";
import Link from "next/link";

import { StatCard } from "@/components/shared/stat-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getDashboardStats } from "@/lib/dashboard";
import { getCurrentUser } from "@/lib/auth";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  const statsData = await getDashboardStats(user.organizationId);
  const todaysAttendance = statsData.todaysAttendance;
  const todaysAttendanceCount = todaysAttendance.length;
  const expiringMemberships = statsData.expiringMemberships;
  const recentPayments = statsData.recentPayments;

  const stats = [
    {
      label: "Total Registered",
      value: statsData.totalMembers.toLocaleString("en-IN"),
      icon: Users,
      tone: "default" as const,
      trend: "All-time profiles",
    },
    {
      label: "Active Members",
      value: statsData.activeMembers.toLocaleString("en-IN"),
      icon: UserCheck,
      tone: "positive" as const,
      trend: "Valid membership passes",
    },
    {
      label: "Expiring in 7 Days",
      value: statsData.expiringSoon.toLocaleString("en-IN"),
      icon: AlarmClock,
      tone: "warning" as const,
      trend: "Actionable renewals",
    },
    {
      label: "Pending Dues",
      value: `₹${Number(statsData.pendingFees).toLocaleString("en-IN", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })}`,
      icon: Wallet,
      tone: "warning" as const,
      trend: "Uncollected balances",
    },
  ];

  const maxRevenue = Math.max(
    ...statsData.revenueTrend.map((item) => Number(item.amount)),
    1
  );

  return (
    <div className="space-y-6 font-sans text-white">
      {/* Top Header & Fast Front-Desk HUD */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 p-6 rounded-3xl border border-white/[0.08] bg-gradient-to-r from-[#0c101d] via-[#090d16] to-[#0c101d] shadow-2xl backdrop-blur-xl relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[150px] bg-[radial-gradient(ellipse_at_center,rgba(0,245,255,0.08),transparent_70%)] pointer-events-none blur-2xl" />

        <div className="relative z-10 space-y-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live Front-Desk Active
            </span>
            <span className="text-xs text-slate-400">• ChaloBuild GymFlow Console</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Welcome back, {user.name.split(" ")[0]}!
          </h1>
          <p className="text-xs text-slate-400">
            Real-time operations, attendance check-ins, and membership collections for today.
          </p>
        </div>

        {/* Quick Operations CTAs */}
        <div className="relative z-10 flex flex-wrap items-center gap-2.5">
          <Button
            asChild
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-md shadow-emerald-600/20"
          >
            <Link href="/attendance">
              <CalendarCheck className="size-3.5 mr-1.5" />
              <span>1-Tap Check-In</span>
            </Link>
          </Button>

          <Button
            asChild
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-md shadow-cyan-600/20"
          >
            <Link href="/members">
              <Users className="size-3.5 mr-1.5" />
              <span>Add Member</span>
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-white/[0.12] bg-slate-900/80 hover:bg-slate-800 text-slate-200 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl"
          >
            <Link href="/payments">
              <CreditCard className="size-3.5 mr-1.5 text-cyan-400" />
              <span>Record Payment</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* 4 Headline Metrics HUD */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      {/* Middle Grid: Revenue Trend & Real-time Attendance Queue */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        {/* Revenue Overview Card */}
        <div className="rounded-2xl border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl p-6 shadow-xl flex flex-col justify-between">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/[0.06]">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex size-7 items-center justify-center rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-cyan-400">
                  <IndianRupee className="size-4" />
                </div>
                <h3 className="text-base font-bold text-white">Collections &amp; Revenue Trend</h3>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">Last 6 months verified payment receipts</p>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-bold">
              <TrendingUp className="size-3.5 text-cyan-400" />
              <span>
                ₹
                {Number(statsData.currentMonthRevenue).toLocaleString("en-IN", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}{" "}
                This Month
              </span>
            </div>
          </div>

          <div className="pt-6">
            {statsData.revenueTrend.every((item) => Number(item.amount) === 0) ? (
              <div className="flex h-36 items-center justify-center rounded-xl border border-dashed border-white/[0.08] bg-slate-950/40 px-4 text-center text-xs text-slate-400">
                No payment transactions recorded yet. Payments recorded at the front desk will graph here automatically.
              </div>
            ) : (
              <div className="flex items-end gap-3 pt-4">
                {statsData.revenueTrend.map((bar, index) => {
                  const height = (Number(bar.amount) / maxRevenue) * 100;
                  return (
                    <div key={`${bar.month}-${index}`} className="flex flex-1 flex-col items-center gap-2">
                      <div className="flex h-36 w-full items-end rounded-t-xl bg-slate-950/60 p-1 border-b border-white/[0.08]">
                        <div
                          className="w-full rounded-t-lg bg-gradient-to-t from-cyan-600 via-sky-500 to-cyan-400 shadow-md shadow-cyan-500/20 transition-all hover:brightness-125"
                          style={{ height: `${Math.max(height, Number(bar.amount) > 0 ? 12 : 4)}%` }}
                          title={`₹${Number(bar.amount).toLocaleString("en-IN")}`}
                        />
                      </div>
                      <span className="text-[11px] font-bold text-slate-400">{bar.month}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-cyan-400" />
              <span>100% Direct to Gym Bank (0% Commission)</span>
            </span>
            <Link href="/payments" className="text-cyan-400 hover:text-cyan-300 font-bold hover:underline">
              View All Payments →
            </Link>
          </div>
        </div>

        {/* Real-time Attendance Check-in Queue */}
        <div className="rounded-2xl border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <div className="flex size-7 items-center justify-center rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-400">
                  <UserCheck className="size-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Today&apos;s Attendance Queue</h3>
                  <p className="text-xs text-slate-400">{todaysAttendanceCount} members checked in so far</p>
                </div>
              </div>

              <Link
                href="/attendance"
                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 hover:underline"
              >
                1-Tap Check-In →
              </Link>
            </div>

            <div className="mt-4 space-y-2.5 max-h-56 overflow-y-auto pr-1">
              {todaysAttendance.length === 0 ? (
                <div className="rounded-xl border border-dashed border-white/[0.08] bg-slate-950/40 p-6 text-center text-xs text-slate-400">
                  <UserCheck className="mx-auto size-8 text-slate-600 mb-2" />
                  <p className="font-semibold text-slate-300">No check-ins yet today.</p>
                  <p className="text-[11px] mt-1 text-slate-500">Tap the 1-Tap Check-In button to search a member and record their arrival.</p>
                </div>
              ) : (
                todaysAttendance.map((a) => (
                  <div
                    key={a.id}
                    className="flex items-center justify-between p-2.5 rounded-xl border border-white/[0.06] bg-slate-950/60 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="flex size-7 items-center justify-center rounded-lg bg-emerald-950 text-emerald-300 font-bold text-xs">
                        {a.member.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">{a.member}</p>
                        <p className="text-[10px] text-slate-400">Verified Member Entry</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded">
                      {a.time}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/[0.06] text-right">
            <Link href="/attendance" className="text-xs font-bold text-cyan-400 hover:underline">
              Open Full Attendance Console →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Grid: Recent Fee Receipts & Expiring Memberships Hub */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {/* Recent Fee Collections Table */}
        <div className="rounded-2xl border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl p-6 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
            <div>
              <h3 className="text-base font-bold text-white">Recent Fee Collections</h3>
              <p className="text-xs text-slate-400">Latest UPI &amp; cash transactions across the gym</p>
            </div>
            <Link
              href="/payments"
              className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:underline"
            >
              <span>View ledger</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="mt-4 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-white/[0.08] hover:bg-transparent">
                  <TableHead className="text-slate-400 text-xs font-bold uppercase">Member</TableHead>
                  <TableHead className="text-slate-400 text-xs font-bold uppercase">Plan</TableHead>
                  <TableHead className="text-slate-400 text-xs font-bold uppercase">Method</TableHead>
                  <TableHead className="text-right text-slate-400 text-xs font-bold uppercase">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentPayments.length === 0 ? (
                  <TableRow className="border-none">
                    <TableCell colSpan={4} className="text-center py-6 text-xs text-slate-400">
                      No payments recorded yet.
                    </TableCell>
                  </TableRow>
                ) : (
                  recentPayments.map((p) => (
                    <TableRow key={p.id} className="border-white/[0.06] hover:bg-slate-800/50">
                      <TableCell className="font-bold text-white text-xs">{p.member}</TableCell>
                      <TableCell className="text-slate-300 text-xs">{p.plan}</TableCell>
                      <TableCell>
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">
                          {p.method}
                        </span>
                      </TableCell>
                      <TableCell className="text-right font-black text-emerald-400 text-xs">
                        ₹{Number(p.amount).toLocaleString("en-IN")}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Expiring Memberships Hub with Direct WhatsApp Reminders */}
        <div className="rounded-2xl border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl p-6 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
            <div>
              <h3 className="text-base font-bold text-white">Expiring Memberships</h3>
              <p className="text-xs text-slate-400">Actionable renewals due in the next 7 days</p>
            </div>
            <Link
              href="/subscriptions"
              className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:underline"
            >
              <span>Manage all</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="mt-4 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-white/[0.08] hover:bg-transparent">
                  <TableHead className="text-slate-400 text-xs font-bold uppercase">Member</TableHead>
                  <TableHead className="text-slate-400 text-xs font-bold uppercase">Plan</TableHead>
                  <TableHead className="text-slate-400 text-xs font-bold uppercase">Expires In</TableHead>
                  <TableHead className="text-right text-slate-400 text-xs font-bold uppercase">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {expiringMemberships.length === 0 ? (
                  <TableRow className="border-none">
                    <TableCell colSpan={4} className="text-center py-6 text-xs text-slate-400">
                      Zero memberships expiring in the next 7 days. All accounts are up-to-date!
                    </TableCell>
                  </TableRow>
                ) : (
                  expiringMemberships.map((m) => {
                    const waText = `Hi ${m.member}! This is a friendly reminder from our gym front desk. Your ${m.plan} membership is due for renewal soon (${m.expiresIn}). Please let us know if you want to renew your plan today!`;
                    const waUrl = `https://wa.me/?text=${encodeURIComponent(waText)}`;

                    return (
                      <TableRow key={m.id} className="border-white/[0.06] hover:bg-slate-800/50">
                        <TableCell className="font-bold text-white text-xs">{m.member}</TableCell>
                        <TableCell className="text-slate-300 text-xs">{m.plan}</TableCell>
                        <TableCell>
                          <span className="text-[10px] font-bold text-amber-300 bg-amber-950/80 border border-amber-500/40 px-2 py-0.5 rounded">
                            {m.expiresIn}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <a
                            href={waUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900 text-[10px] font-bold uppercase tracking-wider transition-all"
                            title="Send WhatsApp renewal template"
                          >
                            <MessageCircle className="size-3 fill-current" />
                            <span>Remind</span>
                          </a>
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Quick Operational Command Strip */}
      <div className="rounded-2xl border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl p-6 shadow-xl">
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
          <div>
            <h3 className="text-base font-bold text-white">Daily Operational Commands</h3>
            <p className="text-xs text-slate-400">Fast shortcuts for receptionists and gym managers</p>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-1 rounded-full">
            Turnkey Studio Console
          </span>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              href: "/members",
              label: "Add New Member",
              desc: "Register profile, photo & emergency contact",
              icon: Users,
              color: "from-cyan-600 to-blue-600",
            },
            {
              href: "/subscriptions",
              label: "Assign Plan / Subscription",
              desc: "1, 3, 6, 12 month membership assignment",
              icon: UserCheck,
              color: "from-blue-600 to-indigo-600",
            },
            {
              href: "/payments",
              label: "Log UPI / Cash Payment",
              desc: "Generate digital receipt & record dues",
              icon: CreditCard,
              color: "from-emerald-600 to-teal-600",
            },
            {
              href: "/attendance",
              label: "Mark Daily Attendance",
              desc: "1-Tap search & check-in verification",
              icon: CalendarCheck,
              color: "from-amber-600 to-orange-600",
            },
          ].map((action) => {
            const Icon = action.icon;
            return (
              <Link
                key={action.href}
                href={action.href}
                className="group flex flex-col justify-between p-4 rounded-xl border border-white/[0.08] bg-slate-950/60 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div className={`flex size-10 items-center justify-center rounded-xl bg-gradient-to-br ${action.color} text-white shadow-md shadow-black/40 group-hover:scale-105 transition-transform`}>
                    <Icon className="size-5" />
                  </div>
                  <ArrowRight className="size-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                </div>
                <div className="mt-4">
                  <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {action.label}
                  </h4>
                  <p className="text-[10px] text-slate-400 mt-0.5 leading-snug">
                    {action.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
