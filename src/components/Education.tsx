import Section from "./Section";
import { education, languages } from "@/lib/data";

export default function Education() {
  return (
    <Section id="formacion" eyebrow="Formación" title="Estudios e idiomas">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-5">
          {education.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-surface p-5"
            >
              <h3 className="text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-accent">{item.institution}</p>
              <p className="mt-1 font-mono text-xs text-muted">{item.period}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-border bg-surface p-5">
          <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted">
            Idiomas
          </h3>
          <ul className="space-y-3">
            {languages.map((lang) => (
              <li
                key={lang.name}
                className="flex items-center justify-between text-sm"
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
