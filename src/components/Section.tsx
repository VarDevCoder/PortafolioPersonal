"use client";

import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, eyebrow, title, children }: SectionProps) {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id={id}
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 md:py-20"
    >
      <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
        {eyebrow}
      </p>
      <h2 className="mb-10 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        {title}
      </h2>
      {children}
    </section>
  );
}
