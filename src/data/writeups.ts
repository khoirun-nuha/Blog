export interface Writeup {
  id: string;
  title: string;
  date: string;
  tags: string[];
  category: "CTF Competition" | "LKS Cyber Security" | "Web Exploitation" | "Forensics" | "Reverse Engineering" | "Cryptography" | "Misc";
  difficulty: "Easy" | "Medium" | "Hard" | "Insane";
  event?: string;
  excerpt: string;
  pdfUrl?: string; // link dokumen / drive
  points?: number;
  solves?: number;
  rank?: string;
  featured?: boolean;
}

export const writeups: Writeup[] = [
  {
    id: "apl-ctf-2026",
    title: "Write-up APL CTF 2026",
    date: "2026-03-15",
    tags: ["APL CTF", "Web Exploitation", "Forensics", "Cryptography", "Pwn"],
    category: "CTF Competition",
    difficulty: "Hard",
    event: "APL CTF 2026",
    excerpt:
      "Dokumentasi dan walkthrough lengkap penyelesaian seluruh tantangan pada kompetisi APL CTF 2026. Membahas metodologi analisis kerentanan, eksploitasi celah keamanan, dan perolehan flag hingga meraih Juara 2.",
    pdfUrl: "https://drive.google.com/file/d/1JKnqWvMRTwiwI9VI9hI4BZA3ALdKySAf/view?usp=sharing",
    rank: "🥈 Juara 2 (2nd Place)",
    featured: true,
  },
  {
    id: "lks-jatim-2026",
    title: "Write-up LKS Cyber Security Jawa Timur 2026",
    date: "2026-04-20",
    tags: ["LKS Jatim", "Network Defense", "Incident Response", "Server Hardening"],
    category: "LKS Cyber Security",
    difficulty: "Insane",
    event: "LKS DIKMEN Jatim 2026",
    excerpt:
      "Laporan teknis dan walkthrough komprehensif modul LKS DIKMEN Bidang Cyber Security Tingkat Jawa Timur 2026. Mencakup mitigasi serangan siber, analisis log jaringan, insiden respon, dan konfigurasi pertahanan infrastruktur.",
    pdfUrl: "https://docs.google.com/document/d/1wf7CPo6W82_kF89yzKEYmA8_5h2TyRLq/edit?usp=sharing&ouid=113644041169534681151&rtpof=true&sd=true",
    rank: "🎖️ Medallion for Excellence",
    featured: true,
  },
  {
    id: "lks-tuban-2026",
    title: "Write-up LKS Cyber Security Kabupaten Tuban 2026",
    date: "2026-02-28",
    tags: ["LKS Tuban", "Network Security", "Digital Forensics", "Linux Hardening"],
    category: "LKS Cyber Security",
    difficulty: "Hard",
    event: "LKS Kab. Tuban 2026",
    excerpt:
      "Dokumentasi penyelesaian tantangan kompetisi LKS DIKMEN Cyber Security Tingkat Kabupaten Tuban 2026. Pembahasan mendalam analisis paket Wireshark, forensik memori, dan keamanan server Linux hingga melaju ke tingkat provinsi.",
    pdfUrl: "https://docs.google.com/document/d/1rRscSPPI8DEBxQeBtQd7OTYAO38ntHBm/edit?usp=sharing&ouid=113644041169534681151&rtpof=true&sd=true",
    rank: "🥈 Juara 2 (2nd Place)",
    featured: true,
  },
  {
    id: "netcom-4-2025",
    title: "Write-up NETCOM 4.0 CTF 2025",
    date: "2025-10-18",
    tags: ["NETCOM 4.0", "Cryptography", "Steganography", "Web Exploit"],
    category: "CTF Competition",
    difficulty: "Medium",
    event: "NETCOM 4.0 2025",
    excerpt:
      "Walkthrough terpadu kompetisi NETCOM 4.0 CTF 2025. Mengupas tuntas alur investigasi tantangan kriptografi modern, decoding steganografi, hingga eksploitasi web application security.",
    pdfUrl: "https://drive.google.com/file/d/1KETxUFFWcH7VDknPWZpWTJEZOlznYqcO/view?usp=sharing",
    featured: true,
  },
  {
    id: "junior-hacker-2025",
    title: "Write-up Junior Hacker Diskominfo Tuban 2025",
    date: "2025-08-10",
    tags: ["Junior Hacker", "Ethical Hacking", "Diskominfo Tuban", "Privilege Escalation"],
    category: "CTF Competition",
    difficulty: "Medium",
    event: "Junior Hacker 2025",
    excerpt:
      "Dokumentasi strategi dan solusi lengkap kompetisi Junior Hacker 2025 yang diselenggarakan Diskominfo Kabupaten Tuban. Pembahasan tahapan recon, vulnerability scanning, dan privilege escalation yang mengantarkan meraih Juara 1.",
    pdfUrl: "https://drive.google.com/file/d/1jj4EFeF_8vnwOPhClPmgPtpTsbqpAKlZ/view?usp=sharing",
    rank: "🥇 Juara 1 (1st Place)",
    featured: true,
  },
  {
    id: "jcc-2025",
    title: "Write-up JCC 2025",
    date: "2025-07-25",
    tags: ["JCC 2025", "Reverse Engineering", "Web Security", "Misc"],
    category: "CTF Competition",
    difficulty: "Hard",
    event: "JCC CTF 2025",
    excerpt:
      "Official write-up event kompetisi JCC CTF 2025. Menjelaskan teknik reverse engineering binary executable, dekompilasi logic, web security evasion, dan pemecahan tantangan kategori Miscellaneous.",
    pdfUrl: "https://drive.google.com/file/d/13atCqJ9Z7QCHgQJ_05wv20qnEfDsNlUC/view?usp=sharing",
    featured: true,
  },
];

export const ALL_CATEGORIES = [
  "All",
  "CTF Competition",
  "LKS Cyber Security",
] as const;

export function getAllWriteupTags(): string[] {
  const tags = new Set<string>();
  writeups.forEach((w) => w.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}
