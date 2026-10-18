"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { FogarolliFragment } from "@/components/fragments/FogarolliFragment";
import { ChatFragment } from "@/components/fragments/ChatFragment";
import { GraphFragment } from "@/components/fragments/GraphFragment";
import { TerminalFragment } from "@/components/fragments/TerminalFragment";
import { ModFragment } from "@/components/fragments/ModFragment";

interface Project {
  title: string;
  kind: string;
  summary: string;
  description: string;
  highlights: string[];
  stack: string[];
  repo: string;
  Fragment: ComponentType<{ className?: string }>;
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
    Fragment: ChatFragment,
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
    Fragment: GraphFragment,
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
    Fragment: TerminalFragment,
  },
  {
    title: "Restall",
    kind: "Open source · Game mod manager",
    summary:
      "A desktop app for Windows and Linux that finds your games and installs, updates or removes ReShade and RenoDX mods for them.",
    description:
      "Restall detects installed games across Steam, Epic, GOG, Ubisoft Connect, EA App and Xbox Game Pass. Pick a game, choose a mod and a version, and it handles the install without hunting for game folders.",
    highlights: [
      "Finds installed games across six launchers, including Heroic on Linux",
      "Install, update or remove mods, with a choice of version",
      "Cross-platform builds for Windows and Linux in Docker, with light and dark themes",
    ],
    stack: ["C#", ".NET 10", "Avalonia", "CommunityToolkit.Mvvm", "Docker"],
    repo: "https://github.com/fornkatt/Restall",
    Fragment: ModFragment,
  },
];

function Highlights({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed text-foreground">
          <span className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md border border-border bg-card px-2 py-0.5 font-mono text-xs text-muted-foreground"
        >
          {item}
        </li>
      ))}
    </ul>
  );
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
      className="m-auto w-[min(640px,calc(100%-2rem))] max-h-[calc(100svh-2rem)] rounded-xl border border-border bg-card p-0 text-foreground shadow-2xl backdrop:bg-foreground/40"
    >
      {project && (
        <div className="p-6 sm:p-9">
          <div className="flex items-start justify-between gap-6">
            <p className="eyebrow">{project.kind}</p>
            <button
              onClick={() => ref.current?.close()}
              aria-label="Close"
              className="-mr-2 -mt-2 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-band hover:text-foreground"
            >
              <X className="size-5" strokeWidth={1.75} />
            </button>
          </div>
          <h3 id="project-dialog-title" className="headline mt-2">
            {project.title}
          </h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-6">
            <Highlights items={project.highlights} />
          </div>
          <div className="mt-8 flex flex-col gap-5 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Stack items={project.stack} />
            <Link
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-colors hover:bg-brand"
            >
              View on GitHub
              <ArrowUpRight className="size-4" strokeWidth={1.75} />
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
    <section id="work" className="border-t border-border py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="headline mt-3">Software in production, and side projects.</h2>
          </div>
          <p className="max-w-md leading-relaxed text-muted-foreground lg:justify-self-end">
            Alongside client work I build my own products and contribute to
            open-source ones. It&apos;s where I try new tools properly before
            they go anywhere near yours.
          </p>
        </div>

        {/* Featured project */}
        <article className="mt-12 grid overflow-hidden rounded-xl border border-border lg:grid-cols-[1fr_1.1fr]">
          <div className="p-6 sm:p-10">
            <p className="eyebrow">{fogarolli.kind}</p>
            <h3 className="mt-2 text-3xl font-semibold tracking-[-0.035em]">
              {fogarolli.title}
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {fogarolli.description}
            </p>
            <div className="mt-7">
              <Highlights items={fogarolli.highlights} />
            </div>
            <div className="mt-8">
              <Stack items={fogarolli.stack} />
            </div>
          </div>
          <div className="relative flex items-center justify-center border-t border-border bg-band px-5 py-10 sm:px-10 lg:border-l lg:border-t-0">
            <FogarolliFragment className="w-full max-w-[420px]" />
          </div>
        </article>

        {/* Own products */}
        <ul className="mt-6 grid gap-6 md:grid-cols-2">
          {products.map((project) => (
            <li
              key={project.title}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border transition-colors hover:border-input"
            >
              <div className="flex h-60 items-center justify-center overflow-hidden border-b border-border bg-band px-6 sm:px-10">
                <project.Fragment className="w-full max-w-[340px] transition-transform duration-300 group-hover:-translate-y-1" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="eyebrow">{project.kind}</p>
                <h3 className="mt-1.5 text-xl font-semibold tracking-[-0.03em]">
                  <button
                    onClick={() => setActive(project)}
                    className="text-left after:absolute after:inset-0 after:rounded-xl focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-ring"
                    aria-haspopup="dialog"
                  >
                    {project.title}
                  </button>
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
                <div className="mt-auto flex items-center gap-5 pt-5 text-sm font-medium">
                  <span className="text-foreground group-hover:text-brand">Details →</span>
                  <Link
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    GitHub
                    <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
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
