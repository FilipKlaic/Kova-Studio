import { cn } from "@/lib/utils";
import { Window } from "@/components/fragments/Window";

const messages = [
  { name: "Elin", initial: "E", tone: "bg-[#e6f4ea] text-[#1e7a3c]", text: "Pushed the new channel roles, can someone check?" },
  { name: "Marcus", initial: "M", tone: "bg-brand-soft text-brand", text: "On it. Moderators can pin now 👍" },
];

/** A channel in the Atrium desktop client. */
export function ChatFragment({ className }: { className?: string }) {
  return (
    <Window title="Atrium" className={className}>
      <div className="flex">
        <div className="hidden w-24 shrink-0 space-y-1 border-r border-border bg-band p-2 font-mono text-[11px] text-muted-foreground sm:block">
          <p className="rounded bg-card px-1.5 py-0.5 text-foreground shadow-sm"># general</p>
          <p className="px-1.5 py-0.5"># design</p>
          <p className="px-1.5 py-0.5"># releases</p>
        </div>
        <div className="flex-1 space-y-3 p-3">
          {messages.map((m) => (
            <div key={m.name} className="flex gap-2">
              <span
                className={cn(
                  "flex size-6 shrink-0 items-center justify-center rounded-md text-[11px] font-semibold",
                  m.tone,
                )}
              >
                {m.initial}
              </span>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold text-foreground">{m.name}</p>
                <p className="text-muted-foreground">{m.text}</p>
              </div>
            </div>
          ))}
          <p className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <span className="flex gap-0.5">
              <span className="size-1 rounded-full bg-muted-foreground" />
              <span className="size-1 rounded-full bg-muted-foreground/70" />
              <span className="size-1 rounded-full bg-muted-foreground/40" />
            </span>
            Elin is typing
          </p>
        </div>
      </div>
    </Window>
  );
}

/** A single chat message, for the hero collage. */
export function ChatBubbleFragment({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("fragment flex select-none gap-2.5 p-3 text-[12px]", className)}>
      <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-brand-soft text-[11px] font-semibold text-brand">
        M
      </span>
      <div>
        <p className="text-[11px] font-semibold">
          Marcus <span className="font-normal text-muted-foreground"># releases</span>
        </p>
        <p className="mt-0.5 text-muted-foreground">v1.4 is live on macOS and Windows 🎉</p>
      </div>
    </div>
  );
}
