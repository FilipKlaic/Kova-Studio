interface KovaLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { text: "text-lg", mark: "size-4" },
  md: { text: "text-[23px]", mark: "size-5" },
  lg: { text: "text-3xl", mark: "size-6" },
};

export function KovaLogo({ className = "", size = "md" }: KovaLogoProps) {
  const { text, mark } = sizes[size];
  return (
    <span
      className={`inline-flex items-center gap-2 font-display font-medium leading-none text-foreground ${text} ${className}`}
    >
      <svg viewBox="0 0 20 20" fill="none" className={mark} aria-hidden="true">
        <path
          d="M10 1.2L18.6 6.4V13.6L10 18.8L1.4 13.6V6.4L10 1.2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M10 1.2V18.8" stroke="var(--focus)" strokeWidth="1.5" />
      </svg>
      Kova
    </span>
  );
}
