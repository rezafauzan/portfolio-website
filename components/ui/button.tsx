import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-cyan-300/15 text-cyan-50 ring-1 ring-inset ring-cyan-300/40 hover:bg-cyan-300/20 hover:ring-cyan-300/55 shadow-[0_0_0_1px_rgba(34,211,238,0.20),0_10px_30px_rgba(0,0,0,0.35)]",
  secondary:
    "bg-white/5 text-white ring-1 ring-inset ring-white/12 hover:bg-white/7 hover:ring-white/18",
  ghost: "text-white/80 hover:text-white hover:bg-white/5",
};

export function Button({
  className,
  variant = "secondary",
  ...props
}: React.ComponentPropsWithoutRef<"button"> & { variant?: ButtonVariant }) {
  return (
    <button className={cn(base, variants[variant], className)} {...props} />
  );
}

export function ButtonLink({
  className,
  variant = "secondary",
  href,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof Link>, "href"> & {
  href: string;
  variant?: ButtonVariant;
}) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...props} />
  );
}

