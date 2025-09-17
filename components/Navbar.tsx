"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Search as SearchIcon } from "lucide-react";
import Search from "./Search";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="sticky top-3 z-50">
        <div className="container">
          <nav className="flex items-center justify-between rounded-2xl bg-[#111]/80 backdrop-blur border border-white/10 px-4 h-12">
            <Link href="/" className="font-semibold tracking-tight">
              <span className="text-white">CINEBLOG</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/about" className="nav-link">
                About
              </Link>
              <button
                onClick={() => setOpen(true)}
                aria-label="Open search"
                className="nav-link inline-flex items-center gap-2 cursor-pointer"
              >
                <SearchIcon size={16} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <Search open={open} onClose={() => setOpen(false)} />
    </>
  );
}
