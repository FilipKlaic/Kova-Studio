interface KovaLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { text: "text-base", mark: "size-4" },
  md: { text: "text-[20px]", mark: "size-5" },
  lg: { text: "text-2xl", mark: "size-6" },
};

export function KovaLogo({ className = "", size = "md" }: KovaLogoProps) {
  const { text, mark } = sizes[size];
  return (
    <span
      className={`inline-flex items-center gap-2 font-display font-medium tracking-tight text-foreground ${text} ${className}`}
    >
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className={mark}
        aria-hidden="true"
      >
        <path d="M10 1L19 6.5V13.5L10 19L1 13.5V6.5L10 1Z" stroke="#52a8ff" strokeWidth="1.4" />
        <path d="M10 1V19" stroke="#52a8ff" strokeWidth="1.4" strokeOpacity="0.4" />
      </svg>
      Kova
    </span>
  );
}
