import Link from "next/link";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { HeroIllustration } from "@/components/illustrations/HeroIllustration";

const recentProjects = ["Fogarolli", "Atrium", "Meridian", "BT-7274"];

export function Hero() {
  return (
    <section className="overflow-hidden pt-28 sm:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-12 lg:gap-10 lg:px-14">
        <div className="lg:col-span-7">
          <p className="rise-in inline-flex items-center gap-2.5 text-sm text-muted-foreground">
            <span className="size-1.5 rounded-full bg-focus" />
            Design &amp; engineering consultancy
          </p>

          <h1
            className="rise-in headline-hero mt-6 font-display text-foreground"
            style={{ animationDelay: "80ms" }}
          >
            Software built around how your business{" "}
            <span className="relative inline-block whitespace-nowrap italic">
              actually works.
              <svg
                viewBox="0 0 300 18"
                className="absolute left-0 top-[88%] h-auto w-full text-focus"
                aria-hidden="true"
              >
                <path
                  className="draw-line"
                  pathLength={100}
                  d="M4 11 C44 5 84 14 124 9 S204 4 244 9 S286 12 296 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={4}
                  strokeLinecap="round"
                  filter="url(#sketch)"
                />
              </svg>
            </span>
          </h1>

          <p
            className="rise-in mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
            style={{ animationDelay: "160ms" }}
          >
            Kova is an independent consultancy run by Filip Klaic. I plan,
            design and build the tools, apps and websites your business runs
            on, and you work with me directly from the first call to launch.
          </p>

          <div
            className="rise-in mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
            style={{ animationDelay: "240ms" }}
          >
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Book an intro call
              <ArrowIcon className="size-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="#work"
              className="text-base font-medium text-foreground underline decoration-input decoration-2 underline-offset-[6px] transition-colors hover:decoration-foreground"
            >
              See our work
            </Link>
          </div>
        </div>

        <div className="rise-in lg:col-span-5" style={{ animationDelay: "200ms" }}>
          <HeroIllustration className="mx-auto w-full max-w-[540px]" />
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-6 lg:mt-20 lg:px-14">
        <div className="flex flex-col gap-3 border-t border-border py-8 sm:flex-row sm:items-baseline sm:gap-12">
          <p className="text-sm text-muted-foreground">Recent projects</p>
          <ul className="flex flex-wrap gap-x-10 gap-y-2 font-display text-xl text-foreground/80">
            {recentProjects.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
