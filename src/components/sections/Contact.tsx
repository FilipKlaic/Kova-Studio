"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 font-mono text-sm uppercase tracking-widest text-muted-foreground"
            >
              Let&apos;s work together
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-display text-5xl font-bold leading-tight text-foreground lg:text-7xl"
            >
              Ready to build
              <br />
              something
              <br />
              <span className="text-ember">great?</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Tell us about your project and we&apos;ll get back to you within
              24 hours. No strings attached.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="mailto:hello@kovastudio.dev"
                className="group inline-flex items-center gap-2 rounded-sm bg-ember px-6 py-3 text-sm font-medium text-background transition-all duration-200 hover:opacity-90"
              >
                hello@kovastudio.dev
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <p className="font-mono text-xs text-muted-foreground/60">
                Or find us on LinkedIn and GitHub
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
