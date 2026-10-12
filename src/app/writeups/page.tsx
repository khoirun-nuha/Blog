import type { Metadata } from "next";
import { writeups } from "@/data/writeups";
import WriteupsClient from "./WriteupsClient";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Write-ups",
  description: "Dokumentasi dan walkthrough kompetisi CTF serta LKS Cyber Security per event.",
};

const stats = {
  total:  writeups.length,
  hard:   writeups.filter((w) => w.difficulty === "Hard" || w.difficulty === "Insane").length,
  events: new Set(writeups.map((w) => w.event).filter(Boolean)).size,
};

const statItems = [
  { val: stats.total,  suffix: "",  label: "DOKUMEN_TERBIT",  color: "text-[#00ff9d]" },
  { val: stats.hard,   suffix: "",  label: "MODUL_LANJUT",    color: "text-red-400"    },
  { val: stats.events, suffix: "+", label: "EVENT_KOMPETISI",  color: "text-cyan-400"   },
];

export default function WriteupsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* ── Hero ── */}
      <div className="relative overflow-hidden border-b border-[#00ff9d]/15 bg-[#040813]">
        <div className="absolute inset-0 bg-cyber-grid opacity-60" />
        <div className="absolute top-0 left-1/4 w-96 h-56 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-64 h-40 bg-[#00ff9d]/8 blur-3xl rounded-full pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>// 0x02_SECURITY_INTELLIGENCE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight font-mono">
              Write-up & <span className="gradient-hacker">Dokumentasi Event</span>
            </h1>
            <p className="text-slate-300 max-w-xl text-sm sm:text-base leading-relaxed mb-10">
              Dokumentasi solusi tantangan kompetisi CTF dan modul lomba LKS Cyber Security yang disusun per event.
              Setiap write-up dilengkapi pembahasan alur eksploitasi, metodologi, dan link dokumen resmi.
            </p>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-3 font-mono">
              {statItems.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#070c16] border border-[#00ff9d]/20 hover:border-[#00ff9d]/50 transition-all duration-200"
                >
                  <span className={`text-2xl font-bold ${s.color} drop-shadow-[0_0_8px_rgba(0,255,157,0.3)]`}>{s.val}{s.suffix}</span>
                  <span className="text-xs text-slate-400">[{s.label}]</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <WriteupsClient writeups={writeups} />
      </div>
    </div>
  );
}
