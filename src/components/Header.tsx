"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { AppleLogo } from "./AppleLogo";
import { useEffect, useRef, useState } from "react";

type NavLink = {
  label: string;
  href: string;
  external?: boolean;
  internal?: boolean;
};
type DropdownItem = { label: string; href: string; external?: boolean };
type NavItem =
  | (NavLink & { kind?: "link" })
  | { kind: "dropdown"; label: string; items: DropdownItem[] };

const navItems: NavItem[] = [
  {
    kind: "dropdown",
    label: "About",
    items: [
      { label: "About", href: "/about#about" },
      { label: "How It Works", href: "/about#how" },
      { label: "Team", href: "/about#team" },
      { label: "FAQ", href: "/about#faq" },
      {
        label: "Blog",
        href: "https://regeninvest.substack.com/p/why-we-built-regen",
        external: true,
      },
    ],
  },
  {
    kind: "dropdown",
    label: "Partnerships",
    items: [
      { label: "Campus Ambassadors", href: "/partnerships/campus-ambassadors" },
      { label: "Affiliates", href: "/partnerships/affiliates" },
    ],
  },
  {
    kind: "link",
    label: "Discord",
    href: "https://discord.gg/t5dwYVRU7D",
    external: true,
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-lg border-b border-zinc-800/80"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-end px-4 py-4 sm:px-6 lg:px-8 relative h-16">
        {/* Logo - Left side (floats, doesn't drive header height) */}
        <Link
          href="/"
          className="absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 flex items-center gap-1 text-white flex-shrink-0"
        >
          <Image
            src="/images/resplandor-logo.png"
            alt="Regen"
            width={140}
            height={40}
            className="object-contain -ml-4 md:ml-0"
          />
        </Link>

        {/* Logo centered - Mobile only (floats) */}
        <Link
          href="/"
          className="absolute left-[52%] -translate-x-1/2 top-1/2 -translate-y-1/2 md:hidden"
        >
          <Image
            src="/images/regen.png"
            alt="Regen"
            width={120}
            height={40}
            className="h-auto object-contain"
          />
        </Link>

        {/* Logo positioned - Desktop (floats) */}
        <Link
          href="/"
          className="hidden md:block absolute md:left-[150px] top-1/2 -translate-y-1/2"
        >
          <Image
            src="/images/regen.png"
            alt="Regen"
            width={120}
            height={40}
            className="h-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex" ref={dropdownRef}>
          {navItems.map((item) => {
            if (item.kind === "dropdown") {
              const isOpen = openDropdown === item.label;
              return (
                <div key={item.label} className="relative">
                  <button
                    onClick={() =>
                      setOpenDropdown(isOpen ? null : item.label)
                    }
                    className="inline-flex items-center gap-1 text-sm font-medium text-zinc-300 transition-colors hover:text-emerald-400"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="absolute left-1/2 top-full mt-3 w-52 -translate-x-1/2 overflow-hidden rounded-xl border border-zinc-800/80 bg-black/95 shadow-lg backdrop-blur-lg">
                      {item.items.map((sub) =>
                        sub.external ? (
                          <a
                            key={sub.label}
                            href={sub.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-emerald-500/10 hover:text-emerald-400"
                          >
                            {sub.label}
                          </a>
                        ) : (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-emerald-500/10 hover:text-emerald-400"
                          >
                            {sub.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="text-sm font-medium text-zinc-300 transition-colors hover:text-emerald-400"
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="https://apps.apple.com/us/app/regen-invest/id6758348303"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105"
            style={{ backgroundColor: "var(--regen-green)" }}
          >
            <AppleLogo className="h-4 w-4" />
            Download for iOS
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-zinc-300 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-zinc-800/80 bg-black/95 backdrop-blur-lg">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navItems.map((item) => {
              if (item.kind === "dropdown") {
                return (
                  <div key={item.label} className="flex flex-col gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      {item.label}
                    </span>
                    {item.items.map((sub) =>
                      sub.external ? (
                        <a
                          key={sub.label}
                          href={sub.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setOpen(false)}
                          className="pl-3 text-base font-medium text-zinc-300 hover:text-emerald-400"
                        >
                          {sub.label}
                        </a>
                      ) : (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setOpen(false)}
                          className="pl-3 text-base font-medium text-zinc-300 hover:text-emerald-400"
                        >
                          {sub.label}
                        </Link>
                      )
                    )}
                  </div>
                );
              }
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-zinc-300 hover:text-emerald-400"
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="https://apps.apple.com/us/app/regen-invest/id6758348303"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white"
              style={{ backgroundColor: "var(--regen-green)" }}
            >
              <AppleLogo className="h-4 w-4" />
              Download for iOS
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
