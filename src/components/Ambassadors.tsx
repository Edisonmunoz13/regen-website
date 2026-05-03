import { DollarSign, Users, Megaphone, Video, Network } from "lucide-react";

const get = [
  {
    icon: DollarSign,
    title: "Get paid",
    body: "Performance bonuses for every signup from your campus.",
  },
  {
    icon: Users,
    title: "Direct line to the team",
    body: "You'll work directly with our team. Real input, real impact.",
  },
];

const doList = [
  {
    icon: Megaphone,
    title: "Run on-campus activations",
    body: "Game days, tailgates, and betting nights.",
  },
  {
    icon: Video,
    title: "Post organic content",
    body: "IG, TikTok, and X showing how you use Regen.",
  },
  {
    icon: Network,
    title: "Build a small team of reps",
    body: "Earn on their signups too.",
  },
];

export function Ambassadors({ showBadge = true }: { showBadge?: boolean }) {
  return (
    <section id="ambassadors" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {showBadge && (
            <span
              className="inline-block rounded-full border bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider"
              style={{
                borderColor:
                  "color-mix(in oklab, var(--regen-green) 40%, transparent)",
                color: "var(--regen-green)",
              }}
            >
              Now hiring
            </span>
          )}
          <h2
            className={`text-balance text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl ${
              showBadge ? "mt-5" : ""
            }`}
          >
            Run Regen on your campus.
          </h2>
          <p className="mt-5 text-lg text-zinc-400">
            We&apos;re hiring campus ambassadors! If your group chat lives on
            parlays, this is for you.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-8">
            <h3 className="text-xl font-bold text-white">What you get</h3>
            <div className="mt-6 space-y-6">
              {get.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4">
                  <Icon
                    className="mt-0.5 h-5 w-5 shrink-0"
                    style={{ color: "var(--regen-green)" }}
                  />
                  <div>
                    <h4 className="text-base font-bold text-white">{title}</h4>
                    <p className="mt-1 text-sm text-zinc-400">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-8">
            <h3 className="text-xl font-bold text-white">What you&apos;ll do</h3>
            <div className="mt-6 space-y-6">
              {doList.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4">
                  <Icon
                    className="mt-0.5 h-5 w-5 shrink-0"
                    style={{ color: "var(--regen-green)" }}
                  />
                  <div>
                    <h4 className="text-base font-bold text-white">{title}</h4>
                    <p className="mt-1 text-sm text-zinc-400">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center text-center">
          <a
            href="https://forms.gle/etLpAyqeGVku34dq6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-white transition-all hover:scale-105"
            style={{ backgroundColor: "var(--regen-green)" }}
          >
            Apply to be an ambassador
          </a>
          <p className="mt-4 text-sm text-zinc-400">
            Currently recruiting at all American campuses!
          </p>
        </div>
      </div>
    </section>
  );
}
