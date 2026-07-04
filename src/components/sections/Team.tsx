"use client";

import { motion } from "motion/react";

const team = [
  {
    name: "Filip Klaic",
    role: "Founder & Developer",
    bio: "Full-stack developer with a passion for building tools people love. Specializes in TypeScript, React, and scalable backend systems.",
    real: true,
  },
  {
    name: "Open position",
    role: "Designer",
    bio: "We're looking for a designer who cares deeply about details and loves collaborating closely with developers.",
    real: false,
  },
  {
    name: "Open position",
    role: "Developer",
    bio: "Got skills and want to work on interesting projects? We're always open to talking with talented developers.",
    real: false,
  },
];

export function Team() {
  return (
    <section id="team" className="border-t border-border py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-5xl font-bold leading-tight text-foreground lg:text-6xl"
          >
            The
            <br />
            <span className="text-ember">studio.</span>
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

        <div className="grid gap-px bg-border sm:grid-cols-3">
          {team.map((member, i) => (
            <motion.div
              key={member.name + i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`flex flex-col gap-6 bg-background p-8 ${!member.real ? "opacity-50 hover:opacity-70 transition-opacity duration-300" : ""}`}
            >
              <div
                className={`h-16 w-16 rounded-sm ${
                  member.real
                    ? "bg-ember/20 ring-1 ring-ember/40"
                    : "border border-dashed border-border"
                } flex items-center justify-center`}
              >
                {member.real ? (
                  <span className="font-display text-xl font-bold text-ember">
                    {member.name[0]}
                  </span>
                ) : (
                  <span className="text-xl text-muted-foreground/40">+</span>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="font-mono text-xs text-ember">{member.role}</p>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
