"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* Original Content */}
        <div className="flex flex-col sm:flex-row gap-16">
          <div>
            <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
              <li className="mb-2 tracking-[-.01em]">
                This is{" "}
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                  app/page.tsx
                </code>
                , a demo page prepared by Ermanno for the 1st learning path in CCOVibe.
              </li>
            </ol>
          </div>

          {/* Demo Widget */}
          <div className="p-6 border rounded-lg shadow-md bg-white dark:bg-gray-800">
            <h2 className="text-lg font-bold mb-4">Demo Widget: Counter</h2>
            <p className="text-sm mb-4">
              This is a simple counter widget, added randomly.
            </p>
            <div className="flex items-center gap-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setCount(count - 1)}
              >
                -
              </button>
              <span className="text-lg font-semibold">{count}</span>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            NextJs docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
