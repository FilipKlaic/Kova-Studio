import Link from "next/link";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { DeskSketch } from "@/components/illustrations/ProjectIllustrations";

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
    <section id="about" className="bg-paper-deep py-24 [--sketch-paper:var(--card)] sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:gap-10 lg:px-14">
        <div className="lg:col-span-5">
          <p className="text-sm text-muted-foreground">About</p>
          <h2 className="headline-fluid mt-4 font-display text-foreground">
            You&apos;ll work <em>directly with me.</em>
          </h2>
          <DeskSketch className="mt-12 w-full max-w-[400px]" />
        </div>

        <div className="lg:col-span-6 lg:col-start-7 lg:pt-12">
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

          <dl className="mt-10 divide-y divide-input border-y border-input">
            {facts.map(({ label, value }) => (
              <div key={label} className="grid gap-1 py-4 sm:grid-cols-3 sm:gap-6">
                <dt className="text-sm text-muted-foreground">{label}</dt>
                <dd className="text-foreground sm:col-span-2">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {links.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 font-medium text-foreground underline decoration-input decoration-2 underline-offset-[6px] transition-colors hover:decoration-foreground"
              >
                {label}
                <ArrowIcon className="size-2.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
