"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { KovaLogo } from "@/components/layout/KovaLogo";
import { ArrowIcon } from "@/components/ui/arrow-icon";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-border bg-background"
          : "border-transparent bg-background/0"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-14">
        <Link href="/" aria-label="Kova home" onClick={() => setMenuOpen(false)}>
          <KovaLogo size="md" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] text-foreground/75 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
          >
            Book a call
            <ArrowIcon className="size-2.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </nav>

        <button
          className="-mr-2 flex size-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-[1.5px] w-5 bg-foreground transition-transform duration-300 ${menuOpen ? "translate-y-[3.75px] rotate-45" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-foreground transition-transform duration-300 ${menuOpen ? "-translate-y-[3.75px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <nav className="flex h-[calc(100svh-4.5rem)] flex-col gap-6 border-t border-border bg-background px-6 pt-10 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-4xl text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-base font-medium text-primary-foreground"
          >
            Book a call
            <ArrowIcon className="size-3" />
          </Link>
        </nav>
      )}
    </header>
  );
}
