import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-20 pt-16 md:pt-24">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
        {profile.name}
      </h1>

      <p className="mt-4 text-xl text-accent md:text-2xl">
        {profile.role} <span className="text-muted">·</span>{" "}
        <span className="text-muted">{profile.roleDetail}</span>
      </p>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
        {profile.summary}
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-sm text-muted">
        <span>{profile.location}</span>
        <span className="text-border">•</span>
        <span>{profile.studying}</span>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
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
