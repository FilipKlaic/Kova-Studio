"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import Link from "next/link";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease },
  }),
};

export function Hero() {
  const marqueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(".marquee-inner", {
        xPercent: -50,
        duration: 24,
        ease: "none",
        repeat: -1,
      });
    }, marqueRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden pt-16">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-24 pt-24 lg:px-8">
        <div className="max-w-5xl">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-8 text-sm font-mono uppercase tracking-widest text-muted-foreground"
          >
            Studio — Est. 2025
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-display text-6xl font-bold leading-[0.9] tracking-tight text-foreground sm:text-7xl lg:text-[9rem]"
          >
            Digital
            <br />
            <span className="text-ember">products</span>
            <br />
            built to last.
          </motion.h1>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Kova is a boutique studio crafting web applications, websites, and
            mobile experiences for businesses that care about quality.
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <Link
              href="#work"
              className="group inline-flex items-center gap-2 rounded-sm bg-ember px-6 py-3 text-sm font-medium text-background transition-all duration-200 hover:opacity-90"
            >
              See our work
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:border-ember hover:text-ember"
            >
              Start a project
            </Link>
          </motion.div>
        </div>
      </div>

      <div
        ref={marqueRef}
        className="border-t border-border py-5 overflow-hidden"
      >
        <div className="marquee-inner flex whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-12 pr-12">
              {[
                "Web Applications",
                "Websites",
                "Mobile Apps",
                "UI / UX Design",
                "Brand Identity",
                "E-Commerce",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-12 text-sm uppercase tracking-widest text-muted-foreground"
                >
                  <span className="text-ember">✦</span>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
