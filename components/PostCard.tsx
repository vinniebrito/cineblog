import Link from "next/link";
import { Post } from "@/types";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="card group">
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="h-48 w-full object-cover"
        />
      )}
      <div className="p-5">
        <div className="flex items-center gap-3 text-xs text-muted">
          {post.category && <span>{post.category}</span>}
          <span>•</span>
          <span>{new Date(post.date).toLocaleDateString()}</span>
          {post.readingTime && (
            <>
              <span>•</span>
              <span>{post.readingTime}</span>
            </>
          )}
        </div>
        <h3 className="mt-2 text-xl font-semibold tracking-tight group-hover:opacity-90">
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="mt-2 text-sm text-white/80 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="mt-4">
          <Link
            href={`/posts/${post.slug}`}
            className="text-sm text-brand hover:opacity-85"
          >
            Ler mais →
          </Link>
        </div>
      </div>
    </article>
  );
}
