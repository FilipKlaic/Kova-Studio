import { cn } from "@/lib/utils";
import { Window } from "@/components/fragments/Window";

const mugs = [
  { item: "Espresso 4oz", count: 1 },
  { item: "Small 6oz", count: 5 },
  { item: "Medium 12oz", count: 2 },
  { item: "Large 16oz", count: 1 },
];

/* Fogarolli's own palette, so the fragment matches the real app */
const app = {
  ink: "text-[#3a2a1f]",
  soft: "text-[#8a7b6e]",
  gold: "text-[#c19a6b]",
  line: "border-[#f0ebe4]",
  button: "border-[#ebe4d9]",
};

function Stepper({ count }: { count: number }) {
  return (
    <span className="flex items-center gap-2">
      <span className={cn("flex size-7 items-center justify-center rounded-lg border text-sm", app.button, app.ink)}>
        −
      </span>
      <span className={cn("w-4 text-center text-[14px] font-bold tabular-nums", app.ink)}>
        {count}
      </span>
      <span className={cn("flex size-7 items-center justify-center rounded-lg border text-sm", app.button, app.ink)}>
        +
      </span>
    </span>
  );
}

/** The stock count screen from the iPad app. */
export function FogarolliFragment({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const rows = compact ? mugs.slice(0, 3) : mugs;
  return (
    <Window title="Fogarolli — Lager" className={className}>
      <div className="bg-white px-5 pb-3 pt-4">
        {!compact && (
          <>
            <p className={cn("text-center text-[10px] font-semibold tracking-[0.12em]", app.soft)}>
              DITT NAMN
            </p>
            <div
              className={cn(
                "mt-2 rounded-xl border border-[#ece6dc] bg-[#fdf9f5] px-3 py-2.5 text-[12px]",
                app.soft,
              )}
            >
              Vem fyller i?
            </div>
          </>
        )}
        <p
          className={cn(
            "border-b border-[#ece6dc] pb-2 text-center text-[11px] font-bold tracking-[0.14em]",
            app.gold,
            compact ? "mt-0" : "mt-5",
          )}
        >
          MUGGAR
        </p>
        <ul>
          {rows.map(({ item, count }) => (
            <li
              key={item}
              className={cn("flex items-center justify-between gap-3 border-b py-2.5 last:border-b-0", app.line)}
            >
              <span className="inline-flex flex-col items-center">
                <span className={cn("block text-[13px] font-semibold", app.ink)}>{item}</span>
                <span className={cn("block text-[11px] font-medium", app.soft)}>Rör</span>
              </span>
              <Stepper count={count} />
            </li>
          ))}
        </ul>
      </div>
    </Window>
  );
}
