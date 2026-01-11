import { cn } from "@/lib/utils";

function Separator({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<"div"> & { orientation?: "horizontal" | "vertical" }) {
  const base = orientation === "vertical" ? "w-px h-full" : "h-px w-full";
  return (
    <div
      role="separator"
      data-orientation={orientation}
      className={cn(base, "bg-border", className)}
      {...props}
    />
  );
}

export { Separator };
export default Separator;
