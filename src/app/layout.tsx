import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const interDisplay = Inter({
  variable: "--font-inter-display",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Kova Studio — Digital products built to last",
  description:
    "Kova is a boutique design and development studio crafting web applications, websites, and mobile experiences for businesses that care about quality.",
  keywords: ["web development", "mobile apps", "web design", "digital studio"],
  openGraph: {
    title: "Kova Studio — Digital products built to last",
    description:
      "Boutique studio crafting web apps, websites, and mobile experiences.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${interDisplay.variable} dark`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
