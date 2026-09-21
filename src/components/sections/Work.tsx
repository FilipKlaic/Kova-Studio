"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";
import Link from "next/link";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import {
  AssistantSketch,
  AtriumSketch,
  FogarolliSketch,
  MeridianSketch,
  SavingsSketch,
} from "@/components/illustrations/ProjectIllustrations";

interface Project {
  title: string;
  kind: string;
  summary: string;
  description: string;
  highlights: string[];
  stack: string[];
  repo: string;
  Illustration: ComponentType<{ className?: string }>;
}

const fogarolli = {
  title: "Fogarolli",
  kind: "Catering & events · In daily use",
  description:
    "Two connected apps for a catering and events company. An inventory app runs on iPads at live events so staff can see what's in every wagon in real time. A companion shift planner lets employees check their shifts and mark availability from their phones, while managers run both from one admin panel.",
  highlights: [
    "Live stock counts across wagons, synced between iPads during service",
    "Shift planner installs on staff phones like a native app",
    "Role-based access, so managers and staff each see what they need",
  ],
  stack: ["TypeScript", "React", "Vite", "Supabase", "PWA"],
};

const products: Project[] = [
  {
    title: "Atrium",
    kind: "Real-time chat",
    summary:
      "A Slack- and Discord-style chat app with a native desktop client and a real-time backend.",
    description:
      "A cross-platform chat application with servers, channels and role-based membership. The desktop client runs natively on macOS and Windows, backed by an API and WebSocket server built from scratch.",
    highlights: [
      "Real-time messaging over WebSockets with presence and typing indicators",
      "Tauri desktop client for macOS and Windows, with credentials kept in the OS keychain",
      "Fastify and PostgreSQL backend with rotating refresh tokens and Argon2 password hashing",
    ],
    stack: ["Tauri", "React", "TypeScript", "Fastify", "PostgreSQL", "Drizzle"],
    repo: "https://github.com/FilipKlaic/Atrium",
    Illustration: AtriumSketch,
  },
  {
    title: "Meridian",
    kind: "Developer tool",
    summary:
      "A desktop app that maps how a TypeScript codebase fits together, file by file and function by function.",
    description:
      "Point Meridian at a project folder and it charts which files import which and which functions call which, with the source behind every node one click away.",
    highlights: [
      "Rust backend that parses imports, re-exports and path aliases with tree-sitter",
      "Interactive import and call graphs, colour-coded by directory, with a focus mode",
      "Scans cached in SQLite, so reopening a project is instant",
    ],
    stack: ["Rust", "Tauri", "React", "TypeScript", "tree-sitter", "SQLite"],
    repo: "https://github.com/FilipKlaic/Meridian",
    Illustration: MeridianSketch,
  },
  {
    title: "BT-7274",
    kind: "Voice AI assistant",
    summary:
      "A voice assistant with its own personality that listens, talks back, uses tools and remembers you between sessions.",
    description:
      "An AI agent you talk to from the terminal, typed or out loud. It answers in its own voice, checks the weather, sets timers, reports on your machine and keeps a memory of past conversations.",
    highlights: [
      "Speech is transcribed locally, so only text is sent to the language model",
      "Tool use for weather, timers, system status and opening apps",
      "Runs on Gemini, or fully offline with a local model through Ollama",
    ],
    stack: ["Python", "Gemini", "Ollama", "Piper", "faster-whisper"],
    repo: "https://github.com/FilipKlaic/BT-AI-agent",
    Illustration: AssistantSketch,
  },
  {
    title: "Savings Tracker",
    kind: "Personal finance",
    summary:
      "A desktop app for tracking income and expenses that sets aside a share of every payment toward savings goals.",
    description:
      "Log income and expenses, set a savings rule, and watch named goals fill up. Everything is stored locally, with a dashboard that shows where the month went.",
    highlights: [
      "Monthly dashboard with a spending breakdown and a savings-rate trend",
      "Local SQLite storage with migrations applied on first launch",
      "Feature-sliced structure, so new features don't touch existing ones",
    ],
    stack: ["Rust", "Tauri", "React", "TypeScript", "SQLite"],
    repo: "https://github.com/FilipKlaic/Savings-tracker",
    Illustration: SavingsSketch,
  },
];

function Check() {
  return (
    <svg viewBox="0 0 16 16" className="mt-1 size-4 shrink-0 text-focus" aria-hidden="true">
      <path
        d="M3 8.6 L6.6 12 L13 4.6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Highlights({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-foreground">
          <Check />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Stack({ items }: { items: string[] }) {
  return <p className="text-sm text-muted-foreground">{items.join(" · ")}</p>;
}

function ProjectDialog({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (project && !ref.current?.open) ref.current?.showModal();
  }, [project]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current.close()}
      aria-labelledby="project-dialog-title"
      className="m-auto w-[min(640px,calc(100%-2rem))] max-h-[calc(100svh-2rem)] rounded-2xl border border-border bg-card p-0 text-foreground backdrop:bg-foreground/25"
    >
      {project && (
        <div className="p-7 sm:p-10">
          <div className="flex items-start justify-between gap-6">
            <p className="text-sm text-muted-foreground">{project.kind}</p>
            <button
              onClick={() => ref.current?.close()}
              className="-mr-2 -mt-2 rounded-full px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Close
            </button>
          </div>
          <h3 id="project-dialog-title" className="mt-3 font-display text-4xl">
            {project.title}
          </h3>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-7">
            <Highlights items={project.highlights} />
          </div>
          <div className="mt-8 flex flex-col gap-5 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Stack items={project.stack} />
            <Link
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
            >
              View on GitHub
              <ArrowIcon className="size-2.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      )}
    </dialog>
  );
}

export function Work() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-14">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-sm text-muted-foreground">Selected work</p>
            <h2 className="headline-fluid mt-4 font-display text-foreground">
              Software in production, <em>and products of my own.</em>
            </h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground lg:col-span-5 lg:justify-self-end">
            Alongside client work I build my own products. It&apos;s where I
            try new tools properly before they go anywhere near yours.
          </p>
        </div>

        {/* Featured project */}
        <article className="mt-16 grid overflow-hidden rounded-2xl border border-border bg-card [--sketch-paper:var(--card)] lg:grid-cols-2">
          <div className="p-7 sm:p-10 lg:p-12">
            <p className="text-sm text-muted-foreground">{fogarolli.kind}</p>
            <h3 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
              {fogarolli.title}
            </h3>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              {fogarolli.description}
            </p>
            <div className="mt-8">
              <Highlights items={fogarolli.highlights} />
            </div>
            <div className="mt-8 border-t border-border pt-6">
              <Stack items={fogarolli.stack} />
            </div>
          </div>
          <div className="flex items-center justify-center bg-paper-deep px-6 py-10 sm:px-10">
            <FogarolliSketch className="w-full max-w-[460px]" />
          </div>
        </article>

        {/* Own products */}
        <ul className="mt-5 grid gap-5 md:grid-cols-2">
          {products.map((project) => (
            <li
              key={project.title}
              className="group relative flex gap-6 rounded-2xl border border-border bg-card p-7 transition-colors [--sketch-paper:var(--card)] hover:border-input sm:p-8"
            >
              <project.Illustration className="hidden h-20 w-auto shrink-0 sm:block" />
              <div className="flex min-w-0 flex-1 flex-col">
                <p className="text-sm text-muted-foreground">{project.kind}</p>
                <h3 className="mt-1.5 font-display text-2xl text-foreground">
                  <button
                    onClick={() => setActive(project)}
                    className="text-left after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-ring"
                    aria-haspopup="dialog"
                  >
                    {project.title}
                  </button>
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
                <div className="mt-auto flex items-center gap-6 pt-6 text-sm font-medium">
                  <span className="text-foreground underline decoration-input decoration-2 underline-offset-[5px] transition-colors group-hover:decoration-foreground">
                    Read more
                  </span>
                  <Link
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    GitHub
                    <ArrowIcon className="size-2.5" />
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <ProjectDialog project={active} onClose={() => setActive(null)} />
    </section>
  );
}
