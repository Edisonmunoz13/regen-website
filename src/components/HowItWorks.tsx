import Image from "next/image";
import { Link2, ShieldCheck, SlidersHorizontal, Zap } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Link2,
    title: "Link your sportsbooks",
    body: "Connect DraftKings, FanDuel, BetMGM, Underdog, and more in seconds.",
    image: "/images/how/link-your-book.png",
  },
  {
    n: "02",
    icon: SlidersHorizontal,
    title: "Set your savings rate",
    body: "Pick a percentage of every bet you want to save. Change it any time.",
    image: "/images/how/save-from-staked.png",
  },
  {
    n: "03",
    icon: Zap,
    title: "Let it run",
    body: "Every time you bet, Regen moves the amount you've set from your bank account into your Regen wallet.",
    image: "/images/how/savings-chart.png",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      className="scroll-mt-24 py-24 md:py-32 border-t border-zinc-800/80"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            How it works
          </h2>
          <p className="mt-4 text-zinc-400 text-xl">
            Three steps. Then set it and forget it.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map(({ n, icon: Icon, title, body, image }) => (
            <div
              key={n}
              className="group relative flex flex-col rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-8 transition-all hover:border-emerald-500/50"
            >
              <span
                className="text-sm font-mono"
                style={{ color: "var(--regen-green)" }}
              >
                {n}
              </span>
              <Icon
                className="mt-4 h-8 w-8"
                style={{ color: "var(--regen-green)" }}
              />
              <h3 className="mt-6 text-2xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-zinc-400">{body}</p>
              {image && (
                <div className="mt-auto pt-6">
                  <div className="flex aspect-[16/9] w-full items-center justify-center rounded-xl border border-zinc-800/80 bg-black p-4">
                    <Image
                      src={image}
                      alt={title}
                      width={640}
                      height={360}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-16 flex items-center justify-center gap-3 text-xl text-zinc-400">
          <ShieldCheck
            className="h-[30px] w-[30px]"
            style={{ color: "var(--regen-green)" }}
            aria-hidden="true"
          />
          <p>
            Your savings sit in an FDIC-insured account. Withdraw any time.
          </p>
        </div>
      </div>
    </section>
  );
}
