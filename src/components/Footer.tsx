import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-800/80 py-12">
      <div className="container-page">
        <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-2 lg:grid-cols-6">
          {/* Icon */}
          <div className="flex items-start lg:col-span-1">
            <div className="flex flex-col items-center gap-2">
            <Image src="/images/icon.png" alt="Regen" width={80} height={80} />
            <Image src="/images/regen.png" alt="Regen" width={120} height={40} className="h-auto object-contain pt-2 pl-2" />
            </div>
          </div>

          {/* Text (wider) */}
          <div className="lg:col-span-3">
            <p className="text-zinc-400 max-w-3xl text-sm sm:text-base">
              Bet as usual. Stack cash automatically. Regen analyzes your sports betting activity and creates automatic savings.
            </p>
          </div>

          {/* Legal */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">Legal</h3>
            <nav className="flex flex-col gap-3 text-xs sm:text-sm text-zinc-400">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">Contact</h3>
            <p className="text-xs sm:text-sm text-zinc-400">support@regeninvest.co</p>
          </div>
        </div>

        {/* Copyright row */}
        <div className="mt-10 border-t border-zinc-800/60 pt-6">
          <p className="text-xs sm:text-sm text-zinc-500">© 2025 Regen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
