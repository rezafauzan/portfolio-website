import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative scroll-mt-24 py-20 sm:py-24", className)}>
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [background-image:radial-gradient(1000px_400px_at_20%_-10%,rgba(34,211,238,0.45),transparent)]" />
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <header className="max-w-2xl">
          {eyebrow ? (
            <p className="text-xs font-medium tracking-[0.22em] text-cyan-300/90">
              {eyebrow.toUpperCase()}
            </p>
          ) : null}
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base">
              {description}
            </p>
          ) : null}
        </header>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

