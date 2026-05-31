import type { CVData } from "./types";

export const defaultData: CVData = {
  personal: {
    nom: "Yasmine El Fassi",
    titre: "Développeuse Full-Stack Senior",
    email: "yasmine.elfassi@email.com",
    telephone: "+33 6 12 34 56 78",
    ville: "Paris, France",
    site: "linkedin.com/in/yasmine-elfassi",
  },
  resume:
    "Développeuse passionnée avec 6 ans d'expérience dans la conception et le développement d'applications web modernes. Spécialisée en React, TypeScript et Node.js. Forte aptitude au travail en équipe agile et à la livraison de solutions performantes orientées utilisateur.",
  experiences: [
    {
      id: "exp-1",
      poste: "Développeuse Full-Stack Senior",
      entreprise: "TechCorp Paris",
      periode: "Jan 2022 – Présent",
      description:
        "Conception et développement de fonctionnalités clés sur une plateforme SaaS B2B (React, Node.js, PostgreSQL). Encadrement de 2 développeurs juniors. Mise en place de CI/CD avec GitHub Actions.",
    },
    {
      id: "exp-2",
      poste: "Développeuse Front-End",
      entreprise: "Agence Digitale Lyon",
      periode: "Mar 2019 – Dec 2021",
      description:
        "Développement d'interfaces web responsive pour des clients grands comptes (Vue.js, Nuxt, SCSS). Collaboration étroite avec les équipes design et UX.",
    },
    {
      id: "exp-3",
      poste: "Développeuse Web Junior",
      entreprise: "Startup InnovateTech",
      periode: "Sep 2017 – Fev 2019",
      description:
        "Développement et maintenance de sites web (React, Express, MySQL). Participation active aux sprints agile et code reviews.",
    },
  ],
  formations: [
    {
      id: "form-1",
      diplome: "Master Informatique — Génie Logiciel",
      ecole: "Université Paris-Saclay",
      periode: "2015 – 2017",
    },
    {
      id: "form-2",
      diplome: "Licence Informatique",
      ecole: "Université Paris-Est Créteil",
      periode: "2012 – 2015",
    },
  ],
  competences: [
    { id: "comp-1", label: "React / Next.js" },
    { id: "comp-2", label: "TypeScript" },
    { id: "comp-3", label: "Node.js / Express" },
    { id: "comp-4", label: "PostgreSQL / MongoDB" },
    { id: "comp-5", label: "Docker / CI-CD" },
    { id: "comp-6", label: "Git / GitHub" },
    { id: "comp-7", label: "Tailwind CSS" },
    { id: "comp-8", label: "Tests (Jest, Cypress)" },
  ],
  langues: [
    { id: "lang-1", langue: "Français", niveau: "Natif" },
    { id: "lang-2", langue: "Anglais", niveau: "Courant (C1)" },
    { id: "lang-3", langue: "Arabe", niveau: "Intermédiaire (B1)" },
  ],
};
