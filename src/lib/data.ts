export const profile = {
  name: "Adrián Martínez",
  role: "Desarrollador Full Stack",
  roleDetail: "React / Next.js — .NET",
  location: "Asunción, Paraguay",
  email: "om1779468@gmail.com",
  phone: "+595 984 141644",
  linkedin: "https://www.linkedin.com/in/adri%C3%A1n-martinez-7b5472212/",
  github: "https://github.com/VarDevCoder",
  website: "https://adrianmartinez.evowarex.com",
  summary:
    "Desarrollador full stack con cinco años de experiencia construyendo soluciones de punta a punta, desde la interfaz hasta la base de datos y el despliegue. Actualmente desarrollo el módulo de tarjetas de Finansys Web en Banco Continental (Next.js + TypeScript sobre backend .NET y Oracle), integrando APIs REST, SSO corporativo y flujos 3D Secure bajo requisitos PCI DSS. Experiencia previa en desarrollo backend (PHP, .NET, NestJS) y en administración de infraestructura.",
  summaryShort:
    "Desarrollador full stack con cinco años de experiencia construyendo soluciones de punta a punta, desde la interfaz hasta la base de datos y el despliegue. Actualmente desarrollo el módulo de tarjetas de Finansys Web en Banco Continental (Next.js + TypeScript sobre backend .NET y Oracle), integrando APIs REST, SSO corporativo y flujos 3D Secure bajo requisitos PCI DSS.",
  studying: "Tesista de Análisis de Sistemas (UNIBE)",
};

export type SkillGroup = {
  title: string;
  emphasis: "primary" | "secondary";
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    emphasis: "primary",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "TanStack Query",
      "Tailwind CSS",
      "Diseño responsive",
    ],
  },
  {
    title: "Backend",
    emphasis: "primary",
    skills: [
      ".NET",
      "Node.js",
      "NestJS",
      "Laravel",
      "PHP",
      "APIs RESTful",
      "GraphQL",
      "WebSockets",
    ],
  },
  {
    title: "Bases de datos",
    emphasis: "secondary",
    skills: ["Oracle DB (PL/SQL)", "PostgreSQL", "SQL Server", "MySQL", "Redis"],
  },
  {
    title: "Integración y seguridad",
    emphasis: "secondary",
    skills: [
      "OAuth2 / JWT",
      "Keycloak SSO",
      "3D Secure",
      "Azure API Management",
      "API Gateway",
    ],
  },
  {
    title: "DevOps e infraestructura",
    emphasis: "secondary",
    skills: [
      "Azure DevOps",
      "CI/CD",
      "Docker",
      "Kubernetes",
      "Git",
      "Nginx",
      "Linux",
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  current?: boolean;
};

export const experience: Experience[] = [
  {
    role: "Desarrollador — Plataforma de Banca Digital",
    company: "Banco Continental SAECA (vía Centro Logístico de Tecnología S.A.)",
    period: "Sep 2025 — Presente",
    location: "Asunción, Paraguay",
    current: true,
    highlights: [
      "Desarrollo del módulo de tarjetas de Finansys Web (Next.js, TypeScript, Redux Toolkit), plataforma de banca digital utilizada diariamente por clientes del banco para operaciones críticas.",
      "Implementación de flujos de autenticación 3D Secure para transacciones con tarjeta, integrando APIs internas y servicios de procesadoras externas bajo requisitos PCI DSS.",
      "Integración con sistemas legacy del banco: Oracle Database, Keycloak SSO para autenticación unificada y múltiples microservicios expuestos vía Azure API Management.",
      "Gestión de despliegues a producción con Azure DevOps y Kubernetes, incluyendo configuración de pipelines CI/CD y diagnóstico de incidentes en ambientes productivos.",
      "Participación en code reviews, relevamiento funcional y documentación técnica junto a los equipos de backend, seguridad informática y líderes técnicos, en metodología ágil.",
    ],
  },
  {
    role: "Desarrollador de Sistemas",
    company: "Ferropar",
    period: "Mar 2023 — Dic 2024",
    location: "Asunción, Paraguay",
    highlights: [
      "Detección y corrección de una vulnerabilidad en el sistema de facturación (PHP / MySQL), reforzando validaciones de backend y sanitización de inputs.",
      "Desarrollo de lógica de negocio en PHP para la automatización del proceso de facturación, incluyendo el manejo transaccional sobre MySQL.",
      "Modernización de interfaces web legacy con HTML5, CSS3 y JavaScript, aplicando diseño responsive.",
    ],
  },
  {
    role: "Auxiliar de Sistemas",
    company: "Vesta",
    period: "Ene 2021 — Dic 2022",
    location: "Asunción, Paraguay",
    highlights: [
      "Desarrollo y mantenimiento del frontend institucional, asegurando compatibilidad cross-browser y diseño responsive.",
      "Administración de infraestructura IT: servidores, hosting, DNS y backups de servicios internos.",
    ],
  },
];

export type System = {
  name: string;
  subtitle: string;
  url: string;
  description: string;
  stack?: string[];
  credentials?: { user: string; password: string };
};

export type SystemCategory = {
  title: string;
  note?: string;
  systems: System[];
};

export const systemsCatalog: SystemCategory[] = [
  {
    title: "Sistemas Fullstack",
    systems: [
      {
        name: "SAIL",
        subtitle: "Sistema de Gestión Empresarial para Ferreterías",
        url: "https://dynamic-sherbet-5e7a15.netlify.app/login.html",
        description:
          "SPA con autenticación y roles (perfil \"Encargado\") sobre un dominio de negocio real: ventas, caja con turnos y arqueo, inventario con trazabilidad (kardex), cuentas por cobrar, compras/proveedores y reportes. El punto de venta incluye atajos de teclado (F2/F9/Esc), cálculo de vuelto y exportación a Excel. Maneja estados complejos — turno de caja abierto/cerrado, stock vendible vs. no vendible, pedidos en distintos estados — no es un CRUD simple. Backend en Python (FastAPI) sobre PostgreSQL, cubierto por 75 tests de integración contra una base real, con bloqueo de login por email e IP.",
        stack: [
          "Python",
          "FastAPI",
          "PostgreSQL",
          "SQLAlchemy 2",
          "Alembic",
          "JWT",
          "pytest",
        ],
        credentials: { user: "encargado@sail.local", password: "demo12345" },
      },
      {
        name: "E-commerce",
        subtitle: "Tienda online con productos configurables",
        url: "https://rococo-pothos-664cc8.netlify.app/",
        description:
          "Enrutamiento dinámico por producto (rutas con UUID) y sistema de variantes con delta de precio. Para la línea de personalizados, un motor de formularios configurables por producto: cada producto define sus propios campos en vez de tener un formulario hardcodeado. Carga asíncrona con estados de loading manejados en toda la navegación.",
      },
    ],
  },
  {
    title: "Prototipos de UI/UX",
    note: "Maquetas de producto con datos locales o ficticios, sin backend productivo conectado — pensadas para mostrar criterio de diseño de interacción, no como sistemas en producción.",
    systems: [
      {
        name: "CEO",
        subtitle: "Gestor de Plataformas",
        url: "https://codice-demo.netlify.app/",
        description:
          "Maqueta de producto (datos locales, sin backend conectado — la propia interfaz lo indica) con tabla expandible por empresa, grid de credenciales por plataforma, acciones de copiar/abrir, buscador y contadores agregados (activas/pendientes).",
      },
      {
        name: "ERP-FRONTEND",
        subtitle: "Gestor de Ventas",
        url: "https://eloquent-cassata-b28073.netlify.app/archive/suppliers",
        description:
          "Maqueta de producto — el propio módulo de \"Datos\" aclara que son gráficos de ejemplo (datos ficticios). El punto de venta calcula IVA 10% correctamente y tiene una estructura de navegación clara, con submenús por módulo.",
      },
    ],
  },
];

export type Education = {
  title: string;
  institution: string;
  period: string;
};

export const education: Education[] = [
  {
    title: "Análisis de Sistemas",
    institution: "Universidad Iberoamericana (UNIBE)",
    period: "Tesista · 2022 — Presente",
  },
  {
    title: "Fullstack Development I & II, Android Development",
    institution: "Universidad del Cono Sur de las Américas",
    period: "2024 — 2025",
  },
  {
    title: "JavaScript, Python, C++",
    institution: "Cisco Networking Academy",
    period: "2024 — 2025",
  },
];

export const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "Intermedio (lectura de documentación técnica y redacción)" },
];
