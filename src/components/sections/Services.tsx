import Link from "next/link";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import {
  AISketch,
  DesktopSketch,
  MobileSketch,
  PortalSketch,
  WebAppSketch,
  WebsiteSketch,
} from "@/components/illustrations/ServiceIllustrations";

const services = [
  {
    title: "Internal tools",
    Illustration: WebAppSketch,
    description:
      "Replace spreadsheets, paper lists and group chats with a tool shaped around how your team works: inventory, scheduling, admin panels and dashboards.",
  },
  {
    title: "Web applications",
    Illustration: PortalSketch,
    description:
      "Customer portals, booking systems and SaaS products, with accounts, roles, live updates and a solid backend underneath.",
  },
  {
    title: "Websites",
    Illustration: WebsiteSketch,
    description:
      "Fast company sites and landing pages that explain what you do clearly, show up in search and are easy to keep up to date.",
  },
  {
    title: "Mobile apps",
    Illustration: MobileSketch,
    description:
      "Apps your staff or customers install straight to their home screen, on iOS and Android, from a single codebase.",
  },
  {
    title: "Desktop software",
    Illustration: DesktopSketch,
    description:
      "Native apps for macOS and Windows that keep your data on your own machines and stay quick with lots of it.",
  },
  {
    title: "AI assistants & automation",
    Illustration: AISketch,
    description:
      "Assistants that work with your own data and tools, voice interfaces, and automations that take repetitive work off your plate.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-14">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-sm text-muted-foreground">What I build</p>
            <h2 className="headline-fluid mt-4 font-display text-foreground">
              From first conversation to <em>finished product.</em>
            </h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground lg:col-span-5 lg:justify-self-end">
            Every project starts with a conversation about what&apos;s slowing
            you down. From there I scope the work with you, design it with you,
            and build it properly.
          </p>
        </div>

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, Illustration, description }) => (
            <li
              key={title}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 [--sketch-paper:var(--card)] sm:p-8"
            >
              <Illustration className="-ml-2 h-28 w-auto self-start" />
              <h3 className="mt-6 font-display text-[1.625rem] leading-tight text-foreground">
                {title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {description}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-col gap-4 rounded-2xl bg-paper-deep px-7 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="text-foreground">
            Not sure where your idea fits? Most projects mix a few of these.
          </p>
          <Link
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 font-medium text-foreground underline decoration-input decoration-2 underline-offset-[6px] transition-colors hover:decoration-foreground"
          >
            Tell me what you need
            <ArrowIcon className="size-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
