"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Section from "./Section";
import { projects } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      gsap
        .timeline({
          scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        })
        .from(".project-card", {
          opacity: 0,
          y: 30,
          scale: 0.96,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.15,
        });
    },
    { scope: ref }
  );

  return (
    <Section id="proyectos" eyebrow="Proyectos personales" title="Cosas que construí por mi cuenta">
      <div ref={ref} className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="project-card rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40"
          >
            <h3 className="mb-3 text-lg font-semibold text-foreground">
              {project.name}
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-surface-hover px-2.5 py-1 font-mono text-xs text-foreground/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
