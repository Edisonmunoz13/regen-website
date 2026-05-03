import { Header } from "@/components/Header";
import { AppMockups } from "@/components/AppMockups";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pitch } from "@/components/Pitch";
import { BackedBy } from "@/components/BackedBy";
import { FinalCTA } from "@/components/FinalCTA";
import { Ambassadors } from "@/components/Ambassadors";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <AppMockups />
        <Pitch />
        <Features />
        <BackedBy />
        <FinalCTA />
        <Ambassadors showBadge={false} />
      </main>
      <Footer />
    </div>
  );
}
