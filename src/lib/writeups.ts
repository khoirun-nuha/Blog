import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface WriteupMeta {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  category: string;
  difficulty?: "Easy" | "Medium" | "Hard" | "Insane";
  event?: string;
  excerpt: string;
  readTime?: string;
}

export interface Writeup extends WriteupMeta {
  content: string;
}

const writeupsDir = path.join(process.cwd(), "src", "content", "writeups");

export function getAllWriteups(): WriteupMeta[] {
  if (!fs.existsSync(writeupsDir)) return [];

  const files = fs.readdirSync(writeupsDir).filter((f) => f.endsWith(".md"));

  const writeups = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = path.join(writeupsDir, filename);
    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(raw);

    const words = content.split(/\s+/).length;
    const readTime = `${Math.ceil(words / 200)} min read`;

    return {
      slug,
      title: data.title || slug,
      date: data.date || new Date().toISOString().split("T")[0],
      tags: data.tags || [],
      category: data.category || "Uncategorized",
      difficulty: data.difficulty,
      event: data.event,
      excerpt: data.excerpt || content.slice(0, 160) + "...",
      readTime,
    } as WriteupMeta;
  });

  return writeups.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getWriteupBySlug(slug: string): Promise<Writeup | null> {
  const fullPath = path.join(writeupsDir, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const raw = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(raw);

  const processed = await remark().use(html).process(content);
  const htmlContent = processed.toString();

  const words = content.split(/\s+/).length;
  const readTime = `${Math.ceil(words / 200)} min read`;

  return {
    slug,
    title: data.title || slug,
    date: data.date || new Date().toISOString().split("T")[0],
    tags: data.tags || [],
    category: data.category || "Uncategorized",
    difficulty: data.difficulty,
    event: data.event,
    excerpt: data.excerpt || content.slice(0, 160) + "...",
    readTime,
    content: htmlContent,
  };
}

export function getAllTags(): string[] {
  const writeups = getAllWriteups();
  const tags = new Set<string>();
  writeups.forEach((w) => w.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}
