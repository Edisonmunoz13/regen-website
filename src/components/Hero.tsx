"use client";

import Link from "next/link";

export function Hero() {
  return (
    <section id="waitlist" className="py-16 sm:py-24 text-white">
      <div className="container-page text-center">
        <div className="flex justify-center items-center">
        </div>
        <h1 className="mx-auto max-w-3xl text-4xl 
        font-extrabold tracking-tight sm:text-6xl">
          <span className="text-white">Bet as usual.</span>
          <br />
          <span className="text-[#85EFAC]"> Stack cash automatically.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-zinc-300">
          Regen links to your sportsbook, and saves you cash with every bet.
        </p>
        <div className="mx-auto mt-8 flex flex-col items-center gap-4 sm:flex-row sm:max-w-lg sm:justify-center">
          <Link
            href="https://apps.apple.com/us/app/regen-invest/id6758348303"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold text-white transition-all hover:scale-105 border-2"
            style={{ 
              background: "linear-gradient(135deg, #183731 0%, #85EFAC 140%)",
              borderColor: "#85EFAC"
            }}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            Download for iOS
          </Link>
        </div>
      </div>
    </section>
  );
}
