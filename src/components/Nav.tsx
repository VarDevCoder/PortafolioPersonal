const links = [
  { href: "#top", label: "Perfil" },
  { href: "#stack", label: "Stack" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#formacion", label: "Formación" },
  { href: "#contacto", label: "Contacto" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          AM<span className="text-accent">.</span>dev
        </a>
        <nav className="hidden gap-6 text-sm text-muted md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="rounded-full border border-accent/40 px-4 py-1.5 text-sm text-accent transition-colors hover:bg-accent-soft"
        >
          Contactar
        </a>
      </div>
      <nav className="flex gap-5 overflow-x-auto border-t border-border/60 px-6 py-2 text-sm text-muted md:hidden">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="shrink-0 transition-colors hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
