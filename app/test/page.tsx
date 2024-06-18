"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  return (
    <main>
      <button
        className="text-white rounded bg-red-400 p-4 m-8"
        onClick={() => {
          router.refresh();
        }}
      >
        Click router refresh
      </button>
    </main>
  );
}
