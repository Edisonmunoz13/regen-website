import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutIntro } from "@/components/AboutIntro";
import { HowItWorks } from "@/components/HowItWorks";
import { Team } from "@/components/Team";
import { FAQ } from "@/components/FAQ";

export const metadata = {
  title: "About — Regen",
  description:
    "About Regen — how it works, the team, and answers to common questions.",
  openGraph: {
    title: "About — Regen",
    description:
      "About Regen — how it works, the team, and answers to common questions.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen text-white">
      <Header />
      <div className="pt-24">
        <AboutIntro />
        <HowItWorks />
        <Team />
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
