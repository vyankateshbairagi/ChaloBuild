"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, Dumbbell, Globe, Menu, Search } from "lucide-react";

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
    <div className="flex min-h-screen bg-slate-50 text-slate-900">
      {/* Desktop Fixed Sidebar */}
      <aside className="hidden w-72 shrink-0 border-r border-slate-200 bg-white md:block">
        <div className="fixed inset-y-0 left-0 flex w-72 flex-col border-r border-slate-200 bg-white">
          <SidebarNav user={user} />
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Sticky Header */}
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md">
          <div className="flex h-16 items-center gap-3 px-4 md:px-6">
            {/* Mobile Sidebar Trigger */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-slate-700"
                  aria-label="Open navigation"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 p-0 bg-white">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <SidebarNav user={user} onNavigate={() => setOpen(false)} />
              </SheetContent>
            </Sheet>

            {/* Mobile Gym Identity */}
            <div className="flex items-center gap-2 md:hidden">
              <div className="flex size-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                <Dumbbell className="size-4" />
              </div>
              <span className="truncate text-sm font-bold text-slate-900 max-w-36">
                {orgName}
              </span>
            </div>

            {/* Global Search Bar */}
            <div className="hidden min-w-0 flex-1 max-w-md md:block">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 size-4 text-slate-400" />
                <input
                  aria-label="Global search"
                  placeholder="Search members, plans, payments..."
                  className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Right Header Navigation & Actions */}
            <div className="ml-auto flex items-center gap-2">
              {/* Public Website Preview Link */}
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600"
              >
                <Link href="/" target="_blank">
                  <Globe className="size-3.5 text-slate-500" />
                  <span>Public Site</span>
                </Link>
              </Button>

              {/* Date Badge */}
              <div className="hidden rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 lg:block">
                {new Date().toLocaleDateString("en-IN", {
                  weekday: "short",
                  day: "numeric",
                  month: "short",
                })}
              </div>

              {/* User Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-10 gap-2 px-2 hover:bg-slate-100">
                    <Avatar className="size-8">
                      <AvatarFallback className="bg-blue-100 text-blue-700 text-xs font-bold">
                        {user.name.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden max-w-28 truncate text-sm font-semibold text-slate-900 lg:block">
                      {user.name}
                    </span>
                    <ChevronDown className="size-4 text-slate-400" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 border-slate-200 bg-white">
                  <DropdownMenuLabel>
                    <p className="truncate font-semibold text-slate-900">{user.name}</p>
                    <p className="truncate text-xs font-normal text-slate-500">{user.email}</p>
                    <span className="mt-1 inline-block rounded bg-blue-50 px-1.5 py-0.5 text-[10px] font-semibold text-blue-700">
                      {user.role} • {orgName}
                    </span>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-slate-100" />
                  <DropdownMenuItem asChild>
                    <Link href="/settings" className="cursor-pointer text-slate-700 hover:text-slate-900">
                      Gym Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <form action={logoutAction} className="w-full">
                      <button type="submit" className="w-full text-left text-rose-600 font-medium">
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
