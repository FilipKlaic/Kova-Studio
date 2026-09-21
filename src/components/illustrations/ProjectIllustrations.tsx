import { PAPER, Sketch } from "@/components/illustrations/Sketch";

type IllustrationProps = { className?: string };

const inventoryRows = [90, 112, 134, 156];
const calendarCols = [268, 282, 296, 310];
const calendarRows = [128, 142, 156];

/** iPad with a wagon inventory list, and a phone with the shift planner. */
export function FogarolliSketch({ className }: IllustrationProps) {
  return (
    <Sketch viewBox="0 0 360 260" className={className}>
      <g transform="rotate(-3 141 120)">
        <rect x="16" y="30" width="250" height="180" rx="16" transform="translate(9 10)" fill="var(--fill-sky)" stroke="none" />
        <rect x="16" y="30" width="250" height="180" rx="16" fill={PAPER} stroke="none" />
        <rect x="16" y="30" width="250" height="180" rx="16" />
        <rect x="30" y="44" width="222" height="152" rx="6" strokeWidth={1.6} />

        <path d="M44 64 H118" strokeWidth={3.2} />
        <rect x="184" y="56" width="54" height="16" rx="8" transform="translate(2 2)" fill="var(--fill-ochre)" stroke="none" />
        <rect x="184" y="56" width="54" height="16" rx="8" strokeWidth={1.8} />

        <rect x="38" y="127" width="206" height="18" rx="5" fill="var(--fill-sage)" stroke="none" />
        {inventoryRows.map((y, i) => (
          <g key={y}>
            <path d={`M44 ${y + 4} H${[104, 92, 116, 86][i]}`} strokeWidth={1.8} />
            <path d={`M208 ${y + 4} H226`} strokeWidth={3} />
            {i < 3 && <path d={`M44 ${y + 15} H238`} strokeWidth={1} />}
          </g>
        ))}
        <path d="M168 93 l4 4 l8 -8 M168 115 l4 4 l8 -8" stroke="var(--focus)" strokeWidth={2.2} />
      </g>

      <g transform="rotate(6 295 161)">
        <rect x="256" y="86" width="78" height="150" rx="14" transform="translate(7 8)" fill="var(--fill-clay)" stroke="none" />
        <rect x="256" y="86" width="78" height="150" rx="14" fill={PAPER} stroke="none" />
        <rect x="256" y="86" width="78" height="150" rx="14" />
        <path d="M284 98 H306" />
        <path d="M268 116 H300" strokeWidth={2.4} />
        <rect x="282" y="128" width="10" height="10" rx="2" fill="var(--fill-sky)" stroke="none" />
        <rect x="310" y="142" width="10" height="10" rx="2" fill="var(--fill-ochre)" stroke="none" />
        {calendarRows.map((y) =>
          calendarCols.map((x) => (
            <rect key={`${x}-${y}`} x={x} y={y} width="10" height="10" rx="2" strokeWidth={1.4} />
          )),
        )}
        <rect x="266" y="178" width="58" height="28" rx="6" transform="translate(2 2)" fill="var(--fill-sage)" stroke="none" />
        <rect x="266" y="178" width="58" height="28" rx="6" />
        <path d="M274 189 H310 M274 197 H296" strokeWidth={1.6} />
        <path d="M286 226 H304" />
      </g>

      <path d="M336 44 v14 M329 51 h14" stroke="var(--focus)" strokeWidth={2} />
    </Sketch>
  );
}

/** Two chat bubbles, one mid-typing, and a presence dot. */
export function AtriumSketch({ className }: IllustrationProps) {
  return (
    <Sketch viewBox="0 0 120 90" className={className}>
      <path d="M22 10 H62 Q74 10 74 22 V30 Q74 42 62 42 H28 L16 52 L19 42 Q10 40 10 30 V22 Q10 10 22 10 Z" transform="translate(3 3)" fill="var(--fill-sky)" stroke="none" />
      <path d="M22 10 H62 Q74 10 74 22 V30 Q74 42 62 42 H28 L16 52 L19 42 Q10 40 10 30 V22 Q10 10 22 10 Z" fill={PAPER} />
      <path d="M22 22 H60 M22 30 H48" strokeWidth={1.8} />

      <path d="M56 44 H96 Q108 44 108 56 V62 Q108 74 96 74 H92 L100 84 L84 74 H56 Q44 74 44 62 V56 Q44 44 56 44 Z" transform="translate(3 3)" fill="var(--fill-ochre)" stroke="none" />
      <path d="M56 44 H96 Q108 44 108 56 V62 Q108 74 96 74 H92 L100 84 L84 74 H56 Q44 74 44 62 V56 Q44 44 56 44 Z" fill={PAPER} />
      <circle cx="64" cy="59" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="76" cy="59" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="88" cy="59" r="2.6" fill="currentColor" stroke="none" />

      <circle cx="100" cy="16" r="6" fill="var(--fill-sage)" />
    </Sketch>
  );
}

/** A handful of connected nodes, like a dependency graph. */
export function MeridianSketch({ className }: IllustrationProps) {
  return (
    <Sketch viewBox="0 0 120 90" className={className}>
      <path d="M38 21 C54 21 54 15 70 15 M38 21 C54 21 54 47 70 47 M55 73 C62 73 62 54 70 50 M85 54 C90 62 94 66 100 70" strokeWidth={1.6} />
      <rect x="10" y="14" width="28" height="14" rx="4" transform="translate(2 2)" fill="var(--fill-ochre)" stroke="none" />
      <rect x="10" y="14" width="28" height="14" rx="4" />
      <rect x="70" y="8" width="32" height="14" rx="4" fill={PAPER} />
      <rect x="70" y="40" width="32" height="14" rx="4" transform="translate(2 2)" fill="var(--fill-sky)" stroke="none" />
      <rect x="70" y="40" width="32" height="14" rx="4" />
      <rect x="27" y="66" width="28" height="14" rx="4" fill={PAPER} />
      <rect x="88" y="70" width="24" height="14" rx="4" transform="translate(2 2)" fill="var(--fill-sage)" stroke="none" />
      <rect x="88" y="70" width="24" height="14" rx="4" />
    </Sketch>
  );
}

/** Terminal window with a prompt and a voice wave. */
export function AssistantSketch({ className }: IllustrationProps) {
  return (
    <Sketch viewBox="0 0 120 90" className={className}>
      <rect x="8" y="8" width="102" height="72" rx="8" transform="translate(4 5)" fill="var(--fill-sage)" stroke="none" />
      <rect x="8" y="8" width="102" height="72" rx="8" fill={PAPER} />
      <path d="M8 22 H110" />
      <circle cx="17" cy="15" r="2" />
      <circle cx="25" cy="15" r="2" />
      <circle cx="33" cy="15" r="2" />
      <path d="M18 32 l6 4 l-6 4" strokeWidth={2} />
      <path d="M30 40 H66" strokeWidth={1.8} />
      <path d="M22 62 V66 M30 57 V71 M38 52 V76 M46 58 V70 M54 54 V74 M62 60 V68 M70 57 V71 M78 62 V66" strokeWidth={2.6} stroke="var(--focus)" />
    </Sketch>
  );
}

/** Donut chart with an upward trend. */
export function SavingsSketch({ className }: IllustrationProps) {
  return (
    <Sketch viewBox="0 0 120 90" className={className}>
      <g transform="rotate(-90 42 45)">
        <circle cx="42" cy="45" r="20.5" stroke="var(--fill-sky)" strokeWidth={15} strokeLinecap="butt" />
        <circle cx="42" cy="45" r="20.5" pathLength={100} strokeDasharray="35 100" stroke="var(--fill-ochre)" strokeWidth={15} strokeLinecap="butt" />
        <circle cx="42" cy="45" r="20.5" pathLength={100} strokeDasharray="25 100" strokeDashoffset={-35} stroke="var(--fill-sage)" strokeWidth={15} strokeLinecap="butt" />
      </g>
      <circle cx="42" cy="45" r="28" />
      <circle cx="42" cy="45" r="13" />
      <path d="M42 32 V17 M52.5 52.6 L64.7 61.5 M34.4 55.5 L25.5 67.7" strokeWidth={1.8} />

      <path d="M80 72 L90 60 L98 66 L112 46" />
      <path d="M104 46 H112 V54" />
    </Sketch>
  );
}

/** Laptop with code, a coffee mug and a camera. */
export function DeskSketch({ className }: IllustrationProps) {
  return (
    <Sketch viewBox="0 0 320 200" className={className}>
      <rect x="70" y="40" width="150" height="104" rx="8" transform="translate(7 8)" fill="var(--fill-sky)" stroke="none" />
      <rect x="70" y="40" width="150" height="104" rx="8" fill={PAPER} />
      <path d="M88 62 H138" strokeWidth={2.4} />
      <path d="M100 76 H160 M100 88 H150 M88 102 H128 M100 116 H170" strokeWidth={1.8} />
      <rect x="134" y="97" width="5" height="10" fill="var(--focus)" stroke="none" />
      <path d="M54 144 H236 L248 162 Q248 166 244 166 H46 Q42 166 42 162 Z" fill={PAPER} />
      <path d="M128 155 H162" strokeWidth={1.6} />

      {/* Mug */}
      <path d="M258 124 H290 V156 Q290 166 280 166 H268 Q258 166 258 156 Z" transform="translate(3 3)" fill="var(--fill-clay)" stroke="none" />
      <path d="M258 124 H290 V156 Q290 166 280 166 H268 Q258 166 258 156 Z" />
      <path d="M290 132 Q304 132 304 143 Q304 154 290 154" />
      <path d="M268 114 q-4 -6 0 -12 q4 -6 0 -12 M280 114 q-4 -6 0 -12 q4 -6 0 -12" strokeWidth={1.8} />

      {/* Camera */}
      <rect x="8" y="134" width="78" height="52" rx="9" fill={PAPER} stroke="none" />
      <rect x="10" y="136" width="74" height="48" rx="8" transform="translate(4 4)" fill="var(--fill-ochre)" stroke="none" />
      <path d="M26 136 L33 126 H57 L64 136" fill={PAPER} />
      <rect x="10" y="136" width="74" height="48" rx="8" />
      <circle cx="47" cy="160" r="15" fill={PAPER} />
      <circle cx="47" cy="160" r="8" fill="var(--fill-sky)" />
      <rect x="68" y="129" width="10" height="7" rx="2" />

      <path d="M300 60 v14 M293 67 h14" stroke="var(--focus)" strokeWidth={2} />
    </Sketch>
  );
}

/** An envelope with a letter sliding out. */
export function LetterSketch({ className }: IllustrationProps) {
  return (
    <Sketch viewBox="0 0 200 150" className={className}>
      <rect x="30" y="62" width="130" height="78" rx="6" transform="translate(6 7)" fill="var(--fill-ochre)" stroke="none" />
      <rect x="44" y="20" width="102" height="80" rx="4" fill={PAPER} />
      <path d="M58 38 H118" strokeWidth={2.4} />
      <path d="M58 50 H132 M58 60 H112" strokeWidth={1.6} />
      <rect x="30" y="62" width="130" height="78" rx="6" fill={PAPER} stroke="none" />
      <rect x="30" y="62" width="130" height="78" rx="6" />
      <path d="M30 138 L95 96 L160 138" />
      <path d="M32 64 L78 100 M158 64 L112 100" strokeWidth={1.8} />

      <path d="M172 34 l12 -6 M174 48 h14 M172 62 l12 6" strokeWidth={2} />
      <path d="M20 28 v12 M14 34 h12" stroke="var(--focus)" strokeWidth={2} />
    </Sketch>
  );
}
