import Link from "next/link";
import { redirect } from "next/navigation";
import {
  ArrowDownRight,
  ArrowUpRight,
  CircleDollarSign,
  ReceiptText,
  Wallet,
  Users,
  UserCheck,
  UserPlus,
  Clock,
  TrendingUp,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/shared/stat-card";
import { getCurrentUser } from "@/lib/auth";
import { can } from "@/lib/permissions";
import { getReportsData } from "@/lib/reports";

function money(value: string, currency: string) {
  return Number(value).toLocaleString("en-IN", { style: "currency", currency, minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function date(value: string) {
  const [year, month, day] = value.split("-");
  return `${month}/${day}/${year}`;
}
function label(value: string) {
  return value.replaceAll("_", " ");
}

export default async function ReportsPage({ searchParams }: { searchParams: Promise<{ range?: string }> }) {
  const user = await getCurrentUser();
  if (!can(user.role, "reports:view")) redirect("/dashboard");
  const params = await searchParams;
  const data = await getReportsData(user.organizationId, params.range);
  const currency = user.organization.currency;
  const maxRevenue = Math.max(1, ...data.revenueTrend.map((item) => Number(item.amount)));
  const maxAttendance = Math.max(1, ...data.attendance.trend.map((item) => item.count));
  const maxFinancial = Math.max(1, ...data.financialTrend.flatMap((item) => [Number(item.revenue), Number(item.expenses)]));

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
            <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Executive Intelligence</span>
          </div>
          <h1 className="mt-1 text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
            Reports &amp; Analytics
          </h1>
          <p className="text-xs text-slate-400">
            Real-time financial performance, athlete attendance velocity, and membership analytics.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            ["this-month", "This month"],
            ["today", "Today"],
            ["this-week", "This week"],
            ["last-month", "Last month"],
            ["this-year", "This year"],
          ].map(([value, text]) => (
            <Button
              key={value}
              variant={data.range.key === value ? "default" : "outline"}
              size="sm"
              asChild
              className={
                data.range.key === value
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold"
                  : "border-white/[0.1] text-slate-300 hover:bg-slate-800 hover:text-white"
              }
            >
              <Link href={`/reports?range=${value}`}>{text}</Link>
            </Button>
          ))}
        </div>
      </div>

      {/* Financial Overview */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-black uppercase tracking-tight text-white">
            Financial Overview ({data.range.label})
          </h2>
          <span className="text-xs text-slate-400">
            Net Revenue: <strong className="text-white">{money(data.financial.revenue, currency)}</strong>
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Money Collected"
            value={money(data.financial.collected, currency)}
            icon={Wallet}
            tone="positive"
            trend={`${data.financial.paymentCount} payments recorded`}
          />
          <StatCard
            label="Expenses"
            value={money(data.financial.expenses, currency)}
            icon={ReceiptText}
            tone="default"
            trend={`${data.financial.expenseCount} entries`}
          />
          <StatCard
            label="Current Outstanding"
            value={money(data.financial.outstanding, currency)}
            icon={CircleDollarSign}
            tone={Number(data.financial.outstanding) > 0 ? "warning" : "default"}
            trend="Pending member dues"
          />
          <StatCard
            label="Net Cash Flow"
            value={money(data.financial.netCashFlow, currency)}
            icon={Number(data.financial.netCashFlow) < 0 ? ArrowDownRight : ArrowUpRight}
            tone={Number(data.financial.netCashFlow) < 0 ? "warning" : "positive"}
            trend="Collected minus expenses"
          />
        </div>
      </section>

      {/* Revenue vs Expenses Chart */}
      <section className="space-y-3">
        <h2 className="text-base font-black uppercase tracking-tight text-white">
          Revenue vs. Expenses Trend
        </h2>
        <Card className="border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl shadow-xl overflow-hidden p-6">
          {data.financialTrend.every((item) => Number(item.revenue) === 0 && Number(item.expenses) === 0) ? (
            <p className="py-16 text-center text-xs text-slate-400">No financial activity recorded for this period.</p>
          ) : (
            <div className="flex h-56 items-end gap-3 pt-4">
              {data.financialTrend.map((item) => (
                <div key={item.label} className="flex min-w-0 flex-1 flex-col items-center gap-2">
                  <div className="flex h-44 w-full items-end gap-1.5 justify-center">
                    <div
                      className="min-w-0 w-full max-w-[28px] rounded-t-lg bg-gradient-to-t from-cyan-600 to-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.3)] transition-all hover:brightness-125"
                      style={{ height: `${Math.max(4, (Number(item.revenue) / maxFinancial) * 100)}%` }}
                      title={`Revenue ${money(item.revenue, currency)}`}
                    />
                    <div
                      className="min-w-0 w-full max-w-[28px] rounded-t-lg bg-gradient-to-t from-rose-600 to-rose-400 shadow-[0_0_12px_rgba(244,63,94,0.3)] transition-all hover:brightness-125"
                      style={{ height: `${Math.max(4, (Number(item.expenses) / maxFinancial) * 100)}%` }}
                      title={`Expenses ${money(item.expenses, currency)}`}
                    />
                  </div>
                  <span className="truncate text-[10px] font-bold uppercase tracking-wider text-slate-400">{item.label}</span>
                </div>
              ))}
            </div>
          )}
          <div className="mt-4 flex justify-center gap-6 text-xs text-slate-400 border-t border-white/[0.06] pt-4">
            <span className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
              <span className="font-semibold text-slate-300">Revenue Collections</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-rose-400 shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
              <span className="font-semibold text-slate-300">Operational Expenses</span>
            </span>
          </div>
        </Card>
      </section>

      {/* Payment Methods & Expense Breakdown */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl shadow-xl overflow-hidden">
          <CardHeader className="border-b border-white/[0.08] bg-slate-950/40 py-3.5 px-5">
            <CardTitle className="text-sm font-black uppercase tracking-tight text-white">Payment Methods</CardTitle>
          </CardHeader>
          <CardContent className="p-5">
            {data.paymentMethods.length === 0 ? (
              <p className="py-8 text-center text-xs text-slate-400">No payments for this period.</p>
            ) : (
              <div className="space-y-3">
                {data.paymentMethods.map((item) => (
                  <div key={item.method} className="flex items-center justify-between border-b border-white/[0.04] pb-2 text-xs last:border-0 last:pb-0">
                    <span className="font-bold text-slate-300 uppercase tracking-wide">{label(item.method)}</span>
                    <span className="font-mono font-bold text-cyan-400">{money(item.amount, currency)}</span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl shadow-xl overflow-hidden">
          <CardHeader className="border-b border-white/[0.08] bg-slate-950/40 py-3.5 px-5">
            <CardTitle className="text-sm font-black uppercase tracking-tight text-white">Expense Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="p-5">
            {data.expenseBreakdown.length === 0 ? (
              <p className="py-8 text-center text-xs text-slate-400">No expenses for this period.</p>
            ) : (
              <div className="space-y-3">
                {data.expenseBreakdown.map((item) => (
                  <div key={item.category} className="flex items-center justify-between border-b border-white/[0.04] pb-2 text-xs last:border-0 last:pb-0">
                    <span className="font-bold text-slate-300 uppercase tracking-wide">{label(item.category)}</span>
                    <span className="font-mono font-bold text-rose-400">{money(item.amount, currency)}</span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Membership KPI Overview */}
      <section className="space-y-3">
        <h2 className="text-base font-black uppercase tracking-tight text-white">Membership Overview</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Total Members" value={String(data.members.total)} icon={Users} tone="default" />
          <StatCard label="Active Roster" value={String(data.members.active)} icon={UserCheck} tone="positive" />
          <StatCard label="New Additions" value={String(data.members.newMembers)} icon={UserPlus} tone="default" />
          <StatCard label="Expiring in 7 Days" value={String(data.members.expiring)} icon={Clock} tone={data.members.expiring > 0 ? "warning" : "default"} />
        </div>
      </section>

      {/* Visual Trends */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl shadow-xl overflow-hidden p-6">
          <h3 className="text-sm font-black uppercase tracking-tight text-white mb-4">Monthly Revenue Flow</h3>
          <div className="flex h-48 items-end gap-2">
            {data.revenueTrend.map((item) => (
              <div key={item.month} className="flex min-w-0 flex-1 flex-col items-center gap-2">
                <div className="flex h-40 w-full items-end justify-center">
                  <div
                    className="w-full max-w-[32px] rounded-t-lg bg-gradient-to-t from-blue-600 via-sky-500 to-cyan-400 shadow-[0_0_10px_rgba(0,245,255,0.3)] transition-all hover:brightness-125"
                    style={{ height: `${Math.max(4, (Number(item.amount) / maxRevenue) * 100)}%` }}
                    title={money(item.amount, currency)}
                  />
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{item.month}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl shadow-xl overflow-hidden p-6">
          <h3 className="text-sm font-black uppercase tracking-tight text-white mb-4">Attendance Frequency</h3>
          {data.attendance.trend.length === 0 ? (
            <p className="py-16 text-center text-xs text-slate-400">No attendance records for this period.</p>
          ) : (
            <div className="flex h-48 items-end gap-2">
              {data.attendance.trend.map((item) => (
                <div key={item.date} className="flex min-w-0 flex-1 flex-col items-center gap-2">
                  <div className="flex h-40 w-full items-end justify-center">
                    <div
                      className="w-full max-w-[24px] rounded-t-lg bg-gradient-to-t from-emerald-600 to-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.3)] transition-all hover:brightness-125"
                      style={{ height: `${Math.max(4, (item.count / maxAttendance) * 100)}%` }}
                      title={`${item.count} visits`}
                    />
                  </div>
                  <span className="truncate text-[10px] font-mono text-slate-400">{item.date.slice(5)}</span>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>

      {/* Expiring Memberships */}
      <Card className="border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl shadow-xl overflow-hidden">
        <CardHeader className="border-b border-white/[0.08] bg-slate-950/40 py-3.5 px-5">
          <CardTitle className="text-sm font-black uppercase tracking-tight text-white">Expiring Memberships (Next 7 Days)</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {data.expiringMemberships.length === 0 ? (
            <p className="py-8 text-center text-xs text-slate-400">No memberships expiring in the next 7 days.</p>
          ) : (
            <DarkTable
              rows={data.expiringMemberships.map((item) => [item.member, item.plan, date(item.endDate), `${item.daysRemaining} days`])}
              headers={["Member", "Plan", "End date", "Days remaining"]}
            />
          )}
        </CardContent>
      </Card>

      {/* Payment Collection History */}
      <Card className="border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl shadow-xl overflow-hidden">
        <CardHeader className="border-b border-white/[0.08] bg-slate-950/40 py-3.5 px-5">
          <CardTitle className="text-sm font-black uppercase tracking-tight text-white">Payment Collection History</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {data.payments.length === 0 ? (
            <p className="py-8 text-center text-xs text-slate-400">No payment activity for this period.</p>
          ) : (
            <DarkTable
              rows={data.payments.map((payment) => [
                date(payment.date),
                payment.member,
                money(payment.amount, currency),
                label(payment.method),
                payment.status,
                payment.reference,
              ])}
              headers={["Date", "Member", "Amount", "Method", "Status", "Reference"]}
              badges
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function DarkTable({ headers, rows, badges = false }: { headers: string[]; rows: string[][]; badges?: boolean }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[700px] text-sm">
        <thead>
          <tr className="border-b border-white/[0.08] bg-slate-950/40 text-left text-xs uppercase tracking-wider text-slate-400 font-bold">
            {headers.map((header) => (
              <th key={header} className="h-10 px-4 font-bold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/[0.04]">
          {rows.map((row, rowIndex) => (
            <tr key={`${row[0]}-${rowIndex}`} className="transition-colors hover:bg-white/[0.03]">
              {row.map((cell, cellIndex) => (
                <td key={`${cell}-${cellIndex}`} className="p-4 text-xs text-slate-300">
                  {badges && cellIndex === 4 ? (
                    <Badge variant={cell === "COMPLETED" ? "success" : "secondary"}>
                      {cell}
                    </Badge>
                  ) : cellIndex === 2 && cell.startsWith("₹") ? (
                    <span className="font-mono font-bold text-white">{cell}</span>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
