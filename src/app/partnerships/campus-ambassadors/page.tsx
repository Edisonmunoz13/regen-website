import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Ambassadors } from "@/components/Ambassadors";

export const metadata = {
  title: "Campus Ambassadors — Regen",
  description:
    "Run Regen on your campus. We're hiring campus ambassadors at every American university.",
  openGraph: {
    title: "Campus Ambassadors — Regen",
    description:
      "Run Regen on your campus. We're hiring campus ambassadors at every American university.",
    type: "website",
  },
};

export default function CampusAmbassadorsPage() {
  return (
    <main className="min-h-screen text-white">
      <Header />
      <div className="pt-24">
        <Ambassadors />
      </div>
      <Footer />
    </main>
  );
}
