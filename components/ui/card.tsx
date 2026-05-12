import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_25px_60px_rgba(0,0,0,0.35)]",
        className,
      )}
      {...props}
    />
  );
}

