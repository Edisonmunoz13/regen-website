"use client";

import { useState } from "react";
import { JoinWaitlistModal } from "./JoinWaitlistModal";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section id="waitlist" className="py-16 sm:py-24 text-white">
      <div className="container-page text-center">
        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">
          <span className="text-white">Bet as usual.</span>
          <br className="hidden sm:block" />
          <span className="text-emerald-500">Stack cash automatically.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-zinc-300">
          Regen analyzes your sports betting activity and saves automatically from wins and smart rules.
        </p>
        <div className="mx-auto mt-8 flex  max-w-lg items-center gap-2">
          <input
            className="w-full rounded-md bg-white px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Enter your email"
            onFocus={() => setOpen(true)}
          />
          <button
            className="group inline-flex w-[40%] border-none items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #183731 0%, #1f5e4c 100%)" }}
            onClick={() => setOpen(true)}
          >
            Join Waitlist
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <JoinWaitlistModal open={open} onClose={() => setOpen(false)} />
      </div>
    </section>
  );
}
