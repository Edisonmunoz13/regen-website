import { Header } from "@/components/Header";
// import { Hero } from "@/components/Hero";
import { AppMockups } from "@/components/AppMockups";
import { Footer } from "@/components/Footer";
import { Stats } from "@/components/Stats";
import { WhatIsRegen } from "@/components/WhatIsRegen";
import { RegenAISection } from "@/components/RegenAISection";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero /> 
        <AppMockups />
        {/* <Stats /> */}
        {/* <WhatIsRegen /> */}
        {/* <RegenAISection /> */}
      </main>
      <Footer />
    </div>
  );
}
