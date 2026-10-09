"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dumbbell, LogOut, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { mainNavItems, secondaryNavItems } from "@/components/layout/nav-items";
import { logoutAction } from "@/actions/auth";
import type { CurrentUser } from "@/lib/auth";
import { gymConfig } from "@/config/gym";

function isActive(pathname: string, href: string) {
  if (href === "/dashboard") return pathname === "/dashboard";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  return (parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "");
}

const ROLE_LABELS: Record<CurrentUser["role"], string> = {
  OWNER: "Owner",
  STAFF: "Staff",
};

export function SidebarNav({
  user,
  onNavigate,
}: {
  user: CurrentUser;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const visibleSecondaryItems = secondaryNavItems.filter(
    (item) => !item.roles || item.roles.includes(user.role)
  );

  const orgName = user.organization?.name || gymConfig.name;

  return (
    <div className="flex h-full flex-col bg-white">
      {/* Brand Header */}
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4">
        <Link href="/dashboard" className="flex items-center gap-2.5 min-w-0" onClick={onNavigate}>
          <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-sm shadow-xs">
            <Dumbbell className="size-4" />
          </div>
          <div className="min-w-0">
            <h2 className="truncate text-sm font-bold text-slate-900 leading-tight">
              {orgName}
            </h2>
            <p className="flex items-center gap-1 text-[11px] font-semibold text-blue-600">
              <Sparkles className="size-3" />
              <span>ChaloBuild GymFlow</span>
            </p>
          </div>
        </Link>
      </div>

      {/* Main Nav Items */}
      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
          Management
        </div>

        {mainNavItems.map((item) => {
          const active = isActive(pathname, item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-blue-50 text-blue-700 font-semibold shadow-xs ring-1 ring-blue-200"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              <Icon className={cn("size-4 shrink-0", active ? "text-blue-600" : "text-slate-500")} />
              <span>{item.label}</span>
            </Link>
          );
        })}

        {visibleSecondaryItems.length > 0 && (
          <>
            <Separator className="my-4" />
            <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Settings &amp; Reports
            </div>
          </>
        )}

        {visibleSecondaryItems.map((item) => {
          const active = isActive(pathname, item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-blue-50 text-blue-700 font-semibold shadow-xs ring-1 ring-blue-200"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              <Icon className={cn("size-4 shrink-0", active ? "text-blue-600" : "text-slate-500")} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Card & Logout */}
      <div className="border-t border-slate-200 p-3">
        <div className="flex items-center gap-3 rounded-xl bg-slate-50 border border-slate-200 px-3 py-2.5">
          <Avatar className="size-9 ring-1 ring-slate-200">
            <AvatarFallback className="bg-blue-100 text-blue-700 text-xs font-bold">
              {initials(user.name) || "?"}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-slate-900">{user.name}</p>
            <p className="truncate text-[11px] text-slate-500">
              {ROLE_LABELS[user.role]} · {user.email}
            </p>
          </div>
          <form action={logoutAction}>
            <button
              type="submit"
              title="Log out"
              className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-rose-50 hover:text-rose-600"
            >
              <LogOut className="size-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
