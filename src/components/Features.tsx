import { Banknote, BarChart3, PiggyBank, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Banknote,
    title: "Auto-savings on every bet",
    body: "Set your rules once, and you save whether you win or lose. No willpower required.",
  },
  {
    icon: BarChart3,
    title: "You're always in control",
    body: "Withdraw anytime, change your savings rules or pause. Whatever you need to stack your way.",
  },
  {
    icon: PiggyBank,
    title: "Single P&L view across all your books",
    body: "Keep track of your action wherever you get it. Get insights into your play.",
  },
  {
    icon: ShieldCheck,
    title: "Bank-grade security",
    body: "Your funds are FDIC insured, and our blue-chip partners keep your data safe and secure.",
  },
];

export function Features() {
  return (
    <section className="py-24 md:py-32 border-t border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Built for bettors.
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Everything you need to stack cash while you play.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-6 transition-all hover:border-emerald-500/50"
            >
              <Icon
                className="h-8 w-8"
                style={{ color: "var(--regen-green)" }}
              />
              <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
