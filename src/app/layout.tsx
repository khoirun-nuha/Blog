import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Khoirun Nuha — Cybersecurity Specialist & CTF Competitor",
    template: "%s | Khoirun Nuha",
  },
  description:
    "Personal portfolio and blog of Khoirun Nuha — Cybersecurity Specialist, CTF Competitor, and Ethical Hacker. Showcasing achievements, write-ups, and projects.",
  keywords: ["Khoirun Nuha", "cybersecurity", "CTF", "hacker", "write-ups", "penetration testing", "LKS Cyber Security", "Tuban"],
  authors: [{ name: "Khoirun Nuha" }],
  creator: "Khoirun Nuha",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://khoirunnuha.dev",
    title: "Khoirun Nuha — Cybersecurity Specialist & CTF Competitor",
    description: "Cybersecurity Specialist, CTF Competitor, and Ethical Hacker portfolio",
    siteName: "khoirunnuha.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khoirun Nuha — Cybersecurity Specialist & CTF Competitor",
    description: "Cybersecurity Specialist, CTF Competitor, and Ethical Hacker portfolio",
    creator: "@khoirunnuha",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#030712] text-[#e2e8f0] antialiased selection:bg-[#00ff9d]/20 selection:text-[#00ff9d]`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
