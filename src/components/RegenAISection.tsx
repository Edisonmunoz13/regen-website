import { Brain, RefreshCw, Lightbulb, Search, PiggyBank } from "lucide-react";
import Image from "next/image";

export function RegenAISection() {
  const sample = `🔥 You're on a heater. Keep leaning into the sports where you're most efficient (⚽🏀 football & basketball: 62% win rate). Skip 🎾⚾ tennis and baseball for now. Stick to single tickets for steady profits and let Regen boost your savings.`;

  return (
    <section id="ai" className="container-page py-14">
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <p className="text-xs tracking-[0.3em] text-emerald-300/80 uppercase">Personalized insights</p>
        <h2 className="mt-2 text-4xl font-extrabold text-white">Regen AI</h2>
        <p className="mt-3 text-zinc-400">Smart, contextual tips based on your real betting activity to help you win smarter and save automatically.</p>
      </div>

      {/* Content: insight card and separate image */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-4 lg:grid-cols-2">
        <div className="self-center rounded-2xl border border-emerald-900/40 bg-black/40 p-4 shadow-xl">
          <div className="flex items-center justify-between px-2 pb-3">
            <div className="flex items-center gap-2 text-white">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-900/40 text-emerald-300"><Brain className="h-4 w-4" /></span>
              <span className="text-base font-semibold">Regen AI Insight</span>
            </div>
            <button
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-white"
              style={{ background: "linear-gradient(135deg, #183731 0%, #1f5e4c 100%)" }}
            >
              <RefreshCw className="h-4 w-4" /> Refresh
            </button>
          </div>

          {/* Icon chips */}
          <div className="px-2 pb-3">
            <div className="flex flex-wrap items-center gap-2 text-emerald-300">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-900/30 px-2 py-1 text-xs"><Search className="h-3.5 w-3.5" /> Context</span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-900/30 px-2 py-1 text-xs"><Lightbulb className="h-3.5 w-3.5" /> Strategy</span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-900/30 px-2 py-1 text-xs"><PiggyBank className="h-3.5 w-3.5" /> Savings</span>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 text-zinc-300">
            <p className="whitespace-pre-wrap text-sm leading-6">{sample}</p>
            <p className="mt-3 text-right text-xs text-zinc-500">Powered by Regen AI</p>
          </div>
        </div>

        <div className="group flex items-center justify-center">
          <Image
            src="/images/regen-AI.png"
            alt="Regen AI Interface"
            width={500}
            height={500}
            className="h-auto w-2/3 rounded-[30px] object-cover transition-transform duration-300 ease-out sm:w-1/2 lg:w-1/3 group-hover:scale-[1.06]"
          />
        </div>
      </div>
    </section>
  );
}
