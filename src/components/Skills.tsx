import Section from "./Section";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <Section id="stack" eyebrow="Stack técnico" title="Herramientas con las que trabajo a diario">
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className={`rounded-2xl border p-6 ${
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
                  className={`rounded-full border px-3 py-1 text-sm ${
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
