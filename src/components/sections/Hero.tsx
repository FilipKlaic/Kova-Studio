"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import Link from "next/link";
import BlurText from "@/components/reactbits/BlurText";
import ShinyText from "@/components/reactbits/ShinyText";
import Silk from "@/components/reactbits/Silk";
import { ArrowIcon } from "@/components/ui/arrow-icon";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
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
    <section className="relative flex h-[100svh] flex-col justify-between overflow-hidden">
      {/* Silk ambient background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Silk />
      </div>

      {/* Scrim overlay */}
      <div className="scrim-b absolute inset-x-0 bottom-0 z-[1] h-[70%]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-24 pt-24 lg:px-14">
        <div className="max-w-[752px]">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <ShinyText
              text="Studio — Est. 2025"
              className="font-mono text-sm uppercase tracking-widest"
              color="#3f3f4f"
              shineColor="#a0a0c0"
              speed={4}
            />
          </motion.div>

          <BlurText
            text="Digital products built to last."
            tag="h1"
            animateBy="words"
            direction="bottom"
            delay={120}
            stepDuration={0.5}
            className="headline-fluid font-display font-medium leading-[1.05] text-white"
          />

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 max-w-lg text-base leading-relaxed text-[#e7e7e7]"
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
              className="btn-square group inline-flex items-center gap-2 bg-primary px-6 py-3 text-xl font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/85"
            >
              See our work
              <ArrowIcon className="size-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="#contact"
              className="btn-square inline-flex items-center gap-2 border border-border px-6 py-3 text-xl font-medium text-foreground transition-all duration-200 hover:border-white/30 hover:bg-white/[0.03]"
            >
              Start a project
            </Link>
          </motion.div>
        </div>
      </div>

      <div
        ref={marqueRef}
        className="relative z-10 border-t border-border py-5 overflow-hidden"
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
                  className="flex items-center gap-12 font-mono text-sm uppercase tracking-widest text-muted-foreground"
                >
                  <span className="text-focus">✦</span>
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
