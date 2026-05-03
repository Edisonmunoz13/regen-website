import Image from "next/image";

export function BackedBy() {
  return (
    <section className="py-20 border-t border-zinc-800/80">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <a
          href="https://www.underdogfantasy.com/guarddog"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-8 block overflow-hidden rounded-xl"
          aria-label="Visit GuardDog on Underdog Fantasy"
        >
          <Image
            src="/images/guardog.png"
            alt="GuardDog banner"
            width={1200}
            height={400}
            className="h-auto w-full rounded-xl object-cover"
            loading="lazy"
          />
        </a>
        <p className="text-balance text-lg text-zinc-400 md:text-xl">
          Backed by{" "}
          <span className="font-semibold text-white">GuardDog</span>,
          Underdog&apos;s innovation fund, supporting the most exciting startups
          in the industry.
        </p>
      </div>
    </section>
  );
}
