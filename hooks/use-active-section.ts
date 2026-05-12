"use client";

import { useEffect, useMemo, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const ids = useMemo(() => sectionIds.filter(Boolean), [sectionIds]);
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    if (!ids.length) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}

