import { LogIn } from "lucide-react";
import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginForm } from "@/components/shared/login-form";

import { gymConfig } from "@/config/gym";

export default function LoginPage() {
  return (
    <div className="grid min-h-screen bg-muted/30 lg:grid-cols-2">
      <div className="flex items-center justify-center p-4 sm:p-8">
        <Card className="w-full max-w-sm">
          <CardHeader className="items-center text-center">
            <div className="mb-2 flex size-12 items-center justify-center rounded-full bg-muted">
              <LogIn className="size-6 text-muted-foreground" />
            </div>
            <CardTitle>Sign in to {gymConfig.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </div>
      <aside className="relative hidden min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-8 lg:flex">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,29,72,0.18),transparent_55%)]" />
        <div className="relative text-center space-y-4">
          <div className="relative mx-auto h-20 w-80">
            <Image
              src={gymConfig.logo.svg}
              alt={gymConfig.name}
              fill
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest text-rose-400">
            {gymConfig.tagline}
          </p>
          <p className="text-xs text-zinc-400">
            {gymConfig.provider.footerText}
          </p>
        </div>
      </aside>
    </div>
  );
}
