import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { portfolio } from "@/data/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${portfolio.name} — ${portfolio.title}`,
    template: `%s — ${portfolio.name}`,
  },
  description: portfolio.intro,
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: `${portfolio.name} — ${portfolio.title}`,
    description: portfolio.intro,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolio.name} — ${portfolio.title}`,
    description: portfolio.intro,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white [font-feature-settings:'ss01','cv11']">
        {children}
      </body>
    </html>
  );
}
