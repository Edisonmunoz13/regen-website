import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Regen — Bet as usual. Stack cash automatically.",
  description: "Regen analyzes your sports betting to create automatic savings.",
  icons: {
    icon: "/images/iso-icon.png",
    shortcut: "/images/iso-icon.png",
    apple: "/images/iso-icon.png",
  },
  openGraph: {
    title: "Regen — Bet as usual. Stack cash automatically.",
    description: "Regen analyzes your sports betting to create automatic savings.",
    url: "https://regen-website-steel.vercel.app",
    siteName: "Regen",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regen — Bet as usual. Stack cash automatically.",
    description: "Regen analyzes your sports betting to create automatic savings.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
