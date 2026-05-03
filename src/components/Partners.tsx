const why = [
  "Regen doesn't compete with your current affiliate deals",
  "Easy to integrate into the content you're already making",
  "Extend your audience lifespan with Regen",
  "A product your audience will actually thank you for",
];

const who = [
  "Sports betting creators (IG, TikTok, X, YouTube)",
  "Cappers and pick sellers",
  "Podcast hosts in the betting/sports space",
  "Discord and community owners",
];

export function Partners() {
  return (
    <section
      id="partners"
      className="py-24 md:py-32 border-t border-zinc-800/80"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
            Creators, cappers, and content guys —{" "}
            <span style={{ color: "var(--regen-green)" }}>
              let&apos;s work.
            </span>
          </h2>
          <p className="mt-5 text-lg text-zinc-400">
            If you post about sports betting, partnering with Regen is a no
            brainer. Your audience already bets. We help them stack cash doing
            it.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-8">
            <h3 className="text-xl font-bold text-white">
              Why partner with Regen
            </h3>
            <ul className="mt-6 space-y-4">
              {why.map((item) => (
                <li key={item} className="flex gap-3 text-zinc-400">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: "var(--regen-green)" }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-8">
            <h3 className="text-xl font-bold text-white">Who we work with</h3>
            <ul className="mt-6 space-y-4">
              {who.map((item) => (
                <li key={item} className="flex gap-3 text-zinc-400">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: "var(--regen-green)" }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://forms.gle/Q7VG2eDdUsuT8cYUA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-white transition-all hover:scale-105"
            style={{ backgroundColor: "var(--regen-green)" }}
          >
            Apply as a creator
          </a>
        </div>
      </div>
    </section>
  );
}
