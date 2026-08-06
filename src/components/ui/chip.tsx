import { cn } from "@/lib/utils";

type ChipStatus = "success" | "warn" | "error" | "focus" | "neutral";

const dotColor: Record<ChipStatus, string> = {
  success: "bg-success",
  warn: "bg-muted-foreground",
  error: "bg-[#ededed]",
  focus: "bg-focus",
  neutral: "bg-muted-foreground",
};

interface ChipProps {
  status?: ChipStatus;
  children: React.ReactNode;
  className?: string;
}

export function Chip({ status = "neutral", children, className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-chip px-2.5 py-1",
        className
      )}
    >
      <span className={cn("size-1.5 rounded-full", dotColor[status])} />
      <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
        {children}
      </span>
    </span>
  );
}
