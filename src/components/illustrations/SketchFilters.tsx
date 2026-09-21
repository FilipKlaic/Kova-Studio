/**
 * Shared SVG filters for the hand-drawn illustrations. Rendered once in the
 * root layout; illustrations reference them with filter="url(#sketch)".
 * Kept out of the layout flow rather than display:none, which breaks filter
 * references in some browsers.
 */
export function SketchFilters() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="0"
      height="0"
      style={{ position: "absolute", overflow: "hidden" }}
    >
      <defs>
        {/* Gentle wobble for line work and fills */}
        <filter id="sketch" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.035"
            numOctaves="2"
            seed="7"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="2.6"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
