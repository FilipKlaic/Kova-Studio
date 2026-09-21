import Link from "next/link";
import { KovaLogo } from "@/components/layout/KovaLogo";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-center sm:justify-between lg:px-14">
        <div className="flex flex-col gap-2">
          <KovaLogo size="sm" />
          <p className="text-sm text-muted-foreground">
            Design &amp; engineering consultancy · Sweden
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kova
        </p>
      </div>
    </footer>
  );
}
