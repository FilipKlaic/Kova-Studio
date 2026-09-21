import { PAPER, Sketch } from "@/components/illustrations/Sketch";

type IllustrationProps = { className?: string };

/** Dashboard window with a bar chart and a cog. */
export function WebAppSketch({ className }: IllustrationProps) {
  return (
    <Sketch viewBox="0 0 200 140" className={className}>
      <rect x="18" y="16" width="138" height="100" rx="10" transform="translate(6 7)" fill="var(--fill-sky)" stroke="none" />
      <rect x="18" y="16" width="138" height="100" rx="10" fill={PAPER} stroke="none" />
      <rect x="18" y="16" width="138" height="100" rx="10" />
      <path d="M18 34 H156" />
      <circle cx="30" cy="25" r="2.6" />
      <circle cx="40" cy="25" r="2.6" />
      <circle cx="50" cy="25" r="2.6" />

      <path d="M52 34 V116" />
      <path d="M28 50 H44 M28 62 H42 M28 74 H44" strokeWidth={2} />

      <path d="M66 48 H118" strokeWidth={3} />
      <rect x="66" y="74" width="14" height="30" transform="translate(3 3)" fill="var(--fill-sage)" stroke="none" />
      <rect x="88" y="60" width="14" height="44" transform="translate(3 3)" fill="var(--fill-sage)" stroke="none" />
      <rect x="110" y="82" width="14" height="22" transform="translate(3 3)" fill="var(--fill-sage)" stroke="none" />
      <path d="M66 104 V74 H80 V104 M88 104 V60 H102 V104 M110 104 V82 H124 V104" />
      <path d="M62 104 H136" />

      {/* Cog */}
      <circle cx="156" cy="104" r="23" fill={PAPER} stroke="none" />
      <circle cx="156" cy="104" r="17" transform="translate(3 3)" fill="var(--fill-ochre)" stroke="none" />
      <circle cx="156" cy="104" r="17" />
      <circle cx="156" cy="104" r="6" />
      <path
        d="M173 104 H179 M168 116 L172.3 120.3 M156 121 V127 M144 116 L139.7 120.3 M139 104 H133 M144 92 L139.7 87.7 M156 87 V81 M168 92 L172.3 87.7"
        strokeWidth={4.5}
      />
    </Sketch>
  );
}

/** Browser with a simple landing page and a cursor. */
export function WebsiteSketch({ className }: IllustrationProps) {
  return (
    <Sketch viewBox="0 0 200 140" className={className}>
      <rect x="22" y="14" width="150" height="104" rx="10" transform="translate(6 7)" fill="var(--fill-sky)" stroke="none" />
      <rect x="22" y="14" width="150" height="104" rx="10" fill={PAPER} stroke="none" />
      <rect x="22" y="14" width="150" height="104" rx="10" />
      <path d="M22 32 H172" />
      <circle cx="34" cy="23" r="2.6" />
      <circle cx="44" cy="23" r="2.6" />
      <circle cx="54" cy="23" r="2.6" />
      <rect x="68" y="18.5" width="70" height="9" rx="4.5" strokeWidth={1.6} />

      <path d="M36 44 H54 M122 44 H134 M142 44 H158" strokeWidth={1.8} />
      <path d="M36 62 H102 M36 75 H88" strokeWidth={3.4} />
      <path d="M36 89 H98" strokeWidth={1.8} />
      <rect x="36" y="99" width="34" height="11" rx="5.5" transform="translate(2 2)" fill="var(--fill-clay)" stroke="none" />
      <rect x="36" y="99" width="34" height="11" rx="5.5" />

      <rect x="114" y="56" width="46" height="50" rx="6" transform="translate(3 3)" fill="var(--fill-ochre)" stroke="none" />
      <rect x="114" y="56" width="46" height="50" rx="6" />
      <circle cx="129" cy="70" r="5" />
      <path d="M117 102 L132 84 L142 94 L148 88 L158 102" />

      {/* Cursor */}
      <path d="M150 98 L150 123 L156.5 117 L161.5 128 L166.5 126 L161.5 115 L170 115 Z" fill={PAPER} />
    </Sketch>
  );
}

/** App window with records, backed by a database. */
export function PortalSketch({ className }: IllustrationProps) {
  return (
    <Sketch viewBox="0 0 200 140" className={className}>
      <rect x="46" y="14" width="128" height="100" rx="10" transform="translate(6 7)" fill="var(--fill-sky)" stroke="none" />
      <rect x="46" y="14" width="128" height="100" rx="10" fill={PAPER} stroke="none" />
      <rect x="46" y="14" width="128" height="100" rx="10" />
      <path d="M46 32 H174" />
      <circle cx="58" cy="23" r="2.6" />
      <circle cx="68" cy="23" r="2.6" />
      <circle cx="78" cy="23" r="2.6" />

      <circle cx="76" cy="54" r="9" transform="translate(2 2)" fill="var(--fill-ochre)" stroke="none" />
      <circle cx="76" cy="54" r="9" />
      <path d="M94 50 H140" strokeWidth={2.4} />
      <path d="M94 59 H122" strokeWidth={1.8} />
      <rect x="68" y="76" width="92" height="12" rx="4" transform="translate(2 2)" fill="var(--fill-sage)" stroke="none" />
      <rect x="68" y="76" width="92" height="12" rx="4" strokeWidth={1.8} />
      <rect x="68" y="94" width="92" height="12" rx="4" strokeWidth={1.8} />

      {/* Database */}
      <rect x="18" y="70" width="40" height="54" rx="10" fill={PAPER} stroke="none" />
      <rect x="20" y="72" width="36" height="50" rx="8" transform="translate(3 3)" fill="var(--fill-ochre)" stroke="none" />
      <ellipse cx="38" cy="78" rx="18" ry="6.5" fill={PAPER} />
      <path d="M20 78 V116 M56 78 V116" />
      <path d="M20 97 A18 6.5 0 0 0 56 97" strokeWidth={1.8} />
      <path d="M20 116 A18 6.5 0 0 0 56 116" />
    </Sketch>
  );
}

/** Monitor showing a small node graph. */
export function DesktopSketch({ className }: IllustrationProps) {
  return (
    <Sketch viewBox="0 0 200 140" className={className}>
      <rect x="24" y="10" width="150" height="96" rx="8" transform="translate(6 6)" fill="var(--fill-sage)" stroke="none" />
      <rect x="24" y="10" width="150" height="96" rx="8" fill={PAPER} stroke="none" />
      <rect x="24" y="10" width="150" height="96" rx="8" />
      <path d="M24 26 H174" />
      <circle cx="34" cy="18" r="2.4" />
      <circle cx="43" cy="18" r="2.4" />
      <circle cx="52" cy="18" r="2.4" />

      <path
        d="M68 47 C82 47 82 41 96 41 M68 47 C82 47 82 77 96 77 M124 41 C132 41 132 61 140 61 M124 77 C132 77 132 61 140 61"
        strokeWidth={1.8}
      />
      <rect x="40" y="40" width="28" height="14" rx="4" transform="translate(2 2)" fill="var(--fill-ochre)" stroke="none" />
      <rect x="40" y="40" width="28" height="14" rx="4" />
      <rect x="96" y="34" width="28" height="14" rx="4" fill={PAPER} />
      <rect x="96" y="70" width="28" height="14" rx="4" transform="translate(2 2)" fill="var(--fill-sky)" stroke="none" />
      <rect x="96" y="70" width="28" height="14" rx="4" />
      <rect x="140" y="54" width="24" height="14" rx="4" fill={PAPER} />

      <path d="M90 106 L86 124 M108 106 L112 124" />
      <path d="M72 126 H126" strokeWidth={3} />
    </Sketch>
  );
}

/** Speech bubbles with a voice wave and a sparkle. */
export function AISketch({ className }: IllustrationProps) {
  return (
    <Sketch viewBox="0 0 200 140" className={className}>
      <path
        d="M48 16 H122 Q140 16 140 34 V68 Q140 86 122 86 H64 L46 102 L50 86 H48 Q30 86 30 68 V34 Q30 16 48 16 Z"
        transform="translate(5 6)"
        fill="var(--fill-sky)"
        stroke="none"
      />
      <path
        d="M48 16 H122 Q140 16 140 34 V68 Q140 86 122 86 H64 L46 102 L50 86 H48 Q30 86 30 68 V34 Q30 16 48 16 Z"
        fill={PAPER}
      />
      <path d="M56 46 V56 M66 40 V62 M76 33 V69 M86 42 V60 M96 36 V66 M106 44 V58 M116 48 V54" strokeWidth={3} />

      <path
        d="M162 14 C163 24 166 27 176 28 C166 29 163 32 162 42 C161 32 158 29 148 28 C158 27 161 24 162 14 Z"
        transform="translate(2 2)"
        fill="var(--fill-ochre)"
        stroke="none"
      />
      <path d="M162 14 C163 24 166 27 176 28 C166 29 163 32 162 42 C161 32 158 29 148 28 C158 27 161 24 162 14 Z" />
      <path d="M176 52 C176.5 57 178 58.5 183 59 C178 59.5 176.5 61 176 66 C175.5 61 174 59.5 169 59 C174 58.5 175.5 57 176 52 Z" strokeWidth={1.8} />

      <path
        d="M108 98 H160 Q172 98 172 110 V114 Q172 126 160 126 H158 L164 134 L150 126 H108 Q96 126 96 114 V110 Q96 98 108 98 Z"
        transform="translate(3 3)"
        fill="var(--fill-clay)"
        stroke="none"
      />
      <path d="M108 98 H160 Q172 98 172 110 V114 Q172 126 160 126 H158 L164 134 L150 126 H108 Q96 126 96 114 V110 Q96 98 108 98 Z" />
      <path d="M108 108 H158 M108 116 H140" strokeWidth={1.8} />
    </Sketch>
  );
}

/** Phone with a message bubble popping out. */
export function MobileSketch({ className }: IllustrationProps) {
  return (
    <Sketch viewBox="0 0 200 140" className={className}>
      <rect x="62" y="10" width="62" height="120" rx="13" transform="translate(6 7)" fill="var(--fill-sage)" stroke="none" />
      <rect x="62" y="10" width="62" height="120" rx="13" fill={PAPER} stroke="none" />
      <rect x="62" y="10" width="62" height="120" rx="13" />
      <path d="M84 20 H102" />

      <circle cx="76" cy="36" r="5" transform="translate(1.5 1.5)" fill="var(--fill-ochre)" stroke="none" />
      <circle cx="76" cy="36" r="5" />
      <path d="M86 34 H110" strokeWidth={2} />
      <path d="M86 41 H100" strokeWidth={1.6} />
      <rect x="72" y="52" width="42" height="34" rx="6" />
      <path d="M79 62 H106 M79 70 H100 M79 78 H104" strokeWidth={1.6} />
      <rect x="72" y="96" width="42" height="12" rx="6" transform="translate(2 2)" fill="var(--fill-clay)" stroke="none" />
      <rect x="72" y="96" width="42" height="12" rx="6" />
      <path d="M84 120 H102" />

      {/* Message bubble */}
      <path
        d="M120 26 H158 Q170 26 170 38 V44 Q170 56 158 56 H126 L114 66 L117 56 H120 Q108 56 108 44 V38 Q108 26 120 26 Z"
        fill={PAPER}
        stroke="none"
      />
      <path
        d="M120 26 H158 Q170 26 170 38 V44 Q170 56 158 56 H126 L114 66 L117 56 H120 Q108 56 108 44 V38 Q108 26 120 26 Z"
        transform="translate(4 4)"
        fill="var(--fill-sky)"
        stroke="none"
      />
      <path d="M120 26 H158 Q170 26 170 38 V44 Q170 56 158 56 H126 L114 66 L117 56 H120 Q108 56 108 44 V38 Q108 26 120 26 Z" />
      <path d="M119 37 H158 M119 45 H146" strokeWidth={1.8} />

      <path d="M50 42 l-9 -4 M48 56 h-11 M50 70 l-9 4" strokeWidth={2} />
    </Sketch>
  );
}
