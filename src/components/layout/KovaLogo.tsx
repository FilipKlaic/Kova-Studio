interface KovaLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-3xl",
};

export function KovaLogo({ className = "", size = "md" }: KovaLogoProps) {
  return (
    <span
      className={`font-display font-extrabold tracking-widest uppercase ${sizes[size]} ${className}`}
    >
      <span className="text-ember">K</span>
      <span className="text-foreground">OVA</span>
    </span>
  );
}
