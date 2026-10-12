import type { Metadata } from "next";
import { awards } from "@/data/awards";
import AwardsClient from "./AwardsClient";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Awards & Achievements",
  description: "Daftar penghargaan, kejuaraan CTF, dan sertifikasi kompetensi Khoirun Nuha.",
};

export default function AwardsPage() {
  const years = [...new Set(awards.map((a) => a.year))].sort((a, b) => b - a);

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* ── Hero header ── */}
      <div className="relative overflow-hidden border-b border-[#00ff9d]/15 bg-[#040813]">
        <div className="absolute inset-0 bg-cyber-grid opacity-60" />
        <div className="absolute top-0 left-1/3 w-96 h-56 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-40 bg-[#00ff9d]/8 blur-3xl rounded-full pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-mono mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>// 0x03_HONORS_AND_CREDENTIALS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight font-mono">
              Awards & <span className="gradient-gold">Achievements</span>
            </h1>
            <p className="text-slate-300 max-w-xl text-sm sm:text-base leading-relaxed mb-8">
              Rekam jejak kejuaraan CTF, kompetisi keamanan siber, dan penghargaan LKS DIKMEN
              dari tingkat kabupaten, provinsi Jawa Timur, hingga nasional.
            </p>

            {/* Quick Metrics */}
            <div className="flex flex-wrap items-center gap-3 font-mono">
              <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/25">
                <span className="text-2xl font-bold text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]">{awards.length}</span>
                <span className="text-xs text-slate-300">[TOTAL_PENGHARGAAN]</span>
              </div>
              {years.map((y) => (
                <div key={y} className="px-3.5 py-2 rounded-xl bg-[#070c16] border border-white/[0.08] text-xs text-slate-300">
                  TAHUN_{y}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── Unified Interactive Awards Section ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AwardsClient awards={awards} />
      </div>
    </div>
  );
}
