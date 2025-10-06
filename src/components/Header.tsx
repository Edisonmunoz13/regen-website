"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Hide header when scrolling down (after 100px)
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-zinc-800/80 bg-black/40 backdrop-blur transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-white">
          <Image src="/images/iso-icon.png" alt="Regen" width={32} height={32} />
          <span className="text-2xl font-bold" style={{ color: "#14c992" }}>Regen</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          {/* <button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors">What is Regen</button> */}
          {/* <button onClick={() => scrollToSection('stats')} className="hover:text-white transition-colors">Stats</button> */}
          {/* <button onClick={() => scrollToSection('ai')} className="hover:text-white transition-colors">Know Regen AI</button> */}
          <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms</Link>
        </nav>
        <button 
          onClick={() => scrollToSection('waitlist')}
          className="group inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-all hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #183731 0%, #1f5e4c 100%)"
          }}
        >
          Join Waitlist
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </header>
  );
}
