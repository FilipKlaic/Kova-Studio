"use client";

import { motion } from "motion/react";
import Link from "next/link";

const team = [
  {
    name: "Filip Klaic",
    role: "Co-founder & Developer",
    bio: "Full-stack developer specialising in TypeScript, React, and scalable backend systems. Builds tools people actually want to use.",
    github: "https://github.com/FilipKlaic",
    portfolio: "https://portfolio-gamma-lime-43.vercel.app/",
  },
  {
    name: "Oliver Martinsson",
    role: "Co-founder & Developer",
    bio: "Full-stack developer with a focus on .NET and modern web platforms. Brings backend depth and a sharp eye for community-driven products.",
    github: null,
    portfolio: null,
  },
];

export function Team() {
  return (
    <section id="team" className="border-t border-border py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-14">
        <div className="mb-20 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="headline-fluid font-display font-medium leading-tight text-foreground"
          >
            The
            <br />
            <span className="text-focus">studio.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-xs text-sm leading-relaxed text-muted-foreground"
          >
            A small, focused team. Everyone here is hands-on.
          </motion.p>
        </div>

        <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="flex flex-col gap-6 bg-card p-8"
            >
              <div className="flex h-16 w-16 items-center justify-center border border-focus/40 bg-focus/10">
                <span className="font-display text-xl font-medium text-focus">
                  {member.name[0]}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-medium text-foreground">{member.name}</h3>
                <p className="font-mono text-xs text-focus">{member.role}</p>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {member.bio}
              </p>
              {(member.github || member.portfolio) && (
                <div className="flex items-center gap-4">
                  {member.github && (
                    <Link
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-fit font-mono text-xs text-muted-foreground/60 transition-colors hover:text-focus"
                    >
                      GitHub →
                    </Link>
                  )}
                  {member.portfolio && (
                    <Link
                      href={member.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-fit font-mono text-xs text-muted-foreground/60 transition-colors hover:text-focus"
                    >
                      Portfolio →
                    </Link>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
