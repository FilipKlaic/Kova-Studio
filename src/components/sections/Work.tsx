"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import { Chip } from "@/components/ui/chip";
import { ArrowIcon } from "@/components/ui/arrow-icon";

interface Project {
  number: string;
  title: string;
  category: string;
  year: string;
  status: "success" | "warn";
  statusLabel: string;
  description: string;
  tags: string[];
  outcome: string;
  href?: string | null;
  video?: string | null;
}

const featured: Project[] = [
  {
    number: "001",
    title: "Fogarolli",
    category: "Web Application",
    year: "2025",
    status: "success",
    statusLabel: "Live",
    description:
      "A dual-app system built for a catering and events company. The inventory app runs on iPads at live events to track wagon contents in real time. The companion shift planner lets employees install it as a PWA, view upcoming shifts, and mark their availability — while the boss manages everything from an admin panel.",
    tags: ["React", "TypeScript", "Vite", "Supabase", "PWA"],
    outcome: "Used daily at live events across multiple wagons.",
    href: null,
    video: null, // drop your video URL or path here, e.g. "/videos/fogarolli.mp4"
  },
  {
    number: "002",
    title: "Two Wheels Nordic",
    category: "Community Platform",
    year: "2025",
    status: "success",
    statusLabel: "Live",
    description:
      "A community forum for Nordic motorcyclists. Riders across Scandinavia connect, share routes and experiences, and discuss all things two wheels — organised by category with thread tracking, user authentication, and a privacy-first approach. No ads, no tracking.",
    tags: ["ASP.NET Core", "C#", "Blazor"],
    outcome: "Live and open to the Nordic riding community.",
    href: "https://www.twowheelsnordic.se",
    video: null,
  },
];

const upcoming = [
  { number: "003", title: "Coming Soon", category: "Mobile App", year: "2025" },
];

function VideoModal({ src, onClose }: { src: string; onClose: () => void }) {
  const isEmbed =
    src.includes("youtube.com") ||
    src.includes("youtu.be") ||
    src.includes("vimeo.com");

  const embedSrc = src.includes("youtu.be")
    ? src.replace("youtu.be/", "www.youtube.com/embed/")
    : src.includes("youtube.com/watch?v=")
    ? src.replace("watch?v=", "embed/")
    : src;

  return (
    <AnimatePresence>
      <motion.div
        key="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          key="modal-content"
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative w-full max-w-4xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Close ✕
          </button>

          <div className="aspect-video w-full overflow-hidden border border-border bg-black">
            {isEmbed ? (
              <iframe
                src={embedSrc}
                className="h-full w-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            ) : (
              <video
                src={src}
                className="h-full w-full"
                controls
                autoPlay
                playsInline
              />
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function Work() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="work" className="border-t border-border py-32">
      {activeVideo && (
        <VideoModal src={activeVideo} onClose={() => setActiveVideo(null)} />
      )}

      <div className="mx-auto max-w-7xl px-6 lg:px-14">
        <div className="mb-20 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="headline-fluid font-display font-medium leading-tight text-foreground"
          >
            Selected
            <br />
            <span className="text-focus">work.</span>
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

        {/* Featured projects */}
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project, i) => {
            const cardContent = (
              <div className="flex h-full flex-col gap-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-foreground">
                      {project.number}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wide text-focus">
                      {project.category}
                    </span>
                  </div>
                  <Chip status={project.status}>{project.statusLabel}</Chip>
                </div>

                <h3 className="font-display text-3xl font-medium text-foreground sm:text-4xl">
                  {project.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-border pt-6">
                  <p className="text-xs italic text-muted-foreground/70">
                    {project.outcome}
                  </p>
                  <span className="font-mono text-xs text-muted-foreground">
                    {project.year}
                  </span>
                </div>
              </div>
            );

            return (
              <motion.div
                key={project.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <SpotlightCard className="flex h-full flex-col border border-border bg-card p-8 transition-colors duration-300 sm:p-10">
                  {project.href ? (
                    <Link
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full flex-col"
                    >
                      {cardContent}
                      <p className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-focus opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        Visit site <ArrowIcon className="size-3" />
                      </p>
                    </Link>
                  ) : project.video ? (
                    <button
                      onClick={() => setActiveVideo(project.video!)}
                      className="group flex h-full flex-col text-left"
                    >
                      {cardContent}
                      <p className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-focus opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        Watch demo <ArrowIcon className="size-3" />
                      </p>
                    </button>
                  ) : (
                    cardContent
                  )}
                </SpotlightCard>
              </motion.div>
            );
          })}

          {/* Upcoming card, same bento rhythm */}
          {upcoming.map((project, i) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: (featured.length + i) * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="flex flex-col justify-between border border-border bg-card p-8 opacity-50 sm:p-10"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground">
                    {project.number}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                    {project.category}
                  </span>
                </div>
                <Chip status="warn">Upcoming</Chip>
              </div>
              <h3 className="mt-8 font-display text-3xl font-medium text-muted-foreground sm:text-4xl">
                {project.title}
              </h3>
              <span className="mt-8 font-mono text-xs text-muted-foreground">
                {project.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
