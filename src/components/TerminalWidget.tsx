"use client";

import { useState } from "react";

export default function TerminalWidget() {
  const [activeTab, setActiveTab] = useState<"profile" | "skills" | "active">("profile");

  return (
    <div className="card-cyber corner-bracket overflow-hidden rounded-2xl border border-[#00ff9d]/25 bg-[#050914]/90 backdrop-blur-xl shadow-[0_0_35px_rgba(0,255,157,0.12)]">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#03060f] border-b border-[#00ff9d]/15 text-xs font-mono select-none">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <span className="ml-2 text-slate-400 text-[11px]">root@security-core:~ (bash)</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-[#00ff9d]/70">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-pulse" />
          <span>ENC: AES-256</span>
        </div>
      </div>

      {/* Terminal Quick Switch Tabs */}
      <div className="flex items-center gap-1 px-4 py-2 bg-[#040813] border-b border-white/[0.05] text-[11px] font-mono">
        {[
          { id: "profile", label: "whoami.sh" },
          { id: "skills", label: "capabilities.json" },
          { id: "active", label: "telemetry.log" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`px-2.5 py-1 rounded transition-colors duration-200 ${
              activeTab === tab.id
                ? "bg-[#00ff9d]/15 text-[#00ff9d] border border-[#00ff9d]/30 font-semibold"
                : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Terminal Body */}
      <div className="p-5 font-mono text-xs leading-relaxed space-y-3 min-h-[220px]">
        {activeTab === "profile" && (
          <div className="space-y-2 animate-fade-in">
            <div className="text-slate-400">
              <span className="text-[#00ff9d]">┌──(root㉿kali)-[~/identity]</span>
              <br />
              <span className="text-[#00ff9d]">└─$</span> whoami --verbose
            </div>
            <div className="pl-3 text-slate-300 space-y-1 border-l-2 border-[#00ff9d]/30">
              <p><span className="text-cyan-400">NAME:</span> Khoirun Nuha (@khoirunnuha)</p>
              <p><span className="text-cyan-400">ROLE:</span> Cybersecurity Specialist & CTF Competitor</p>
              <p><span className="text-cyan-400">BASE:</span> Tuban, Jawa Timur, Indonesia</p>
              <p><span className="text-cyan-400">ACCOLADES:</span> Juara 1 CTF IT-FAIR 2026 · Juara 2 APL CTF 2026 · Medallion LKS Jatim</p>
            </div>
            <div className="pt-2 text-slate-400">
              <span className="text-[#00ff9d]">┌──(root㉿kali)-[~/identity]</span>
              <br />
              <span className="text-[#00ff9d]">└─$</span> ./get_availability.py
              <span className="text-emerald-400 ml-2">[✓] TERBUKA UNTUK KOLABORASI</span>
            </div>
          </div>
        )}

        {activeTab === "skills" && (
          <div className="space-y-2 animate-fade-in">
            <div className="text-slate-400">
              <span className="text-[#00ff9d]">┌──(root㉿kali)-[~/arsenal]</span>
              <br />
              <span className="text-[#00ff9d]">└─$</span> cat capabilities.json | jq .
            </div>
            <div className="pl-3 text-slate-300 font-mono text-[11px] space-y-1 border-l-2 border-cyan-400/30">
              <p><span className="text-cyan-400">&quot;offensive&quot;</span>: [<span className="text-emerald-400">&quot;Web Exploitation&quot;</span>, <span className="text-emerald-400">&quot;PWN&quot;</span>, <span className="text-emerald-400">&quot;Reverse Eng&quot;</span>],</p>
              <p><span className="text-cyan-400">&quot;defense&quot;</span>: [<span className="text-emerald-400">&quot;Forensics&quot;</span>, <span className="text-emerald-400">&quot;Code Review&quot;</span>, <span className="text-emerald-400">&quot;Threat Modeling&quot;</span>],</p>
              <p><span className="text-cyan-400">&quot;languages&quot;</span>: [<span className="text-amber-400">&quot;Python&quot;</span>, <span className="text-amber-400">&quot;TypeScript&quot;</span>, <span className="text-amber-400">&quot;PHP&quot;</span>, <span className="text-amber-400">&quot;C/C++&quot;</span>],</p>
              <p><span className="text-cyan-400">&quot;tooling&quot;</span>: [<span className="text-violet-400">&quot;Burp Suite Pro&quot;</span>, <span className="text-violet-400">&quot;GDB/Pwndbg&quot;</span>, <span className="text-violet-400">&quot;Docker&quot;</span>]</p>
            </div>
          </div>
        )}

        {activeTab === "active" && (
          <div className="space-y-2 animate-fade-in">
            <div className="text-slate-400">
              <span className="text-[#00ff9d]">┌──(root㉿kali)-[~/logs]</span>
              <br />
              <span className="text-[#00ff9d]">└─$</span> tail -n 4 system_telemetry.log
            </div>
            <div className="pl-3 text-slate-300 space-y-1 font-mono text-[11px] border-l-2 border-emerald-400/30">
              <p className="text-emerald-400">[200 OK] Dokumen Write-up Event CTF & LKS termuat</p>
              <p className="text-cyan-400">[200 OK] Repositori proyek & web apps tersinkronisasi</p>
              <p className="text-amber-400">[AUDIT] Rekam jejak kejuaraan CTF diperbarui</p>
              <p className="text-purple-400">[READY] Menunggu inisiasi kontak dari kolaborator...</p>
            </div>
          </div>
        )}

        {/* Blinking prompt line */}
        <div className="pt-2 flex items-center gap-1.5 text-[#00ff9d]">
          <span className="text-[#00ff9d]">&gt;</span>
          <span className="cursor-blink inline-block w-2 h-4 bg-[#00ff9d]" />
        </div>
      </div>
    </div>
  );
}
