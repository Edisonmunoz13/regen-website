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
  metadataBase: new URL("https://regeninvest.co"),
  title: "Regen — Bet as usual. Stack cash automatically.",
  description: "Regen analyzes your sports betting to create automatic savings.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    images: [
      { url: "/images/resplandor-logo.png?v=20260319", width: 1655, height: 1634, alt: "Resplandor" }
    ],
    title: "Regen — Bet as usual. Stack cash automatically.",
    description: "Regen analyzes your sports betting to create automatic savings.",
    url: "https://regeninvest.co",
    siteName: "Regen",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regen — Bet as usual. Stack cash automatically.",
    description: "Regen analyzes your sports betting to create automatic savings.",
    images: [
      { url: "/images/resplandor-logo.png?v=20260319", width: 1655, height: 1634, alt: "Resplandor" }
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#14c992" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
