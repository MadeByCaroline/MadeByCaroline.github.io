export interface Skill {
  label: string
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export interface Project {
  id: string
  title: string
  description: string
  details?: string
  tags: string[]
  imageAlt?: string
}

export interface Experience {
  id: string
  organization: string
  role: string
  startDate: string
  endDate: string | null
  startDatetime: string
  endDatetime: string | null
  description: string
  details?: string
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Ingénierie Logicielle",
    skills: [
      { label: "Vue 3, TypeScript, Composition API, Nuxt" },
      { label: "Architecture front-end et structuration applicative" },
      { label: "Backend : NestJS, Prisma, PostgreSQL" },
      { label: "Tests : Jest, Cypress, TDD" },
      { label: "RGAA, accessibilité, performance" },
      { label: "Utilisation avancée des LLM pour accélérer les cycles de développement : génération de tests, assistance au refactoring et documentation technique."},
    ],
  },
  {
    title: "Produit & Collaboration",
    skills: [
      { label: "Structuration fonctionnelle et discovery produit" },
      { label: "Contribution PO / Scrum dans des équipes produit" },
      { label: "Animation de rituels et coordination transverse" },
      { label: "Analyse utilisateur et cadrage fonctionnel" },
      { label: "Approche produit orientée valeur et compréhension métier dans des environnements publics complexes."},
    ],
  },
]

export const projects: Project[] = [
  {
    id: "candilib",
    title: "Candilib",
    description:
      "Participation à la création du MVP national au sein du Lab MI (future DNUM), dans une équipe de 4 à 5 personnes. Développement fullstack d'une plateforme publique ayant contribué à la réduction des délais d'attente de 9 à 3 mois.",
    details:
      "Fonctionnalités critiques : authentification, gestion des droits, recherche candidats, templates e-mails.",
    tags: ["Vue.js", "Node.js", "MVP public"],
  },
  {
    id: "psij",
    title: "PSIJ",
    description:
      "Conception d'un portail de saisine entre police secours et police scientifique dans un contexte à fortes contraintes de sécurité.",
    details:
      "Projet initié de bout en bout en équipe réduite (3 à 7 personnes), interrompu suite à changement de priorités organisationnelles.",
    tags: ["Systèmes critiques", "Front & back"],
  },
  {
    id: "refapp",
    title: "REFAPP",
    description:
      "Conception complète du socle applicatif et du design initial d'un référentiel stratégique de l'État.",
    details:
      "Reprise d'un projet en stagnation et construction de la base technique et UI permettant la structuration du produit et la montée progressive de l'équipe sur une base technique stable.",
    tags: ["Architecture", "Design system", "APIs"],
  },
  {
    id: "basegun",
    title: "BaseGun",
    description:
      "Développement front-end et automatisation de collecte de données (scraping Python) pour un outil orienté terrain.",
    tags: ["Front-end", "Data scraping"],
  },
  {
    id: "mentorat",
    title: "Mentorat",
    description:
      "Produit en discovery visant à mettre en relation mentors et mentorés. Analyse utilisateur et benchmark des solutions existantes avec équipe UX.",
    details:
      "Recommandation finale d'adoption d'une solution sur étagère (make vs buy).",
    tags: ["Product discovery", "UX", "Benchmark"],
  },
  {
    id: "biblionum",
    title: "Biblionum",
    description:
      "Scrum Master puis Product Owner sur une application de suivi des démarches associatives via Démarches Simplifiées.",
    details:
      "Coordination produit et priorisation fonctionnelle entre besoins métiers et équipe de développement.",
    tags: ["PO", "Scrum", "Produit"],
  },
]

export const experiences: Experience[] = [
  {
    id: "dnum",
    organization: "Ministère de l'Intérieur / DNUM",
    role: "Ingénierie logicielle & produit",
    startDate: "2018",
    endDate: null,
    startDatetime: "2018-09",
    endDatetime: null,
    description:
      "Développement de produits numériques publics au sein de la Direction Numérique du Ministère de l'Intérieur.",
  },
  {
    id: "parenthese",
    organization: "Parenthèse professionnelle",
    role: "Accompagnement familial",
    startDate: "2013",
    endDate: "2018",
    startDatetime: "2013-01",
    endDatetime: "2018-08",
    description:
      "Interruption de carrière pour raisons familiales, liée à l'accompagnement de mon enfant malade. Période marquée par une forte responsabilité personnelle et une organisation de vie exigeante.",
    details:
      "Reprise du parcours professionnel en septembre 2018 avec une reconversion vers l'ingénierie logicielle.",
  },
  {
    id: "universal-music",
    organization: "Universal Music Publishing",
    role: "Assistante de manager",
    startDate: "2011",
    endDate: "2013",
    startDatetime: "2011-01",
    endDatetime: "2013-12",
    description:
      "Assistante de manager au sein du département Universal Music Publishing.",
  },
  {
    id: "emplois-terrain",
    organization: "Emplois de terrain",
    role: "Parc Astérix, McDonald's, mairie\u2026",
    startDate: "2005",
    endDate: "2011",
    startDatetime: "2005-01",
    endDatetime: "2011-12",
    description:
      "Divers emplois de terrain dans le secteur du loisir, de la restauration et du service public.",
  },
]

export const contactInfo = {
  location: "Nesle (80) \u2014 Télétravail hybride",
  email: "carolinerobillard@outlook.fr",
  experience: "7 ans d'expérience",
  cvFile: {
    label: "Télécharger mon CV (PDF, 150\u00a0Ko)",
    href: "/cv-caroline-robillard.pdf",
  },
}
