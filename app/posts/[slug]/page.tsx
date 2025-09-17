import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import LikeButton from "@/components/LikeButton";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — CineBlog`,
    description: post.excerpt,
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <main className="mt-16">
      <section className="container text-center">
        <h1 className="mx-auto max-w-4xl font-serif text-4xl sm:text-6xl leading-tight">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-muted">
          {new Date(post.date).toLocaleDateString()} • {post.author}
        </p>
      </section>

      {post.image && (
        <div className="container mt-10">
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[360px] object-cover"
            />
          </div>
        </div>
      )}

      <article className="container prose prose-invert mt-12 whitespace-pre-line">
        {post.content}
      </article>

      <div className="container flex justify-end">
        <LikeButton />
      </div>
    </main>
  );
}
