interface KovaLogoProps {
  className?: string;
  size?: "sm" | "md";
}

const sizes = {
  sm: { text: "text-base", mark: "size-2" },
  md: { text: "text-lg", mark: "size-2.5" },
};

export function KovaLogo({ className = "", size = "md" }: KovaLogoProps) {
  const { text, mark } = sizes[size];
  return (
    <span
      className={`inline-flex items-center gap-2 font-semibold leading-none tracking-[-0.03em] text-foreground ${text} ${className}`}
    >
      <span className={`${mark} rounded-[2px] bg-brand`} aria-hidden="true" />
      Kova
    </span>
  );
}
