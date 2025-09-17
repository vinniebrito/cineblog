"use client";

import { posts } from "@/lib/posts";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { X, Search } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function SearchModal({ open, onClose }: Props) {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 10);
    } else {
      setQ("");
    }
  }, [open]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return posts;
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(term) ||
        p.excerpt.toLowerCase().includes(term) ||
        p.slug.toLowerCase().includes(term)
    );
  }, [q]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute left-1/2 top-24 -translate-x-1/2 w-[92%] sm:w-[640px]">
        <div className="card">
          <div className="flex items-center p-3 border-b border-white/10">
            <div className="flex items-center px-3">
              <Search size={16} className="text-muted" />
            </div>
            <input
              ref={inputRef}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Pesquise por título, resumo ou slug…"
              className="input bg-transparent border-none focus:ring-0"
            />
            <button
              onClick={onClose}
              aria-label="Close"
              className="ml-auto mr-2 rounded-lg p-2 hover:bg-white/5"
            >
              <X size={16} />
            </button>
          </div>

          <div className="max-h-[60vh] overflow-y-auto">
            {results.length === 0 ? (
              <p className="px-4 py-6 text-sm text-muted">Nada encontrado.</p>
            ) : (
              <ul className="py-1">
                {results.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/posts/${p.slug}`}
                      className="flex flex-col gap-1 px-4 py-3 hover:bg-white/[0.04]"
                      onClick={onClose}
                    >
                      <span className="text-sm font-medium line-clamp-1">
                        {p.title}
                      </span>
                      <span className="text-[12px] text-muted">
                        /posts/{p.slug}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
