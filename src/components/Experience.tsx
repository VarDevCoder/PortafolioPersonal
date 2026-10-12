"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Section from "./Section";
import { experience } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
      });

      tl.from(".job-entry", {
        opacity: 0,
        x: -32,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.18,
      }).from(
        ".job-dot",
        {
          scale: 0,
          duration: 0.4,
          ease: "back.out(3)",
          stagger: 0.18,
        },
        "<"
      );
    },
    { scope: ref }
  );

  return (
    <Section id="experiencia" eyebrow="Trayectoria" title="Experiencia profesional">
      <div ref={ref} className="relative space-y-10 border-l border-border pl-8">
        {experience.map((job) => (
          <div key={`${job.company}-${job.period}`} className="job-entry relative">
            <span
              className={`job-dot absolute -left-[2.28rem] top-1.5 h-3 w-3 rounded-full border-2 border-background ${
                job.current ? "bg-accent" : "bg-muted"
              }`}
            />
            <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold text-foreground">
                {job.role}
              </h3>
              <span className="font-mono text-xs text-muted">{job.period}</span>
            </div>
            <p className="mb-4 text-sm text-accent">
              {job.company} <span className="text-muted">· {job.location}</span>
            </p>
            <ul className="space-y-2">
              {job.highlights.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-muted"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
