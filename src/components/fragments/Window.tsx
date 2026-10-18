import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Shared chrome for the UI fragments: small, static slices of real project
 * screens built in HTML. They're decorative, so the real information lives
 * in the surrounding text.
 */
export function Window({
  title,
  className,
  children,
}: {
  title?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div aria-hidden="true" className={cn("fragment select-none text-[12px]", className)}>
      <div className="flex h-8 items-center gap-1.5 border-b border-border bg-band px-3">
        <span className="size-2 rounded-full bg-input" />
        <span className="size-2 rounded-full bg-input" />
        <span className="size-2 rounded-full bg-input" />
        {title && (
          <span className="ml-2 truncate font-mono text-[11px] text-muted-foreground">
            {title}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}
