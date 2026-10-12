"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { profile } from "@/lib/data";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from(".hero-anim", {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.12,
      });
    },
    { scope: ref }
  );

  return (
    <section
      ref={ref}
      id="top"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-20 pt-16 md:pt-24"
    >
      <h1 className="hero-anim text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
        {profile.name}
      </h1>

      <p className="hero-anim mt-4 text-xl text-accent md:text-2xl">
        {profile.role} <span className="text-muted">·</span>{" "}
        <span className="text-muted">{profile.roleDetail}</span>
      </p>

      <p className="hero-anim mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
        {profile.summary}
      </p>

      <div className="hero-anim mt-8 flex flex-wrap gap-4 text-sm text-muted">
        <span>{profile.location}</span>
        <span className="text-border">•</span>
        <span>{profile.studying}</span>
      </div>

      <div className="hero-anim mt-10 flex flex-wrap gap-3">
        <a
          href="#experiencia"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Ver experiencia
        </a>
        <a
          href="#contacto"
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
        >
          Contactar
        </a>
      </div>
    </section>
  );
}
