export function Stats() {
  // Edit these figures anytime
  const items = [
    { label: "Sportsbooks integrated", value: "15+" },
    { label: "States we operate", value: "22+" },
    { label: "Avg monthly savings", value: "12%" },
  ];

  return (
    <section id="stats" className="container-page py-14">
      <h2 className="mx-auto mb-10 max-w-3xl text-center text-lg font-medium text-emerald-400">
        Regen turns everyday betting into automatic savings — built for real bettors.
      </h2>
      <div className="grid grid-cols-1 items-center gap-8 border-y border-emerald-900/30 py-10 text-center sm:grid-cols-3">
        {items.map((it) => (
          <div key={it.label} className="grid gap-2">
            <span className="text-xs tracking-[0.3em] text-emerald-300/80 uppercase">{it.label}</span>
            <span className="bg-gradient-to-b from-emerald-300 to-emerald-500 bg-clip-text text-6xl font-extrabold leading-none text-transparent">
              {it.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
