import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/75",
        className,
      )}
      {...props}
    />
  );
}

