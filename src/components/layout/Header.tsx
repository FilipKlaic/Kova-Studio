"use client";

import Link from "next/link";
import { useState } from "react";
import { KovaLogo } from "@/components/layout/KovaLogo";
import { navLinks } from "@/components/layout/nav";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" aria-label="Kova home" onClick={() => setMenuOpen(false)}>
          <KovaLogo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="rounded-md bg-foreground px-3.5 py-2 text-sm font-medium text-background transition-colors hover:bg-brand"
          >
            Get in touch
          </Link>
        </nav>

        <button
          className="-mr-2 rounded-md px-2 py-1.5 text-sm font-medium md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <nav className="flex h-[calc(100svh-4rem)] flex-col gap-1 border-t border-border bg-background px-6 pt-6 md:hidden">
          {[...navLinks, { label: "Contact", href: "#contact" }].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-2 text-3xl font-semibold tracking-[-0.03em]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
