import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geist.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
