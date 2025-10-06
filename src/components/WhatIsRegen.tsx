import { Building2, Leaf, PiggyBank } from "lucide-react";

export function WhatIsRegen() {
  const cards = [
    {
      title: "Sportsbooks",
      icon: <Building2 className="h-5 w-5" />,
      points: [
        "Connect your favorite books",
        "Unified view of your action",
        "Privacy-first, read-only access",
      ],
    },
    {
      title: "Regen",
      icon: <Leaf className="h-5 w-5" />,
      points: [
        "Analyzes wins and betting habits",
        "Creates smart saving rules",
        "No change to how you bet",
      ],
    },
    {
      title: "Savings",
      icon: <PiggyBank className="h-5 w-5" />,
      points: [
        "Automatic transfers from wins",
        "Track performance and impact",
        "Withdraw anytime",
      ],
    },
  ];

  return (
    <section id="features" className="container-page py-14">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="text-xs tracking-[0.3em] text-emerald-300/80 uppercase">One app, one flow</p>
        <h2 className="mt-2 text-4xl font-extrabold text-white">What is Regen</h2>
        <p className="mt-3 text-zinc-400">Sportsbooks + Regen automation + Savings working together to stack cash from your everyday betting.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-emerald-900/40 bg-black/30 p-6 shadow-lg"
          >
            <div className="flex items-center gap-2 text-emerald-400">
              {card.icon}
              <h3 className="text-lg font-semibold">{card.title}</h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {card.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
