"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Section from "./Section";
import { education, languages } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
      });

      tl.from(".education-card", {
        opacity: 0,
        y: 24,
        duration: 0.55,
        ease: "power2.out",
        stagger: 0.12,
      }).from(
        ".language-item",
        {
          opacity: 0,
          x: -16,
          duration: 0.4,
          ease: "power2.out",
          stagger: 0.1,
        },
        "-=0.2"
      );
    },
    { scope: ref }
  );

  return (
    <Section id="formacion" eyebrow="Formación" title="Estudios e idiomas">
      <div ref={ref} className="grid gap-8 md:grid-cols-2">
        <div className="space-y-5">
          {education.map((item) => (
            <div
              key={item.title}
              className="education-card rounded-2xl border border-border bg-surface p-5"
            >
              <h3 className="text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-accent">{item.institution}</p>
              <p className="mt-1 font-mono text-xs text-muted">{item.period}</p>
            </div>
          ))}
        </div>

        <div className="education-card rounded-2xl border border-border bg-surface p-5">
          <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted">
            Idiomas
          </h3>
          <ul className="space-y-3">
            {languages.map((lang) => (
              <li
                key={lang.name}
                className="language-item flex items-center justify-between text-sm"
              >
                <span className="text-foreground">{lang.name}</span>
                <span className="text-muted">{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
