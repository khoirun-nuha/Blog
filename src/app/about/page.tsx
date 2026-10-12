import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { awards } from "@/data/awards";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about my background, skills, and interests in cybersecurity and software development.",
};

const skills = {
  "Offensive Security": ["Penetration Testing", "Web Exploitation", "Binary Exploitation (PWN)", "Reverse Engineering", "Source Code Audit", "Cryptanalysis"],
  "Programming & Scripting": ["Python", "PHP", "JavaScript"],
  "Security Tooling": ["Burp Suite", "GDB & Pwndbg", "Ghidra / IDA", "Wireshark", "Docker", "Metasploit", "Nmap", "WpScan"],
  "Platforms & Labs": ["PicoCTF", "TryHackMe", "CTFd Infrastructure", "BCC"],
};

const skillColors: Record<string, string> = {
  "Offensive Security": "text-red-400 bg-red-500/10 border-red-500/30",
  "Programming & Scripting": "text-[#00ff9d] bg-[#00ff9d]/10 border-[#00ff9d]/30",
  "Security Tooling": "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
  "Platforms & Labs": "text-purple-400 bg-purple-500/10 border-purple-500/30",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <div className="relative border-b border-[#00ff9d]/15 bg-[#040813]">
        <div className="absolute inset-0 bg-cyber-grid opacity-50" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00ff9d]/30 bg-[#00ff9d]/10 text-[#00ff9d] text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-pulse" />
            <span>// 0x04_OPERATOR_DOSSIER</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3 font-mono">
            Tentang <span className="gradient-hacker">Peneliti</span>
          </h1>
          <p className="text-slate-300 max-w-xl text-sm leading-relaxed">
            Latar belakang teknis, filosofi riset keamanan, keahlian siber, dan saluran komunikasi resmi.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Dossier & Skills */}
          <div className="lg:col-span-2 space-y-10">
            {/* Operator Card */}
            <div className="card-cyber p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#00ff9d]/10 border border-[#00ff9d]/30 flex items-center justify-center text-2xl font-black text-[#00ff9d] shadow-[0_0_20px_rgba(0,255,157,0.25)]">
                  &gt;_
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white font-mono">{profile.name}</h2>
                  <p className="text-[#00ff9d] font-mono text-xs">{profile.username}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{profile.location}</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {profile.bio}
              </p>
            </div>

            {/* Background Story */}
            <div className="card-cyber p-8">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-mono">
                <span className="text-[#00ff9d] text-sm">[01]</span>
                Misi & Filosofi Riset
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed text-sm">
                <p>
                  Saya mendalami dunia keamanan siber melalui kompetisi Capture The Flag (CTF) dan Lomba Kompetensi Siswa (LKS) DIKMEN,
                  dengan fokus mendalam pada bagaimana suatu arsitektur sistem bekerja dan bagaimana sistem tersebut dapat diamankan dari celah eksploitasi.
                  Cara tercepat memahami kekuatan arsitektur perangkat lunak adalah dengan mengetahui persis bagaimana sistem tersebut dapat ditembus.
                </p>
                <p>
                  Selain memecahkan tantangan eksploitasi web, forensik digital, dan rekayasa balik (reverse engineering),
                  saya aktif merekayasa perkakas otomasi keamanan, membangun sistem informasi web, serta mempublikasikan write-up teknis
                  yang dapat direproduksi sebagai kontribusi nyata bagi komunitas teknologi.
                </p>
              </div>
            </div>

            {/* Technical Arsenal / Skills */}
            <div className="card-cyber p-8">
              <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2 font-mono">
                <span className="text-[#00ff9d] text-sm">[02]</span>
                Keahlian Teknis & Perkakas
              </h2>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <p className={`text-xs font-mono font-medium mb-3 px-3 py-1 rounded-full border w-fit ${skillColors[category]}`}>
                      // {category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1.5 rounded-lg border border-white/[0.08] bg-[#050914] text-slate-300 hover:border-[#00ff9d]/40 hover:text-[#00ff9d] font-mono transition-all duration-200 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Telemetry Sidebar */}
          <div className="space-y-6">
            {/* Quick Metrics */}
            <div className="card-cyber p-6 font-mono">
              <h3 className="text-xs font-semibold text-[#00ff9d] uppercase tracking-wider mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-pulse" />
                METRIK_SISTEM
              </h3>
              <div className="space-y-4 text-xs">
                {[
                  { label: "PROYEK_DIBANGUN", value: projects.length, color: "text-[#00ff9d]" },
                  { label: "PENGHARGAAN_JUARA", value: awards.length, color: "text-amber-400" },
                  { label: "KOMPETISI_DIIKUTI", value: "20+", color: "text-cyan-400" },
                  { label: "PENGALAMAN_SIBER", value: "2 TAHUN", color: "text-emerald-400" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between py-2 border-b border-white/[0.05]">
                    <span className="text-slate-400">[{stat.label}]</span>
                    <span className={`text-base font-bold ${stat.color}`}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Connect Channels */}
            <div className="card-cyber p-6 font-mono">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-5">
                // SALURAN_KOMUNIKASI
              </h3>
              <div className="space-y-3">
                {[
                  { href: profile.socials.github, label: "GitHub", icon: "🐙", color: "hover:text-[#00ff9d] hover:border-[#00ff9d]/40" },
                  { href: profile.socials.linkedin, label: "LinkedIn", icon: "💼", color: "hover:text-blue-400 hover:border-blue-500/40" },
                  { href: profile.socials.twitter, label: "Twitter / X", icon: "🐦", color: "hover:text-sky-400 hover:border-sky-500/40" },
                  { href: profile.socials.email, label: "PGP / Email", icon: "✉️", color: "hover:text-emerald-400 hover:border-emerald-500/40" },
                ].map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-2.5 rounded-xl border border-white/[0.06] bg-[#050914] text-xs text-slate-300 ${social.color} transition-all duration-200 group`}
                  >
                    <span className="text-base">{social.icon}</span>
                    <span>{social.label}</span>
                    <svg className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            {/* Fast Contact Callout */}
            <div className="p-6 rounded-2xl border border-[#00ff9d]/30 bg-gradient-to-br from-[#00ff9d]/10 via-[#070c16] to-cyan-500/10 text-center">
              <p className="text-slate-300 text-xs mb-4 leading-relaxed">
                Mencari praktisi keamanan siber, rekan tim kompetisi CTF, atau pengembang aplikasi handal?
              </p>
              <Link
                href={profile.socials.email}
                className="btn-cyber-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs uppercase font-bold tracking-wider"
              >
                <span>Mulai Hubungi →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
