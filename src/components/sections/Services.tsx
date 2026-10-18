import Link from "next/link";
import {
  AppWindow,
  Globe,
  LayoutDashboard,
  Monitor,
  Smartphone,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "Internal tools",
    Icon: LayoutDashboard,
    description:
      "Replace spreadsheets, paper lists and group chats with a tool shaped around how your team works: inventory, scheduling, admin panels and dashboards.",
  },
  {
    title: "Web applications",
    Icon: AppWindow,
    description:
      "Customer portals, booking systems and SaaS products, with accounts, roles, live updates and a solid backend underneath.",
  },
  {
    title: "Websites",
    Icon: Globe,
    description:
      "Fast company sites and landing pages that explain what you do clearly, show up in search and are easy to keep up to date.",
  },
  {
    title: "Mobile apps",
    Icon: Smartphone,
    description:
      "Apps your staff or customers install straight to their home screen, on iOS and Android, from a single codebase.",
  },
  {
    title: "Desktop software",
    Icon: Monitor,
    description:
      "Native apps for macOS and Windows that keep your data on your own machines and stay quick with lots of it.",
  },
  {
    title: "AI assistants & automation",
    Icon: Sparkles,
    description:
      "Assistants that work with your own data and tools, voice interfaces, and automations that take repetitive work off your plate.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-band py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">What I build</p>
            <h2 className="headline mt-3">From first conversation to finished product.</h2>
          </div>
          <p className="max-w-md leading-relaxed text-muted-foreground lg:justify-self-end">
            Every project starts with a conversation about what&apos;s slowing
            you down. From there I scope the work with you, design it with you,
            and build it properly.
          </p>
        </div>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, Icon, description }) => (
            <li key={title} className="bg-card p-6 sm:p-7">
              <span className="flex size-9 items-center justify-center rounded-md bg-brand-soft text-brand">
                <Icon className="size-[18px]" strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em]">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-muted-foreground">
          Not sure where your idea fits? Most projects mix a few of these.{" "}
          <Link href="#contact" className="font-medium text-foreground underline decoration-input underline-offset-4 transition-colors hover:text-brand hover:decoration-brand">
            Tell me what you need
          </Link>
        </p>
      </div>
    </section>
  );
}
