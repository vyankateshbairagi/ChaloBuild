"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dumbbell, LogOut, Sparkles, CheckCircle2, Globe, ShieldCheck } from "lucide-react";

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
    <div className="flex h-full flex-col bg-[#0b0e18] text-white font-sans select-none">
      {/* Brand Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-4">
        <Link href="/dashboard" className="flex items-center gap-3 min-w-0 group" onClick={onNavigate}>
          <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 via-sky-500 to-blue-600 text-white font-black text-sm shadow-[0_0_15px_rgba(0,245,255,0.3)] group-hover:scale-105 transition-transform">
            <Dumbbell className="size-4.5" />
          </div>
          <div className="min-w-0">
            <h2 className="truncate text-sm font-black tracking-tight text-white leading-tight">
              {orgName}
            </h2>
            <p className="flex items-center gap-1 text-[10px] font-bold text-cyan-400 mt-0.5 uppercase tracking-wider">
              <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>ChaloBuild GymFlow</span>
            </p>
          </div>
        </Link>
      </div>

      {/* Main Nav Items */}
      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          Operations
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
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-semibold transition-all",
                active
                  ? "bg-gradient-to-r from-cyan-950/80 via-blue-950/50 to-transparent text-cyan-300 font-bold border-l-2 border-cyan-400 shadow-sm"
                  : "text-slate-400 hover:bg-slate-900/60 hover:text-white"
              )}
            >
              <Icon className={cn("size-4 shrink-0", active ? "text-cyan-400" : "text-slate-400")} />
              <span>{item.label}</span>
            </Link>
          );
        })}

        {visibleSecondaryItems.length > 0 && (
          <>
            <div className="my-3 border-t border-white/[0.06]" />
            <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Admin &amp; Config
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
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-semibold transition-all",
                active
                  ? "bg-gradient-to-r from-cyan-950/80 via-blue-950/50 to-transparent text-cyan-300 font-bold border-l-2 border-cyan-400 shadow-sm"
                  : "text-slate-400 hover:bg-slate-900/60 hover:text-white"
              )}
            >
              <Icon className={cn("size-4 shrink-0", active ? "text-cyan-400" : "text-slate-400")} />
              <span>{item.label}</span>
            </Link>
          );
        })}

        {/* Studio Build Guarantee Card */}
        <div className="mt-6 mx-1 p-3 rounded-xl border border-white/[0.06] bg-slate-900/40 text-[11px] space-y-1">
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[10px] uppercase tracking-wider">
            <ShieldCheck className="size-3.5" />
            <span>Turnkey Build Active</span>
          </div>
          <p className="text-slate-400 text-[10px] leading-tight">
            100% Code &amp; Data Ownership • Zero recurring monthly SaaS fees.
          </p>
          <Link
            href="/demo/ironcore"
            target="_blank"
            className="text-[10px] font-bold text-cyan-400 hover:underline pt-1 inline-flex items-center gap-1"
          >
            <span>Preview Public Gym Site →</span>
          </Link>
        </div>
      </nav>

      {/* User Card & Logout */}
      <div className="border-t border-white/[0.08] p-3">
        <div className="flex items-center gap-3 rounded-xl bg-slate-900/80 border border-white/[0.08] px-3 py-2.5 shadow-sm">
          <Avatar className="size-9 ring-1 ring-cyan-500/30">
            <AvatarFallback className="bg-gradient-to-tr from-cyan-600 to-blue-600 text-white text-xs font-black">
              {initials(user.name) || "?"}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-bold text-white">{user.name}</p>
            <p className="truncate text-[10px] text-slate-400">
              {ROLE_LABELS[user.role]} · {user.email}
            </p>
          </div>
          <form action={logoutAction}>
            <button
              type="submit"
              title="Log out"
              className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-rose-950/60 hover:text-rose-400"
            >
              <LogOut className="size-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
