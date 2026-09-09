import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-16 md:py-20">
      <div className="rounded-3xl border border-accent/30 bg-accent-soft px-6 py-12 text-center md:px-16">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          ¿Hablamos?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">
          Estoy abierto a nuevas oportunidades como Frontend Developer. Si tu
          equipo busca a alguien con experiencia en React/Next.js aplicado a
          entornos productivos y regulados, escribime.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="rounded-full border border-border px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
          >
            {profile.phone}
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-sm text-muted">
          <a href={profile.linkedin} className="transition-colors hover:text-accent">
            LinkedIn
          </a>
          <a href={profile.github} className="transition-colors hover:text-accent">
            GitHub
          </a>
          <a href={profile.website} className="transition-colors hover:text-accent">
            {profile.website.replace("https://", "")}
          </a>
        </div>
      </div>

      <footer className="mt-10 flex flex-col items-center gap-2 text-center text-xs text-muted">
        <p>
          {profile.name} · {profile.location}
        </p>
        <p>© {new Date().getFullYear()} — Construido con Next.js, TypeScript y Tailwind CSS.</p>
      </footer>
    </section>
  );
}
