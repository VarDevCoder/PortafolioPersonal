import Section from "./Section";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experiencia" eyebrow="Trayectoria" title="Experiencia profesional">
      <div className="relative space-y-10 border-l border-border pl-8">
        {experience.map((job) => (
          <div key={`${job.company}-${job.period}`} className="relative">
            <span
              className={`absolute -left-[2.28rem] top-1.5 h-3 w-3 rounded-full border-2 border-background ${
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
