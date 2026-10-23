"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Section from "./Section";
import { systemsCatalog } from "@/lib/data";

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
        .from(".system-card", {
          opacity: 0,
          y: 30,
          scale: 0.96,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.12,
        });
    },
    { scope: ref }
  );

  return (
    <Section id="proyectos" eyebrow="Catálogo de sistemas" title="Sistemas que diseñé y construí">
      <div ref={ref} className="space-y-12">
        {systemsCatalog.map((category) => (
          <div key={category.title}>
            <h3 className="mb-1 text-sm font-medium uppercase tracking-wide text-muted">
              {category.title}
            </h3>
            {category.note && (
              <p className="mb-4 max-w-2xl text-xs leading-relaxed text-muted">
                {category.note}
              </p>
            )}
            <div className={`grid gap-5 md:grid-cols-2 ${category.note ? "" : "mt-4"}`}>
              {category.systems.map((system) => (
                <div
                  key={system.name}
                  className="system-card rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40"
                >
                  <h4 className="text-lg font-semibold text-foreground">
                    {system.name}
                  </h4>
                  <p className="mb-3 text-sm text-accent">{system.subtitle}</p>
                  <p className="mb-5 text-sm leading-relaxed text-muted">
                    {system.description}
                  </p>

                  {system.stack && (
                    <div className="mb-5 flex flex-wrap gap-2">
                      {system.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border bg-surface-hover px-2.5 py-1 font-mono text-xs text-foreground/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {system.credentials && (
                    <div className="mb-5 rounded-lg border border-border bg-surface-hover p-3 font-mono text-xs text-foreground/80">
                      <p className="mb-1 font-sans text-[11px] uppercase tracking-wide text-muted">
                        Credenciales de demo
                      </p>
                      <p>{system.credentials.user}</p>
                      <p>{system.credentials.password}</p>
                    </div>
                  )}

                  <a
                    href={system.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent/80"
                  >
                    Visitar sistema
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
