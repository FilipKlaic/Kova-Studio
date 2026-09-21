import { PAPER, Sketch } from "@/components/illustrations/Sketch";

/** A dashboard, a phone app and a pencil mid-scribble. */
export function HeroIllustration({ className }: { className?: string }) {
  return (
    <Sketch viewBox="0 0 530 480" className={className}>
      {/* Browser window with a small dashboard */}
      <g transform="rotate(-2 250 210)">
        <rect x="60" y="70" width="370" height="280" rx="16" transform="translate(10 12)" fill="var(--fill-sky)" stroke="none" />
        <rect x="60" y="70" width="370" height="280" rx="16" fill={PAPER} stroke="none" />
        <rect x="60" y="70" width="370" height="280" rx="16" />
        <path d="M60 108 H430" />
        <circle cx="84" cy="89" r="4.5" />
        <circle cx="102" cy="89" r="4.5" />
        <circle cx="120" cy="89" r="4.5" />
        <rect x="146" y="80" width="190" height="18" rx="9" strokeWidth={1.8} />

        {/* Sidebar */}
        <path d="M146 108 V350" />
        <rect x="74" y="127" width="60" height="18" rx="6" transform="translate(3 3)" fill="var(--fill-ochre)" stroke="none" />
        <path d="M82 136 H124" />
        <path d="M82 160 H118 M82 184 H124 M82 208 H112" strokeWidth={1.8} />
        <circle cx="92" cy="322" r="10" />
        <path d="M110 322 H128" strokeWidth={1.8} />

        {/* Heading */}
        <path d="M172 140 H300" strokeWidth={3.4} />
        <path d="M172 157 H252" strokeWidth={1.8} />

        {/* Stat cards */}
        <rect x="172" y="174" width="112" height="62" rx="10" transform="translate(5 5)" fill="var(--fill-ochre)" stroke="none" />
        <rect x="172" y="174" width="112" height="62" rx="10" />
        <path d="M186 194 H224" strokeWidth={1.8} />
        <path d="M186 222 l12 -8 l10 5 l14 -12 l14 5" />

        <rect x="298" y="174" width="112" height="62" rx="10" transform="translate(5 5)" fill="var(--fill-sage)" stroke="none" />
        <rect x="298" y="174" width="112" height="62" rx="10" />
        <path d="M312 194 H354" strokeWidth={1.8} />
        <path d="M316 224 V214 M328 224 V206 M340 224 V210 M352 224 V200" strokeWidth={3} />

        {/* Line chart */}
        <path d="M178 318 C200 312 212 290 234 296 S268 318 292 288 S336 262 356 270 S392 250 404 256 L404 332 L178 332 Z" fill="var(--fill-sky)" stroke="none" />
        <path d="M172 256 V332 H410" />
        <path d="M178 318 C200 312 212 290 234 296 S268 318 292 288 S336 262 356 270 S392 250 404 256" />
        <circle cx="234" cy="296" r="4" fill={PAPER} />
        <circle cx="292" cy="288" r="4" fill={PAPER} />
        <circle cx="356" cy="270" r="4" fill={PAPER} />
      </g>

      {/* Sticky note */}
      <g transform="rotate(8 442 70)">
        <rect x="402" y="30" width="80" height="80" rx="3" fill={PAPER} stroke="none" />
        <rect x="402" y="30" width="80" height="80" rx="3" transform="translate(4 5)" fill="var(--fill-ochre)" stroke="none" />
        <rect x="402" y="30" width="80" height="80" rx="3" />
        <path d="M416 52 H466 M416 66 H452" strokeWidth={1.8} />
        <path d="M418 86 l8 8 l18 -18" stroke="var(--focus)" strokeWidth={2.8} />
      </g>

      {/* Phone */}
      <g transform="rotate(7 428 330)">
        <rect x="380" y="222" width="98" height="190" rx="18" transform="translate(8 9)" fill="var(--fill-sage)" stroke="none" />
        <rect x="380" y="222" width="98" height="190" rx="18" fill={PAPER} stroke="none" />
        <rect x="380" y="222" width="98" height="190" rx="18" />
        <path d="M414 236 H444" />
        <circle cx="402" cy="262" r="9" transform="translate(2 2)" fill="var(--fill-ochre)" stroke="none" />
        <circle cx="402" cy="262" r="9" />
        <path d="M418 258 H458" />
        <path d="M418 269 H444" strokeWidth={1.8} />
        <rect x="392" y="286" width="74" height="50" rx="8" />
        <path d="M402 300 H452 M402 312 H440 M402 324 H448" strokeWidth={1.6} />
        <rect x="392" y="352" width="74" height="22" rx="11" transform="translate(3 3)" fill="var(--fill-clay)" stroke="none" />
        <rect x="392" y="352" width="74" height="22" rx="11" />
        <path d="M414 399 H444" />
      </g>
      <path d="M500 252 l12 -5 M502 268 h14 M500 284 l12 5" strokeWidth={2} />

      {/* Pencil */}
      <g transform="translate(48 452) rotate(-16)">
        <rect x="0" y="-9" width="160" height="18" transform="translate(3 4)" fill="var(--fill-ochre)" stroke="none" />
        <path d="M-14 -9 H-24 Q-31 -9 -31 0 Q-31 9 -24 9 H-14 Z" transform="translate(2 3)" fill="var(--fill-clay)" stroke="none" />
        <path d="M-14 -9 H-24 Q-31 -9 -31 0 Q-31 9 -24 9 H-14" />
        <path d="M0 -9 H160 L188 0 L160 9 H0 Z" />
        <path d="M160 -9 V9" />
        <path d="M0 0 H160" strokeWidth={1.4} />
        <path d="M179 -3 L188 0 L179 3 Z" fill="currentColor" />
        <rect x="-14" y="-9" width="14" height="18" />
        <path d="M-7 -9 V9" strokeWidth={1.4} />
      </g>
      <path
        className="draw-line"
        pathLength={100}
        d="M231 398 c10 -10 18 6 28 -3 s16 -14 26 -4 s16 8 26 -4 s14 -8 22 0"
        stroke="var(--focus)"
        strokeWidth={2.6}
      />

      {/* Small marks */}
      <path d="M380 22 v14 M373 29 h14" stroke="var(--focus)" strokeWidth={2} />
      <circle cx="36" cy="120" r="3.5" fill="var(--fill-clay)" stroke="none" />
      <circle cx="24" cy="138" r="2.5" fill="var(--fill-sky)" stroke="none" />
    </Sketch>
  );
}
