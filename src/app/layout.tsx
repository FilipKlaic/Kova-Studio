import type { Metadata } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
import { SketchFilters } from "@/components/illustrations/SketchFilters";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Kova — Design & engineering consultancy",
  description:
    "Kova is an independent design and engineering consultancy run by Filip Klaic, building internal tools, web and mobile apps, desktop software, websites and AI assistants.",
  keywords: [
    "software consultancy",
    "web development",
    "mobile apps",
    "desktop apps",
    "AI assistants",
    "web design",
  ],
  openGraph: {
    title: "Kova — Design & engineering consultancy",
    description:
      "Internal tools, web and mobile apps, desktop software, websites and AI assistants.",
    type: "website",
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
      data-scroll-behavior="smooth"
      className={`${instrumentSans.variable} ${newsreader.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <SketchFilters />
        {children}
      </body>
    </html>
  );
}
