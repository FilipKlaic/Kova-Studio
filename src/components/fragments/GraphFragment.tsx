import { Window } from "@/components/fragments/Window";

const nodes = [
  { id: "app", label: "app.tsx", x: 130, y: 22, c: "#2b3fd1" },
  { id: "routes", label: "routes.ts", x: 48, y: 74, c: "#2b3fd1" },
  { id: "graph", label: "Graph.tsx", x: 212, y: 74, c: "#2b3fd1" },
  { id: "scan", label: "scan.rs", x: 22, y: 128, c: "#d9480f" },
  { id: "store", label: "store.ts", x: 132, y: 128, c: "#1e7a3c" },
  { id: "layout", label: "layout.ts", x: 238, y: 128, c: "#1e7a3c" },
  { id: "db", label: "cache.rs", x: 76, y: 176, c: "#d9480f" },
];

const edges = [
  ["app", "routes"],
  ["app", "graph"],
  ["routes", "scan"],
  ["routes", "store"],
  ["graph", "store"],
  ["graph", "layout"],
  ["scan", "db"],
  ["store", "db"],
];

const W = 74;
const H = 22;
const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

/** Meridian's import graph for a small project. */
export function GraphFragment({ className }: { className?: string }) {
  return (
    <Window title="Meridian — imports" className={className}>
      <svg viewBox="0 0 330 210" className="block w-full bg-card">
        <g stroke="#d9d9d6" strokeWidth={1.2} fill="none">
          {edges.map(([a, b]) => {
            const s = byId[a];
            const t = byId[b];
            const x1 = s.x + W / 2;
            const y1 = s.y + H;
            const x2 = t.x + W / 2;
            const y2 = t.y;
            const my = (y1 + y2) / 2;
            return <path key={`${a}-${b}`} d={`M${x1} ${y1} C${x1} ${my} ${x2} ${my} ${x2} ${y2}`} />;
          })}
        </g>
        {nodes.map((n) => (
          <g key={n.id}>
            <rect
              x={n.x}
              y={n.y}
              width={W}
              height={H}
              rx={6}
              fill={n.id === "store" ? "#eceefd" : "#ffffff"}
              stroke={n.id === "store" ? "#2b3fd1" : "#e7e7e5"}
            />
            <circle cx={n.x + 10} cy={n.y + H / 2} r={3} fill={n.c} />
            <text
              x={n.x + 18}
              y={n.y + H / 2 + 3.5}
              fontSize={10}
              fontFamily="var(--font-geist-mono), monospace"
              fill="#0d0d0d"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </Window>
  );
}
