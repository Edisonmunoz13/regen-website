import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #0B1410 0%, #13241B 50%, #0B1410 100%)" }}>
      <div className="container-page py-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-6">
              <span className="text-white">Regen:</span> <span className="text-emerald-500">Bet as usual, stack cash automatically</span>
            </h1>

            <p className="text-zinc-300 leading-relaxed text-lg mb-6">
            67 million Americans bet on sports. We make sure you’re actually building something while you do it.
            </p>

            <p className="text-zinc-300 leading-relaxed text-lg mb-6">
            Every bet triggers automatic savings, win or lose. Link your books, set your rules, and let it run. Hit big? You're saving. Brick a parlay? You’re still saving. Your money moves from checking to savings without you lifting a finger. 


            </p>         

            <p className="text-zinc-300 leading-relaxed text-lg mb-6">
            Zero willpower required.
            </p>            
          </div>
        </div>
      </div>
    </div>
  );
}
