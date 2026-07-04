import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center lg:px-8">
        <span className="font-display text-sm font-bold tracking-widest text-muted-foreground uppercase">
          Kova
        </span>
        <nav className="flex flex-wrap gap-6">
          {["Work", "Services", "Team", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {item}
            </Link>
          ))}
        </nav>
        <p className="font-mono text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} Kova Studio
        </p>
      </div>
    </footer>
  );
}
