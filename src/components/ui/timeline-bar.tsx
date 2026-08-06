import { cn } from "@/lib/utils";

interface TimelineBarProps {
  /** 0-100, percentage offset from left */
  start: number;
  /** 0-100, percentage width */
  duration: number;
  active?: boolean;
  className?: string;
}

export function TimelineBar({
  start,
  duration,
  active = false,
  className,
}: TimelineBarProps) {
  return (
    <div className={cn("relative h-1.5 w-full bg-transparent", className)}>
      <div
        className="absolute h-full rounded-sm"
        style={{
          left: `${start}%`,
          width: `${duration}%`,
          background: active ? "var(--focus)" : "rgba(255, 255, 255, 0.18)",
        }}
      />
    </div>
  );
}
