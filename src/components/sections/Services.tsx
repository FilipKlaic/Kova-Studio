"use client";

import { motion } from "motion/react";
import SpotlightCard from "@/components/reactbits/SpotlightCard";

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

const metrics = [
  { value: "2", unit: "", label: "Founders, both hands-on" },
  { value: "3", unit: "", label: "Core disciplines" },
  { value: "2025", unit: "", label: "Studio founded" },
  { value: "24", unit: "h", label: "Typical reply time" },
];

export function Services() {
  return (
    <section id="services" className="border-t border-border py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-14">
        <div className="mb-20 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="headline-fluid font-display font-medium leading-tight text-foreground"
          >
            What we
            <br />
            <span className="text-focus">build.</span>
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

        <div className="grid gap-px border border-border bg-border sm:grid-cols-3">
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
            >
              <SpotlightCard className="group relative flex h-full flex-col gap-8 bg-card p-8 transition-colors duration-300">
                <span className="font-mono text-xs text-muted-foreground">
                  {service.number}
                </span>
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-medium text-foreground">
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
                      className="border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="absolute bottom-8 right-8 text-focus opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  →
                </span>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Metrics grid */}
        <div className="mt-px grid border border-t-0 border-border sm:grid-cols-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="flex flex-col gap-2 border-border p-8 sm:border-l sm:first:border-l-0"
            >
              <div className="flex items-baseline gap-1">
                <span className="text-[56px] font-medium leading-none tracking-[-3.36px] text-foreground">
                  {metric.value}
                </span>
                {metric.unit && (
                  <span className="font-mono text-lg text-muted-foreground">
                    {metric.unit}
                  </span>
                )}
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
