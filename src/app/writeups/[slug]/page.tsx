import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllWriteups, getWriteupBySlug } from "@/lib/writeups";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const writeups = getAllWriteups();
  return writeups.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const writeup = await getWriteupBySlug(slug);
  if (!writeup) return { title: "Not Found" };
  return {
    title: writeup.title,
    description: writeup.excerpt,
    keywords: writeup.tags,
  };
}

const difficultyColors = {
  Easy: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Medium: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  Hard: "text-red-400 bg-red-400/10 border-red-400/20",
  Insane: "text-purple-400 bg-purple-400/10 border-purple-400/20",
};

export default async function WriteupPage({ params }: Props) {
  const { slug } = await params;
  const writeup = await getWriteupBySlug(slug);

  if (!writeup) notFound();

  const formattedDate = new Date(writeup.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/writeups" className="hover:text-cyan-400 transition-colors">Write-ups</Link>
          <span>/</span>
          <span className="text-gray-600 dark:text-gray-300 truncate">{writeup.title}</span>
        </nav>

        {/* Article Header */}
        <header className="mb-10">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs text-gray-400 font-mono">{formattedDate}</span>
            {writeup.readTime && (
              <>
                <span className="text-gray-600">·</span>
                <span className="text-xs text-gray-400">{writeup.readTime}</span>
              </>
            )}
            {writeup.event && (
              <>
                <span className="text-gray-600">·</span>
                <span className="text-xs text-cyan-400 font-medium">{writeup.event}</span>
              </>
            )}
            {writeup.difficulty && (
              <span
                className={`ml-auto text-xs px-2.5 py-1 rounded-full border font-medium ${
                  difficultyColors[writeup.difficulty] || ""
                }`}
              >
                {writeup.difficulty}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {writeup.title}
          </h1>

          <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-6">
            {writeup.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {writeup.tags.map((tag) => (
              <Link
                key={tag}
                href={`/writeups?tag=${encodeURIComponent(tag)}`}
                className="text-xs px-3 py-1 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] text-gray-500 dark:text-gray-400 hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-200"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </header>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-white/10 mb-10" />

        {/* Article Content */}
        <article
          className="prose-writeup"
          dangerouslySetInnerHTML={{ __html: writeup.content }}
        />

        {/* Footer nav */}
        <div className="border-t border-gray-200 dark:border-white/10 mt-12 pt-8">
          <Link
            href="/writeups"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-all duration-200 group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Write-ups
          </Link>
        </div>
      </div>
    </div>
  );
}
