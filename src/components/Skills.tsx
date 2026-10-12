"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Section from "./Section";
import { skillGroups } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
      });

      tl.from(".skill-card", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.12,
      }).from(
        ".skill-chip",
        {
          opacity: 0,
          scale: 0.7,
          duration: 0.35,
          ease: "back.out(2)",
          stagger: 0.025,
        },
        "-=0.3"
      );
    },
    { scope: ref }
  );

  return (
    <Section id="stack" eyebrow="Stack técnico" title="Herramientas con las que trabajo a diario">
      <div ref={ref} className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className={`skill-card rounded-2xl border p-6 ${
              group.emphasis === "primary"
                ? "border-accent/40 bg-accent-soft md:col-span-2"
                : "border-border bg-surface"
            }`}
          >
            <h3
              className={`mb-4 text-sm font-medium uppercase tracking-wide ${
                group.emphasis === "primary" ? "text-accent" : "text-muted"
              }`}
            >
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className={`skill-chip rounded-full border px-3 py-1 text-sm ${
                    group.emphasis === "primary"
                      ? "border-accent/30 bg-background/40 text-foreground"
                      : "border-border bg-surface-hover text-foreground/90"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
