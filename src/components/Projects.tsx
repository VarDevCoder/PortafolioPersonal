import Section from "./Section";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section id="proyectos" eyebrow="Proyectos personales" title="Cosas que construí por mi cuenta">
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40"
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
