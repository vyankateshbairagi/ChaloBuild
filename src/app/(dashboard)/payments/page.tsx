import Link from "next/link";
import { Prisma, type PaymentMethod, type PaymentStatus } from "@prisma/client";
import { redirect } from "next/navigation";
import { AlertCircle, ArrowDownRight, CreditCard, IndianRupee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { StatCard } from "@/components/shared/stat-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";
import { can } from "@/lib/permissions";
import { PaymentActions } from "@/components/payments/payment-actions";

function price(value: string) { const [whole, decimals] = value.split("."); return `₹${whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${decimals ? `.${decimals}` : ".00"}`; }
function date(value: Date) { const [year, month, day] = value.toISOString().slice(0, 10).split("-"); return `${month}/${day}/${year}`; }
function first(value: string | string[] | undefined) { return Array.isArray(value) ? value[0] : value; }

export default async function PaymentsPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const user = await getCurrentUser();
  if (!can(user.role, "payments:view")) redirect("/dashboard");
  const params = await searchParams;
  const search = first(params.search)?.trim() ?? "";
  const method = first(params.method);
  const status = first(params.status);
  const page = Math.max(1, Number(first(params.page) ?? "1") || 1);
  const pageSize = 20;
  const where: Prisma.PaymentWhereInput = { organizationId: user.organizationId };
  if (method) where.paymentMethod = method as PaymentMethod;
  if (status) where.status = status as PaymentStatus;
  if (search) where.OR = [{ id: { contains: search, mode: "insensitive" } }, { receiptNumber: { contains: search, mode: "insensitive" } }, { member: { name: { contains: search, mode: "insensitive" } } }, { member: { phone: { contains: search, mode: "insensitive" } } }];
  const [payments, total, completed, refunded, subscriptions] = await Promise.all([
    db.payment.findMany({ where, orderBy: { paymentDate: "desc" }, skip: (page - 1) * pageSize, take: pageSize, select: { id: true, amount: true, paymentMethod: true, paymentDate: true, receiptNumber: true, status: true, member: { select: { name: true } }, subscription: { select: { plan: { select: { name: true } } } } } }),
    db.payment.count({ where }),
    db.payment.aggregate({ where: { organizationId: user.organizationId, status: "COMPLETED" }, _sum: { amount: true } }),
    db.payment.aggregate({ where: { organizationId: user.organizationId, status: { in: ["REFUNDED", "PARTIALLY_REFUNDED"] } }, _sum: { amount: true } }),
    db.subscription.findMany({ where: { organizationId: user.organizationId }, select: { amount: true, payments: { where: { status: "COMPLETED" }, select: { amount: true } } } }),
  ]);
  const outstanding = subscriptions.reduce((sum, subscription) => sum + Number(subscription.amount) - subscription.payments.reduce((paid, payment) => paid + Number(payment.amount), 0), 0);
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
            <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Financial Ledger</span>
          </div>
          <h1 className="mt-1 text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
            Payments &amp; Collections
          </h1>
          <p className="text-xs text-slate-400">
            Real-time fee receipts, membership transactions, and pending settlements.
          </p>
        </div>
        {can(user.role, "payments:create") && (
          <Button asChild className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:brightness-110 shadow-lg shadow-cyan-500/20">
            <Link href="/payments/new">+ Record Payment</Link>
          </Button>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Collected" value={price(completed._sum.amount?.toString() ?? "0")} icon={IndianRupee} tone="positive" />
        <StatCard label="Refunded / Void" value={price(refunded._sum.amount?.toString() ?? "0")} icon={ArrowDownRight} tone="default" />
        <StatCard label="Outstanding Dues" value={price(Math.max(0, outstanding).toFixed(2))} icon={AlertCircle} tone={outstanding > 0 ? "warning" : "default"} />
        <StatCard label="Total Transactions" value={String(total)} icon={CreditCard} tone="default" />
      </div>

      <Card className="border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl shadow-xl overflow-hidden">
        <CardContent className="p-0">
          <form className="flex flex-col gap-3 border-b border-white/[0.08] bg-slate-900/40 p-4 sm:flex-row sm:items-center">
            <Input aria-label="Search payments" name="search" defaultValue={search} placeholder="Search member, phone, receipt #..." className="h-10 min-w-0 flex-1 border-white/[0.1] bg-slate-950/60 text-white placeholder:text-slate-500" />
            <select aria-label="Filter by payment method" name="method" defaultValue={method ?? ""} className="h-10 rounded-lg border border-white/[0.1] bg-slate-950/60 px-3 text-sm text-slate-200 shadow-sm">
              <option value="">All methods</option>
              {["CASH", "UPI", "CARD", "BANK_TRANSFER", "CHEQUE", "ONLINE", "OTHER"].map((value) => <option key={value} value={value}>{value}</option>)}
            </select>
            <select aria-label="Filter by payment status" name="status" defaultValue={status ?? ""} className="h-10 rounded-lg border border-white/[0.1] bg-slate-950/60 px-3 text-sm text-slate-200 shadow-sm">
              <option value="">All statuses</option>
              {["PENDING", "FAILED", "COMPLETED", "REFUNDED", "PARTIALLY_REFUNDED", "VOIDED"].map((value) => <option key={value} value={value}>{value}</option>)}
            </select>
            <Button type="submit" variant="outline" className="border-white/[0.1] text-slate-200 hover:bg-slate-800 hover:text-white">
              Filter
            </Button>
          </form>

          {payments.length === 0 ? (
            <div className="px-6 py-16 text-center">
              <CreditCard className="mx-auto size-10 text-slate-600 mb-3" />
              <p className="font-bold text-white text-base">No payments found</p>
              <p className="text-xs text-slate-400 mt-1">Record a payment to begin building financial history.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] text-sm">
                <thead>
                  <tr className="border-b border-white/[0.08] text-left text-xs uppercase tracking-wider text-slate-400 font-bold bg-slate-950/40">
                    <th className="h-10 px-4">Receipt</th>
                    <th className="h-10 px-4">Member</th>
                    <th className="h-10 px-4">Plan</th>
                    <th className="h-10 px-4">Amount</th>
                    <th className="h-10 px-4">Method</th>
                    <th className="h-10 px-4">Date</th>
                    <th className="h-10 px-4">Status</th>
                    <th className="h-10 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {payments.map((payment) => (
                    <tr key={payment.id} className="transition-colors hover:bg-white/[0.03]">
                      <td className="p-4 font-mono font-bold text-cyan-400">
                        <Link href={`/payments/${payment.id}`} className="hover:underline">
                          {payment.receiptNumber}
                        </Link>
                      </td>
                      <td className="p-4 font-semibold text-white">{payment.member.name}</td>
                      <td className="p-4 text-slate-300">{payment.subscription?.plan.name ?? "-"}</td>
                      <td className="whitespace-nowrap p-4 font-bold text-white">{price(payment.amount.toString())}</td>
                      <td className="p-4">
                        <span className="inline-flex items-center rounded-md border border-white/[0.08] bg-slate-800/60 px-2 py-0.5 text-xs font-semibold text-slate-300">
                          {payment.paymentMethod}
                        </span>
                      </td>
                      <td className="whitespace-nowrap p-4 text-xs text-slate-400">{date(payment.paymentDate)}</td>
                      <td className="p-4">
                        <Badge
                          variant={
                            payment.status === "COMPLETED"
                              ? "success"
                              : payment.status === "REFUNDED"
                              ? "destructive"
                              : "secondary"
                          }
                        >
                          {payment.status}
                        </Badge>
                      </td>
                      <td className="p-4 text-right">
                        {payment.status === "COMPLETED" && (
                          <PaymentActions
                            paymentId={payment.id}
                            amount={payment.amount.toString()}
                            canRefund={can(user.role, "payments:refund")}
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="flex items-center justify-between border-t border-white/[0.08] p-4 text-xs text-slate-400">
            <span>Page {page} of {totalPages}</span>
            <div className="flex gap-2">
              {page > 1 && (
                <Button variant="outline" size="sm" asChild className="border-white/[0.1] text-slate-300 hover:bg-slate-800 hover:text-white">
                  <Link href={`/payments?page=${page - 1}`}>Previous</Link>
                </Button>
              )}
              {page < totalPages && (
                <Button variant="outline" size="sm" asChild className="border-white/[0.1] text-slate-300 hover:bg-slate-800 hover:text-white">
                  <Link href={`/payments?page=${page + 1}`}>Next</Link>
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
