import Link from "next/link";
import { KovaLogo } from "@/components/layout/KovaLogo";
import { navLinks } from "@/components/layout/nav";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <KovaLogo size="sm" />
          <span>© {new Date().getFullYear()} · Sweden</span>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {[...navLinks, { label: "Contact", href: "#contact" }].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
