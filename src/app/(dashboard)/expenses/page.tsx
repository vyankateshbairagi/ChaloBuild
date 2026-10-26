import Link from "next/link";
import { Prisma, type ExpenseCategory, type ExpenseStatus, type PaymentMethod } from "@prisma/client";
import { redirect } from "next/navigation";
import { CreditCard, DollarSign, Receipt, TrendingDown } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { StatCard } from "@/components/shared/stat-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";
import { can } from "@/lib/permissions";

const categories = ["RENT", "ELECTRICITY", "WATER", "INTERNET", "EQUIPMENT", "EQUIPMENT_REPAIR", "MAINTENANCE", "CLEANING", "STAFF", "MARKETING", "SUPPLIES", "SOFTWARE", "INSURANCE", "TAX", "MISCELLANEOUS", "OTHER"] as const;
const methods = ["CASH", "UPI", "CARD", "BANK_TRANSFER", "CHEQUE", "ONLINE", "OTHER"] as const;
function first(value: string | string[] | undefined) { return Array.isArray(value) ? value[0] : value; }
function money(value: Prisma.Decimal | string | number, currency: string) { return Number(value).toLocaleString("en-IN", { style: "currency", currency, minimumFractionDigits: 2 }); }
function date(value: Date, timezone: string) { return new Intl.DateTimeFormat("en-CA", { timeZone: timezone }).format(value); }
function label(value: string) { return value.replaceAll("_", " "); }

export default async function ExpensesPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const user = await getCurrentUser();
  if (!can(user.role, "expenses:view")) redirect("/dashboard");
  const params = await searchParams;
  const search = first(params.search)?.trim() ?? "";
  const category = first(params.category);
  const method = first(params.method);
  const status = first(params.status);
  const from = first(params.from);
  const to = first(params.to);
  const page = Math.max(1, Number(first(params.page) ?? "1") || 1);
  const pageSize = 20;
  const where: Prisma.ExpenseWhereInput = { organizationId: user.organizationId };
  if (search) where.OR = [{ title: { contains: search, mode: "insensitive" } }, { notes: { contains: search, mode: "insensitive" } }, { referenceNumber: { contains: search, mode: "insensitive" } }];
  if (category && categories.includes(category as typeof categories[number])) where.category = category as ExpenseCategory;
  if (method && methods.includes(method as typeof methods[number])) where.paymentMethod = method as PaymentMethod;
  if (status && ["PAID", "PENDING", "CANCELLED"].includes(status)) where.status = status as ExpenseStatus;
  if (from || to) where.expenseDate = { ...(from ? { gte: new Date(`${from}T00:00:00.000Z`) } : {}), ...(to ? { lte: new Date(`${to}T23:59:59.999Z`) } : {}) };
  const [expenses, total, aggregate] = await Promise.all([
    db.expense.findMany({ where, orderBy: { expenseDate: "desc" }, skip: (page - 1) * pageSize, take: pageSize, select: { id: true, title: true, amount: true, category: true, paymentMethod: true, expenseDate: true, status: true, creator: { select: { name: true } } } }),
    db.expense.count({ where }),
    db.expense.aggregate({ where, _sum: { amount: true } }),
  ]);
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const currency = user.organization.currency;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400">
            <span className="size-1.5 rounded-full bg-rose-400 animate-pulse" />
            <span>Cost Management</span>
          </div>
          <h1 className="mt-1 text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
            Operational Expenses
          </h1>
          <p className="text-xs text-slate-400">
            Track equipment maintenance, utilities, staff payroll, and facility expenditures.
          </p>
        </div>
        {can(user.role, "expenses:create") && (
          <Button asChild className="bg-gradient-to-r from-rose-500 to-amber-600 text-white font-bold hover:brightness-110 shadow-lg shadow-rose-500/20">
            <Link href="/expenses/new">+ Record Expense</Link>
          </Button>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Filtered Expenses" value={money(aggregate._sum.amount ?? 0, currency)} icon={TrendingDown} tone="warning" />
        <StatCard label="Total Expense Entries" value={String(total)} icon={Receipt} tone="default" />
        <StatCard label="Current Page Records" value={String(expenses.length)} icon={DollarSign} tone="default" />
      </div>

      <Card className="border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl shadow-xl overflow-hidden">
        <CardContent className="p-0">
          <form className="grid gap-3 border-b border-white/[0.08] bg-slate-900/40 p-4 sm:grid-cols-2 lg:grid-cols-4">
            <Input aria-label="Search expenses" name="search" defaultValue={search} placeholder="Search description or reference..." className="border-white/[0.1] bg-slate-950/60 text-white placeholder:text-slate-500" />
            <select aria-label="Filter by category" name="category" defaultValue={category ?? ""} className="h-10 rounded-lg border border-white/[0.1] bg-slate-950/60 px-3 text-sm text-slate-200">
              <option value="">All categories</option>
              {categories.map((item) => <option key={item} value={item}>{label(item)}</option>)}
            </select>
            <select aria-label="Filter by payment method" name="method" defaultValue={method ?? ""} className="h-10 rounded-lg border border-white/[0.1] bg-slate-950/60 px-3 text-sm text-slate-200">
              <option value="">All methods</option>
              {methods.map((item) => <option key={item} value={item}>{label(item)}</option>)}
            </select>
            <div className="flex gap-2">
              <Input aria-label="Filter expenses from date" type="date" name="from" defaultValue={from} className="border-white/[0.1] bg-slate-950/60 text-white" />
              <Input aria-label="Filter expenses to date" type="date" name="to" defaultValue={to} className="border-white/[0.1] bg-slate-950/60 text-white" />
              <Button type="submit" variant="outline" className="border-white/[0.1] text-slate-200 hover:bg-slate-800 hover:text-white shrink-0">
                Filter
              </Button>
            </div>
          </form>

          {expenses.length === 0 ? (
            <div className="px-6 py-16 text-center">
              <Receipt className="mx-auto size-10 text-slate-600 mb-3" />
              <p className="font-bold text-white text-base">No expenses found</p>
              <p className="mt-1 text-xs text-slate-400">Record your first gym expense to start tracking business spending.</p>
              {can(user.role, "expenses:create") && (
                <Button asChild className="mt-4 bg-gradient-to-r from-rose-500 to-amber-600 text-white font-bold">
                  <Link href="/expenses/new">+ Record Expense</Link>
                </Button>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] text-sm">
                <thead>
                  <tr className="border-b border-white/[0.08] bg-slate-950/40 text-left text-xs uppercase tracking-wider text-slate-400 font-bold">
                    <th className="h-10 px-4">Date</th>
                    <th className="h-10 px-4">Category</th>
                    <th className="h-10 px-4">Description</th>
                    <th className="h-10 px-4">Method</th>
                    <th className="h-10 px-4">Amount</th>
                    <th className="h-10 px-4">Created By</th>
                    <th className="h-10 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {expenses.map((expense) => (
                    <tr key={expense.id} className="transition-colors hover:bg-white/[0.03]">
                      <td className="whitespace-nowrap p-4 text-xs font-mono text-slate-400">{date(expense.expenseDate, user.organization.timezone)}</td>
                      <td className="p-4">
                        <span className="inline-flex items-center rounded-md border border-white/[0.08] bg-slate-800/60 px-2 py-0.5 text-xs font-semibold text-slate-300">
                          {label(expense.category)}
                        </span>
                      </td>
                      <td className="p-4 font-semibold text-white">
                        <Link href={`/expenses/${expense.id}`} className="hover:text-rose-400 hover:underline">
                          {expense.title}
                        </Link>
                      </td>
                      <td className="p-4 text-xs text-slate-300">{expense.paymentMethod ? label(expense.paymentMethod) : "-"}</td>
                      <td className="whitespace-nowrap p-4 font-mono font-bold text-rose-400">{money(expense.amount, currency)}</td>
                      <td className="p-4 text-xs text-slate-400">{expense.creator?.name ?? "System"}</td>
                      <td className="p-4">
                        <Badge variant={expense.status === "PAID" ? "success" : expense.status === "CANCELLED" ? "destructive" : "secondary"}>
                          {expense.status}
                        </Badge>
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
                  <Link href={`/expenses?page=${page - 1}`}>Previous</Link>
                </Button>
              )}
              {page < totalPages && (
                <Button variant="outline" size="sm" asChild className="border-white/[0.1] text-slate-300 hover:bg-slate-800 hover:text-white">
                  <Link href={`/expenses?page=${page + 1}`}>Next</Link>
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
