import { cn } from "@/lib/utils";

/** A short exchange with BT-7274 in the terminal. */
export function TerminalFragment({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "select-none overflow-hidden rounded-xl bg-[#0d0d0d] p-4 font-mono text-[11.5px] leading-relaxed text-[#d4d4d4] shadow-[0_8px_24px_-8px_rgb(0_0_0/0.25)]",
        className,
      )}
    >
      <p>
        <span className="text-[#8b9cff]">you ›</span> what&apos;s the weather like?
      </p>
      {!compact && <p className="text-[#7a7a7a]">  ↳ transcribed locally · 0.4s</p>}
      <p className="text-[#7a7a7a]">  ↳ tool weather.get(&quot;Gothenburg&quot;)</p>
      <p className="mt-1">
        <span className="text-[#7ee2a8]">BT ›</span> 9°C and light rain, Pilot.
        {!compact && " I suggest a jacket."}
      </p>
      {!compact && (
        <p className="mt-1">
          <span className="text-[#8b9cff]">you ›</span>{" "}
          <span className="inline-block h-3 w-1.5 translate-y-0.5 bg-[#d4d4d4]" />
        </p>
      )}
    </div>
  );
}
