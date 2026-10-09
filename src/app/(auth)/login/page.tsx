import { LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginForm } from "@/components/shared/login-form";
import { gymConfig } from "@/config/gym";

export default function LoginPage() {
  return (
    <div className="grid min-h-screen bg-slate-50 lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-sm mb-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-blue-600 transition-colors"
          >
            ← Back to Public Website
          </Link>
          <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
            Staff Portal
          </span>
        </div>

        <Card className="w-full max-w-sm border-slate-200 bg-white shadow-sm">
          <CardHeader className="items-center text-center">
            <div className="mb-2 flex size-12 items-center justify-center rounded-full bg-blue-50 border border-blue-200">
              <LogIn className="size-6 text-blue-600" />
            </div>
            <CardTitle className="text-xl font-bold text-slate-900">
              Gym Management Login
            </CardTitle>
            <p className="text-xs text-slate-500 mt-1">
              Sign in with your authorized staff or owner credentials
            </p>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </div>

      <aside className="relative hidden min-h-screen items-center justify-center overflow-hidden bg-slate-900 p-8 lg:flex">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.2),transparent_65%)]" />
        <div className="relative text-center space-y-4 max-w-md">
          <div className="relative mx-auto h-20 w-80">
            <Image
              src={gymConfig.logo.svg}
              alt={gymConfig.name}
              fill
              className="object-contain drop-shadow-md"
              priority
            />
          </div>
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            {gymConfig.tagline}
          </p>
          <p className="text-xs text-slate-400 leading-relaxed">
            All-in-one gym operations: membership subscriptions, attendance, payments, and member records.
          </p>
          <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-500">
            Powered by{" "}
            <a
              href="https://chalobuild.in"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 font-semibold hover:underline"
            >
              ChaloBuild
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}
