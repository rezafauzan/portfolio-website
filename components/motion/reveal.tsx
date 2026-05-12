"use client";

import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function Reveal({
  className,
  children,
  delay = 0,
  ...props
}: MotionProps & { className?: string; children: React.ReactNode; delay?: number }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 14, filter: "blur(6px)" }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={reduced ? undefined : { duration: 0.55, ease: "easeOut", delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

