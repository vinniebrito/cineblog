"use client";

import { Heart } from "lucide-react";
import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [bump, setBump] = useState(false);

  const handle = () => {
    setLikes((n) => n + 1);
    setBump(true);
    setTimeout(() => setBump(false), 180);
  };

  return (
    <button
      onClick={handle}
      className={`btn mt-6 inline-flex items-center gap-2 ${
        bump ? "scale-[1.04]" : ""
      } bg-black text-white px-3 py-2 rounded-md hover:bg-gray-800 transition-colors cursor-pointer`}
      aria-label="Curtir este post"
    >
      <Heart size={16} className="fill-white" />
      <span className="text-white">Curtir</span>
      <span className="ml-1 text-white">({likes})</span>
    </button>
  );
}
