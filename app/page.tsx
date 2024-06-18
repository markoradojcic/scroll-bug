"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-col gap-2">
        {Array(100)
          .fill(0)
          .map((x, index) => (
            <Link
              href={"test"}
              style={{ overflowAnchor: "none" }}
              className="mx-8 bg-red-400 px-4 py-4 text-white"
              key={index}
            >
              {index}
            </Link>
          ))}
      </div>
    </main>
  );
}
