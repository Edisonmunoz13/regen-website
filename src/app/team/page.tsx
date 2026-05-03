import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Team } from "@/components/Team";

export const metadata = {
  title: "Team — Regen",
  description: "Bettors building for bettors. Meet the team behind Regen.",
  openGraph: {
    title: "Team — Regen",
    description: "Bettors building for bettors. Meet the team behind Regen.",
    type: "website",
  },
};

export default function TeamPage() {
  return (
    <main className="min-h-screen text-white">
      <Header />
      <div className="pt-24">
        <Team />
      </div>
      <Footer />
    </main>
  );
}
