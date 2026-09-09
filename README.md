# Portafolio — Adrián Martínez

Portafolio personal construido con Next.js, TypeScript y Tailwind CSS.

## Desarrollo

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Contenido

Todos los datos del portafolio (perfil, experiencia, proyectos, stack, formación)
están centralizados en [src/lib/data.ts](src/lib/data.ts). Para actualizar el
contenido, editar ese archivo — no hace falta tocar los componentes.

## Build

El sitio se exporta como HTML estático (`output: "export"` en [next.config.ts](next.config.ts)).

```bash
npm run build
```

Genera la carpeta `out/` lista para servir en cualquier hosting estático.

## Deploy en Netlify

El repo ya incluye [netlify.toml](netlify.toml) con el comando de build (`npm run build`)
y el directorio de publicación (`out`). Pasos:

1. En Netlify: **Add new site → Import an existing project** y conectar este repositorio.
2. Netlify detecta `netlify.toml` automáticamente — no hace falta configurar nada más.
3. Deploy.

Para probar el export localmente antes de subir:

```bash
npm run build
npx serve out
```
