"use client";

import { motion } from "motion/react";

const featured = {
  number: "001",
  title: "Fogarolli",
  category: "Web Application",
  year: "2025",
  description:
    "A dual-app system built for a catering and events company. The inventory app runs on iPads at live events to track wagon contents in real time. The companion shift planner lets employees install it as a PWA, view upcoming shifts, and mark their availability — while the boss manages everything from an admin panel.",
  tags: ["React", "TypeScript", "Vite", "Supabase", "PWA"],
  outcome: "Used daily at live events across multiple wagons.",
};

const upcoming = [
  { number: "002", title: "Coming Soon", category: "Mobile App", year: "2025" },
  { number: "003", title: "Coming Soon", category: "Website", year: "2025" },
];

export function Work() {
  return (
    <section id="work" className="border-t border-border py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-5xl font-bold leading-tight text-foreground lg:text-6xl"
          >
            Selected
            <br />
            <span className="text-ember">work.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-xs text-sm leading-relaxed text-muted-foreground"
          >
            Real tools built for real businesses. More projects on the way.
          </motion.p>
        </div>

        {/* Featured project */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="group mb-px bg-card p-8 transition-colors duration-300 hover:bg-card/80 sm:p-12"
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
            {/* Left: meta + title */}
            <div className="flex flex-col gap-6 lg:w-1/2">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-muted-foreground">
                  {featured.number}
                </span>
                <span className="h-px flex-1 bg-border" />
                <span className="font-mono text-xs text-ember">
                  {featured.category}
                </span>
              </div>
              <h3 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
                {featured.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: description + outcome */}
            <div className="flex flex-col justify-between gap-8 lg:w-1/2">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {featured.description}
              </p>
              <div className="flex items-center justify-between border-t border-border pt-6">
                <p className="text-xs text-muted-foreground/60 italic">
                  {featured.outcome}
                </p>
                <span className="font-mono text-xs text-muted-foreground">
                  {featured.year}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Upcoming rows */}
        <div className="divide-y divide-border border-t border-border">
          {upcoming.map((project, i) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="flex items-center justify-between py-7 opacity-40"
            >
              <div className="flex items-center gap-8">
                <span className="font-mono text-xs text-muted-foreground">
                  {project.number}
                </span>
                <div>
                  <h3 className="text-base font-medium text-muted-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-muted-foreground/60">
                    {project.category}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <span className="hidden font-mono text-xs text-muted-foreground sm:block">
                  {project.year}
                </span>
                <span className="rounded-sm border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground/60">
                  upcoming
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
