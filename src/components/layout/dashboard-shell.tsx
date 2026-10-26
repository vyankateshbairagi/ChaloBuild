"use client";

import * as React from "react";
import Link from "next/link";
import {
  ChevronDown,
  Dumbbell,
  Globe,
  Menu,
  Search,
  Sparkles,
  CalendarCheck,
  ArrowUpRight,
  ShieldCheck,
  Clock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logoutAction } from "@/actions/auth";
import type { CurrentUser } from "@/lib/auth";
import { gymConfig } from "@/config/gym";

export function DashboardShell({
  children,
  user,
}: {
  children: React.ReactNode;
  user: CurrentUser;
}) {
  const [open, setOpen] = React.useState(false);
  const orgName = user.organization?.name || gymConfig.name;

  return (
    <div className="flex min-h-screen bg-[#080a11] text-slate-100 font-sans dark selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Desktop Fixed Sidebar */}
      <aside className="hidden w-72 shrink-0 border-r border-white/[0.08] bg-[#0b0e18] md:block">
        <div className="fixed inset-y-0 left-0 flex w-72 flex-col border-r border-white/[0.08] bg-[#0b0e18]">
          <SidebarNav user={user} />
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Sticky Dark Glass Header */}
        <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#0b0e18]/90 backdrop-blur-xl">
          <div className="flex h-16 items-center gap-3 px-4 md:px-6">
            {/* Mobile Sidebar Trigger */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-slate-300 hover:bg-slate-800 hover:text-white"
                  aria-label="Open navigation"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 p-0 bg-[#0b0e18] border-r border-white/[0.08] text-white">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <SidebarNav user={user} onNavigate={() => setOpen(false)} />
              </SheetContent>
            </Sheet>

            {/* Mobile Gym Identity */}
            <div className="flex items-center gap-2 md:hidden">
              <div className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 text-white font-bold text-xs shadow-[0_0_10px_rgba(0,245,255,0.3)]">
                <Dumbbell className="size-4" />
              </div>
              <span className="truncate text-sm font-bold text-white max-w-36">
                {orgName}
              </span>
            </div>

            {/* Global Search Bar */}
            <div className="hidden min-w-0 flex-1 max-w-md md:block">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 size-4 text-slate-400" />
                <input
                  aria-label="Global search"
                  placeholder="Search members by name, phone, code..."
                  className="h-9 w-full rounded-xl border border-white/[0.08] bg-slate-900/80 pl-9 pr-12 text-xs text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:bg-slate-900 focus:ring-1 focus:ring-cyan-400"
                />
                <span className="absolute right-2.5 top-2 text-[10px] font-bold text-slate-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5 rounded">
                  ⌘K
                </span>
              </div>
            </div>

            {/* Right Header Navigation & Actions */}
            <div className="ml-auto flex items-center gap-2.5">
              {/* Public Website Preview Link */}
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-white hover:bg-slate-800/80 rounded-xl border border-cyan-500/20"
              >
                <Link href="/demo/ironcore" target="_blank">
                  <Globe className="size-3.5 text-cyan-400" />
                  <span>View Public Website</span>
                  <ArrowUpRight className="size-3 text-slate-400" />
                </Link>
              </Button>

              {/* Fast Attendance Check-In Pill */}
              <Button
                asChild
                size="sm"
                className="hidden lg:inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-md shadow-emerald-600/20"
              >
                <Link href="/attendance">
                  <CalendarCheck className="size-3.5" />
                  <span>1-Tap Check-In</span>
                </Link>
              </Button>

              {/* Date Badge */}
              <div className="hidden rounded-xl border border-white/[0.08] bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-300 lg:flex items-center gap-1.5">
                <Clock className="size-3 text-cyan-400" />
                <span>
                  {new Date().toLocaleDateString("en-IN", {
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                  })}
                </span>
              </div>

              {/* User Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-10 gap-2 px-2 hover:bg-slate-800 text-white rounded-xl">
                    <Avatar className="size-8">
                      <AvatarFallback className="bg-gradient-to-tr from-cyan-600 to-blue-600 text-white text-xs font-black shadow-xs">
                        {user.name.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden max-w-28 truncate text-xs font-bold text-white lg:block">
                      {user.name}
                    </span>
                    <ChevronDown className="size-3.5 text-slate-400" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 border-white/[0.08] bg-[#0c101c] text-white backdrop-blur-2xl shadow-2xl">
                  <DropdownMenuLabel>
                    <p className="truncate font-bold text-white">{user.name}</p>
                    <p className="truncate text-xs font-normal text-slate-400">{user.email}</p>
                    <span className="mt-1.5 inline-block rounded-md bg-cyan-950/80 border border-cyan-500/40 px-2 py-0.5 text-[10px] font-bold text-cyan-300">
                      {user.role} • {orgName}
                    </span>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-white/[0.08]" />
                  <DropdownMenuItem asChild>
                    <Link href="/settings" className="cursor-pointer text-slate-300 hover:text-white hover:bg-slate-800/80 text-xs">
                      Gym Settings &amp; Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/" className="cursor-pointer text-cyan-400 hover:text-cyan-300 hover:bg-slate-800/80 text-xs flex items-center justify-between">
                      <span>ChaloBuild Studio</span>
                      <ArrowUpRight className="size-3" />
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-white/[0.08]" />
                  <DropdownMenuItem asChild>
                    <form action={logoutAction} className="w-full">
                      <button type="submit" className="w-full text-left text-rose-400 hover:text-rose-300 text-xs font-semibold py-1">
                        Log out
                      </button>
                    </form>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page Content Body */}
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <div className="mx-auto w-full max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
