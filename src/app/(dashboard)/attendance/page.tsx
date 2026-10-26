import { Prisma } from "@prisma/client";
import { redirect } from "next/navigation";
import { Activity, CheckCircle2, UserCheck, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { StatCard } from "@/components/shared/stat-card";
import { AttendanceWorkspace } from "@/components/attendance/attendance-workspace";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";
import { can } from "@/lib/permissions";
import { closeStaleAttendance } from "@/lib/attendance-cleanup";
import { businessDateKey } from "@/lib/attendance-time";

function dateKey(value: Date) { return value.toISOString().slice(0, 10); }
function today(timeZone: string) { return new Date(`${businessDateKey(new Date(), timeZone)}T00:00:00.000Z`); }
function first(value: string | string[] | undefined) { return Array.isArray(value) ? value[0] : value; }

export default async function AttendancePage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const user = await getCurrentUser();
  if (!can(user.role, "attendance:view")) redirect("/dashboard");
  const params = await searchParams;
  const search = first(params.search)?.trim() ?? "";
  const selectedDate = first(params.date) ?? dateKey(today(user.organization.timezone));
  const status = first(params.status) ?? "ALL";
  const page = Math.max(1, Number(first(params.page) ?? "1") || 1);
  const pageSize = 20;
  const day = new Date(`${selectedDate}T00:00:00.000Z`);
  const nextDay = new Date(day); nextDay.setUTCDate(nextDay.getUTCDate() + 1);
  const currentDay = today(user.organization.timezone);
  const currentNextDay = new Date(currentDay); currentNextDay.setUTCDate(currentNextDay.getUTCDate() + 1);
  await closeStaleAttendance(db, user.organizationId, user.organization.timezone);
  const where: Prisma.AttendanceWhereInput = { organizationId: user.organizationId, date: { gte: day, lt: nextDay } };
  if (search) where.member = { OR: [{ name: { contains: search, mode: "insensitive" } }, { phone: { contains: search, mode: "insensitive" } }] };
  if (status === "CURRENT") where.checkOutTime = null;
  if (status === "COMPLETED") where.checkOutTime = { not: null };
  const [records, total, totalToday, currentToday, completedToday, members] = await Promise.all([
    db.attendance.findMany({ where, orderBy: { checkInTime: "desc" }, skip: (page - 1) * pageSize, take: pageSize, select: { id: true, date: true, checkInTime: true, checkOutTime: true, member: { select: { id: true, name: true, phone: true } } } }),
    db.attendance.count({ where }),
    db.attendance.count({ where: { organizationId: user.organizationId, date: { gte: currentDay, lt: currentNextDay } } }),
    db.attendance.count({ where: { organizationId: user.organizationId, date: { gte: currentDay, lt: currentNextDay }, checkOutTime: null } }),
    db.attendance.count({ where: { organizationId: user.organizationId, date: { gte: currentDay, lt: currentNextDay }, checkOutTime: { not: null } } }),
    db.member.findMany({ where: { organizationId: user.organizationId }, orderBy: { name: "asc" }, select: { id: true, name: true, phone: true } }),
  ]);
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
            <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Front Desk Terminal</span>
          </div>
          <h1 className="mt-1 text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
            Attendance &amp; Check-Ins
          </h1>
          <p className="text-xs text-slate-400">
            Live floor occupancy, biometric scan log, and athlete arrival tracking.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Today's Check-Ins" value={String(totalToday)} icon={Activity} tone="default" />
        <StatCard label="Currently In Arena" value={String(currentToday)} icon={Users} tone="positive" />
        <StatCard label="Completed Sessions" value={String(completedToday)} icon={CheckCircle2} tone="default" />
        <StatCard label="Total Logged" value={String(total)} icon={UserCheck} tone="default" />
      </div>

      <Card className="border border-white/[0.08] bg-slate-900/60 backdrop-blur-xl shadow-xl overflow-hidden">
        <CardContent className="p-0">
          <AttendanceWorkspace
            records={records.map((record) => ({ ...record, date: record.date.toISOString(), checkInTime: record.checkInTime?.toISOString() ?? null, checkOutTime: record.checkOutTime?.toISOString() ?? null }))}
            members={members}
            canCreate={can(user.role, "attendance:create")}
            canUpdate={can(user.role, "attendance:update")}
            search={search}
            selectedDate={selectedDate}
            status={status}
            page={page}
            totalPages={Math.max(1, Math.ceil(total / pageSize))}
          />
        </CardContent>
      </Card>
    </div>
  );
}
