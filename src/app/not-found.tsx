import Link from "next/link";
import { ArrowLeft, Dumbbell, Home, LayoutDashboard, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#080a11] text-white px-4 text-center selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Ambient background glow */}
      <div className="absolute w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.08),transparent_70%)] pointer-events-none blur-3xl" />

      <div className="relative mx-auto max-w-lg space-y-6">
        <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500 via-sky-500 to-blue-600 text-white shadow-[0_0_25px_rgba(0,245,255,0.4)]">
          <Dumbbell className="size-8" />
        </div>

        <div className="space-y-2">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400">
            404 — Route Not Found
          </p>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Lost on the Floor?
          </h1>
          <p className="text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
            The page you requested doesn’t exist or has moved. Choose where you’d like to jump next:
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button asChild className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:brightness-110 shadow-lg shadow-cyan-500/20">
            <Link href="/" className="inline-flex items-center gap-2">
              <Home className="size-4" />
              <span>ChaloBuild Home</span>
            </Link>
          </Button>

          <Button asChild variant="outline" className="w-full sm:w-auto border-white/[0.1] bg-slate-900/60 text-slate-200 hover:bg-slate-800 hover:text-white">
            <Link href="/demo/ironcore" className="inline-flex items-center gap-2">
              <Dumbbell className="size-4 text-red-400" />
              <span>Explore Demo Gym</span>
            </Link>
          </Button>

          <Button asChild variant="outline" className="w-full sm:w-auto border-white/[0.1] bg-slate-900/60 text-slate-200 hover:bg-slate-800 hover:text-white">
            <Link href="/dashboard" className="inline-flex items-center gap-2">
              <LayoutDashboard className="size-4 text-cyan-400" />
              <span>Staff Console</span>
            </Link>
          </Button>
        </div>

        <div className="pt-6 border-t border-white/[0.08]">
          <p className="text-xs text-slate-400">
            Need custom software built for your gym?{" "}
            <a
              href={`${siteConfig.contact.whatsappLink}?text=${encodeURIComponent(
                "Hi ChaloBuild! I have a question about building custom software for my gym."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline inline-flex items-center gap-1 font-semibold"
            >
              <MessageCircle className="size-3" />
              <span>Chat with an Engineer</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
