import Link from "next/link";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { awards } from "@/data/awards";
import { writeups } from "@/data/writeups";
import ProjectCard from "@/components/ProjectCard";
import AwardCard from "@/components/AwardCard";
import WriteupCard from "@/components/WriteupCard";
import Reveal from "@/components/Reveal";
import FloatingParticles from "@/components/FloatingParticles";
import TerminalWidget from "@/components/TerminalWidget";

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);
  const featuredAwards = awards.filter((a) => a.featured).slice(0, 3);
  const latestWriteups = writeups.slice(0, 3);

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          HERO SECTION (CYBER HACKER AESTHETIC)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Layered Cyber Backgrounds */}
        <div className="absolute inset-0 bg-cyber-grid opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#00ff9d]/[0.03] via-transparent to-[#030712]" />

        {/* Ambient Glowing Orbs */}
        <div
          className="orb orb-emerald w-[550px] h-[550px] -top-36 -left-36"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="orb orb-cyan w-[450px] h-[450px] top-1/4 -right-32"
          style={{ animationDelay: "-4s" }}
        />
        <div
          className="orb orb-amber w-[300px] h-[300px] bottom-10 left-1/3"
          style={{ animationDelay: "-8s" }}
        />

        {/* Network Constellation Canvas */}
        <FloatingParticles />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading & Intro */}
            <div className="lg:col-span-7">
              {/* Status Badge */}
              <div className="animate-fade-up delay-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00ff9d]/30 bg-[#00ff9d]/10 mb-6 text-xs font-mono text-[#00ff9d]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff9d] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff9d]" />
                </span>
                <span className="tracking-wider">RISET_KEAMANAN_SIBER // ACTIVE_NODE</span>
              </div>

              {/* Main Heading */}
              <h1 className="animate-fade-up delay-100 text-4xl sm:text-6xl lg:text-6xl font-bold tracking-tight mb-4 leading-[1.1]">
                Halo, Saya{" "}
                <span className="gradient-hacker">{profile.name}</span>
                <span className="cursor-blink text-[#00ff9d] ml-1">_</span>
              </h1>

              {/* Tagline */}
              <p className="animate-fade-up delay-200 font-mono text-base sm:text-lg text-emerald-400/90 mb-5 flex items-center gap-2">
                <span className="text-[#00ff9d]">&gt;</span>
                <span>{profile.tagline}</span>
              </p>

              {/* Bio */}
              <p className="animate-fade-up delay-300 text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-xl">
                {profile.bio}
              </p>

              {/* CTAs */}
              <div className="animate-fade-up delay-400 flex flex-wrap gap-3.5 mb-10">
                <Link
                  href="/projects"
                  className="btn-cyber-primary group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-300"
                >
                  <span>Jelajahi Proyek</span>
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link
                  href="/writeups"
                  className="btn-cyber-secondary group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-300"
                >
                  <span>Baca Write-up</span>
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Social Channels */}
              <div className="animate-fade-up delay-500 flex items-center gap-4">
                <span className="text-[11px] text-slate-400 font-mono tracking-widest uppercase">
                  // CONTACT:
                </span>
                <div className="h-px w-8 bg-gradient-to-r from-[#00ff9d]/50 to-transparent" />
                <div className="flex items-center gap-2">
                  {[
                    {
                      href: profile.socials.github, label: "GitHub",
                      icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>,
                    },
                    {
                      href: profile.socials.linkedin, label: "LinkedIn",
                      icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
                    },
                    {
                      href: profile.socials.twitter, label: "Twitter",
                      icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
                    },
                    {
                      href: profile.socials.email, label: "Email",
                      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                    },
                  ].map((s) => (
                    <Link
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="p-2.5 rounded-xl border border-[#00ff9d]/20 bg-[#070c16]/80 text-slate-400 hover:text-[#00ff9d] hover:border-[#00ff9d]/60 hover:shadow-[0_0_15px_rgba(0,255,157,0.3)] transition-all duration-200 hover:-translate-y-1"
                    >
                      {s.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Terminal Widget */}
            <div className="lg:col-span-5 animate-fade-up delay-300">
              <TerminalWidget />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          TELEMETRY & STATS HUD
      ───────────────────────────────────────────────────────────── */}
      <Reveal>
        <div className="border-y border-[#00ff9d]/15 bg-[#040813]/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="reveal-group is-visible grid grid-cols-2 md:grid-cols-4 gap-6 text-center font-mono">
              {[
                { val: projects.length, suffix: "", label: "PROYEK_DIBANGUN", color: "text-[#00ff9d]" },
                { val: awards.length, suffix: "", label: "PENGHARGAAN_JUARA", color: "text-amber-400" },
                { val: writeups.length, suffix: "", label: "WRITEUP_EVENT", color: "text-cyan-400" },
                { val: 2, suffix: "+", label: "TAHUN_PENGALAMAN", color: "text-emerald-400" },
              ].map((s) => (
                <div key={s.label} className="group p-4 rounded-xl border border-white/[0.04] hover:border-[#00ff9d]/25 transition-all duration-300">
                  <p className={`text-4xl font-bold ${s.color} transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(0,255,157,0.3)]`}>
                    {s.val}{s.suffix}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 tracking-wider">[{s.label}]</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* ─────────────────────────────────────────────────────────────
          MAIN CONTENT SECTIONS
      ───────────────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-28">

        {/* ── Featured Projects ── */}
        <section>
          <Reveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-xs text-[#00ff9d] font-mono tracking-widest uppercase mb-1.5">// 0x01_ARSENAL</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white font-mono">
                  Proyek Unggulan
                </h2>
                <div className="mt-2 h-0.5 w-16 bg-gradient-to-r from-[#00ff9d] to-transparent rounded-full" />
              </div>
              <Link
                href="/projects"
                className="link-underline font-mono text-xs uppercase tracking-wider text-slate-400 hover:text-[#00ff9d] transition-colors duration-200 flex items-center gap-1.5"
              >
                <span>Lihat Semua Proyek</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </Reveal>

          <Reveal variant="group">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </Reveal>
        </section>

        {/* ── Featured Awards ── */}
        <section>
          <Reveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-xs text-amber-400 font-mono tracking-widest uppercase mb-1.5">// 0x02_ACCOLADES</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white font-mono">
                  Prestasi & Penghargaan
                </h2>
                <div className="mt-2 h-0.5 w-16 bg-gradient-to-r from-amber-400 to-transparent rounded-full" />
              </div>
              <Link
                href="/awards"
                className="link-underline font-mono text-xs uppercase tracking-wider text-slate-400 hover:text-amber-400 transition-colors duration-200 flex items-center gap-1.5"
              >
                <span>Lihat Semua Prestasi</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </Reveal>

          <Reveal variant="group">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredAwards.map((award, i) => (
                <AwardCard key={award.id} award={award} index={i} />
              ))}
            </div>
          </Reveal>
        </section>

        {/* ── Latest Write-ups ── */}
        {latestWriteups.length > 0 && (
          <section id="latest-writeups">
            <Reveal>
              <div className="flex items-end justify-between mb-10">
                <div>
                  <p className="text-xs text-cyan-400 font-mono tracking-widest uppercase mb-1.5">// 0x03_RESEARCH_LOGS</p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white font-mono">
                    Write-up Event Keamanan Siber
                  </h2>
                  <div className="mt-2 h-0.5 w-16 bg-gradient-to-r from-cyan-400 to-transparent rounded-full" />
                </div>
                <Link
                  href="/writeups"
                  className="link-underline font-mono text-xs uppercase tracking-wider text-slate-400 hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1.5"
                >
                  <span>Lihat Semua Write-up</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </Reveal>

            <Reveal variant="group">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {latestWriteups.map((writeup, i) => (
                  <WriteupCard key={writeup.id} writeup={writeup} index={i} />
                ))}
              </div>
            </Reveal>
          </section>
        )}

        {/* ── Cyber Contact Beacon ── */}
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-3xl border border-[#00ff9d]/30 bg-gradient-to-br from-[#00ff9d]/10 via-[#050914] to-cyan-500/10 p-10 sm:p-14 text-center shadow-[0_0_50px_rgba(0,255,157,0.12)]">
            <div className="orb orb-emerald w-72 h-72 -top-20 -left-20 opacity-40" />
            <div className="orb orb-cyan w-60 h-60 -bottom-16 -right-16 opacity-40" />
            <div className="relative z-10">
              <p className="text-xs text-[#00ff9d] font-mono tracking-widest uppercase mb-3">
                [ TRANSMISI // SALURAN AMAN ]
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-mono">
                Inisiasi Komunikasi & Kolaborasi
              </h2>
              <p className="text-slate-300 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
                Terbuka untuk evaluasi keamanan, tim kompetisi CTF, penelitian kerentanan siber, serta kolaborasi pengembangan sistem.
              </p>
              <Link
                href={profile.socials.email}
                className="btn-cyber-primary inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300"
              >
                <span>Kirim Pesan Terenkripsi →</span>
              </Link>
            </div>
          </div>
        </Reveal>

      </div>
    </>
  );
}
