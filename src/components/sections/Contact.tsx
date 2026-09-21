import Link from "next/link";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { LetterSketch } from "@/components/illustrations/ProjectIllustrations";

const EMAIL = "file.klaic@gmail.com";

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-14">
        <div className="grid items-center gap-12 rounded-3xl border border-border bg-card px-7 py-12 [--sketch-paper:var(--card)] sm:px-12 sm:py-16 lg:grid-cols-12 lg:gap-10 lg:px-16">
          <div className="lg:col-span-7">
            <p className="text-sm text-muted-foreground">Contact</p>
            <h2 className="headline-fluid mt-4 font-display text-foreground">
              Have something in mind? <em>Let&apos;s talk.</em>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Tell me a little about your business and what you&apos;d like to
              build. I&apos;ll get back to you within 24 hours, no strings
              attached.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href={`mailto:${EMAIL}`}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/85"
              >
                Email me
                <ArrowIcon className="size-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href={`mailto:${EMAIL}`}
                className="text-base text-muted-foreground transition-colors hover:text-foreground"
              >
                {EMAIL}
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:col-span-5">
            <LetterSketch className="w-full max-w-[320px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
