import { cn } from "@/lib/utils";
import { Window } from "@/components/fragments/Window";

const games = [
  { name: "Cyberpunk 2077", launcher: "Steam" },
  { name: "Elden Ring", launcher: "Steam" },
  { name: "Alan Wake 2", launcher: "Epic" },
];

/** Restall's game list with a mod ready to install. */
export function ModFragment({ className }: { className?: string }) {
  return (
    <Window title="Restall" className={className}>
      <div className="flex">
        <ul className="w-[46%] shrink-0 space-y-0.5 border-r border-border p-2">
          {games.map((g, i) => (
            <li
              key={g.name}
              className={cn("rounded-md px-2 py-1.5", i === 0 && "bg-brand-soft")}
            >
              <p className={cn("truncate font-medium", i === 0 ? "text-brand" : "text-foreground")}>
                {g.name}
              </p>
              <p className="text-[10px] text-muted-foreground">{g.launcher}</p>
            </li>
          ))}
        </ul>
        <div className="flex-1 space-y-2.5 p-3">
          <div className="flex gap-1.5 text-[11px]">
            <span className="rounded border border-brand px-1.5 py-0.5 font-medium text-brand">RenoDX</span>
            <span className="rounded border border-border px-1.5 py-0.5 text-muted-foreground">ReShade</span>
          </div>
          <div className="flex items-center justify-between rounded-md border border-border px-2 py-1.5 font-mono text-[11px]">
            v0.42 <span className="text-muted-foreground">▾</span>
          </div>
          <div className="rounded-md bg-brand py-1.5 text-center font-medium text-white">
            Install
          </div>
        </div>
      </div>
    </Window>
  );
}
