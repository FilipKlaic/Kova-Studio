import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Base for the hand-drawn illustrations: ink line work, round joins and the
 * shared #sketch wobble filter. Colour washes inside set stroke="none" and
 * are usually nudged off the outline, like a print slightly out of register.
 *
 * Shapes that need to hide what's behind them fill with PAPER, which follows
 * the surface the illustration sits on (set --sketch-paper on the container).
 */
export const PAPER = "var(--sketch-paper, var(--background))";

export function Sketch({
  viewBox,
  className,
  children,
}: {
  viewBox: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox={viewBox}
      className={cn("text-foreground", className)}
      aria-hidden="true"
      focusable="false"
    >
      <g
        filter="url(#sketch)"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </g>
    </svg>
  );
}
