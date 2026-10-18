import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FogarolliFragment } from "@/components/fragments/FogarolliFragment";
import { ChatBubbleFragment } from "@/components/fragments/ChatFragment";
import { TerminalFragment } from "@/components/fragments/TerminalFragment";

export function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 pt-16 sm:pt-24 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pb-28">
        <div>
          <p className="eyebrow">Design &amp; engineering consultancy</p>
          <h1 className="headline-hero mt-5 text-foreground">
            Software built around how your business actually works.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Kova is an independent consultancy run by Filip Klaic. I plan,
            design and build the tools, apps and websites your business runs
            on, and you work with me directly from the first call to launch.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-brand"
            >
              Get in touch
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
            </Link>
            <Link
              href="#work"
              className="rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-input hover:bg-band"
            >
              See the work
            </Link>
          </div>
        </div>

        {/* A small collage of real project screens */}
        <div className="relative mx-auto w-full max-w-[480px] lg:max-w-none">
          <div className="absolute -inset-x-6 -inset-y-8 -z-10 rounded-3xl bg-band sm:-inset-x-10" />
          <FogarolliFragment compact className="relative" />
          <div className="relative -mt-2 hidden grid-cols-[0.9fr_1.1fr] items-start gap-4 sm:grid">
            <ChatBubbleFragment className="mt-8 lg:-ml-8" />
            <TerminalFragment compact className="lg:-mr-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
