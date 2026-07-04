"use client";

import { motion } from "motion/react";

const services = [
  {
    number: "01",
    title: "Web Applications",
    description:
      "Custom tools and platforms built for your workflow. From internal dashboards to customer-facing SaaS products, we build scalable apps that handle real complexity.",
    tags: ["React", "TypeScript", "Node.js", "Supabase"],
  },
  {
    number: "02",
    title: "Websites",
    description:
      "Fast, SEO-optimized sites that convert visitors into clients. Marketing pages, portfolios, landing pages — designed to perform and built to be maintained.",
    tags: ["Next.js", "Tailwind", "CMS", "Analytics"],
  },
  {
    number: "03",
    title: "Mobile Apps",
    description:
      "Native-quality mobile experiences on iOS and Android. Cross-platform development that doesn't compromise on feel or performance.",
    tags: ["React Native", "Expo", "iOS", "Android"],
  },
];

export function Services() {
  return (
    <section id="services" className="border-t border-border py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-5xl font-bold leading-tight text-foreground lg:text-6xl"
          >
            What we
            <br />
            <span className="text-ember">build.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-xs text-sm leading-relaxed text-muted-foreground"
          >
            Three core disciplines, one studio. We go deep rather than wide.
          </motion.p>
        </div>

        <div className="grid gap-px bg-border sm:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative flex flex-col gap-8 bg-background p-8 transition-colors duration-300 hover:bg-card"
            >
              <span className="font-mono text-xs text-muted-foreground">
                {service.number}
              </span>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="absolute bottom-8 right-8 text-ember opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
