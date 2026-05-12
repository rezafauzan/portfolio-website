"use client";

import { useEffect, useState } from "react";

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(media.matches);
    onChange();

    const mql = media as MediaQueryList & {
      addListener?: (listener: () => void) => void;
      removeListener?: (listener: () => void) => void;
    };

    if (mql.addEventListener) mql.addEventListener("change", onChange);
    else mql.addListener?.(onChange);

    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", onChange);
      else mql.removeListener?.(onChange);
    };
  }, []);

  return reduced;
}

