import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Linkedin } from "lucide-react";

type FooterLink = { label: string; href: string; external?: boolean };

const productLinks: FooterLink[] = [
  {
    label: "Download",
    href: "https://apps.apple.com/us/app/regen-invest/id6758348303",
    external: true,
  },
  {
    label: "Blog",
    href: "https://regeninvest.substack.com/p/why-we-built-regen",
    external: true,
  },
  {
    label: "Discord",
    href: "https://discord.gg/t5dwYVRU7D",
    external: true,
  },
];

const companyLinks: FooterLink[] = [
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Ambassadors", href: "/partnerships/campus-ambassadors" },
  { label: "Affiliates", href: "/partnerships/affiliates" },
  {
    label: "Careers",
    href: "mailto:hello@regeninvest.co?subject=Careers",
  },
  { label: "Contact Us", href: "mailto:hello@regeninvest.co" },
];

const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Data Deletion", href: "/legal/data-deletion" },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-black">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-6 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex flex-col items-start gap-2">
              <Image
                src="/images/icon.png"
                alt="Regen"
                width={64}
                height={64}
              />
              <Image
                src="/images/regen.png"
                alt="Regen"
                width={120}
                height={40}
                className="h-auto object-contain"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm text-zinc-400">
              Bet as usual. Stack cash automatically.
            </p>
          </div>
          <Col title="Product" links={productLinks} />
          <Col title="Company" links={companyLinks} />
          <Col title="Legal" links={legalLinks} />
        </div>
        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-zinc-800/80 pt-4 sm:flex-row">
          <p className="text-sm text-zinc-400">
            © 2026 Regen. All rights reserved.
          </p>
          <div className="flex gap-3">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Twitter, label: "X" },
              { Icon: Linkedin, label: "LinkedIn" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="rounded-full border border-zinc-800/80 p-2 text-zinc-400 transition-colors hover:border-emerald-500 hover:text-emerald-400"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function Col({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h4 className="text-sm font-bold uppercase tracking-wider text-white">
        {title}
      </h4>
      <ul className="mt-4 space-y-3">
        {links.map((l) =>
          l.external || l.href.startsWith("mailto:") ? (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                className="text-sm text-zinc-400 transition-colors hover:text-emerald-400"
              >
                {l.label}
              </a>
            </li>
          ) : (
            <li key={l.label}>
              <Link
                href={l.href}
                className="text-sm text-zinc-400 transition-colors hover:text-emerald-400"
              >
                {l.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
