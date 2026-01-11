type GapProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  label?: string;
};

export function Gap({ size = "md", className = "", label }: GapProps) {
  const sizeMap: Record<"xs" | "sm" | "md" | "lg" | "xl", string> = {
    xs: "my-1",
    sm: "my-2",
    md: "my-4",
    lg: "my-8",
    xl: "my-12",
  };

  return (
    <div className={className}>
      {label && (
        <div className="flex w-full flex-col items-center">
          <span className="text-2xl text-muted-foreground mb-2 ">{label}</span>
          <div className="w-full border-t border-border" />
        </div>
      )}

      <div aria-hidden className={`${sizeMap[size]}`} />
    </div>
  );
}
