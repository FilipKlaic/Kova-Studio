import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const facts = [
  { label: "Based in", value: "Sweden" },
  { label: "Builds", value: "Web, mobile, desktop and AI software" },
  {
    label: "Works with",
    value: "TypeScript, React, Next.js, C# / .NET, Rust, PostgreSQL, Supabase",
  },
];

const links = [
  { label: "GitHub", href: "https://github.com/FilipKlaic" },
  { label: "Portfolio", href: "https://portfolio-gamma-lime-43.vercel.app/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/filip-klaic-6b2006308/" },
];

export function About() {
  return (
    <section id="about" className="border-t border-border py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <div>
          <p className="eyebrow">About</p>
          <h2 className="headline mt-3">You&apos;ll work directly with me.</h2>
          <div className="mt-8">
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  <span className="text-foreground">I&apos;m Filip Klaic, the developer behind Kova.</span>{" "}
                  The person on your first call is the person who designs and
                  builds your software. No hand-offs and no account managers, just
                  one line of communication from idea to launch.
                </p>
                <p>
                  My first production software started as a way to make shifts
                  easier for me and my coworkers at Fogarolli. It grew into two
                  apps the business now depends on at its events. Since then
                  I&apos;ve built a real-time chat platform, desktop tools in Rust
                  and a voice AI assistant.
                </p>
                <p>Away from the keyboard, I photograph motorsport.</p>
              </div>
          </div>
        </div>

        <div className="lg:pt-16">
          <dl className="divide-y divide-border rounded-xl border border-border">
            {facts.map(({ label, value }) => (
              <div key={label} className="px-5 py-4">
                <dt className="text-sm text-muted-foreground">{label}</dt>
                <dd className="mt-1 font-medium text-foreground">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap gap-2">
            {links.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-2 text-sm font-medium transition-colors hover:border-input hover:bg-band"
              >
                {label}
                <ArrowUpRight className="size-3.5 text-muted-foreground" strokeWidth={1.75} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
