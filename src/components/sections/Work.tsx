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
  highlights: string[];
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
    highlights: [
      "iPad inventory app tracks wagon stock live, on-site, during events",
      "Shift planner installs as a PWA so staff can check shifts from their phone",
      "Admin panel gives the owner full oversight across both apps",
    ],
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
    highlights: [
      "Category-organised forum for route sharing and rider discussion",
      "Thread tracking and user authentication built on ASP.NET Core",
      "Privacy-first by design — no ads, no tracking, ever",
    ],
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
        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
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

function ProjectModal({
  project,
  onClose,
  onWatchDemo,
}: {
  project: Project;
  onClose: () => void;
  onWatchDemo: (src: string) => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        key="project-modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm sm:items-center"
        onClick={onClose}
      >
        <motion.div
          key="project-modal-content"
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative my-8 w-full max-w-2xl border border-border bg-card p-8 sm:p-10"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-6 top-6 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground sm:right-8 sm:top-8"
            aria-label="Close"
          >
            Close ✕
          </button>

          <div className="flex items-center justify-between gap-4 pr-16">
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

          <h3 className="mt-6 font-display text-3xl font-medium text-foreground sm:text-4xl">
            {project.title}
          </h3>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-8">
            <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
              What it&apos;s used for
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {project.highlights.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 bg-focus" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
              Tech stack
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-6 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-start sm:gap-1">
              <p className="text-xs italic text-muted-foreground/70">
                {project.outcome}
              </p>
              <span className="font-mono text-xs text-muted-foreground">
                {project.year}
              </span>
            </div>

            {project.href ? (
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-square group inline-flex items-center justify-center gap-1.5 bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/85"
              >
                Visit live site
                <ArrowIcon className="size-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ) : project.video ? (
              <button
                onClick={() => onWatchDemo(project.video!)}
                className="btn-square group inline-flex items-center justify-center gap-1.5 bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/85"
              >
                Watch demo
                <ArrowIcon className="size-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            ) : null}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function Work() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="work" className="border-t border-border py-32">
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
          onWatchDemo={(src) => {
            setActiveProject(null);
            setActiveVideo(src);
          }}
        />
      )}
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
          {featured.map((project, i) => (
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
              <SpotlightCard className="h-full border border-border bg-card transition-colors duration-300">
                <button
                  onClick={() => setActiveProject(project)}
                  className="group flex h-full w-full flex-col p-8 text-left sm:p-10"
                >
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

                  <p className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-focus opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    View details <ArrowIcon className="size-3" />
                  </p>
                </button>
              </SpotlightCard>
            </motion.div>
          ))}

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
