import Image from "next/image";
import { Linkedin } from "lucide-react";

type Member = {
  name: string;
  title: string;
  bio: string;
  initials: string;
  image?: string;
  imageZoom?: boolean;
  imageScale?: string;
  imagePosition?: string;
  linkedin?: string;
};

const advisors: Member[] = [
  {
    name: "Benjie Cherniak",
    title: "Strategic Advisor + Investor",
    bio: "Former Managing Director of Don Best Sports and Principal of Avenue H Capital.",
    initials: "BC",
    image: "/images/benjie.jpeg",
    linkedin: "https://www.linkedin.com/in/benjie-c-178a302/",
  },
  {
    name: "Jonathan Michaels",
    title: "Strategic Advisor + Investor",
    bio: "Founder of Michaels Strategies and former SVP at Sightline Payments and the American Gaming Association.",
    initials: "JM",
    image: "/images/jonathan.jpeg",
    linkedin: "https://www.linkedin.com/in/jonathan-michaels-77461013/",
  },
];

const team: Member[] = [
  {
    name: "Daniel Prior",
    title: "Co-Founder",
    bio: "Lifelong degen that somehow made it as an investor and start-up advisor.",
    initials: "DP",
    image: "/images/daniel.jpeg",
    imageZoom: true,
    imageScale: "scale-100",
    imagePosition: "object-center",
    linkedin: "https://www.linkedin.com/in/danielprior/",
  },
  {
    name: "Ben Bleier",
    title: "Co-Founder",
    bio: "Lifelong gambler and former pro poker player. Building Regen for his younger self, helping degens stack cash while they play.",
    initials: "BB",
    image: "/images/ben.jpeg",
    linkedin: "https://www.linkedin.com/in/benson-bleier/",
  },
  {
    name: "Horacio Muñoz",
    title: "Founding Engineer",
    bio: "Natural-born competitor and sports enthusiast. As a chad full stack engineer, determined to build the best product to help bettors win more.",
    initials: "HM",
    image: "/images/horacio.jpg",
    linkedin: "https://www.linkedin.com/in/horacedev/",
  },
];

export function Team() {
  return (
    <section
      id="team"
      className="scroll-mt-24 py-24 md:py-32 border-t border-zinc-800/80"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            The Team
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Bettors building for bettors.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <article
              key={m.name}
              className="flex flex-col items-center rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-8 text-center transition-all hover:border-emerald-500/50"
            >
              {m.image ? (
                <div className="h-24 w-24 overflow-hidden rounded-full ring-2 ring-emerald-500/40">
                  <Image
                    src={m.image}
                    alt={m.name}
                    width={96}
                    height={96}
                    className={`h-full w-full object-cover ${
                      m.imageZoom
                        ? `${m.imageScale ?? "scale-110"} ${
                            m.imagePosition ?? "object-[center_85%]"
                          }`
                        : "object-top"
                    }`}
                  />
                </div>
              ) : (
                <div
                  className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-500/10 ring-2 ring-emerald-500/40 text-2xl font-black"
                  style={{ color: "var(--regen-green)" }}
                >
                  {m.initials}
                </div>
              )}
              <h3 className="mt-5 text-xl font-bold text-white">{m.name}</h3>
              <p
                className="text-sm font-medium"
                style={{ color: "var(--regen-green)" }}
              >
                {m.title}
              </p>
              <p className="mt-4 text-sm text-zinc-400">{m.bio}</p>
              <div className="mt-5 flex gap-3">
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${m.name} LinkedIn`}
                    className="rounded-full border border-zinc-800/80 p-2 text-zinc-400 transition-colors hover:border-emerald-500 hover:text-emerald-400"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-24 max-w-2xl text-center">
          <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            Strategic Advisors
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Industry veterans guiding Regen&apos;s growth across gaming,
            fintech, and policy.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2">
          {advisors.map((m) => (
            <article
              key={m.name}
              className="relative flex flex-col items-center rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-8 pb-14 text-center transition-all hover:border-emerald-500/50"
            >
              {m.image ? (
                <div className="h-24 w-24 overflow-hidden rounded-full ring-2 ring-emerald-500/40">
                  <Image
                    src={m.image}
                    alt={m.name}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ) : (
                <div
                  className="flex h-24 w-24 items-center justify-center rounded-full bg-zinc-900/50 ring-2 ring-emerald-500/40 text-2xl font-black"
                  style={{ color: "var(--regen-green)" }}
                >
                  {m.initials}
                </div>
              )}
              <h3 className="mt-5 text-xl font-bold text-white">{m.name}</h3>
              <p
                className="text-sm font-medium"
                style={{ color: "var(--regen-green)" }}
              >
                {m.title}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                {m.bio}
              </p>
              {m.linkedin && (
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${m.name} LinkedIn`}
                  className="absolute bottom-4 right-4 rounded-full border border-zinc-800/80 p-2 text-zinc-400 transition-colors hover:border-emerald-500 hover:text-emerald-400"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
