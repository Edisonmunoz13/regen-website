"use client";

import Link from "next/link";
import { AppleLogo } from "./AppleLogo";
import { DownloadIosButton } from "./DownloadIosButton";

export function Hero() {
  return (
    <section
      id="waitlist"
      className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="text-white">Bet as usual.</span>
            <br />
            <span className="text-[#85EFAC]">Stack cash automatically.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400 md:text-xl">
            Regen links to your sportsbook, and saves you cash with every bet.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <DownloadIosButton
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-white transition-all hover:scale-105"
              style={{ backgroundColor: "var(--regen-green)" }}
            >
              <AppleLogo className="h-5 w-5" />
              Download for iOS
            </DownloadIosButton>
            <Link
              href="/about#how"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800/80 bg-zinc-900/50 px-7 py-4 text-base font-semibold text-white transition-all hover:bg-zinc-900"
            >
              See how it works
            </Link>
          </div>
          <p className="mt-6 text-sm text-zinc-500">Coming soon to Android</p>
        </div>
      </div>
    </section>
  );
}
