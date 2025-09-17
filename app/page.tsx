import PostCard from "@/components/PostCard";
import { posts } from "@/lib/posts";

export default function HomePage() {
  return (
    <main className="mt-16">
      {/* HERO */}
      <section className="container text-center">
        <h1
          className="mx-auto max-w-4xl text-4xl sm:text-6xl font-serif leading-tight tracking-tight"
          style={{ fontVariationSettings: '"opsz" 32' }}
        >
          Críticas e análises <br className="hidden sm:block" />
          dos filmes mais comentados
        </h1>
        <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
          Do Oscar aos lançamentos mais esperados — um espaço para falar de
          cinema com paixão e profundidade.
        </p>
      </section>

      {/* LISTA DE POSTS */}
      <section className="container mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>
    </main>
  );
}
