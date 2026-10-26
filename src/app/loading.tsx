import { Dumbbell } from "lucide-react";

export default function RootLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#080a11]">
      <div className="flex flex-col items-center gap-3">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500 via-sky-500 to-blue-600 text-white shadow-[0_0_20px_rgba(0,229,255,0.4)] animate-pulse">
          <Dumbbell className="size-6 animate-spin text-white" />
        </div>
        <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400">
          ChaloBuild
        </p>
      </div>
    </div>
  );
}
