"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What does Regen do?",
    a: "Regen turns your betting action into savings. Every time you bet, win, or lose, we move a percentage you pick from your checking account into a savings wallet. Your bankroll stays untouched. You stack on the side every time you play.",
  },
  {
    q: "How does it work?",
    a: "Connect your sportsbook accounts. Link your checking account and pick your savings percentage. Bet like you normally would. We handle the rest.",
  },
  {
    q: "How do you know when I bet, win, or lose?",
    a: "You connect your sportsbook accounts at sign-up through a secure read-only link. We see the action, we calculate the savings. We never place bets, touch your book balance, or move money inside your book.",
  },
  {
    q: "Which sportsbooks and prediction markets do you work with?",
    a: "DraftKings, FanDuel, BetMGM, Caesars, ESPN BET, Fanatics, Underdog, PrizePicks, Fliff, bet365, Kalshi, and more. Connect as many as you play on.",
  },
  {
    q: "Do you take money from my sportsbook?",
    a: "No. The money we save always moves from your checking account, not your book. Your sportsbook balance is yours. You can't place bets on Regen either. We're a fintech, not a sportsbook.",
  },
  {
    q: "What if I don't have money in my checking account?",
    a: "You set a minimum we won't dip below (default: $200). We also cap every transfer at $100. No surprise hits.",
  },
  {
    q: "Can I change my savings percentage or pause it?",
    a: "Anytime. Dial it up, dial it down, or pause it. You're always in control.",
  },
  {
    q: "Is my money safe?",
    a: "Yes. Held at Wells Fargo, FDIC-insured up to $250,000. Same protection as any bank account.",
  },
  {
    q: "Is there a fee?",
    a: "Free for early joiners. If that ever changes, we'll tell you. No surprise fees.",
  },
  {
    q: "How do I get my money out?",
    a: "Request a withdrawal in the app. Money lands in your checking account via ACH in 1 to 3 business days. No fees, no minimums.",
  },
  {
    q: "Which states is Regen available in?",
    a: "All 50.",
  },
  {
    q: "What happens if I close my account?",
    a: "You'll be prompted to withdraw your full balance to your checking account before we close things out. Your money is yours.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="scroll-mt-24 py-24 md:py-32 border-t border-zinc-800/80"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-black tracking-tight text-white md:text-5xl">
          FAQ
        </h2>
        <div className="mt-12 w-full">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-zinc-800/80">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-semibold text-white transition-colors hover:text-emerald-400"
                  aria-expanded={isOpen}
                >
                  <span>{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-5"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-base text-zinc-400">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
