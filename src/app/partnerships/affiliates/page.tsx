import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Partners } from "@/components/Partners";

export const metadata = {
  title: "Creator Partnerships — Regen",
  description:
    "Creators, cappers, and content guys — let's work. The easiest affiliate deal in sports betting.",
  openGraph: {
    title: "Creator Partnerships — Regen",
    description:
      "Creators, cappers, and content guys — let's work. The easiest affiliate deal in sports betting.",
    type: "website",
  },
};

export default function AffiliatesPage() {
  return (
    <main className="min-h-screen text-white">
      <Header />
      <div className="pt-24">
        <Partners />
      </div>
      <Footer />
    </main>
  );
}
