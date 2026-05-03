import Link from "next/link";
import { AppleLogo } from "./AppleLogo";

export function FinalCTA() {
  return (
    <section className="px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      <div
        className="mx-auto max-w-5xl rounded-3xl p-10 text-center text-black md:p-20"
        style={{ backgroundColor: "var(--regen-green)" }}
      >
        <h2 className="text-balance text-4xl font-black tracking-tight md:text-6xl">
          Stop leaving winnings on the table.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg opacity-80 md:text-xl">
          Link your book. Set your rule. Stack cash.
        </p>
        <Link
          href="https://apps.apple.com/us/app/regen-invest/id6758348303"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 text-base font-semibold text-white transition-transform hover:scale-105"
        >
          <AppleLogo className="h-5 w-5" />
          Download for iOS
        </Link>
      </div>
    </section>
  );
}
