import Link from "next/link";
import { ArrowRight } from "lucide-react";

const EMAIL = "file.klaic@gmail.com";

export function Contact() {
  return (
    <section id="contact" className="pb-24 sm:pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl bg-foreground px-6 py-14 text-background sm:px-14 sm:py-20">
          <p className="text-[0.8125rem] font-medium text-[#9aa5ff]">Contact</p>
          <h2 className="headline mt-3 max-w-2xl">Have something in mind? Let&apos;s talk.</h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/65">
            Tell me a little about your business and what you&apos;d like to
            build. I&apos;ll get back to you within 24 hours, no strings
            attached.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-2 rounded-md bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-brand-soft"
            >
              Email me
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
            </Link>
            <Link
              href={`mailto:${EMAIL}`}
              className="break-all font-mono text-sm text-white/65 transition-colors hover:text-white"
            >
              {EMAIL}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
